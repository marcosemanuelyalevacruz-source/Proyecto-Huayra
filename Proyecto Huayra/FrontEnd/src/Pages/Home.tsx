import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import direccion from "../Componentes/DirecciónHTTP/direccion";

function Home() {

    type Formulario = {
        id: number,
        nombre: string,
        tipoDeInstitución: string,
        nivel: string,
        modalidad: string,
        director: string,
        fechaDeFundacion: string,
        turno: string,
        aniosACursar: string,
        capacidadDeAlumnos: string,
        provincia: string,
        localidad: string,
        direccion: string,
        cantDeCompPorEntregar: string,
        computadorasEntregadas: string,
        anioAlCualFueEntrgado: string,
        inconvenientes: string
    }

    const [formularios, setFormularios] =useState<Formulario[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetch(`${direccion}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Producto no encontrado")
            }
            return res.json();
        })
        .then(data =>{
            console.log("datos Recividos ", data)
            setFormularios(data)
            setLoading(false);
        })
        .catch(err =>{
            console.error("Error al recibir los datos: ", err)
            setLoading(false);
        })
    },[])

    return(
        <>
        <div>
            <main className="Decoracion">
                <h1>Proyecto Huayra</h1>
                <p>Bienvenido a la página principal de nuestro proyecto Huayra. Aquí encontrarás información sobre nuestro objetivo de promover la educación tecnológica en comunidades rurales.</p>

                <h2>Nuestro Objetivo</h2>
                <p>El objetivo de Huayra es proporcionar acceso a recursos educativos y tecnológicos a comunidades rurales que carecen de estas oportunidades. Creemos que la educación es la clave para el desarrollo y el empoderamiento.</p>
            </main>

            <div className="Registrados">
                <h1>Registrar escuela</h1>
                <div className="registros">
                    {formularios.length > 0 ? (
                        formularios.map((escuela, index) => (
                            <div key={escuela.id || index} className="Insertar">
                                <h2>{escuela.nombre}</h2>
                                <p><strong>Tipo:</strong> {escuela.tipoDeInstitución}</p>
                                <p><strong>Nivel:</strong> {escuela.nivel}</p>
                                <p><strong>Ubicación:</strong> {escuela.localidad}, {escuela.provincia}</p>
                                <p><strong>Director:</strong> {escuela.director}</p>
                                <Link to={`/Formulario/${escuela.id}`}>Ver detalles</Link>
                            </div>))) : (!loading && <p>No hay escuelas registradas aún</p>)}
                        <div className="Insertar">
                            <Link className="link" to="/CrearFormulario"><h1 style={{color: "#cb8a46"}}>Registrar una escuela</h1></Link>
                        </div>
                </div>
            </div>

        </div>
        </>
    )

}
export default Home;