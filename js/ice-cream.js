let ice_cream_json = {
    1: { 'img': '../media/ice-cream/01.png', 'name': 'Zolotoy', 'price': 10000 },
    2: { 'img': '../media/ice-cream/02.png', 'name': 'Zefir', 'price': 10000 },
    3: { 'img': '../media/ice-cream/03.png', 'name': 'Plombir', 'price': 12000 },
    4: { 'img': '../media/ice-cream/04.png', 'name': 'Choco Bar', 'price': 15000 },
    5: { 'img': '../media/ice-cream/05.png', 'name': 'Vanilla Dream', 'price': 11000 },
    6: { 'img': '../media/ice-cream/06.png', 'name': 'Strawberry Bliss', 'price': 13000 },
    7: { 'img': '../media/ice-cream/07.png', 'name': 'Mango Delight', 'price': 14000 },
    8: { 'img': '../media/ice-cream/08.png', 'name': 'Berry Mix', 'price': 12500 },
    9: { 'img': '../media/ice-cream/09.png', 'name': 'Choco Mint', 'price': 13500 },
    10: { 'img': '../media/ice-cream/10.png', 'name': 'Cookie Crunch', 'price': 15000 },
    11: { 'img': '../media/ice-cream/11.png', 'name': 'Caramel Swirl', 'price': 14500 },
    12: { 'img': '../media/ice-cream/12.png', 'name': 'Pistachio', 'price': 16000 },
    13: { 'img': '../media/ice-cream/13.png', 'name': 'Coffee Cream', 'price': 15500 },
    14: { 'img': '../media/ice-cream/14.png', 'name': 'Banana Split', 'price': 14000 },
    15: { 'img': '../media/ice-cream/15.png', 'name': 'Nutty Delight', 'price': 17000 },
    16: { 'img': '../media/ice-cream/16.png', 'name': 'Lemon Chill', 'price': 12500 },
    17: { 'img': '../media/ice-cream/17.png', 'name': 'Peach Perfect', 'price': 13000 },
    18: { 'img': '../media/ice-cream/18.png', 'name': 'Tropical Fusion', 'price': 13500 },
    19: { 'img': '../media/ice-cream/19.png', 'name': 'Berry Sorbet', 'price': 14500 },
    20: { 'img': '../media/ice-cream/20.png', 'name': 'Choco Lava', 'price': 15000 }
};




// for (let i = 1; i <= 20; i++) {


//     div.innerHTML = 
//         `<img src="${product_json[i]['img']}" alt="" class="product-img">
//         <h2 class="product-name">${product_json[i]['title']}</h2>
//         <p class="product-price">$${product_json[i]['price']}</p>
//         <div class="product-controls">
//             <button class="sell-button" disabled>Sell</button>
//             <input type="text" value="0" class="count" readonly>
//             <button class="buy-button">Buy</button>
//         </div>`;}

//  let product = document.querySelector('.product');
// for(let i = 0; i<=ice_cream_json.length;i++){
// let div = document.createElement('div');
// div.classList.add('product-item');

//     div.innerHTML =
//     ` <img src="${ice_cream_json[i]['img']}" alt="" class="product-img">
//         <div class="product-data">
//             <p class="product-name">${ice_cream_json[i]['name']}</p>
//             <p class="product-price">$${product_json[i]['price']}</p>
//             <div class="product-control">
//                 <button class="minus">-</button>
//                 <input type="text" class="count" value="0">
//                 <button class="plus">+</button>
//             </div>
//         </div>`
// }


let product = document.querySelector('.product');


// if (Array.isArray(ice_cream_json)) {
    // for (let i = 1; i <=20; i++) {
    //     let div = document.createElement('div');
    //     div.classList.add('product-item');

    //     div.innerHTML = `
    //         <img src="${ice_cream_json[i]['img']}" alt="${ice_cream_json[i]['name']}" class="product-img">
    //         <div class="product-data">
    //             <p class="product-name">${ice_cream_json[i]['name']}</p>
    //             <p class="product-price">$${ice_cream_json[i]['price']}</p>
    //             <div class="product-control">
    //                 <button class="minus">-</button>
    //                 <input type="text" class="count" value="0">
    //                 <button class="plus">+</button>
    //             </div>
    //         </div>
    //     `;

    //     product.appendChild(div);
    // }
// } 

   



for (let i = 1; i <= 20; i++) {
    let div = document.createElement('div');
    div.classList.add('product-item');

    div.innerHTML = `
        <img src="${ice_cream_json[i]['img']}" alt="${ice_cream_json[i]['name']}" class="product-img">
        <div class="product-data">
            <p class="product-name">${ice_cream_json[i]['name']}</p>
            <p class="product-price">$${ice_cream_json[i]['price']}</p>
            <div class="product-control">
                <button class="minus">-</button>
                <input type="text" class="count" value="0">
                <button class="plus">+</button>
            </div>
        </div>
    `;

    product.appendChild(div);
}
