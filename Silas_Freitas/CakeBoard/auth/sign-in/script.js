const form = document.getElementById('form');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const email = form.email;
    const password = form.password;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.email === email.value);

    if (!user) return window.alert('Este email não existe');
    if (user.password === password.value) {
        localStorage.setItem('userId', user.id);
        window.location.href = '/dashboard';
    } else {
        window.alert('Senha Inválida');
    }
});