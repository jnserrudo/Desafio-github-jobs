fetch("https://remotive.io/api/remote-jobs?job_type=full_time")
  .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
  // .then(res=>console.log(res))
  .then((res) => res.json())
  .then((res) => {
    let lugares = [];
    console.log(res.jobs.length);
    // debugger;
    for (let job of res.jobs) {
      // let result = data.filter((item,index)=>{
      //     return data.indexOf(item) === index;
      //   })
      lugares.push(job.candidate_required_location);
    }
    console.log("lugares", lugares);
    lugares = lugares.filter((item, index) => {
      return lugares.indexOf(item) === index;
    });
    console.log("lugares posibles", lugares);
  })
  .catch((error) => console.log(error));

axios({
  method: "GET",
  url: "https://remotive.io/api/remote-jobs?category=software-dev",
}).then((res) => console.log(res.data.jobs));

//https://remotive.io/api/remote-jobs?jobs-type=full_time
//para buscar trabajos solo full time



// vbles de paginacion
let pagini=0
let pagtop=5

const pagatras=document.getElementById('pagatras')
const pag1=document.getElementById('pag1')
const pag2=document.getElementById('pag2')
const pag3=document.getElementById('pag3')
const pagsgte=document.getElementById('pagsgte')
const paginicio=document.getElementById('paginicio')
const pagfin=document.getElementById('pagfin')
// 

const loadpage = async (x,y) => {
  // debbtop
  try {

    if(x==undefined&&y==undefined){
      pagini=0
      pagtop=5
      x=pagini
      y=pagtop
      pag1.textContent=1
      pag2.textContent=2
      pag3.textContent=3
    }
    else if(x<=0){
      pagini+=5
      pagtop+=5
      // debugger;
      x=pagini
      y=pagtop
    }
    
    let res = await fetch("https://remotive.io/api/remote-jobs");
    let datos = await res.json();
    let jobs = await datos.jobs;
    console.log(datos.jobs);
    console.log("dea");
    if(y==-1){
        pagini=jobs.length-6
        pagtop=jobs.length-1
        x=pagini
        y=pagtop
        let z=Math.round((jobs.length/5))
        pag1.textContent=z-2
        pag2.textContent=z-1
        pag3.textContent=z
    }
    const fragmento = document.createDocumentFragment();
    if(pagtop*5>jobs.length){
      pagini-=5
      pagtop-=5
      x=pagini
      y=pagtop
    }
    for(let i=x;i<y;i++){
      work=jobs[i]
    // for (const work of jobs) {
      // calculo de diferencia de fechas
      let fecha_actual = new Date().getTime();
      const fecha = new Date(work.publication_date).getTime();
      let diferencia_fecha = fecha_actual - fecha;
      diferencia_fecha = Math.round(diferencia_fecha / (1000 * 60 * 60 * 24));
      console.log(
        `El nombre de la compañia es: ${work.company_name} y el cargo es: ${work.title}`
      );

      // CONTENEDOR DEL TRABAJO--------------------------------------------------------------------
      const cont_works__trabajo = document.createElement("div");
      cont_works__trabajo.classList.add("cont_works__trabajo");

      // contenedor de la imagen e informacion basica del trabajo---------
      const cont_works__trabajo__info1 = document.createElement("div");
      cont_works__trabajo__info1.classList.add("cont_works__trabajo__info1");

      // imagen del trabajo
      const imglogo = document.createElement("img");
      imglogo.classList.add("cont_works__trabajo__info1__logo");
      imglogo.setAttribute("src", work.company_logo_url);
      imglogo.setAttribute("alt", "Not found");

      // contenedor de informacion basica del trabajo---------
      const cont_works__trabajo__info1__texto = document.createElement("div");
      cont_works__trabajo__info1__texto.classList.add(
        "cont_works__trabajo__info1__texto"
      );
      // parrafo con el nombre de la empresa
      const nomempresa = document.createElement("p");
      nomempresa.classList.add("cont_works__trabajo__info1__texto__nomempresa");
      nomempresa.textContent = work.company_name;

    //   // parrafo con el cargo
    //   const titulo = document.createElement("p");
    //   //
    //   let url = new URL("http://127.0.0.1:5501/html/descripcion.html");
    //   url.searchParams.set("id", work.id);
    //   titulo.href = url;
    //   //
    //   titulo.classList.add("cont_works__trabajo__info1__texto__cargo");
    //   titulo.textContent = work.title;

//   // parrafo con el cargo
    // --------------------------------------------------------------------------------

    console.log(window.location.href,location.href.replace('index','descripcion'))
    console.log(location)
    const titulo = document.createElement("a")
    let url = new URL(location.href.replace('index','descripcion'))

    // probar como argumento esto->location.href+'/descripcion.html'
    url.searchParams.set('id',work.id)
    titulo.href = url;
    titulo.classList.add('cont_works__trabajo__info1__texto__cargo')
    titulo.id = "linkCargo";
    titulo.textContent = work.title

  // ---------------------------------------------------------------------------------

      // contenedor del parrafo del tipo de trabajo--
      const cont_works__trabajo__info1__fulltime =
        document.createElement("div");
      cont_works__trabajo__info1__fulltime.classList.add(
        "cont_works__trabajo__info1__fulltime"
      );
      // parrafo del tipo de trabajo
      const txtfulltime = document.createElement("p");
      txtfulltime.classList.add("cont_works__trabajo__info1__fulltime__txt");
      work.job_type === "full_time"
        ? (txtfulltime.textContent = "Full Time")
        : (txtfulltime.textContent = work.job_type);

      // agregando a hijos del contenedor de la imagen e informacion basica
      cont_works__trabajo__info1__fulltime.appendChild(txtfulltime);

      cont_works__trabajo__info1__texto.appendChild(nomempresa);
      cont_works__trabajo__info1__texto.appendChild(titulo);
      cont_works__trabajo__info1__texto.appendChild(
        cont_works__trabajo__info1__fulltime
      );

      cont_works__trabajo__info1.appendChild(imglogo);
      cont_works__trabajo__info1.appendChild(cont_works__trabajo__info1__texto);
      // agrego toda la informacion basica del trabajo con su imagen
      cont_works__trabajo.appendChild(cont_works__trabajo__info1);

      // agregando la ubicacion y la publicacion:
      const cont_works__trabajo__info2 = document.createElement("div");
      cont_works__trabajo__info2.classList.add("cont_works__trabajo__info2");

      const imgubicacion = document.createElement("img");
      imgubicacion.classList.add("cont_works__trabajo__info2__logo");
      if(modo==0){
        imgubicacion.setAttribute("src", "assets/image/ubiblack.svg");

      }else{
        imgubicacion.setAttribute("src", "assets/image/ubiwhite.svg");

      }

      const txtubicacion = document.createElement("p");
      txtubicacion.classList.add("cont_works__trabajo__info2__txt");
      txtubicacion.textContent = work.candidate_required_location;
      console.log("ubicacion: " + txtubicacion.textContent);

      const imgpublicacion = document.createElement("img");
      imgpublicacion.classList.add("cont_works__trabajo__info2__logo");
      if(modo==0){
        imgpublicacion.setAttribute("src", "assets/image/tiempoblack.svg");

      }
      else{
       imgpublicacion.setAttribute("src", "assets/image/tiempowhite.svg");

      }

      const txtpublicacion = document.createElement("p");
      txtpublicacion.classList.add("cont_works__trabajo__info2__txt");
      txtpublicacion.textContent = diferencia_fecha + " Days ago";

      cont_works__trabajo__info2.appendChild(imgubicacion);
      cont_works__trabajo__info2.appendChild(txtubicacion);
      cont_works__trabajo__info2.appendChild(imgpublicacion);
      cont_works__trabajo__info2.appendChild(txtpublicacion);
      // todo el trabajo agregado
      cont_works__trabajo.appendChild(cont_works__trabajo__info2);
      fragmento.appendChild(cont_works__trabajo);
    }
    main.appendChild(fragmento);
    if(modo!=0)funcion_btnswitch()

  } catch (error) {
    console.log(error);
  }
}
loadpage();



// paginacion
pagatras.addEventListener('click',()=>{
  pagini-=5
  pagtop-=5
  if(pagini>=0){
    // debugger;
    pag1.textContent=parseInt(pag1.textContent)-1
    pag2.textContent=parseInt(pag2.textContent)-1
    pag3.textContent=parseInt(pag3.textContent)-1
  }
  else{
    // debugger;
    pag1.textContent=1
    pag2.textContent=2
    pag3.textContent=3 
  }
  
  borrarhijosmain()
  loadpage(pagini,pagtop)
})

pagsgte.addEventListener('click',()=>{
  pagini+=5
  pagtop+=5
  pag1.textContent=parseInt(pag1.textContent)+1
    pag2.textContent=parseInt(pag2.textContent)+1
    pag3.textContent=parseInt(pag3.textContent)+1
  borrarhijosmain()
  loadpage(pagini,pagtop)
})

pag1.addEventListener('click',()=>{
  pagini=(parseInt(pag1.textContent)-1)*5-5
  pagtop=pagini+5
  if(parseInt(pag1.textContent)!=1){
    pag1.textContent=(parseInt(pag1.textContent)-1)
    pag2.textContent=parseInt(pag2.textContent)-1
    pag3.textContent=parseInt(pag3.textContent)-1
  }
  
  borrarhijosmain()
  loadpage(pagini,pagtop)

})

pag2.addEventListener('click',()=>{
  pagini=(parseInt(pag2.textContent)-1)*5
  pagtop=pagini+5
  pag1.textContent=pag2.textContent
  pag2.textContent=parseInt(pag2.textContent)+1
  pag3.textContent=parseInt(pag3.textContent)+1
  borrarhijosmain()
  loadpage(pagini,pagtop)

})
pag3.addEventListener('click',()=>{
  pagini=(parseInt(pag3.textContent)-1)*5
  pagtop=pagini+5
  pag1.textContent=pag3.textContent
  pag2.textContent=parseInt(pag3.textContent)+1
  pag3.textContent=parseInt(pag3.textContent)+2
  borrarhijosmain()
  loadpage(pagini,pagtop)

})

paginicio.addEventListener('click',()=>{
  borrarhijosmain()
  loadpage()
})
pagfin.addEventListener('click',()=>{
  
  borrarhijosmain()
  loadpage(1,-1)
})


// --------



const buscador = async (x) => {
  try {
    console.log("entro al buscador");
    let res = await fetch(
      `https://remotive.io/api/remote-jobs?limit=5&company_name=${x}`
    );
    let datos = await res.json();
    let jobs = await datos.jobs;
    console.log(datos.jobs);
    // console.log('dea')
    const fragmento = document.createDocumentFragment();
    for (const work of jobs) {
      // calculo de diferencia de fechas
      let fecha_actual = new Date().getTime();
      const fecha = new Date(work.publication_date).getTime();
      let diferencia_fecha = fecha_actual - fecha;
      diferencia_fecha = Math.round(diferencia_fecha / (1000 * 60 * 60 * 24));
      console.log(
        `El nombre de la compañia es: ${work.company_name} y el cargo es: ${work.title}`
      );

      // CONTENEDOR DEL TRABAJO--------------------------------------------------------------------
      const cont_works__trabajo = document.createElement("div");
      cont_works__trabajo.classList.add("cont_works__trabajo");

      // contenedor de la imagen e informacion basica del trabajo---------
      const cont_works__trabajo__info1 = document.createElement("div");
      cont_works__trabajo__info1.classList.add("cont_works__trabajo__info1");

      // imagen del trabajo
      const imglogo = document.createElement("img");
      imglogo.classList.add("cont_works__trabajo__info1__logo");
      imglogo.setAttribute("src", work.company_logo_url);
      imglogo.setAttribute("alt", "Not found");

      // contenedor de informacion basica del trabajo---------
      const cont_works__trabajo__info1__texto = document.createElement("div");
      cont_works__trabajo__info1__texto.classList.add(
        "cont_works__trabajo__info1__texto"
      );
      // parrafo con el nombre de la empresa
      const nomempresa = document.createElement("p");
      nomempresa.classList.add("cont_works__trabajo__info1__texto__nomempresa");
      nomempresa.textContent = work.company_name;
    //   // parrafo con el cargo
    //   const titulo = document.createElement("p");
    //   titulo.classList.add("cont_works__trabajo__info1__texto__cargo");
    //   titulo.textContent = work.title;

//   // parrafo con el cargo
    // --------------------------------------------------------------------------------
    const titulo = document.createElement("a")
    let url = new URL(location.href.replace('index','descripcion'))
    url.searchParams.set('id',work.id)
    titulo.href = url;
    titulo.classList.add('cont_works__trabajo__info1__texto__cargo')
    titulo.id = "linkCargo";
    titulo.textContent = work.title

  // ---------------------------------------------------------------------------------


      // contenedor del parrafo del tipo de trabajo--
      const cont_works__trabajo__info1__fulltime =
        document.createElement("div");
      cont_works__trabajo__info1__fulltime.classList.add(
        "cont_works__trabajo__info1__fulltime"
      );
      // parrafo del tipo de trabajo
      const txtfulltime = document.createElement("p");
      txtfulltime.classList.add("cont_works__trabajo__info1__fulltime__txt");
      work.job_type === "full_time"
        ? (txtfulltime.textContent = "Full Time")
        : (txtfulltime.textContent = work.job_type);

      // agregando a hijos del contenedor de la imagen e informacion basica
      cont_works__trabajo__info1__fulltime.appendChild(txtfulltime);

      cont_works__trabajo__info1__texto.appendChild(nomempresa);
      cont_works__trabajo__info1__texto.appendChild(titulo);
      cont_works__trabajo__info1__texto.appendChild(
        cont_works__trabajo__info1__fulltime
      );

      cont_works__trabajo__info1.appendChild(imglogo);
      cont_works__trabajo__info1.appendChild(cont_works__trabajo__info1__texto);
      // agrego toda la informacion basica del trabajo con su imagen
      cont_works__trabajo.appendChild(cont_works__trabajo__info1);

      // agregando la ubicacion y la publicacion:
      const cont_works__trabajo__info2 = document.createElement("div");
      cont_works__trabajo__info2.classList.add("cont_works__trabajo__info2");

      const imgubicacion = document.createElement("img");
      imgubicacion.classList.add("cont_works__trabajo__info2__logo");
      imgubicacion.setAttribute("src", "assets/image/ubiblack.svg");

      const txtubicacion = document.createElement("p");
      txtubicacion.classList.add("cont_works__trabajo__info2__txt");
      txtubicacion.textContent = work.candidate_required_location;
      console.log("ubicacion: " + txtubicacion.textContent);

      const imgpublicacion = document.createElement("img");
      imgpublicacion.classList.add("cont_works__trabajo__info2__logo");
      imgpublicacion.setAttribute("src", "assets/image/tiempoblack.svg");

      const txtpublicacion = document.createElement("p");
      txtpublicacion.classList.add("cont_works__trabajo__info2__txt");
      txtpublicacion.textContent = diferencia_fecha + " Days ago";

      cont_works__trabajo__info2.appendChild(imgubicacion);
      cont_works__trabajo__info2.appendChild(txtubicacion);
      cont_works__trabajo__info2.appendChild(imgpublicacion);
      cont_works__trabajo__info2.appendChild(txtpublicacion);
      // todo el trabajo agregado
      cont_works__trabajo.appendChild(cont_works__trabajo__info2);
      fragmento.appendChild(cont_works__trabajo);
    }
    main.appendChild(fragmento);
  } catch (error) {
    console.log(error);
  }

};

const borrarhijosmain = () => {
  while (main.firstElementChild) {
    main.removeChild(main.firstElementChild);
  }
};

const inputbuscador = document.getElementById("inputbuscador");

inputbuscador.addEventListener("keyup", (e) => {
  let z = e.target.value;
  console.log(z, typeof z, z.length);
  if (e.target.value.length > 0) {
    borrarhijosmain();
    buscador(e.target.value);
  }
  // console.log(typeof(e.target.value))
});

const trabajosfulltime = async (x) => {
  try {
    console.log("entro al buscador");
    let res = await fetch(
      `https://remotive.io/api/remote-jobs?limit=5&job_type=full_time&company_name=${x}`
    );
    let datos = await res.json();
    let jobs = await datos.jobs;
    console.log(datos.jobs);
    // console.log('dea')
    const fragmento = document.createDocumentFragment();
    for (const work of jobs) {
      // calculo de diferencia de fechas
      let fecha_actual = new Date().getTime();
      const fecha = new Date(work.publication_date).getTime();
      let diferencia_fecha = fecha_actual - fecha;
      diferencia_fecha = Math.round(diferencia_fecha / (1000 * 60 * 60 * 24));
      console.log(
        `El nombre de la compañia es: ${work.company_name} y el cargo es: ${work.title}`
      );

      // CONTENEDOR DEL TRABAJO--------------------------------------------------------------------
      const cont_works__trabajo = document.createElement("div");
      cont_works__trabajo.classList.add("cont_works__trabajo");

      // contenedor de la imagen e informacion basica del trabajo---------
      const cont_works__trabajo__info1 = document.createElement("div");
      cont_works__trabajo__info1.classList.add("cont_works__trabajo__info1");

      // imagen del trabajo
      const imglogo = document.createElement("img");
      imglogo.classList.add("cont_works__trabajo__info1__logo");
      imglogo.setAttribute("src", work.company_logo_url);
      imglogo.setAttribute("alt", "Not found");

      // contenedor de informacion basica del trabajo---------
      const cont_works__trabajo__info1__texto = document.createElement("div");
      cont_works__trabajo__info1__texto.classList.add(
        "cont_works__trabajo__info1__texto"
      );
      // parrafo con el nombre de la empresa
      const nomempresa = document.createElement("p");
      nomempresa.classList.add("cont_works__trabajo__info1__texto__nomempresa");
      nomempresa.textContent = work.company_name;
    //   // parrafo con el cargo
    //   const titulo = document.createElement("p");
    //   titulo.classList.add("cont_works__trabajo__info1__texto__cargo");
    //   titulo.textContent = work.title;

//   // parrafo con el cargo
    // --------------------------------------------------------------------------------
    const titulo = document.createElement("a")
    let url = new URL(location.href.replace('index','descripcion'))
    url.searchParams.set('id',work.id)
    titulo.href = url;
    titulo.classList.add('cont_works__trabajo__info1__texto__cargo')
    titulo.id = "linkCargo";
    titulo.textContent = work.title

  // ---------------------------------------------------------------------------------

      // contenedor del parrafo del tipo de trabajo--
      const cont_works__trabajo__info1__fulltime =
        document.createElement("div");
      cont_works__trabajo__info1__fulltime.classList.add(
        "cont_works__trabajo__info1__fulltime"
      );
      // parrafo del tipo de trabajo
      const txtfulltime = document.createElement("p");
      txtfulltime.classList.add("cont_works__trabajo__info1__fulltime__txt");
      work.job_type === "full_time"
        ? (txtfulltime.textContent = "Full Time")
        : (txtfulltime.textContent = work.job_type);

      // agregando a hijos del contenedor de la imagen e informacion basica
      cont_works__trabajo__info1__fulltime.appendChild(txtfulltime);

      cont_works__trabajo__info1__texto.appendChild(nomempresa);
      cont_works__trabajo__info1__texto.appendChild(titulo);
      cont_works__trabajo__info1__texto.appendChild(
        cont_works__trabajo__info1__fulltime
      );

      cont_works__trabajo__info1.appendChild(imglogo);
      cont_works__trabajo__info1.appendChild(cont_works__trabajo__info1__texto);
      // agrego toda la informacion basica del trabajo con su imagen
      cont_works__trabajo.appendChild(cont_works__trabajo__info1);

      // agregando la ubicacion y la publicacion:
      const cont_works__trabajo__info2 = document.createElement("div");
      cont_works__trabajo__info2.classList.add("cont_works__trabajo__info2");

      const imgubicacion = document.createElement("img");
      imgubicacion.classList.add("cont_works__trabajo__info2__logo");
      imgubicacion.setAttribute("src", "assets/image/ubiblack.svg");

      const txtubicacion = document.createElement("p");
      txtubicacion.classList.add("cont_works__trabajo__info2__txt");
      txtubicacion.textContent = work.candidate_required_location;
      console.log("ubicacion: " + txtubicacion.textContent);

      const imgpublicacion = document.createElement("img");
      imgpublicacion.classList.add("cont_works__trabajo__info2__logo");
      imgpublicacion.setAttribute("src", "assets/image/tiempoblack.svg");

      const txtpublicacion = document.createElement("p");
      txtpublicacion.classList.add("cont_works__trabajo__info2__txt");
      txtpublicacion.textContent = diferencia_fecha + " Days ago";

      cont_works__trabajo__info2.appendChild(imgubicacion);
      cont_works__trabajo__info2.appendChild(txtubicacion);
      cont_works__trabajo__info2.appendChild(imgpublicacion);
      cont_works__trabajo__info2.appendChild(txtpublicacion);
      // todo el trabajo agregado
      cont_works__trabajo.appendChild(cont_works__trabajo__info2);
      fragmento.appendChild(cont_works__trabajo);
    }
    main.appendChild(fragmento);
  } catch (error) {
    console.log(error);
  }
};

const inputfulltime = document.getElementById("inputfulltime");

inputfulltime.addEventListener("change", (e) => {
  console.log(e.target.checked);
  if (e.target.checked) {
    borrarhijosmain();
    trabajosfulltime(inputbuscador.value);
  }
});

// consulta de  ubicaciones
const ubicaciones = async (ubi, nom) => {
  try {
    let query;
    if (inputfulltime.checked) {
      if (nom) {
        query = `https://remotive.io/api/remote-jobs?limit=5&job_type=full_time&candidate_required_location=${ubi}&company_name=${nom}`;
      } else {
        query = `https://remotive.io/api/remote-jobs?limit=5&job_type=full_time&candidate_required_location=${ubi}`;
      }
    } else {
      if (nom) {
        query = `https://remotive.io/api/remote-jobs?limit=5&candidate_required_location=${ubi}&company_name=${nom}`;
      } else {
        query = `https://remotive.io/api/remote-jobs?limit=5&candidate_required_location=${ubi}`;
      }
    }
    console.log("entro al buscador");
    let res = await fetch(query);
    let datos = await res.json();
    let jobs = await datos.jobs;
    console.log(datos.jobs);
    // console.log('dea')
    const fragmento = document.createDocumentFragment();
    for (const work of jobs) {
      const div = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");
      input.classList.add("aside_opciones_rb__label__input");
      input.classList.add("aside_opciones_inputs");
      input.setAttribute("type", "radio");
      input.setAttribute("name", "inputubi");

      label.classList.add("aside_opciones_rb__label__input");
      label.setAttribute("for", "inputubi");
      label.textContent = work.candidate_required_location;
      div.appendChild(input);
      div.appendChild(label);

      fragmento.appendChild(div);
    }
    form.appendChild(fragmento);
  } catch (error) {
    console.log(error);
  }
};

const loadubicaciones = async () => {
  try {
    let query = `https://remotive.io/api/remote-jobs?limit=5`;
    //
    console.log("entro al buscador");
    let res = await fetch(query);
    let datos = await res.json();
    let jobs = await datos.jobs;
    console.log(datos.jobs);
    // console.log('dea')
    const fragmento = document.createDocumentFragment();
    for (const work of jobs) {
      const div = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");
      input.classList.add("aside_opciones_rb__label__input");
      input.classList.add("aside_opciones_inputs");
      input.setAttribute("type", "radio");
      input.setAttribute("name", "inputubi");

      label.classList.add("aside_opciones_rb__label__input");
      label.setAttribute("for", "inputubi");
      label.textContent = work.candidate_required_location;
      div.appendChild(input);
      div.appendChild(label);

      fragmento.appendChild(div);
    }
    form.appendChild(fragmento);
  } catch (error) {
    console.log(error);
  }
};

loadubicaciones();

// consulta de trabajos por ubicaciones

const queryubicaciones = async (ubi, nom) => {
  try {
    let query;
    if (inputfulltime.checked) {
      query = `https://remotive.io/api/remote-jobs?limit=5&job_type=full_time&candidate_required_location=${ubi}&company_name=${nom}`;
    } else {
      query = `https://remotive.io/api/remote-jobs?limit=5&candidate_required_location=${ubi}&company_name=${nom}`;
    }
    console.log("entro al buscador");
    let res = await fetch(query);
    let datos = await res.json();
    let jobs = await datos.jobs;
    console.log(datos.jobs);
    // console.log('dea')
    const fragmento = document.createDocumentFragment();
    for (const work of jobs) {
      // calculo de diferencia de fechas
      let fecha_actual = new Date().getTime();
      const fecha = new Date(work.publication_date).getTime();
      let diferencia_fecha = fecha_actual - fecha;
      diferencia_fecha = Math.round(diferencia_fecha / (1000 * 60 * 60 * 24));
      console.log(
        `El nombre de la compañia es: ${work.company_name} y el cargo es: ${work.title}`
      );

      // CONTENEDOR DEL TRABAJO--------------------------------------------------------------------
      const cont_works__trabajo = document.createElement("div");
      cont_works__trabajo.classList.add("cont_works__trabajo");

      // contenedor de la imagen e informacion basica del trabajo---------
      const cont_works__trabajo__info1 = document.createElement("div");
      cont_works__trabajo__info1.classList.add("cont_works__trabajo__info1");

      // imagen del trabajo
      const imglogo = document.createElement("img");
      imglogo.classList.add("cont_works__trabajo__info1__logo");
      imglogo.setAttribute("src", work.company_logo_url);
      imglogo.setAttribute("alt", "Not found");

      // contenedor de informacion basica del trabajo---------
      const cont_works__trabajo__info1__texto = document.createElement("div");
      cont_works__trabajo__info1__texto.classList.add(
        "cont_works__trabajo__info1__texto"
      );
      // parrafo con el nombre de la empresa
      const nomempresa = document.createElement("p");
      nomempresa.classList.add("cont_works__trabajo__info1__texto__nomempresa");
      nomempresa.textContent = work.company_name;

//   // parrafo con el cargo
    // --------------------------------------------------------------------------------
    const titulo = document.createElement("a")
    let url = new URL(location.href.replace('index','descripcion'))
    url.searchParams.set('id',work.id)
    titulo.href = url;
    titulo.classList.add('cont_works__trabajo__info1__texto__cargo')
    titulo.id = "linkCargo";
    titulo.textContent = work.title

  // ---------------------------------------------------------------------------------

      // contenedor del parrafo del tipo de trabajo--
      const cont_works__trabajo__info1__fulltime = document.createElement("div");
      cont_works__trabajo__info1__fulltime.classList.add(
        "cont_works__trabajo__info1__fulltime"
      );
      // parrafo del tipo de trabajo
      const txtfulltime = document.createElement("p");
      txtfulltime.classList.add("cont_works__trabajo__info1__fulltime__txt");
      work.job_type === "full_time"
        ? (txtfulltime.textContent = "Full Time")
        : (txtfulltime.textContent = work.job_type);

      // agregando a hijos del contenedor de la imagen e informacion basica
      cont_works__trabajo__info1__fulltime.appendChild(txtfulltime);

      cont_works__trabajo__info1__texto.appendChild(nomempresa);
      cont_works__trabajo__info1__texto.appendChild(titulo);
      cont_works__trabajo__info1__texto.appendChild(
        cont_works__trabajo__info1__fulltime
      );

      cont_works__trabajo__info1.appendChild(imglogo);
      cont_works__trabajo__info1.appendChild(cont_works__trabajo__info1__texto);
      // agrego toda la informacion basica del trabajo con su imagen
      cont_works__trabajo.appendChild(cont_works__trabajo__info1);

      // agregando la ubicacion y la publicacion:
      const cont_works__trabajo__info2 = document.createElement("div");
      cont_works__trabajo__info2.classList.add("cont_works__trabajo__info2");

      const imgubicacion = document.createElement("img");
      imgubicacion.classList.add("cont_works__trabajo__info2__logo");
      imgubicacion.setAttribute("src", "assets/image/ubiblack.svg");

      const txtubicacion = document.createElement("p");
      txtubicacion.classList.add("cont_works__trabajo__info2__txt");
      txtubicacion.textContent = work.candidate_required_location;
      console.log("ubicacion: " + txtubicacion.textContent);

      const imgpublicacion = document.createElement("img");
      imgpublicacion.classList.add("cont_works__trabajo__info2__logo");
      imgpublicacion.setAttribute("src", "assets/image/tiempoblack.svg");

      const txtpublicacion = document.createElement("p");
      txtpublicacion.classList.add("cont_works__trabajo__info2__txt");
      txtpublicacion.textContent = diferencia_fecha + " Days ago";

      cont_works__trabajo__info2.appendChild(imgubicacion);
      cont_works__trabajo__info2.appendChild(txtubicacion);
      cont_works__trabajo__info2.appendChild(imgpublicacion);
      cont_works__trabajo__info2.appendChild(txtpublicacion);
      // todo el trabajo agregado
      cont_works__trabajo.appendChild(cont_works__trabajo__info2);
      fragmento.appendChild(cont_works__trabajo);
    }
    main.appendChild(fragmento);
  } catch (error) {
    console.log(error);
  }
};
// formulario aside
const form = document.getElementById("aside_opciones");

form.addEventListener("change", (e) => {
  console.log(e.target.nextElementSibling.textContent);
  debugger;
  let ubi = e.target.nextElementSibling.textContent;
  borrarhijosmain();
  if (inputbuscador.value.length > 0) {
    queryubicaciones(ubi, inputbuscador.value);
  } else {
    queryubicaciones(ubi, false);
  }
});

const borrarhijosubi = async () => {
  while (form.firstElementChild) {
    form.removeChild(form.firstElementChild);
  }
};

const inputubi = document.getElementById("inputubi");

inputubi.addEventListener("keyup", (e) => {
  let z = e.target.value;
  console.log(z, typeof z, z.length);
  if (e.target.value.length > 0) {
    borrarhijosubi();
    console.log(inputbuscador.value, typeof inputbuscador.value);
    if (inputbuscador.value.length > 0) {
      ubicaciones(z, inputbuscador.value);
    } else {
      ubicaciones(z, false);
    }

    // ubicaciones(,inputbuscador.value)
  }
});
