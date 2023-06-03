let content = document.querySelector('.page-product');

let products = [
    {
        id: 1,
        previewImgs: [
            'https://cdn.aboutstatic.com/file/images/e47698a3bb3efe67bee078389bb368a8.jpg?quality=75&height=1067&width=800',
            'https://cdn.aboutstatic.com/file/images/ae0eede3ca8ede7c7e8b41973636552b.jpg?quality=75&height=1067&width=800',
        ],
        contentImgs: [
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
        completeInfo: "dsfdsfsdfsdfsdfsdfsdfsdfsdf",
    }
]
function init() {
    document.querySelectorAll(".product-item").forEach(d => d.remove());
    products.forEach((product) => {
        let item = `
        <div class="first-block">
        <div class="img-container" id="slider">
            ${product.previewImgs.map((img) => {
                return `<img src="${img}">`;
            }).join('')
            }
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
                return `<div class="size-box">${txt}</div>`
                
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
        <div class="img-wrapper">
            ${product.contentImgs.map((img) => {
                return `<img src="${img}">`;
            }).join('')
            }
        </div>
    </div> `;
        content.insertAdjacentHTML('beforeend', item);
    });
}
window.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById('slider');
    var images = slider.getElementsByTagName('img');
    var currentIndex = 0;
    var totalImages = images.length;
    var timer;
  
    function showImage(index) {
      for (var i = 0; i < totalImages; i++) {
        images[i].style.display = 'none';
      }
      images[index].style.display = 'block';
    }
  
    function nextImage() {
      currentIndex++;
      if (currentIndex >= totalImages) {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }
  
    function startSlider() {
      timer = setInterval(nextImage, 1500);
    }
  
    function pauseSlider() {
      clearInterval(timer);
    }
  
    function restartSlider() {
      startSlider();
    }
  
    showImage(currentIndex);
    startSlider();
  
    slider.addEventListener('mousedown', function() {
        pauseSlider();
    });
    slider.addEventListener('mouseup', function() {
      restartSlider();
    });
  });

