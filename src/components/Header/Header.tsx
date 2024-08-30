import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Header.css";
import { IGitProfile } from '../../types/types';


function Header() {
  const [perfil, setPerfil] = useState<IGitProfile>();
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
      <div className='head'>
      <div className="foto">
        <img src={perfil?.avatar_url} alt="Perfil do GitHub" />
      </div>
      <div className="textos">
        <h1>{perfil?.name}</h1>
        <p>{perfil?.bio}</p>
        
        <div className="seguidores">
          <p>followers: {perfil?.followers}</p>
          <p>{perfil?.location}</p>
        </div>
      </div>
      </div>
    </div>

  );

}

export default Header;
