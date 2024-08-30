import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Header.css";


function Header() {
  const [perfil, setPerfil] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCabecalho = async () => {
      try { 
        const response = await axios.get('https://api.github.com/users/JFP79');
        setPerfil(response.data)
      } catch (err) {
        setError('Failed to fetch perfil. ');
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchCabecalho();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div className="foto">
        <img src={perfil.avatar_url} alt="Perfil do GitHub" />
      </div>
      <div className="textos">
        <h1>{perfil.name}</h1>
        <p>{perfil.bio}</p>
        <div className="links">
          </div>
        <div className="seguidores">
          <p>follower: {perfil.followers}</p>
          <p>following: {perfil.following}</p>
        </div>
      </div>
    </div>

  );
}

export default Header;
