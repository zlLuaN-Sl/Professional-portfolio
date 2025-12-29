 const btnMobile = document.querySelector('#mobile-btn');
    const menu = document.querySelector('#menu');

    btnMobile.addEventListener('click', () => {
        menu.classList.toggle('show');
        
        btnMobile.textContent = menu.classList.contains('show') ? "✖" : "☰";

        if (menu.classList.contains("show")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
    }
});

menu.addEventListener('click', () => {
     btnMobile.textContent = menu.classList.contains('show') ? "☰" : " ✖";
    menu.classList.remove('show')

    if (menu.classList.contains("show")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
    }
})







const enviarWhats = (event) => {
    event.preventDefault()  

    const inputNome = document.querySelector('#nome').value;
    const mensagem = document.querySelector('#mensagem').value;

    if(inputNome && mensagem) {
        let telefone = '5511964261935';
    let text = `Olá! Me chamo ${inputNome}, ${ mensagem}`

    let msgFormatada = encodeURIComponent(text)

    let url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
    } else {
        alert('Preencha os dois campos')
    }
};




