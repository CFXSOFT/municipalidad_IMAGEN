"use client";

import { useState } from "react";

// Imágenes de prueba. Cuando tengas fotos reales, ponlas en /public/eventos
// y cambia cada URL por "/eventos/foto1.jpg", etc.
const fotos = [
  "/img/rot_1.png",
  "/img/rot_2.png",
  "/img/rot_3.png",
  "/img/rot_4.png",
];

function Columna({ lado, desfase }) {
  // La lista se repite dos veces para que el movimiento no tenga saltos.
  const lista = [...fotos, ...fotos];
  const orden = desfase ? [...lista.slice(2), ...lista.slice(0, 2)] : lista;
  return (
    <div className={`col col-${lado}`} aria-hidden="true">
      <div className="track">
        {orden.map((f, i) => (
          <img key={i} className="foto" src={f} alt="" />
        ))}
      </div>
    </div>
  );
}

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  function ingresar(e) {
    e.preventDefault();
    // Paso siguiente: aquí conectaremos Supabase Auth (signInWithPassword).
    console.log("Login pendiente de conectar con Supabase", correo);
  }

  return (
    <main className="login">
      <Columna lado="izq" />
      <Columna lado="der" desfase />

      <form className="card" onSubmit={ingresar}>
        <h1>Chaski</h1>
        <p className="lema">Solicita y sigue los eventos del área de Imagen Institucional.</p>

        <label htmlFor="correo">Correo institucional</label>
        <input
          id="correo"
          type="email"
          autoComplete="email"
          placeholder="nombre@municipalidad.gob.pe"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <label htmlFor="clave">Contraseña</label>
        <input
          id="clave"
          type="password"
          autoComplete="current-password"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />

        <button type="submit">Ingresar</button>
        <p className="ayuda">¿Aún no tienes cuenta? Pídela al área de Imagen Institucional.</p>
      </form>
    </main>
  );
}
