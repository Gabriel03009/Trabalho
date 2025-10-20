// Cadastrar um novo usuário
function cadastrar() {
    const nome = document.getElementById('username')?.value.trim();
    const idade = document.getElementById('birthdate')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const senha = document.getElementById('senha')?.value.trim();

    if (!nome || !email || !senha) {
        alert('Preencha nome, email e senha.');
        return;
    }

    fetch('/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, idade, email, senha })
    })
    .then(async response => {
        const body = await response.json().catch(() => ({}));
        if (response.ok) {
            alert('Cadastrado com sucesso');
        } else {
            alert(body.message || 'Erro ao cadastrar');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro de conexão');
    });
}

// Fazer o login do usuário
function fazerLogin() {
    const email = document.getElementById('email')?.value.trim();
    const senha = document.getElementById('senha')?.value.trim();

    if (!email || !senha) {
        alert('Preencha email e senha.');
        return;
    }

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    })
    .then(async response => {
        const body = await response.json().catch(() => ({}));
        if (response.ok) {
            // redireciona só depois de autenticado
            window.location.href = 'explorar.html';
        } else {
            alert(body.error || 'Credenciais inválidas');
        }
    })
    .catch(err => {
        console.error('Erro no fetch /login:', err);
        alert('Erro ao conectar com o servidor.');
    });
}

// Mostrar/ocultar senha
function toggleSenha() {
    const input = document.getElementById('senha');
    const icone = document.getElementById('icone-olho');

    if (input.type === "password") {
      input.type = "text";
      icone.src = "olhos-fechados.png";
      icone.alt = "Ocultar senha";
    } else {
      input.type = "password";
      icone.src = "olho.png";
      icone.alt = "Mostrar senha";
    }
}

window.cadastrar = cadastrar;
window.fazerLogin = fazerLogin;
window.toggleSenha = toggleSenha;