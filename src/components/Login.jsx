import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Formulario = ({ setResult }) => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [alert, setAlert] = useState({ isShown: false, msg: "", variant: "" });

  const validarForm = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setAlert({
        isShown: true,
        msg: "El campo email no puede estar vacío",
        variant: "warning",
      });
      return;
    }

    if (!contraseña.trim()) {
      setAlert({
        isShown: true,
        msg: "El campo contraseña no puede estar vacío",
        variant: "warning",
      });
      return;
    }

    if (email === "aaa@aaa.aa" && contraseña === "aaa@aaa.aa") {
      setAlert({
        isShown: true,
        msg: "Tu e-mail y Password son los correctos",
        variant: "success",
      });
      return;
    }

    setAlert({
      isShown: true,
      msg: "Datos erronéos vuelve a intentarlo",
      variant: "danger",
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setContraseña(value);
  };

  return (
    <div className="container mt-5">
      <h2>Formulario</h2>
      <form onSubmit={validarForm}>
        <div className="row">
          {alert.isShown && (
            <Alert
              variant={alert.variant}
              onClose={() => setAlert({ isShown: false, msg: "", variant: "" })}
              dismissible
            >
              {alert.msg}
            </Alert>
          )}
          <div className="col-md-6 mt-5">
            <input
              type="email"
              placeholder="Ingrese su e-mail"
              className="form-control mb-2"
              autoComplete="off"
              name="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-6 mt-5">
            <input
              type="password"
              placeholder="Ingrese su Contraseña"
              className="form-control mb-2"
              autoComplete="off"
              name="contraseña"
              value={contraseña}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-text mb-3 align-center">
            Pista: el e-mail es aaa@aaa.aa y la pass es la misma
          </div>
          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={!email || !contraseña}
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
