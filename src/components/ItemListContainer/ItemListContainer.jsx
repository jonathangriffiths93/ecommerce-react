function ItemListContainer(props) {
    return (<>
    <div class="container-fluid contenedor">
    <img
        text="hello"
        src="https://media.giphy.com/media/dXavF0qnux9vNtNHfc/giphy-downsized-large.gif"
        class="me-2 "
        height="500px"
        alt="kratos love"
        loading="lazy"
      />
      <h1 class="centrado holis"> Hola { props.greeting }</h1>
    </div>
        </>
    )
}
    export default ItemListContainer