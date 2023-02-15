function appear(b,n){
    let togg1 = document.getElementById(b);
    let d1 = document.getElementById(n);
    togg1.addEventListener("click", () => {
        if(getComputedStyle(d1).display != "none"){
          d1.style.display = "none";
        } else {
          d1.style.display = "block";
        }
    })
}

appear('btnHead','navHead');
appear('btnWrapper','navWrapper');
for(var i = 1; i<6; i++){
    b = String('q'+i);
    n = String('r'+i);
    appear(b,n);
};


const observer = new IntersectionObserver((entries) => {
  entries.forEach(function(entry) {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
      observer.unobserve(entry)
    } 
  });
});

const hiddenElement = document.querySelectorAll('[class*="hide-"]');
hiddenElement.forEach((e1) => observer.observe(e1));


let svgCirconflexe = document.querySelector('.react')

svgCirconflexe.addEventListener("click", () => {
  svgCirconflexe.classList.add('.turn');
})

var button_get= document.getElementById("btn-lvl-1")
let k = 1
button_get.addEventListener('click', () => {
  if(k == 1){
    button_get.classList.add('activate')
    console.log('activé')
    k = 2
  } else {
    button_get.classList.remove('activate')
    console.log('desactivé')
    k = 1
  }
})

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


const slidingNewsletter = document.querySelector('');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slidingNewsletter.classList.add('show')
    }
})
// !attention
/**
 * !commentaire de plusieurs lignes "/**"
 * TODO : apprendre les shortcuts == productivité
 * !cmd + k + u = commentaires
 */
// ?suis-je adopté?
