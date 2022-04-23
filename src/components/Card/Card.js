import { useNavigate } from "react-router-dom";
import {Card} from "react-bootstrap"

function CardDOM({ name, brands }) {
  const navigate = useNavigate();

  return (
    <div className="cardDOM" onClick={() => { navigate(`/${name}`, { state: name }) }}>
      <Card style={{ width: '18rem', height:"15rem", margin:"15px" }}>
        <Card.Body style={{display:"flex", alignItems:"center", "justifyContent":"center"}}>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardDOM;
