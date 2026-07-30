const textos = [
    "Desenvolvedor",
    "Web Designer",
    "Programador",
    "Front-End",
    "Back-End"
    ];
    
    let i = 0;
    let j = 0;
    let apagando = false;
    
    function escrever(){
    
    const elemento = document.querySelector(".typing");
    
    if(!apagando){
    
    elemento.innerHTML = textos[i].substring(0,j++);
    
    if(j > textos[i].length){
    
    apagando = true;
    
    setTimeout(escrever,1200);
    
    return;
    
    }
    
    }
    
    else{
    
    elemento.innerHTML = textos[i].substring(0,j--);
    
    if(j < 0){
    
    apagando = false;
    
    i++;
    
    if(i == textos.length){
    
    i = 0;
    
    }
    
    }
    
    }
    
    setTimeout(escrever,apagando ? 60 : 120);
    
    }
    
    escrever();