import { useLocation, useNavigate, Navigate } from "react-router-dom"

function Brandpage() {
  const { state } = useLocation()
  const navigate = useNavigate();
  if(!state || !state.Image) {
    return <Navigate to={"/"}></Navigate>
  }
  return (
    <div className="brandpage">
      <div style={{display:"flex",height:"50%",width:"60%", minWidth:"800px", border:"1px solid gray", borderRadius:"5px"}}>
        <div style={{display:"flex",width:"40%"}}><img width={"100%"} variant="top" src={state.Image} style={{ objectFit: "cover",borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px" }} /></div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",flex:1,alignItems:"flex-start",marginLeft:"6rem"}}>
          <h1>{state.Brand}</h1>
          <div>Variety : {state.Variety}</div>
          <div>Style : {state.Style}</div>
          <div>Country of origin : {state.Country}</div>
          <div>Rating : {state.Stars}</div>
          <div>Top Ten Year :{state["Top Ten"]}</div>
        </div>
      </div>

    </div>
  );
}

export default Brandpage;
