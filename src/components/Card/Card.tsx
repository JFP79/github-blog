import { Link } from "react-router-dom";
import "./Card.css"

type CardProps = {
  id: number;
  title: string;
  content: string;
};

function Card({ id, title, content }: CardProps) {
  return (
    <div className="card">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="body">
        <p>{content?.length > 100 ? `${content?.substring(0, 200)}...` : content}</p>
      </div>
      <div className="footer">
        <Link to={`/issue/${id}`} ref={null}>Read more</Link>
      </div>
    </div>
  );
}

export default Card;
