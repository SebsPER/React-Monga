import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("http://localhost:5000/identity/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/",
      },
      body: JSON.stringify({ email, password }),
    });
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={submit}>
      <h1>Ingreso</h1>
      <input
        type="email"
        placeholder="Ingrese correo"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Ingrese password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Ingreso</button>
    </form>
  );
}

export default Login;
