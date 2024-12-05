let chocolate_json = {
    1: { 'img': '../media/chocolate/01.png', 'name': 'Milk Chocolate', 'price': 12000 },
    2: { 'img': '../media/chocolate/02.png', 'name': 'Dark Chocolate', 'price': 14000 },
    3: { 'img': '../media/chocolate/03.png', 'name': 'White Chocolate', 'price': 13000 },
    4: { 'img': '../media/chocolate/04.png', 'name': 'Hazelnut Chocolate', 'price': 15000 },
    5: { 'img': '../media/chocolate/05.png', 'name': 'Caramel Chocolate', 'price': 14500 },
    6: { 'img': '../media/chocolate/06.png', 'name': 'Mint Chocolate', 'price': 13500 },
    7: { 'img': '../media/chocolate/07.png', 'name': 'Orange Chocolate', 'price': 12500 },
    8: { 'img': '../media/chocolate/08.png', 'name': 'Strawberry Chocolate', 'price': 14000 },
    9: { 'img': '../media/chocolate/09.png', 'name': 'Coffee Chocolate', 'price': 15000 },
    10: { 'img': '../media/chocolate/10.png', 'name': 'Coconut Chocolate', 'price': 14500 },
    11: { 'img': '../media/chocolate/11.png', 'name': 'Peanut Butter Chocolate', 'price': 16000 },
    12: { 'img': '../media/chocolate/12.png', 'name': 'Almond Chocolate', 'price': 15500 },
    13: { 'img': '../media/chocolate/13.png', 'name': 'Raspberry Chocolate', 'price': 15000 },
    14: { 'img': '../media/chocolate/14.png', 'name': 'Blueberry Chocolate', 'price': 14500 },
    15: { 'img': '../media/chocolate/15.png', 'name': 'Matcha Chocolate', 'price': 17000 },
    16: { 'img': '../media/chocolate/16.png', 'name': 'Cinnamon Chocolate', 'price': 14000 },
    17: { 'img': '../media/chocolate/17.png', 'name': 'Chili Chocolate', 'price': 13500 },
    18: { 'img': '../media/chocolate/18.png', 'name': 'Salted Caramel Chocolate', 'price': 15500 },
    19: { 'img': '../media/chocolate/19.png', 'name': 'Honeycomb Chocolate', 'price': 14500 },
    20: { 'img': '../media/chocolate/20.png', 'name': 'Truffle Chocolate', 'price': 15000 },
    21: { 'img': '../media/chocolate/21.png', 'name': 'Nougat Chocolate', 'price': 16000 },
    22: { 'img': '../media/chocolate/22.png', 'name': 'Marzipan Chocolate', 'price': 15500 },
    23: { 'img': '../media/chocolate/23.png', 'name': 'Black Forest Chocolate', 'price': 16500 },
    24: { 'img': '../media/chocolate/24.png', 'name': 'Rocky Road Chocolate', 'price': 17000 }
};

let product = document.querySelector('.product');


for (let i = 1; i <= 24; i++) {
    let div = document.createElement('div');
    div.classList.add('product-item');

    div.innerHTML = `
        <img src="${chocolate_json[i]['img']}" alt="" class="product-img">
        <div class="product-data">
            <p class="product-name">${chocolate_json[i]['name']}</p>
            <p class="product-price">$${chocolate_json[i]['price']}</p>
            <div class="product-control">
                <button class="minus">-</button>
                <input type="text" class="count" value="0">
                <button class="plus">+</button>
            </div>
        </div>
    `;

    product.appendChild(div);
}















