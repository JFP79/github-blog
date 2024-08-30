import "./Issues.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../../components/Card/Card";

function Issues() {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try { 
        const response = await axios.get('https://api.github.com/users/JFP79/repos');
        setRepositories(response.data.slice(0, 6));
      } catch (err) {
        setError('Failed to fetch repositories. ');
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>GitHub Repositories</h1>
      <div className="box-container">
        {repositories.map((repo) => (
          <Card key={repo.id} title={repo.name} content={repo.description || 'No description'} />
        ))}
      </div>
    </div>
  );
}

export default Issues;

