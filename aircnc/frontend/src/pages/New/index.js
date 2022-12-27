import React, { useState, useMemo } from 'react';
import camara from '../../assets/camera.svg';
import api from '../../services/api';
import './styles.css';

export default function Login({ history }){
  const [company, setCompany] = useState('')
  const [techs, setTechs] = useState('')
  const [price, setPrice] = useState('')
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  },
    [thumbnail]
  )

  async function handleSubmit(event){

    event.preventDefault()
    const user_id = localStorage.getItem('user');
    const data = new FormData();
    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('price', price);
    data.append('techs', techs);

    await api.post('/spots', data, {
      headers: { user_id }
    })

    history.push('/dashboard');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label 
        id="thumbnail" 
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail': ''}
      >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camara} alt="Select img" />
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input 
        type="text"
        id="company"
        placeholder="Sua empresa incrivel"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="company">TECNOLOGIAS *<span> Separadas por virgulas</span></label>
      <input 
        type="text"
        id="tech"
        placeholder="Quais tecnologias Usam"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor="company">VALOR DA DIÁRIA *<span> Em branco para GRATUITO</span></label>
      <input 
        type="text"
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">Cadastrar</button>
    </form>
  )
}