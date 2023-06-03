let content = document.querySelector('.page-product-list');

let products = [
    {
        id: 1,
        img: '/about-img/bottles.jpeg',
        name: 'Product 1',
        price: 100,
    },
    {
        id: 2,
        img: 'img/product2.jpg',
        name: 'Product 2',
        price: 200,
    },
    {
        id: 3,
        img: 'img/product3.jpg',
        name: 'Product 3',
        price: 300,
    },
]

function init() {
    document.querySelectorAll(".product-item").forEach(d => d.remove());
    products.forEach((product) => {
        let item = `
            <div class="product-item">
                <div class="product-img">
                    <img src ="${product.img}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <a href="product-detail.html?id=${product.id}">Detail</a>
                </div>
            </div>`;
        content.insertAdjacentHTML('beforeend', item);
    });
}
