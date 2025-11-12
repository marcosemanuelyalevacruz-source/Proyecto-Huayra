import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import direccion from "../Componentes/DirecciónHTTP/direccion";

function Formulario() {

    const { id } = useParams();
    const navigate = useNavigate();
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
        computadorasRestantes: string,
        inconvenientes: string
    }

    const [formularios, setFormularios] =useState<Formulario[]>([]);
    const [loading, setLoading] = useState(false);
    const [mostrarmensaje, setMostrarmensaje] = useState(false);

    const handleEliminar = async () => {
        setMostrarmensaje(true);
    };

    const confirmarEliminacion = async () => {
        try {
            const response = await fetch(`${direccion}${id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                navigate(`/`);
                alert("Escuela eliminada exitosamente");
            }
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    };

    useEffect(()=>{
        fetch(`${direccion}${id}`)
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
    },[id])

    return(
        <>
        <div>
            <div className="Registrados">
                <br />
                <div>
                    <button onClick={() => navigate(-1)}>← Volver</button>
                    <h1>Registrar escuela</h1>
                    </div>
                <div className="registros">
                    {formularios.length > 0 ? (
                        formularios.map((escuela) => (
                            <div className="Container">
                            <form>
                                <h2>Información sobre la escuela</h2>
                                <div className="infoEscuela">
                                    <div className="cont">
                                        <label>Ingrese el nombre de la Escuela</label>
                                        <p>{escuela.nombre}</p>
                                    </div>
                                    
                
                                    <div className="cont">
                                        <label>Tipo de Intitución</label> 
                                        <p>{escuela.tipoDeInstitución}</p>
                                    </div>
                
                                    <div className="cont">
                                        <label>Nivel educativo</label>
                                        <p>{escuela.nivel}</p>
                                    </div>
                
                                    <div className="cont">
                                        <label>Ingrese modalidad de enseñanzas</label>
                                            <p>{escuela.modalidad}</p>
                                    </div>
                
                                    <div className="cont">
                                        <label>Ingrese el nombre del director o responsable del establecimiento</label> 
                                        <p>{escuela.director}</p>
                                    </div>
                
                                    <div className="cont">
                                        <label>Ingrese le fecha de fundacion</label>
                                        <p>{new Date(escuela.fechaDeFundacion).toLocaleDateString()}</p>
                                    </div>
                
                                    <div className="cont">
                                        <label>Ingrese el turno</label>
                                        <p>{escuela.turno}</p>
                                    </div>
                
                                    <div className="cont">
                                        <label>Duración de la carrera</label> 
                                        <p>{escuela.aniosACursar}</p>
                                    </div>
                
                                    <div className="cont">
                                        <label>Número total de estudiantes matriculados</label>
                                        <p>{escuela.capacidadDeAlumnos}</p>
                                    </div>
                                </div>
                    
                            <h2>Información sobre la ubicación de la escuela</h2>
                            <div className="ZonaEscuela">
                                <div className="zona">
                                    <label>Ingrese la provincia de la escuela</label> 
                                    <p>{escuela.provincia}</p>
                                </div>
                
                                <div className="zona">
                                    <label>Ingrese la localidad de la escuela</label> 
                                    <p>{escuela.localidad}</p>
                                </div>
                                <div className="zona">
                                    <label>Ingrese la direccion de la escuela</label> 
                                    <p>{escuela.direccion}</p>
                                </div>
                            </div>
                
                            <h2>Información sobre el registro de las computadoras</h2>
                            <div className="infoComputadoras">
                                <div className="compu">
                                        <label>Cantidad de computadoras por entregar</label>
                                        <p>{escuela.cantDeCompPorEntregar}</p>
                                </div>
                                
                                <div className="compu">
                                    <label>Computadoras Entregadas</label>
                                    <p>{escuela.computadorasEntregadas}</p>
                                </div>
                                
                                <div className="compu">
                                    <label>Año al cual fue entrgado</label>
                                    <p>{escuela.anioAlCualFueEntrgado}</p>
                                </div>
                
                                <div className="compu">
                                    <label>Computadoras restante</label> 
                                    <p>{escuela.computadorasRestantes}</p>
                                </div>
                
                                <div className="compu">
                                    <label>Ingrese los inconvenientes obtenidos</label>
                                    <p>{escuela.inconvenientes}</p>
                                </div>
                            </div>
                            </form>
                            <span><Link to={`/Editar/${escuela.id}`}><button>Editar formulario</button></Link></span><span><button onClick={handleEliminar} style={{backgroundColor: "red"}}>Eliminar Formulario</button></span>
                            {mostrarmensaje && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>⚠️ Confirmar eliminación</h2>
                        <p>¿Estás seguro de eliminar?</p>
                        <button onClick={() => setMostrarmensaje(false)}>
                            Cancelar
                        </button>
                        <button onClick={confirmarEliminacion}>
                            Eliminar
                        </button>
                    </div>
                </div>
            )}
                        </div>))):  (!loading && <p>No hay escuelas registradas aún, haga un registro: <Link to={"/CrearFormulario"}>Registrar</Link></p>)}
                </div>
            </div>

        </div>
        </>
    )

}
export default Formulario;