const input=document.getElementById('inputlondon')
const body=document.getElementById('body')
const header=document.getElementById('header')
const aside=document.getElementById('aside')
const main=document.getElementById('main')
const footer=document.getElementById('footer')
const cont_paginacion=document.getElementById('cont_paginacion')
const pagi = document.getElementsByClassName('paginacion_pags')


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

// ESTADO DE LOS MODOS DE PANTALLA
    let modo=0// MODO CLARO

// --------
 const btnSwitch = document.getElementById('switch');
 const funcion_btnswitch=(m)=>{
    const imgubi=document.createElement('img')
    const imgtiempo=document.createElement('img')
    if(m){
        if(modo==0){
            imgubi.setAttribute('src',"../assets/image/ubiwhite.svg")
            imgtiempo.setAttribute('src',"../assets/image/tiempowhite.svg")
            // creo las imagenes para los fondos oscuros
            imgubi.classList.toggle("cont_works__trabajo__info2__logo")
            imgtiempo.classList.toggle("cont_works__trabajo__info2__logo")  
        }
        else{
            imgubi.setAttribute('src',"../assets/image/ubi.svg")
            imgtiempo.setAttribute('src',"../assets/image/tiempo.svg")
            // creo las imagenes para los fondos oscuros
            imgubi.classList.toggle("cont_works__trabajo__info2__logo")
            imgtiempo.classList.toggle("cont_works__trabajo__info2__logo")
        }
    }
        // const imgubi=document.createElement('img');
        // const imgtiempo=document.createElement('img');  
    
        // if(body.className==='dark'){
        //     imgubi.setAttribute('src',"../assets/image/ubiwhite.svg")
        //     imgtiempo.setAttribute('src',"../assets/image/tiempowhite.svg") 
        // }else{
        //     imgubi.setAttribute("src", "../assets/image/ubi.svg")
        //     imgtiempo.setAttribute("src", "../assets/image/tiempo.svg");
        // }
        
        // // creo las imagenes para los fondos oscuros
        // imgubi.classList.add("cont_works__trabajo__info2__logo--dark")
        // imgtiempo.classList.add("cont_works__trabajo__info2__logo--dark")
        if(m){
            body.classList.toggle('dark')
            header.classList.toggle('header--dark')
            aside.classList.toggle('aside--dark')
            cont_paginacion.classList.toggle('paginacion_pags--dark')
        }
        
            
    
        // paginacion
        // let hijopaginacion=cont_paginacion.firstChild
        // hijopaginacion.classList.toggle('paginacion_pags--dark')
        // hijopaginacion=hijopaginacion.nextElementSibling
        // while(hijopaginacion.nextElementSibling){
        //     hijopaginacion=hijopaginacion.nextElementSibling
        //     hijopaginacion.classList.toggle('paginacion_pags--dark')
        // }
        // --------
    
        let hijosmain=main.firstElementChild
        hijosmain.classList.toggle('cont_works--dark')
        // busco el al dive que contiene el borde del texto de full time
        hijosmain.firstElementChild.lastElementChild.lastElementChild.classList.toggle('cont_works__trabajo__info1__fulltime--dark')
    
        // busco al div que contiene a la ubicacion y tiempo
        hijosmain.lastElementChild.classList.toggle('cont_works__trabajo__info2--dark')
        
        // remplazo las imagenes //VER EN LOS DEMAS HIJOS
        if(m){
        hijosmain.lastElementChild.replaceChild(imgubi,hijosmain.lastElementChild.children[0])
        hijosmain.lastElementChild.replaceChild(imgtiempo,hijosmain.lastElementChild.children[2])
    }
        
    
        console.log(hijosmain)
    
    
        while(hijosmain.nextElementSibling){
            hijosmain=hijosmain.nextElementSibling
            const imgubi=document.createElement('img')
            const imgtiempo=document.createElement('img')
            if(m){
            if(modo==0){
                imgubi.setAttribute('src',"../assets/image/ubiwhite.svg")
                imgtiempo.setAttribute('src',"../assets/image/tiempowhite.svg")
                // creo las imagenes para los fondos oscuros
                imgubi.classList.toggle("cont_works__trabajo__info2__logo")
                imgtiempo.classList.toggle("cont_works__trabajo__info2__logo")  
            }
            else{
                imgubi.setAttribute('src',"../assets/image/ubi.svg")
                imgtiempo.setAttribute('src',"../assets/image/tiempo.svg")
                // creo las imagenes para los fondos oscuros
                imgubi.classList.toggle("cont_works__trabajo__info2__logo")
                imgtiempo.classList.toggle("cont_works__trabajo__info2__logo")
            }
                                             
    
            hijosmain.lastElementChild.replaceChild(imgubi,hijosmain.lastElementChild.children[0])
            hijosmain.lastElementChild.replaceChild(imgtiempo,hijosmain.lastElementChild.children[2])
        }  
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
        if(m){
        footer.classList.toggle('footer--dark')
         btnSwitch.classList.toggle('active');
        //  console.log(btnSwitch)
        }
        if(m){
            modo==0?modo=1:modo=0

        }
    
}
 btnSwitch.addEventListener('click', () => {
    funcion_btnswitch(1)
});





