import "./Issues.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../../components/Card/Card";
import { Issue } from "../../types/types";

function Issues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try { 
        const response = await axios.get('https://api.github.com/repos/JFP79/prova2606/issues');
        setIssues(response.data);
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

  console.log(issues.map((issue) => issue.number));
  
  return (
    <div>
      <h1 className="title-issues">GitHub Repositories</h1>
      <div className="box-container">
        {issues?.map((issue) => (
          <Card
            key={issue.id}
            number={issue.number}
            title={issue.title}
            content={issue.body}
          />
        ))}
      </div> 
    </div>
  );
}

export default Issues;

