// Carrinho de Compras Simples
let cart = [];
const cartCountElement = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const openCart = document.getElementById("open-cart");
const closeModal = document.querySelector(".close-modal");
const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const clearCartButton = document.getElementById("clear-cart");

function updateCartCount() {
    cartCountElement.textContent = cart.length;
    updateCartDisplay();
}

function updateCartDisplay() {
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <p>${item.name} - R$ ${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remover</button>
        `;
        cartItemsElement.appendChild(itemElement);
    });

    cartTotalElement.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const itemName = button.getAttribute("data-name");
        const itemPrice = parseFloat(button.getAttribute("data-price"));
        cart.push({ name: itemName, price: itemPrice });
        updateCartCount();
        alert(`${itemName} foi adicionado ao carrinho! Total de itens: ${cart.length}`);
    });
});

// Abrir e Fechar Modal
openCart.addEventListener("click", () => {
    cartModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    cartModal.style.display = "none";
});

// Fechar o modal ao clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
});

// Limpar Carrinho
clearCartButton.addEventListener("click", () => {
    cart = [];
    updateCartCount();
});

// Menu Mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Observador de interseção para animações ao rolar
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Animação sequencial para os itens do menu
const animateMenuItems = () => {
    const menuItems = document.querySelectorAll('.menu .box-container .box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    menuItems.forEach(item => {
        observer.observe(item);
    });
};

// Animação sequencial para avaliações
const animateReviews = () => {
    const reviews = document.querySelectorAll('.review .box-container .box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 150);
            }
        });
    }, {
        threshold: 0.1
    });

    reviews.forEach(review => {
        observer.observe(review);
    });
};

// Inicializar todas as animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    animateMenuItems();
    animateReviews();
    
    // Adiciona classes de animação para elementos específicos
    const aboutContent = document.querySelector('.about .content');
    const aboutImage = document.querySelector('.about .container-image');
    
    if (aboutContent) aboutContent.classList.add('slide-in-right');
    if (aboutImage) aboutImage.classList.add('slide-in-left');
});