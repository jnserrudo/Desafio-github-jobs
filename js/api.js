fetch('https://remotive.io/api/remote-jobs?category=software-dev&limit=5')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        // .then(res=>console.log(res))
        .then(res=>res.json())
        .then(res=>console.log(res.jobs))
        .catch(error=>console.log(error))

axios({
                method:'GET',
                url:'https://remotive.io/api/remote-jobs?category=software-dev'
        }
).then(res=>console.log(res.data.jobs))

//https://remotive.io/api/remote-jobs?jobs-type=full_time
//para buscar trabajos solo full time

const loadpage = async () =>{
        try{
                let res= await fetch('https://remotive.io/api/remote-jobs?limit=105')
                let datos= await res.json()
                let jobs= await datos.jobs
                console.log(datos.jobs)
                console.log('dea')
                const fragmento=document.createDocumentFragment()
                for(const work of jobs){
                        // calculo de diferencia de fechas
                        let fecha_actual=new Date().getTime()
                        const fecha= new Date(work.publication_date).getTime()
                        let diferencia_fecha=fecha_actual- fecha
                        diferencia_fecha=Math.round(diferencia_fecha/(1000*60*60*24))                  
                        console.log(`El nombre de la compañia es: ${work.company_name} y el cargo es: ${work.title}`)

                        // CONTENEDOR DEL TRABAJO--------------------------------------------------------------------
                        const cont_works__trabajo=document.createElement('div')
                        cont_works__trabajo.classList.add('cont_works__trabajo')

                        // contenedor de la imagen e informacion basica del trabajo---------
                        const cont_works__trabajo__info1=document.createElement('div')
                        cont_works__trabajo__info1.classList.add('cont_works__trabajo__info1')

                        // imagen del trabajo
                        const imglogo=document.createElement('img')
                        imglogo.classList.add('cont_works__trabajo__info1__logo')
                        imglogo.setAttribute('src',work.company_logo_url)
                        imglogo.setAttribute('alt','Not found')

                        // contenedor de informacion basica del trabajo---------
                        const cont_works__trabajo__info1__texto=document.createElement('div')
                        cont_works__trabajo__info1__texto.classList.add('cont_works__trabajo__info1__texto')
                        // parrafo con el nombre de la empresa
                        const nomempresa=document.createElement('p')
                        nomempresa.classList.add('cont_works__trabajo__info1__texto__nomempresa')
                        nomempresa.textContent=work.company_name
                        // parrafo con el cargo
                        const titulo=document.createElement('p')
                        titulo.classList.add('cont_works__trabajo__info1__texto__cargo')
                        titulo.textContent=work.title
                        // contenedor del parrafo del tipo de trabajo--
                        const cont_works__trabajo__info1__fulltime=document.createElement('div')
                        cont_works__trabajo__info1__fulltime.classList.add('cont_works__trabajo__info1__fulltime')
                        // parrafo del tipo de trabajo
                        const txtfulltime=document.createElement('p')
                        txtfulltime.classList.add('cont_works__trabajo__info1__fulltime__txt')
                        work.job_type==='full_time'? txtfulltime.textContent='Full Time' : txtfulltime.textContent=work.job_type

                        // agregando a hijos del contenedor de la imagen e informacion basica 
                        cont_works__trabajo__info1__fulltime.appendChild(txtfulltime)

                        cont_works__trabajo__info1__texto.appendChild(nomempresa)
                        cont_works__trabajo__info1__texto.appendChild(titulo)
                        cont_works__trabajo__info1__texto.appendChild(cont_works__trabajo__info1__fulltime)

                        cont_works__trabajo__info1.appendChild(imglogo)
                        cont_works__trabajo__info1.appendChild(cont_works__trabajo__info1__texto)
                        // agrego toda la informacion basica del trabajo con su imagen
                        cont_works__trabajo.appendChild(cont_works__trabajo__info1)

                        // agregando la ubicacion y la publicacion:
                        const cont_works__trabajo__info2=document.createElement('div')
                        cont_works__trabajo__info2.classList.add('cont_works__trabajo__info2')



                        const imgubicacion=document.createElement('img')
                        imgubicacion.classList.add('cont_works__trabajo__info2__logo')
                        imgubicacion.setAttribute('src',"../assets/image/ubiblack.svg")

                        const txtubicacion=document.createElement('p')
                        txtubicacion.classList.add('cont_works__trabajo__info2__txt')
                        txtubicacion.textContent=work.candidate_required_location
                        console.log('ubicacion: '+txtubicacion.textContent)
                        
                        const imgpublicacion=document.createElement('img')
                        imgpublicacion.classList.add('cont_works__trabajo__info2__logo')
                        imgpublicacion.setAttribute('src',"../assets/image/tiempoblack.svg")

                        const txtpublicacion=document.createElement('p')
                        txtpublicacion.classList.add('cont_works__trabajo__info2__txt')
                        txtpublicacion.textContent=diferencia_fecha+" Days ago"

                        cont_works__trabajo__info2.appendChild(imgubicacion)
                        cont_works__trabajo__info2.appendChild(txtubicacion)
                        cont_works__trabajo__info2.appendChild(imgpublicacion)
                        cont_works__trabajo__info2.appendChild(txtpublicacion)
                        // todo el trabajo agregado
                        cont_works__trabajo.appendChild(cont_works__trabajo__info2)
                        fragmento.appendChild(cont_works__trabajo)
                }
                main.appendChild(fragmento)


               let a=` <div class="cont_works__trabajo">
            
               <div class="cont_works__trabajo__info1">
                   <img class="cont_works__trabajo__info1__logo" src="../assets/image/lev.jpeg" alt="not Found">
                   
                   <div class="cont_works__trabajo__info1__texto">
                       <p class="cont_works__trabajo__info1__texto__nomempresa">Kasisto</p>
                       <p class="cont_works__trabajo__info1__texto__cargo">Front-End Developer</p>
                       <div class="cont_works__trabajo__info1__fulltime">
                           <p class="cont_works__trabajo__info1__fulltime__txt">Full Time</p>
                       </div>
                   </div>
               </div>
   
               <div class="cont_works__trabajo__info2">
                   <!-- icono de mundo -->
                   <!-- <img src="../assets/image/ubiblack.svg" class="cont_works__trabajo__info2__logo" alt=""> -->
                   <svg class="cont_works__trabajo__info2__logo" xmlns="http://www.w3.org/2000/svg" height="24px"
                       viewBox="0 0 24 24" width="24px">
                       <path d="M0 0h24v24H0V0z" fill="none" />
                       <path
                           d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                   </svg>
                   <!-- puede ver mas de un parrafo de ubicacion -->
                   
                   <p class="cont_works__trabajo__info2__txt">Ney York</p>
                   <!-- icono de reloj -->
                   <svg class="cont_works__trabajo__info2__logo" xmlns="http://www.w3.org/2000/svg" height="24px"
                       viewBox="0 0 24 24" width="24px">
                       <path d="M0 0h24v24H0V0z" fill="none" />
                       <path
                           d="M16.24 7.75c-1.17-1.17-2.7-1.76-4.24-1.76v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 1.99c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                   </svg>
                   <p class="cont_works__trabajo__info2__txt">5 Days ago</p>
               </div>
           </div>`
        }
        catch (error){
                console.log(error)

        }
       
}
loadpage()