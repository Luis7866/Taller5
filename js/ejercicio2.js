const app = document.getElementById("app");

const tarjetas = [
    { titulo: "Real Estate", imagen: "../img/1.jpg" },
    { titulo: "Library", imagen: "../img/2.jpg" },
    { titulo: "Transportation", imagen: "../img/3.jpg" },
    { titulo: "Gas & Oil", imagen: "../img/4.jpg" },
    { titulo: "Marketing Agency", imagen: "../img/5.jpg" },
    { titulo: "Pizza", imagen: "../img/6.jpg" },
    { titulo: "Flooring", imagen: "../img/7.jpg" },
    { titulo: "Steel Processing", imagen: "../img/8.jpg" }
];

let contenido = "";
for (let i = 0; i < tarjetas.length; i++) {
    contenido += `
        <div class="tarjeta">
            <img src="${tarjetas[i].imagen}" alt="${tarjetas[i].titulo}">
            <p>${tarjetas[i].titulo}</p>
        </div>`;
}

app.innerHTML = `
    <div class="contenedor-ej2">
        <a class="volver" href="../index.html">Menú Principal</a>
        <h2>Beautiful, Hand-crafted Layouts</h2>
        <div class="galeria">
            ${contenido}
            <div class="coming-soon">
                <div class="icono-cuadro">+</div>
                <p>Coming Soon</p>
            </div>
        </div>
    </div>
`;