fetch("https://remotive.io/api/remote-jobs?job_type=full_time")
  .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
  // .then(res=>console.log(res))
  .then((res) => res.json())
  .then((res) => {
    let lugares = [];
    console.log(res.jobs);
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

const loadpage = async () => {
  // debbuger
  try {
    let res = await fetch("https://remotive.io/api/remote-jobs?limit=5");
    let datos = await res.json();
    let jobs = await datos.jobs;
    console.log(datos.jobs);
    console.log("dea");
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
    //   //
    //   let url = new URL("http://127.0.0.1:5501/html/descripcion.html");
    //   url.searchParams.set("id", work.id);
    //   titulo.href = url;
    //   //
    //   titulo.classList.add("cont_works__trabajo__info1__texto__cargo");
    //   titulo.textContent = work.title;

//   // parrafo con el cargo
    // --------------------------------------------------------------------------------

    console.log(window.location.href)
    console.log(location.origin)
    const titulo = document.createElement("a")
    let url = new URL(location.origin+'/html/descripcion.html')
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
      imgubicacion.setAttribute("src", "../assets/image/ubiblack.svg");

      const txtubicacion = document.createElement("p");
      txtubicacion.classList.add("cont_works__trabajo__info2__txt");
      txtubicacion.textContent = work.candidate_required_location;
      console.log("ubicacion: " + txtubicacion.textContent);

      const imgpublicacion = document.createElement("img");
      imgpublicacion.classList.add("cont_works__trabajo__info2__logo");
      imgpublicacion.setAttribute("src", "../assets/image/tiempoblack.svg");

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
loadpage();

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
    let url = new URL(location.origin+'/html/descripcion.html')
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
      imgubicacion.setAttribute("src", "../assets/image/ubiblack.svg");

      const txtubicacion = document.createElement("p");
      txtubicacion.classList.add("cont_works__trabajo__info2__txt");
      txtubicacion.textContent = work.candidate_required_location;
      console.log("ubicacion: " + txtubicacion.textContent);

      const imgpublicacion = document.createElement("img");
      imgpublicacion.classList.add("cont_works__trabajo__info2__logo");
      imgpublicacion.setAttribute("src", "../assets/image/tiempoblack.svg");

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
    let url = new URL(location.origin+'/html/descripcion.html')
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
      imgubicacion.setAttribute("src", "../assets/image/ubiblack.svg");

      const txtubicacion = document.createElement("p");
      txtubicacion.classList.add("cont_works__trabajo__info2__txt");
      txtubicacion.textContent = work.candidate_required_location;
      console.log("ubicacion: " + txtubicacion.textContent);

      const imgpublicacion = document.createElement("img");
      imgpublicacion.classList.add("cont_works__trabajo__info2__logo");
      imgpublicacion.setAttribute("src", "../assets/image/tiempoblack.svg");

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
    let url = new URL(location.origin+'/html/descripcion.html')
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
      imgubicacion.setAttribute("src", "../assets/image/ubiblack.svg");

      const txtubicacion = document.createElement("p");
      txtubicacion.classList.add("cont_works__trabajo__info2__txt");
      txtubicacion.textContent = work.candidate_required_location;
      console.log("ubicacion: " + txtubicacion.textContent);

      const imgpublicacion = document.createElement("img");
      imgpublicacion.classList.add("cont_works__trabajo__info2__logo");
      imgpublicacion.setAttribute("src", "../assets/image/tiempoblack.svg");

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
