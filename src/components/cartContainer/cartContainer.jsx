import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../context/cartContext';

const CartContainer = () => {
  const [id, setId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto, eliminarProductoIndividual, agregarProductoIndividual } = useCartContext();
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [order, setOrder] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
      buyer: formData,
      items: cartList.map(({ id, titulo, plataforma, precio, quantity }) => ({ id, titulo, plataforma, precio, quantity })),
      total: precioTotal()
    };

    const db = getFirestore();
    const queryCollection = collection(db, 'orders');

    addDoc(queryCollection, newOrder)
      .then((resp) => {
        setId(resp.id);
        setOrder(newOrder);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setOrderCompleted(true);
        vaciarCarrito();
      });
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleGoToCheckout = () => {
    setShowForm(true);
  };

  // Verificar si el carrito está vacío
  const isCartEmpty = cartList.length === 0;

  return (
    <>
      {id ? (
        <>
          <h2 className="text-center">¡Gracias por su compra!</h2>
          <h4 className="text-center">El id de su orden es: "{id}"</h4>

          {order && (
            <div className='card text-center'>
              <h3>Detalles del pedido:</h3>
              <p>Comprador: {order.buyer.name}</p>
              <p>Correo electrónico: {order.buyer.email}</p>
              <p>Productos:</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.titulo} - {item.plataforma} - Cantidad: {item.quantity} - Precio: {item.precio}
                  </li>
                ))}
              </ul>
              <p>Total: {order.total}</p>
            </div>
          )}
        </>
      ) : (
        <div>
          {cartList.map((product) => (
            <li className="p-3 mb-2 bg-secondary text-light" key={product.id}>
              <img className="w-25" src={product.imagen} alt="imagen" />
              Titulo: {product.titulo} {product.plataforma} Cantidad: {product.quantity}
              <button className="btn btn-success" onClick={() => agregarProductoIndividual(product.id)}>
                +
              </button>
              <button className="btn btn-warning" onClick={() => eliminarProductoIndividual(product.id)}>
                -
              </button>
              <button className="btn btn-danger" onClick={() => eliminarProducto(product.id)}>
                X
              </button>
            </li>
          ))}
          <h3>Precio Total: {precioTotal()}</h3>

<button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>

{!showForm && !isCartEmpty && (
  <button className="btn btn-success" onClick={handleGoToCheckout}>Ir a finalizar compra</button>
)}

{showForm && (
  <form onSubmit={handleSubmit} className="text-center">
    <h4>Ingrese sus datos para finalizar la compra:</h4>
    <input
      type="text"
      name="name"
      placeholder="Nombre"
      onChange={handleOnChange}
      value={formData.name}
    />
    <input
      type="text"
      name="phone"
      placeholder="Teléfono"
      onChange={handleOnChange}
      value={formData.phone}
    />
    <input
      type="email"
      name="email"
      placeholder="Correo electrónico"
      onChange={handleOnChange}
      value={formData.email}
    />
    <input
      type="email"
      name="confirmEmail"
      placeholder="Confirmar correo electrónico"
      onChange={handleOnChange}
      value={formData.confirmEmail}
    />
    <button className="btn btn-success" disabled={isCartEmpty}>
      Terminar Compra
    </button>
            </form>
          )}
          <br />
        </div>
      )}
    </>
  );
};

export default CartContainer;