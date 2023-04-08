import React, { useState } from "react";
import { Alert } from "bootstrap";

const Formulario = ({ setResult }) => {
  const [email, setEmail] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");

  const [result, setResult] = useState({isShown : false, msg: 'asd', variant: 'warning'});

  const validarForm = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("esta vacio el campo e-mail");
      return;
    }

    if (!contraseña.trim()) {
      alert("esta vacio el campo contraseña");
      return;
    }

    if (email === "aaa@aaa.aa" && contraseña === "aaa@aaa.aa") {
      setResult({
        isShown: true,
        msg: "Tu e-mail y Password son las correctas",
        variant: "success",
      });
      return;
    }

    alert(
      "procesando datos..." +
        "Su email es:" +
        email +
        "Su contraseña es:" +
        contraseña
    );
    return;
  };

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "contraseña":
        setContraseña(e.target.value);
        break;
      default:
    }
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={validarForm} >

      <Alert key={result.variant} variant={result.variant} >
        {result.msg}
      </Alert>

        <input
          type="email"
          placeholder="Ingrese su e-mail"
          className="form-control mb-2"
          onChange={(e) => handleOnChange(e)}
        />
        <input
          type="password"
          placeholder="Ingrese su Contraseña"
          className="form-control mb-2"
          onChange={(e) => handleOnChange(e)}
        />
        <div id="passwordHelpBlock" class="form-text">
          Pista: el e-mail es aaa@aaa.aa y la pass es la misma
        </div>
        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={email === "" && contraseña === "" ? true : false}
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
