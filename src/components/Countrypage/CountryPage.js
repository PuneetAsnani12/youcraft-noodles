import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Countrypage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { brandDetails, brandImages } = useSelector((state) => state.details);
  let index = -1;

  useEffect(()=>{
    if(document.getElementsByClassName('card').length===0){
      navigate("/")
    }
  },[])

  return (
    <div className="countrypage">
      {brandDetails.length > 0 && brandDetails.map((brand, idx) => {
        if (brand.Country === state || window.location.pathname.includes(brand.Country)) {
          index++;
          return (
            <Card key={brand.Brand + idx} style={{ width: '18rem', height: "18rem", margin: "15px" }} onClick={() => { navigate(`/brand/${brand.Brand}`, { state: {...brand,Image:brandImages[index % 7].Image} }) }}>
              <Card.Img variant="top" src={brandImages[index % 7].Image} style={{ height: "10rem", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{brand.Brand}</Card.Title>
                <Card.Text>
                  {brand.Variety}
                </Card.Text>
              </Card.Body>
            </Card>
          )
        }
        return null
      })
      }
    </div>
  );
}

export default Countrypage;
