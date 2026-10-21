const app = document.getElementById("app");

app.innerHTML = `
    <div class="contenedor-ej3">
        <h1>What We Do</h1>

        <div class="menu-horizontal">
            <a href="../index.html">Menú Principal</a>
            <a href="ejercicio2.html">Opción 1</a>
            <a href="ejercicio3.html">Opción 2</a>
            <a href="#servicios">Opción 3</a>
            <a href="#servicios">Opción 4</a>
        </div>

        <p class="texto-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed pharetra lorem,
            blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper.
            Pellentesque est urna, consectetur adipiscing elit. Thank you for supporting us.
        </p>

        <div class="servicios" id="servicios">
            <div class="servicio">
                <img src="../img/9.jpg" alt="Market Analysis">
                <h3>Market Analysis</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed pharetra lorem.</p>
            </div>
            <div class="servicio">
                <img src="../img/10.jpg" alt="Fast Support">
                <h3>Fast Support</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum mi.</p>
            </div>
            <div class="servicio">
                <img src="../img/11.jpg" alt="Top Security">
                <h3>Top Security</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                <button class="btn" onclick="mostrarMensaje('Learn More')">Learn More</button>
            </div>
            <div class="servicio">
                <img src="../img/12.jpg" alt="Social Work">
                <h3>Social Work</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nibh semper.</p>
                <button class="btn" onclick="mostrarMensaje('Details')">Details</button>
            </div>
        </div>
    </div>
`;

function mostrarMensaje(texto) {
    alert(texto);
}