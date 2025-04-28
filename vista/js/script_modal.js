
// MOSTRAR MAS IMAGENES DE CADA ZAPATILLAS
const products = {
    1: {
        brand: "CONVERSE",
        name: "Zapatilla Urbana Colorful Suede Guinda Mujer Converse",
        vendor: "Vendido por Trendy Vibes",
        currentPrice: "S/199",
        originalPrice: "S/349.90",
        delivery: ["Calidad", "Originales", "Envíos a todo el Perù"],
        mainImage: "vista/imag_hombre/Colorful_Suede_Guinda_Mujer.png",
        thumbnails: [
            "vista/imag_hombre/Colorful_Suede_Guinda_Mujer1.png",
            "vista/imag_hombre/Colorful_Suede_Guinda_Mujer2.png",
            "vista/imag_hombre/Colorful_Suede_Guinda_Mujer3.png"
        ],
        sizes: ["36", "36.3", "37", "37.3", "38", "39"],
        colors: ["#800020", "#4a0c25", "#a83c5a"]
    },
    2: {
        brand: "NIKE",
        name: "Zapatilla Running Air Max Azul Marino Mujer",
        vendor: "Vendido por Trendy Vibes",
        currentPrice: "S/279",
        originalPrice: "S/399.90",
        delivery: ["Calidad", "Originales", "Envíos a todo el Perù"],
        mainImage: "vista/imag_hombre/Zapatilla_Running_Air.png",
        thumbnails: [
            "vista/imag_hombre/Zapatilla_Running_Air1.png",
            "vista/imag_hombre/Zapatilla_Running_Air2.png",
            "vista/imag_hombre/Zapatilla_Running_Air3.png"
        ],
        sizes: ["35", "36", "37", "38", "39", "40"],
        colors: ["#1a3e72", "#3a5f8a", "#5d8cc9"]
    },
    3: {
        brand: "ADIDAS",
        name: "Zapatilla Deportiva Ultraboost 21 Blanca Mujer",
        vendor: "Vendido por Trendy Vibes",
        currentPrice: "S/329",
        originalPrice: "S/459.90",
        delivery: ["Calidad", "Originales", "Envíos a todo el Perù"],
        mainImage: "vista/imag_hombre/Zapatilla_Deportiva_Ultraboost.png",
        thumbnails: [
            "vista/imag_hombre/Zapatilla_Deportiva_Ultraboost1.png",
            "vista/imag_hombre/Zapatilla_Deportiva_Ultraboost2.png",
            "vista/imag_hombre/Zapatilla_Deportiva_Ultraboost3.png"
        ],
        sizes: ["36", "37", "38", "39", "40"],
        colors: ["#ffffff", "#f0f0f0", "#e0e0e0"]
    }
};

function showProductDetail(productId) {
    const product = products[productId];

    document.getElementById('modalBrand').textContent = product.brand;
    document.getElementById('modalBrandName').textContent = product.brand;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalVendor').textContent = product.vendor;
    document.getElementById('modalCurrentPrice').textContent = product.currentPrice;
    document.getElementById('modalOriginalPrice').textContent = product.originalPrice;

    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = product.mainImage;
    mainImage.alt = product.name;

    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = '';

    product.thumbnails.forEach((thumbnail, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail' + (index === 0 ? ' active' : '');
        thumb.innerHTML = `<img src="${thumbnail}" alt="Miniatura ${index + 1}">`;
        thumb.addEventListener('click', function () {

            document.querySelectorAll('.thumbnail').forEach(t => {
                t.classList.remove('active');
            });

            this.classList.add('active');

            mainImage.src = thumbnail;
        });
        thumbnailContainer.appendChild(thumb);
    });

    const deliveryTimes = product.delivery;
    document.getElementById('deliveryTime1').textContent = deliveryTimes[0];
    document.getElementById('deliveryTime2').textContent = deliveryTimes[1];
    document.getElementById('deliveryTime3').textContent = deliveryTimes[2];

    const sizeOptions = document.getElementById('sizeOptions');
    sizeOptions.innerHTML = '';
    product.sizes.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        sizeOption.addEventListener('click', function () {
            document.querySelectorAll('.size-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
        });
        sizeOptions.appendChild(sizeOption);
    });

    const colorSelector = document.getElementById('colorSelector');
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.innerHTML = '';

    if (product.colors && product.colors.length > 0) {
        colorSelector.style.display = 'block';
        product.colors.forEach((color, index) => {
            const colorOption = document.createElement('div');
            colorOption.className = 'color-option' + (index === 0 ? ' selected' : '');
            colorOption.style.backgroundColor = color;
            colorOption.addEventListener('click', function () {
                document.querySelectorAll('.color-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
            });
            colorOptions.appendChild(colorOption);
        });
    } else {
        colorSelector.style.display = 'none';
    }

    // Mostrar el modal
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeModal();
    }
}

document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const input = this.parentNode.querySelector('.quantity-input');
        let value = parseInt(input.value);

        if (this.textContent === '+' && value < 10) {
            input.value = value + 1;
        } else if (this.textContent === '-' && value > 1) {
            input.value = value - 1;
        }
    });
});

// Prevenir el cierre del modal al hacer clic dentro
document.querySelector('.modal-content').addEventListener('click', function (e) {
    e.stopPropagation();
});
