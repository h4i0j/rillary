document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");

    const form = document.createElement("form");
    form.id = "comentarioForm";
    form.innerHTML = `
        <h2>Deixe um comentário sobre o site</h2>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" required>
        <label for="numero">Número:</label>
        <input type="tel" id="numero" required>
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <label for="comentario">Comentário:</label>
        <textarea id="comentario" required></textarea>
        <button type="submit">Enviar</button>
    `;
    body.appendChild(form);

    const comentariosDiv = document.createElement("div");
    comentariosDiv.id = "comentarios";
    body.appendChild(comentariosDiv);

    form.addEventListener("submit", function (event) {
        event.preventDefault( ) ;

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const comentario = document.getElementById("comentario").value;

    
        const novoComentario = document.createElement("div");
        novoComentario.classList.add("comentario"); 
        novoComentario.innerHTML = `
            <p><strong>${nome} (${email}):</strong> ${comentario}</p>
        `;

        comentariosDiv.appendChild(novoComentario);

        form.reset();
    });
});