
//  javascript 
 /**
 * It gets the data from remotive.io and shows all the required information of the job with the selected ID.
 */
const loadpage = async () => {
    try {
        
        // let url = document.location.href

        /**
         * It gets the ID of the current page.
         * @param name - The name of the parameter.
         * @returns The ID of the current page.
         */
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        let Id = getParameterByName('id');
        console.log(location)
        console.log(Id)

        let res = await fetch(`https://remotive.io/api/remote-jobs?category=software-dev`)
        let datos = await res.json()
        let jobs = await datos.jobs
        for (const work of jobs) {

            if (Id == work.id) {
                console.log(`El nombre de la compañia con el id ${work.id} es: ${work.company_name} y el cargo es: ${work.title}`)
                // calculo de diferencia de fechas
                let fecha_actual = new Date().getTime()
                const fecha = new Date(work.publication_date).getTime()
                let diferencia_fecha = fecha_actual - fecha
                diferencia_fecha = Math.round(diferencia_fecha / (1000 * 60 * 60 * 24))


                //CONTENIDO DEL CONTENEDOR DEL TRABAJO--------------------------------------------------------------------
                // Nombre del cargo
                document.getElementById("NomCargo").innerHTML = work.title;

                // parrafo del tipo de trabajo
                const txtfulltime = document.getElementById("fulltime")
                work.job_type === 'full_time' ? txtfulltime.textContent = 'Full Time' : txtfulltime.textContent = work.job_type

                // parrafo con el dia de publicacion
                document.getElementById("publicationDate").innerHTML = diferencia_fecha + " Days ago";

                // imagen del trabajo
                const imglogo = document.getElementById("logoEmp")
                imglogo.setAttribute('src', work.company_logo_url)

                // parrafo con el nombre de la empresa
                document.getElementById("NomEmpresa").innerHTML = work.company_name;

                // parrafo con la descripcion del trabajo:
                document.getElementById("descTrabajo").innerHTML = work.description

                //ubicacion del trabajo
                document.getElementById("EmpUbi").innerHTML = work.candidate_required_location
                break;
            }
        }


// nahuel, con la idea de no traer todos los datos, e ir buscando solo el de determinado id
        // console.log(`El nombre de la compañia con el id ${work.id} es: ${work.company_name} y el cargo es: ${work.title}`)
        // // calculo de diferencia de fechas
        // let fecha_actual = new Date().getTime()
        // const fecha = new Date(work.publication_date).getTime()
        // let diferencia_fecha = fecha_actual - fecha
        // diferencia_fecha = Math.round(diferencia_fecha / (1000 * 60 * 60 * 24))


        // //CONTENIDO DEL CONTENEDOR DEL TRABAJO--------------------------------------------------------------------
        // // Nombre del cargo
        // document.getElementById("NomCargo").innerHTML = work.title;

        // // parrafo del tipo de trabajo
        // const txtfulltime = document.getElementById("fulltime")
        // work.job_type === 'full_time' ? txtfulltime.textContent = 'Full Time' : txtfulltime.textContent = work.job_type

        // // parrafo con el dia de publicacion
        // document.getElementById("publicationDate").innerHTML = diferencia_fecha + " Days ago";

        // // imagen del trabajo
        // const imglogo = document.getElementById("logoEmp")
        // imglogo.setAttribute('src', work.company_logo_url)

        // // parrafo con el nombre de la empresa
        // document.getElementById("NomEmpresa").innerHTML = work.company_name;

        // // parrafo con la descripcion del trabajo:
        // document.getElementById("descTrabajo").innerHTML = work.description

        // //ubicacion del trabajo
        // document.getElementById("EmpUbi").innerHTML = work.candidate_required_location
    


    }
    catch (error) {
        console.log(error)
    }
}
loadpage()