import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import "./Estilos/StyleLoginyRegistro.css"
type RegistrarseType = {
    username: string;
    email: string;
    password: string;
}

const Registrar = Yup.object<RegistrarseType>({
    username: Yup.string().min(6, 'El nombre de usuario debe tener al menos 6 caracteres').required('El nombre de usuario es obligatorio'),
    email: Yup.string().email('Email inválido').required('El email es obligatorio'),
    password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es obligatoria'),
    Confirmarpassword: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden').required('Debe confirmar la contraseña'),
});

function Registrarse() {

    return (
        <>
            <div className="container-RegisterYLogin">
                <div className="form-RegisterYLogin">
                    <h1>Registrarse</h1>
                    <Formik
                    initialValues={{username: "", email: "", password: "", Confirmarpassword: ""}}
                    validationSchema={Registrar}
                    onSubmit={(values) =>{
                        alert("Datos enviado: \n" + JSON.stringify(values, null, 2));
                    }}
                    >
                    {()=>(
                        <Form style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "350px"}}>
                        <label>Nombre de usuario: </label>
                        <Field name="username"/>       
                        <ErrorMessage name="username"/>
                        
                        <br />  
                        <label>Ingrese el email: </label>
                        <Field name="email" />       
                        <ErrorMessage name="email"/>
                        
                        <br />
                        
                        <label>Contaseña: </label>
                        <Field name="password" />       
                        <ErrorMessage name="password"/>
                        
                        <br />

                        <label>Confirmar Contraseña: </label>
                        <Field name="Confirmarpassword" />       
                        <ErrorMessage name="Confirmarpassword"/>
                        
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

export default Registrarse;