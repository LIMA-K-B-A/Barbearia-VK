// Verificação de JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const noscriptWarning = document.querySelector('.noscript-warning');
    if (noscriptWarning) {
        noscriptWarning.remove();
    }
});

// Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
    if (window.innerWidth < 768) {
        if (navMenu.classList.contains('d-none')) {
            navMenu.classList.remove('d-none');
            navMenu.classList.add('d-flex', 'flex-column', 'position-absolute', 'top-100', 'start-0', 'w-100', 'bg-primary', 'p-3');
        } else {
            navMenu.classList.add('d-none');
            navMenu.classList.remove('d-flex', 'flex-column', 'position-absolute', 'top-100', 'start-0', 'w-100', 'bg-primary', 'p-3');
        }
    }
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}

menuToggle.addEventListener('click', toggleMenu);

// Fechar menu ao clicar em um link no mobile
if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navMenu.classList.add('d-none');
                navMenu.classList.remove('d-flex', 'flex-column', 'position-absolute', 'top-100', 'start-0', 'w-100', 'bg-primary', 'p-3');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
}

// Tema Escuro/Claro
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');

    localStorage.setItem('theme', newTheme);
}

// Carregar tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

themeToggle.addEventListener('click', toggleTheme);

// Mensagem de Boas-vindas
function showWelcomeMessage() {
    const hour = new Date().getHours();
    let greeting = '';

    if (hour >= 5 && hour < 12) {
        greeting = 'Bom dia';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }

    showNotification(`${greeting}! Bem-vindo à Barbearia VK.`, 'info');
}

// Notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);

    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Validação do Formulário
const bookingForm = document.getElementById('bookingForm');

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;

    if (!name || !phone || !date || !time || !service) {
        showNotification('Por favor, preencha todos os campos.', 'error');
        return;
    }

    // Simular envio
    showNotification('Agendamento realizado com sucesso! Entraremos em contato para confirmar.', 'success');
    bookingForm.reset();
}

bookingForm.addEventListener('submit', validateForm);

// Animações no Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .contact-item, .about-content');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    showWelcomeMessage();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Animar elementos visíveis no carregamento
});

// Mostrar/ocultar detalhes extras no formulário
const showDetailsCheckbox = document.getElementById('showDetails');
const extraDetails = document.getElementById('extraDetails');

if (showDetailsCheckbox && extraDetails) {
    showDetailsCheckbox.addEventListener('change', function () {
        if (this.checked) {
            extraDetails.classList.add('show');
            extraDetails.classList.remove('hidden');
        } else {
            extraDetails.classList.remove('show');
            extraDetails.classList.add('hidden');
        }
    });
} 