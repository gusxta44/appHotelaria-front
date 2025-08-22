export default function Form() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '400px';
    divRoot.appendChild(container);
    
    const titulo = document.createElement('h1');
    titulo.textContent = 'Faça seu login';
    titulo.className = 'titulo';

    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';
    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Digite seu e-mail";
    formulario.appendChild(email);

    const password = document.createElement('input');
    password.type = 'password';
    password.placeholder = "Digite sua senha";
    formulario.appendChild(password);

    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = "Entrar";
    btn.className = 'btn btn-primary';
    formulario.appendChild(btn);

    const cadPequeno = document.createElement('div');
    cadPequeno.className = 'text-center mt-3';
    const btnCad = document.createElement('a');
    btnCad.href = '#/register';
    btnCad.textContent = "Não tem conta? Cadastre-se";
    btnCad.className = 'cadastro-link';
    cadPequeno.appendChild(btnCad);
    formulario.appendChild(cadPequeno);

    container.appendChild(titulo);
    container.appendChild(formulario);
    
    return divRoot;
}