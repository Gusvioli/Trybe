window.onload = function(){

    let localCorDefundo = localStorage.getItem('CorDefundo');
    document.body.style.backgroundColor = "#" + localCorDefundo;
    
    let localCorDoTexto = localStorage.getItem('CorDoTexto');
    document.body.style.color = "#" + localCorDoTexto;
    
    let localTamDaFont = localStorage.getItem('tamFont');
    document.body.style.fontSize = localTamDaFont + "px";
    
    let localEspaLinhas = localStorage.getItem('espaLinhas');
    document.body.style.lineHeight = localEspaLinhas + "px";

    let localtipoDaFonte = localStorage.getItem('font');
    document.body.style.fontFamily = localtipoDaFonte;
    
    let inicarCorTexto = document.getElementsByTagName('li');
    for (let index = 0; index < inicarCorTexto.length; index+=1) {      
        inicarCorTexto[index].style.color = "#ffffff";
    }


    const corFundoTela = document.querySelectorAll('.menu')[0];
    const corDoTexto = document.querySelectorAll('.menu')[1];
    const tamDaFont = document.querySelectorAll('.menu')[2];
    const espacamentoLinhas = document.querySelectorAll('.menu')[3];
    const tipoDaFonte = document.querySelectorAll('.menu')[4];
    
    exibirCorFundoTela();
    exibirCorDoTexto();
    exibirTamDaFont();
    exibirSpacamentoLinhas();
    exibirTipoDaFonte();


    // const chamaEventoBTN = querySelector('#menuBtn');
    // chamaEventoBTN.addEventListener('click', exibirCorFundoTela);

    function exibirCorFundoTela() {
        let tagInput = document.createElement('input');
        tagInput.id = "exib0";
        tagInput.type = "text";
        tagInput.placeholder = "#000000";
        corFundoTela.appendChild(tagInput);
    }

    function exibirCorDoTexto() {
        let tagInput = document.createElement('input');
        tagInput.id = "exib1";
        tagInput.type = "text";
        tagInput.placeholder = "#000000";
        corDoTexto.appendChild(tagInput);
    }
    function exibirTamDaFont() {
        let tagInput = document.createElement('input');
        tagInput.id = "exib2";
        tagInput.type = "text";
        tagInput.placeholder = "font-size";
        tamDaFont.appendChild(tagInput);
    }
    function exibirSpacamentoLinhas() {
        let tagInput = document.createElement('input');
        tagInput.id = "exib3";
        tagInput.type = "text";
        tagInput.placeholder = "00";
        espacamentoLinhas.appendChild(tagInput);
    }
    function exibirTipoDaFonte() {
        let tagInput = document.createElement('input');
        tagInput.id = "exib4";
        tagInput.type = "text";
        tagInput.placeholder = "font-family";
        tipoDaFonte.appendChild(tagInput);
    }

    corFundoTela.addEventListener('keyup', funEscExib0);
    
    function funEscExib0() {
        const seleExib0 = document.querySelector('#exib0');
        let valorDigitado = seleExib0.value;
        localStorage.setItem('CorDefundo', valorDigitado);
        document.body.style.backgroundColor = "#" + valorDigitado;
    }

    corDoTexto.addEventListener('keyup', funEscExib1);
    
    function funEscExib1() {
        const seleExib1 = document.querySelector('#exib1');
        let valorDigitado = seleExib1.value;
        localStorage.setItem('CorDoTexto', valorDigitado);
        document.body.style.color = "#" + valorDigitado;
    }

    tamDaFont.addEventListener('keyup', funEscExib2);
    
    function funEscExib2() {
        const seleExib2 = document.querySelector('#exib2');
        let valorDigitado = seleExib2.value;
        localStorage.setItem('tamFont', valorDigitado);
        document.body.style.fontSize = valorDigitado + "px";
    }

    espacamentoLinhas.addEventListener('keyup', funEscExib3);
    
    function funEscExib3() {
        const seleExib3 = document.querySelector('#exib3');
        let valorDigitado = seleExib3.value;
        localStorage.setItem('espaLinhas', valorDigitado);
        document.body.style.lineHeight = valorDigitado + "px";
    }

    tipoDaFonte.addEventListener('keyup', funEscExib4);
    
    function funEscExib4() {
        const seleExib4 = document.querySelector('#exib4');
        let valorDigitado = seleExib4.value;
        localStorage.setItem('font', valorDigitado);
        document.body.style.fontFamily = valorDigitado;
    }
      
        
}