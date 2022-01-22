const input=document.getElementById('inputlondon')
const body=document.getElementById('body')
const header=document.getElementById('header')
const aside=document.getElementById('aside')
const main=document.getElementById('main')
const footer=document.getElementById('footer')


console.log(input)
console.log(input.checked)
input.addEventListener('click',(e)=>{
    e.preventDefault
    console.log(e.target)
    setTimeout(()=>{
        input.checked ? input.checked=false:input.checked=true

    },10)
    // input.checked ? input.checked=false:input.checked=true
    // if(input.checked){
    //     input.checked=false
    // }
    console.log(input.checked)
})

/* dm */
 const btnSwitch = document.getElementById('switch');

 btnSwitch.addEventListener('click', () => {
     body.classList.toggle('dark')
    header.classList.toggle('header--dark')
    aside.classList.toggle('aside--dark')
    let hijosmain=main.firstElementChild
    hijosmain.classList.toggle('cont_works--dark')
    // busco el al dive que contiene el borde del texto de full time
    hijosmain.firstElementChild.lastElementChild.lastElementChild.classList.toggle('cont_works__trabajo__info1__fulltime--dark')

    // busco al div que contiene a la ubicacion y tiempo
    hijosmain.lastElementChild.classList.toggle('cont_works__trabajo__info2--dark')
    console.log(hijosmain)

    while(hijosmain.nextElementSibling){
        hijosmain=hijosmain.nextElementSibling
        if(hijosmain.firstElementChild.lastElementChild.lastElementChild){
            hijosmain.firstElementChild.lastElementChild.lastElementChild.classList.toggle('cont_works__trabajo__info1__fulltime--dark')
        }
        // console.log(hijosmain.firstElementChild.lastElementChild.lastElementChild.classList.toggle('cont_works__trabajo__info1__fulltime--dark'))
        console.log(hijosmain)
        hijosmain.classList.toggle('cont_works--dark')

    }
    // main.classList.toggle('cont_work--dark')
    footer.classList.toggle('foooter--dark')
     btnSwitch.classList.toggle('active');
     console.log(btnSwitch)
});

// mi primer comentario para push ramajoni