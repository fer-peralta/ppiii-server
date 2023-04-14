import { useState, useEffect } from 'react'
import './Btn.css'
const Btn = (props) => {
    //const url1 = "https://lime-excited-dugong.cyclic.app/api/users"
    const url2 = "https://jsonplaceholder.typicode.com/users"
    const [datos, setDatos] = useState(null);
    // const [lista, setLista] = useState([]);
    // const [contador, setContador] = useState(1);

    const handleClick = () => {
        // Manejador de evento del botón
        // Aquí puedes hacer algo con los datos obtenidos, por ejemplo, mostrarlos en una alerta
        // const nuevoElemento = <li key={contador}>Elemento {contador}</li>;
        // setLista([...lista, nuevoElemento]);
        // setContador(contador + 1);

        if (datos) {

            alert(JSON.stringify(datos));
        } else {
            alert('Aún no se han cargado los datos');
        }

    }
    useEffect(() => {
        fetch(url2)
            .then(response => response.json())
            .then(data => setDatos(data))
            .catch(error => console.log(error))
    }, []);

    if (!datos) {
        return <div>Cargando datos...</div>;
    }

    return (
        <>
            <button
                className='btn'
                onClick={handleClick} >{props.text}
            </button>
            {/* 
            <ol>
                {lista.map(item => item)}
            </ol> */}
        </>
    )
}
export default Btn