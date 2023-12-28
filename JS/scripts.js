let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');




////cabeçalho muda cor aqui!!!!!
window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
           
           navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
           });
            //ativa navbar link
        }
    })

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

}

function readmore(){
    var ponto = document.getElementById("ponto");
    var more = document.getElementById("mais");
    var lerm = document.getElementById("lermais");
       
    if(ponto.style.display ==="none"){
        ponto.style.display="inline";
        more.style.display="none";
        lerm.innerHTML="Ler Mais";
    }
    else{
        ponto.style.display="none";
        more.style.display="inline";
        lerm.innerHTML="Ler Menos";
    }

}

