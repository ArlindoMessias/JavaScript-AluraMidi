function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        console.log(elemento.localName); 
        elemento.play(); 
    }

    else{
        console.log('elemento nao encontrado ou seletor inválido');
    }
}

const listaDeTeclas=document.querySelectorAll('.tecla');

let contador=0;

for(contador=0; contador<listaDeTeclas.length; contador++){

    const tecla=listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    //'#som_{instrumento}'
    //template string
    const idAudio = `#som_${instrumento}`;
    
    console.log(idAudio);
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    } 

    tecla.onkeydown = function(evento){
        
        console.log(evento.code);

        if(evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classList.add('ativa');
        }

    } 

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    } 

    console.log(contador);
}


