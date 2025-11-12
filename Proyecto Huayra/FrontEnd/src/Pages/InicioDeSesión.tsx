import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import "./Estilos/StyleLoginyRegistro.css"

type InicioDeSesionType = {
    email: string;
    password: string;
}

const InicioDeSesion = Yup.object<InicioDeSesionType>({
    email: Yup.string().email('Email inválido').required('El email es obligatorio'),
    password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es obligatoria'),
});




function IniciarSesión() {
    return (
        <>
        <div className="container-RegisterYLogin">
        <div className="form-RegisterYLogin">
        <h1>Iniciar Sesión</h1>
        <Formik 
        initialValues={{email: "", password: ""}}
        validationSchema={InicioDeSesion}
        onSubmit={(values) =>{
            JSON.stringify(values, null, 2);
        }}
        >
        {()=>(
            <Form style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "200px"}}>
            <label>Email: </label>
            <Field name="email"/>       
            <ErrorMessage name="email"/>
            
            <br />
            
            <label>Contaseña: </label>
            <Field name="password" />       
            <ErrorMessage name="password"/>
            <br />
            <button type="submit">Enviar</button>
            </Form>
        )}
        </Formik>
        </div>
        </div>
        </>
        
    );
}

export default IniciarSesión;