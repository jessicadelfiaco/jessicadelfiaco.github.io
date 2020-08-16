function mostrar(e) {
    // Esta em lightmode. Alterna para darkmode
    if (e.classList.contains("fa-moon-o")) { 
        e.classList.remove("fa-moon-o"); //remove classe icone lua
        e.classList.add("fa-sun-o"); //coloca classedo sol
        e.style.color = "rgb(225, 225, 0)";
        document.body.style.background = 'rgb(10, 10, 10)';
        document.querySelector('#userName').style.color = '#fff';

        let links = document.querySelectorAll('.link');
        // altera os links para cinza
        for (let i = 0; i < links.length; i++) {
          links[i].style.filter = 'grayscale(100%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        // altera os ciculos para cinza
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(100%)';
        }

    } else { // Esta em darkmode. Alterna para lightmode
        e.classList.remove("fa-sun-o"); //remove classe icone lua
        e.classList.add("fa-moon-o"); //coloca classedo sol
        e.style.color = "#585858";
        document.body.style.background = 'rgb(243, 242, 242)';
        document.querySelector('#userName').style.color = 'rgb(99, 99, 99)';

        let links = document.querySelectorAll('.link');
        // remove o cinza dos links
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        // remove o cinza dos circulos
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }
    }

}