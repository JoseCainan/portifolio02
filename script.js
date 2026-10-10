
const botaoMenu = document.getElementById("menu-mobile");
const menuLateral = document.getElementById("menu-lateral");
const fundoMenu = document.getElementById("fundo-menu");

// Easter egg do Bit Cainan
const botaoEasterEgg = document.getElementById("botao-easter-egg");
const bitSecreto = document.getElementById("bit-secreto");


function abrirMenu() {
    menuLateral.classList.add("ativo");
    fundoMenu.classList.add("ativo");

    botaoMenu.setAttribute("aria-expanded", "true");
    botaoMenu.setAttribute("aria-label", "Fechar menu");
}

function fecharMenu() {
    menuLateral.classList.remove("ativo");
    fundoMenu.classList.remove("ativo");

    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
}

botaoMenu.addEventListener("click", () => {
    const menuAberto = menuLateral.classList.contains("ativo");

    if (menuAberto) {
        fecharMenu();
    } else {
        abrirMenu();
    }
});

fundoMenu.addEventListener("click", fecharMenu);

menuLateral.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
        fecharMenu();
    }
});

botaoEasterEgg.addEventListener("click", () => {
    const revelado = bitSecreto.classList.toggle("revelado");

    botaoEasterEgg.setAttribute(
        "aria-expanded",
        String(revelado)
    );

    bitSecreto.setAttribute(
        "aria-hidden",
        String(!revelado)
    );
});