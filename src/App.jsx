import React, { useState } from 'react';
import './App.css'
import Imput from './components/Imput'
import Boton from './components/Boton'

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    email: '',
    userName: '',
    fotoPerfil: '',
    sobreTi: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className='Form'>
      <h1>Registro de usuario</h1>
      <div className='Centrado'>
        <div>
          <Imput label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
          <Imput label="Apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
          <Imput label="Fecha de nacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
        </div>
        <div>
          <Imput label="Email" name="email" value={formData.email} onChange={handleChange} />
          <Imput label="Username" name="userName" value={formData.userName} onChange={handleChange} />
          <Imput label="Url de foto de perfil" name="fotoPerfil" value={formData.fotoPerfil} onChange={handleChange} />
        </div>
        <Imput label="Sobre ti" name="sobreTi" value={formData.sobreTi} onChange={handleChange} />
      </div>
      <Boton onClick={handleFormSubmit} texto="Guardar"/>
    </div>
  )
}

export default App
