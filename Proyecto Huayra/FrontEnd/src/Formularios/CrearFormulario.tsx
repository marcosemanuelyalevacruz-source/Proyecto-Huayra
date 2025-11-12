import React, { useState } from "react";
import "./style.css"
import direccion from "../Componentes/DirecciónHTTP/direccion";
import { Link} from "react-router-dom";


function CrearFormulario(){

    type campos = {
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
    
    const [datos, setDatos] = useState<campos>({
        nombre: "",
        tipoDeInstitución: "",
        nivel: "",
        modalidad: "",
        director: "",
        fechaDeFundacion: "",
        turno: "",
        aniosACursar: "",
        capacidadDeAlumnos: "",
        provincia: "",
        localidad: "",
        direccion: "",
        cantDeCompPorEntregar: "",
        computadorasEntregadas: "",
        anioAlCualFueEntrgado: "",
        computadorasRestantes: "0",
        inconvenientes: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDatos(prev => ({
            ...prev,
            [name]: value
        }));
    };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            const response = await fetch(`${direccion}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos)
            });

            const results = await response.json();
            alert("Registro exitoso");
            console.log("Respuesta del servidor: ", results);
 
            
        } catch (error){
            console.error("Error al enviar los datos: ", error);
        }
    };



    return(
        <>
        <div className="Container">
            <form onSubmit={handleSubmit}>
                <h2>Información sobre la escuela</h2>
                <div className="infoEscuela">
                    <div className="cont">
                        <label htmlFor="nombreEscuela">Ingrese el nombre de la Escuela</label>
                        <input className="inputEscuela" type="text" id="nombreEscuela" name="nombre" placeholder="Escuela Técnica N°12 Libertador General San Martín" value={datos.nombre} onChange={handleChange}required/>
                    </div>
                    

                    <div className="cont">
                        <label htmlFor="TipoDeInstitución">Tipo de Intitución</label> 
                        <select name="tipoDeInstitución" id="TipoDeInstitución" value={datos.tipoDeInstitución} onChange={handleChange} required>
                            <option hidden></option>
                            <option value="Publico">Publico</option>
                            <option value="Privado">Privado</option>
                        </select>
                    </div>

                    <div className="cont">
                        <label htmlFor="nivel">Nivel educativo</label>
                        <select name="nivel" id="nivel" value={datos.nivel} onChange={handleChange} required>
                        <option hidden></option>
                        <option value="Primario">Primario</option>
                        <option value="Secundario">Secundario</option>
                        <option value="Superior">Superior</option>
                        </select>
                    </div>

                    <div className="cont">
                        <label htmlFor="modalidadDeEnseñanzas">Ingrese modalidad de enseñanzas</label>
                        <input type="text" id="modalidadDeEnseñanzas" name="modalidad" placeholder="técnica, artística, especial, para jóvenes y adultos, rural, intercultural bilingüe, etc." value={datos.modalidad} onChange={handleChange} required/>
                    </div>

                    <div className="cont">
                        <label htmlFor="director">Ingrese el nombre del director o responsable del establecimiento</label> 
                        <input type="text" id="director" name="director" placeholder="Juan Pérez" value={datos.director} onChange={handleChange} required/>
                    </div>

                    <div className="cont">
                        <label htmlFor="fechaDeFundacion">Ingrese le fecha de fundacion</label>
                        <input type="date" id="fechaDeFundacion" name="fechaDeFundacion" value={datos.fechaDeFundacion} onChange={handleChange} required/>
                    </div>

                    <div className="cont">
                        <label htmlFor="turno">Ingrese el turno</label>
                        <select name="turno" id="turno" value={datos.turno} onChange={handleChange} required>
                        <option hidden></option>
                        <option value="Mañana">Mañana</option>
                        <option value="Vespertino">Vespertino</option>
                        <option value="DobleEscolaridad">Doble  Escolaridad</option>
                        </select>
                    </div>

                    <div className="cont">
                        <label htmlFor="Duraciondelacarrera">Duración de la carrera</label> 
                            <select name="aniosACursar" id="Duraciondelacarrera" value={datos.aniosACursar} onChange={handleChange} required>
                        <option hidden></option>
                        <option value="1 año">1 año</option>
                        <option value="2 año">2 año</option>
                        <option value="3 año">3 año</option>
                        <option value="4 año">4 año</option>
                        <option value="5 año">5 año</option>
                        <option value="6 año">6 año</option>
                        <option value="7 año">7 año</option>
                            </select>
                    </div>

                    <div className="cont">
                        <label htmlFor="alumnosTotal">Número total de estudiantes matriculados</label>
                        <input type="number" id="alumnosTotal" name="capacidadDeAlumnos" value={datos.capacidadDeAlumnos} onChange={handleChange} placeholder="1200" required/>
                    </div>
                </div>
  
            <h2>Información sobre la ubicación de la escuela</h2>
            <div className="ZonaEscuela">
                <div className="zona">
                    <label htmlFor="provincia">Ingrese la provincia de la escuela</label> 
                    <input className="inputZona" type="text" id="provincia" name="provincia" placeholder="Córdoba" value={datos.provincia} onChange={handleChange} required/>
                </div>

                <div className="zona">
                    <label htmlFor="localidad">Ingrese la localidad de la escuela</label> 
                    <input className="inputZona" type="text" id="localidad" name="localidad" placeholder="Córdoba Capital"                   value={datos.localidad} onChange={handleChange} required/>
                </div>

                <div className="zona">
                    <label htmlFor="direccion">Ingrese la direccion de la escuela</label> 
                    <input className="inputZona" type="text" id="direccion" name="direccion" placeholder="Av. Colón 2350" value={datos.direccion} onChange={handleChange} required/>
                </div>
            </div>

            <h2>Información sobre el registro de las computadoras</h2>
            <div className="infoComputadoras">
                <div className="compu">
                     <label htmlFor="cantidadDeComputadorasPorEntregar">Cantidad de computadoras por entregar</label>
                     <input type="number" id="cantidadDeComputadorasPorEntregar" name="cantDeCompPorEntregar" placeholder="120" value={datos.cantDeCompPorEntregar} onChange={handleChange} required/>
                </div>
                
                <div className="compu">
                    <label htmlFor="ComputadorasEntregadas">Computadoras Entregadas</label>
                    <input type="number" id="ComputadorasEntregadas" name="computadorasEntregadas" placeholder="100" value={datos.computadorasEntregadas} onChange={handleChange} required/>
                </div>
                
                <div className="compu">
                    <label htmlFor="AñoAlCualFueEntrgado">Año al cual fue entrgado</label>
                    <select name="anioAlCualFueEntrgado" id="AñoAlCualFueEntrgado" value={datos.anioAlCualFueEntrgado} onChange={handleChange} required>
                        <option hidden></option>
                        <option value="1 año">1 año</option>
                        <option value="2 año">2 año</option>
                        <option value="3 año">3 año</option>
                        <option value="4 año">4 año</option>
                        <option value="5 año">5 año</option>
                        <option value="6 año">6 año</option>
                        <option value="7 año">7 año</option>
                    </select>
                </div>

                <div className="compu">
                    <label htmlFor="ComputadorasSobrado">Computadoras restante</label> 
                    <input type="number" id="ComputadorasSobrado" name="computadorasRestantes" placeholder="20" value={datos.computadorasRestantes} onChange={handleChange}required/>
                </div>

                <div className="compu">
                    <label htmlFor="notasDeInconvenientes">Ingrese los inconvenientes obtenidos</label>
                    <input className="input" type="text" id="notasDeInconvenientes" name="inconvenientes" placeholder="No se han podido entregar las computadoras porque..." value={datos.inconvenientes} onChange={handleChange} required/>
                </div>
            </div>
            <button type="submit">Guardar</button> <Link to={"/"}><button>volver</button></Link>
            </form>
        </div>
        </>
    )
}

export default CrearFormulario;
