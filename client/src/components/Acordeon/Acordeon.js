
import React from "react";
import Faq from "react-faq-component";
import './Acordeon.css'
const Acordeon = () => {

    const data = {
        title: "Preguntas Frecuentes",
        rows: [
            {
                title: "¿Puedo anotarme a cursos de otras materias?",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at`,
            },
            {
                title: "No soy alumno de instituto, ¿Puedo acceder a los cursos?",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "No soy alumno de instituto, ¿Puedo acceder a los cursos?",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },


        ],
    };

    const styles = {
        // bgColor: '#e8e8e8;',
        titleTextColor: "black",
        rowTitleColor: "Black",
        rowContentColor: 'Black',
        arrowColor: "grey",
    };

    const config = {
        animate: true,
        arrowIcon: "V",
        tabFocus: true
    };

    return (
        <>
            <div className="faq-style-wrapper">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>


        </>

    )
}

export default Acordeon;

// import React, { useEffect, useState } from "react";




// export default function Faq {

//     return (
//         <div>
//             <Faq
//                 data={data}
//                 styles={styles}
//                 config={config}
//             />
//         </div>
//     );
// }