
export let productos = [
    {id: '1' ,titulo: 'Half-Life', precio: 129.99, stock:50, plataforma:'Steam', desarrollador:'Valve', editor:'Valve', imagen:'https://iili.io/HkbSS29.jpg'},
    {id: '2' ,titulo: 'Dark Souls: Remastered', precio: 1199.99, stock:50, plataforma:'Steam', desarrollador:'From Software', editor:'Bandai Namco', imagen:'https://iili.io/HkbSeB2.jpg'},
    {id: '3' ,titulo: 'The Witcher III', precio: 479.99, stock:50, plataforma:'Steam', desarrollador:'CD PROJEKT RED', editor:'CD PROJEKT RED', imagen:'https://iili.io/HkbSZrP.jpg'},
    {id: '4' ,titulo: 'Pokemon Scarlet / Violet', precio: 9087.99, stock:50, plataforma:'Switch', desarrollador:'Game Freak', editor:'Nintendo', imagen:'https://iili.io/HkbSQEB.jpg'},
    {id: '5',titulo: 'Mario Kart 8 Deluxe',precio: 10500.99, stock:50,plataforma: 'Switch',desarrollador: 'Nintendo',editor: 'Nintendo',imagen: 'https://iili.io/HkbSrmb.jpg' },
    {id: '6',titulo: 'Dead Space (remake)',precio: 11122.81, stock:50,plataforma: 'Epic',desarrollador: 'Motive Studio',editor: 'Electronic Arts',imagen: 'https://iili.io/HkbSjIf.jpg' },
    {id: '7',titulo: 'Assassins Creed Valhalla',precio: 1979, stock:50,'plataforma': 'Uplay','desarrollador': 'Ubisoft','editor': 'Ubisoft','imagen': 'https://iili.io/HkbSNLl.jpg'},
    {id: '8',titulo: 'God of War Ragnarok',precio: 11122.81, stock:50,plataforma: 'PS4',desarrollador: 'Sony Santa Monica',editor: 'Sony',imagen: 'https://iili.io/HkbSk1S.jpg'},
    {id: '9',titulo: 'God of War Ragnarok',precio: 12122.81, stock:50, plataforma: 'PS5',desarrollador: 'Sony Santa Monica',editor: 'Sony',imagen: 'https://iili.io/HkbSk1S.jpg'},
    {id: '10',titulo: 'FIFA 23',precio: 2399.70, stock:50, plataforma: 'XONE',desarrollador: 'EA Sports',editor: 'Electronic Arts',imagen:'https://iili.io/HkbSwX4.jpg'}

]

export let mockFetch = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? productos.find(prod => prod.id == id) : productos)
        }, 1000)
        
    })
}

// export let mFetchOne = (id) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(productos[0])
//         }, 1000)
        
//     })
// }
