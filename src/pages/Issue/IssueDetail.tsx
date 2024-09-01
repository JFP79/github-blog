import "./IssueDetail.css"
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Issue } from '../../types/types';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

function IssueDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [issue, setIssue] = useState<Issue | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/JFP79/prova2606/issues/${id}`
        );
        setIssue(response.data);
      } catch (err) {
        setError('Failed to fetch issue.');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIssue();
  }, [id]);

  const handleBackClick = () => {
    navigate('/');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const data = dayjs(issue?.created_at).fromNow()

  return (
    <div className="card-detail">
      <div className="issue-detail">
        <div className="title-detail">
          <button onClick={handleBackClick} className="voltar-button">Voltar</button>
          <h1>{issue?.title}</h1>
        </div>
        <div className="body-detail">
          <ReactMarkdown>{issue?.body}</ReactMarkdown>
        </div>
        <div className="footer-detail">
          <p>
            Criado {data}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IssueDetail;
