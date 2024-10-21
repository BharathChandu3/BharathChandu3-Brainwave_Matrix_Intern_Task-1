async function fetchProductsForHero() {
    const url = 'https://fakestoreapi.com/products';
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();
        const heroProductContainer = document.getElementById('hero-product-list');
        heroProductContainer.innerHTML = '';
        products.slice(0, 9).forEach(product => {  
            const productCard = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description.substring(0, 100)}...</p>
                            <p class="card-text"><strong>$${product.price}</strong></p>
                        </div>
                    </div>
                </div>
            `;
            heroProductContainer.innerHTML += productCard;
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        document.getElementById('hero-product-list').innerHTML = "<p>Failed to load products. Please try again later.</p>";
    }
}

fetchProductsForHero();

const typingText = document.querySelector('.typing-text');
const words1 = [
    { text: 'Your Bharath Store', color: 'red' },
    { text: 'a Great Solution', color: 'blue' },
    { text: 'an Innovative Service', color: 'green' }
];
let wordIndex1 = 0;
let letterIndex1 = 0;
let typingSpeed = 150;
let pauseAfterTyping = 2000;
let removingSpeed = 100;

function typeFirst() {
    typingText.style.color = words1[wordIndex1].color; 
    if (letterIndex1 < words1[wordIndex1].text.length) {
        typingText.textContent += words1[wordIndex1].text.charAt(letterIndex1);
        letterIndex1++;
        setTimeout(typeFirst, typingSpeed); 
    } else {
        setTimeout(removeFirst, pauseAfterTyping); 
    }
}

function removeFirst() {
    if (letterIndex1 > 0) {
        typingText.textContent = typingText.textContent.slice(0, -1);
        letterIndex1--;
        setTimeout(removeFirst, removingSpeed); 
    } else {
        wordIndex1 = (wordIndex1 + 1) % words1.length; 
        setTimeout(typeFirst, typingSpeed);
    }
}
setTimeout(typeFirst, typingSpeed);

document.addEventListener("DOMContentLoaded", function () {
    const initSection = document.querySelector('.init-section');
    function showInitSection() {
        initSection.classList.add('visible');
        initSection.classList.remove('hidden'); 
    }

    showInitSection();
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('section-visible');
        } else {
            section.classList.remove('section-visible'); 
        }
    });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);
