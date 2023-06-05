let content = document.querySelector('.page-product');

let products = [
    {
        id: 1,
        previewImgs: [
            'https://cdn.aboutstatic.com/file/images/e47698a3bb3efe67bee078389bb368a8.jpg?quality=75&height=1067&width=800',
            'https://cdn.aboutstatic.com/file/images/ae0eede3ca8ede7c7e8b41973636552b.jpg?quality=75&height=1067&width=800',
        ],
        logo: 'https://cdn.aboutstatic.com/file/81a472c98d5d53370e2dc3b01adff254.jpg?quality=75&trim=1&height=550&width=550',
        price: '$43.90',
        sizeSelection: [
            43,
            50,
            90,
            60
        ],
        shortInfo: "sdfsdfsdfdsf",
        completeInfo: "Оплата картой в отделении, Оплата при получении товара, Картой онлайн, -5% скидки при оплате от 500 грн картой Mastercard Универсальная/Универсальная Gold от ПриватБанк, Google Pay, Безналичными для юридических лиц, Оплатить онлайн социальной картой Пакунок малюка, Безналичными для физических лиц, Mastercard, Visa, Оплатить онлайн картой ",
    }
]
function init() {
    document.querySelectorAll(".product-item").forEach(d => d.remove());
    products.forEach((product) => {
        let item = `
        <div class="first-block">
        <div class="slidershow-container" id="slider">
            ${product.previewImgs.map((img) => {
            return `<div class="slides fade"><img src="${img}"></div>`;
        }).join('')
            }
            <a class="prev" onclick="plusSlides(-1)">&#10094</a>
            <a class="next" onclick="plusSlides(1)">&#10095</a>
        </div>
        </div>
        
        <div class="choice-buy">
            <div class="firm-logo">
                <img src="${product.logo}">
            </div>
            <div class="price">
            <h1>${product.price}</h1>
            </div>
            <div class="size-selection">
                ${product.sizeSelection.map((txt) => {
                return `<div class="size-box" onclick="changeColor(this)">${txt}</div>`

            }).join('')
            }
            </div>
            <div class="container-button__buy">
                <button>До кошика</button>
            </div>
            <div class="short-info">
                ${product.shortInfo}
            </div>
        </div>
    </div>
    <div class="second-block">
        <div class="info-container">
            ${product.completeInfo}
        </div>
    </div> `;
        content.insertAdjacentHTML('beforeend', item);
    });
}



function changeColor(element) {
    const sizeBoxes = document.querySelectorAll('.size-box');
    sizeBoxes.forEach((box) => {
        box.classList.remove('active');
    });

    element.classList.add('active');
}