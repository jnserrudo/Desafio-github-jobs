const input=document.getElementById('inputlondon')
const body=document.getElementById('body')
const header=document.getElementById('header')
const aside=document.getElementById('aside')
const main=document.getElementById('main')
const footer=document.getElementById('footer')


// console.log(input)
// console.log(input.checked)
// input.addEventListener('click',(e)=>{
//     e.preventDefault
//     console.log(e.target)
//     setTimeout(()=>{
//         input.checked ? input.checked=false:input.checked=true

//     },10)
//     // input.checked ? input.checked=false:input.checked=true
//     // if(input.checked){
//     //     input.checked=false
//     // }
//     console.log(input.checked)
// })

/* dm */
 const btnSwitch = document.getElementById('switch');

 btnSwitch.addEventListener('click', () => {

    const imgubi=document.createElement('img')
    imgubi.setAttribute('src',"../assets/image/ubiwhite.svg")
    const imgtiempo=document.createElement('img')
    imgtiempo.setAttribute('src',"../assets/image/tiempo.svg")
    // creo las imagenes para los fondos oscuros
    imgubi.classList.add("cont_works__trabajo__info2__logo")
    imgtiempo.classList.add("cont_works__trabajo__info2__logo")
     body.classList.toggle('dark')
    header.classList.toggle('header--dark')
    aside.classList.toggle('aside--dark')
    let hijosmain=main.firstElementChild
    hijosmain.classList.toggle('cont_works--dark')
    // busco el al dive que contiene el borde del texto de full time
    hijosmain.firstElementChild.lastElementChild.lastElementChild.classList.toggle('cont_works__trabajo__info1__fulltime--dark')

    // busco al div que contiene a la ubicacion y tiempo
    hijosmain.lastElementChild.classList.toggle('cont_works__trabajo__info2--dark')
    
    // remplazo las imagenes //VER EN LOS DEMAS HIJOS
    hijosmain.lastElementChild.replaceChild(imgubi,hijosmain.lastElementChild.children[0])
    hijosmain.lastElementChild.replaceChild(imgtiempo,hijosmain.lastElementChild.children[2])

    console.log(hijosmain)


    while(hijosmain.nextElementSibling){
        hijosmain=hijosmain.nextElementSibling

        const imgubi=document.createElement('img')
        imgubi.setAttribute('src',"../assets/image/ubiwhite.svg")
        const imgtiempo=document.createElement('img')
        imgtiempo.setAttribute('src',"../assets/image/tiempo.svg")
        // creo las imagenes para los fondos oscuros
        imgubi.classList.add("cont_works__trabajo__info2__logo")
        imgtiempo.classList.add("cont_works__trabajo__info2__logo")                                         

        hijosmain.lastElementChild.replaceChild(imgubi,hijosmain.lastElementChild.children[0])
        hijosmain.lastElementChild.replaceChild(imgtiempo,hijosmain.lastElementChild.children[2])
    
        hijosmain.lastElementChild.classList.toggle('cont_works__trabajo__info2--dark')

        console.log(hijosmain.firstElementChild.lastElementChild.lastElementChild)
        if(hijosmain.firstElementChild.lastElementChild.lastElementChild){
            hijosmain.firstElementChild.lastElementChild.lastElementChild.classList.toggle('cont_works__trabajo__info1__fulltime--dark')
        }
        // console.log(hijosmain.firstElementChild.lastElementChild.lastElementChild.classList.toggle('cont_works__trabajo__info1__fulltime--dark'))
        // console.log(hijosmain)
        hijosmain.classList.toggle('cont_works--dark')

    }
    // main.classList.toggle('cont_work--dark')
    footer.classList.toggle('footer--dark')
     btnSwitch.classList.toggle('active');
    //  console.log(btnSwitch)
});