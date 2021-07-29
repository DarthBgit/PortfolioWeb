
/*DESCARGA DE PDF */


function openPDF(){
    window.open("../pdf/c.pdf","_blank");
}

/*SLIDER*/


let index = 1;
showSlides(index);

function nextSlide(n){
showSlides(index+=n)
}
function positionSlide(n){
  showSlides(index=n)
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("position-bar")
  let barras = document.getElementsByClassName("barras_bar")

  if(n > slides.length){
    index = 1;
  }
  if(n < 1){
    index = slides.length
  }
  for(i=0; i< slides.length; i++){
    slides[i].style.display ='none';
  }
  for(i=0; i< barras.length; i++){
    barras[i].className = barras[i].className.replace(" barras_active", "")
  }

  slides[index-1].style.display="block"
  barras[index-1].className += " barras_active"}

  /* CAMBIO AUTOMATICO DE IMAGENES*/
  
  setInterval(function time(){
  showSlides(index += 1)},500000)


  // MENU HEADER 

  const menuHeader = document.getElementById('header-hidden');
  const arrow = document.getElementById('arrow-header');

  arrow.addEventListener('click',(s)=>{
    menuHeader.classList.toggle('header-activate');
    arrow.classList.toggle('arrow-change');
  })
  
/*ACTIVACION LIBRERIA DE WOW.JS*/

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'know-icon', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
