import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandDetails,fetchBrandImages } from "../../storeUtilities/reducer";
import Spinner from "../Spinner/spinner";
import Card from "../Card/Card";

function Homepage() {
  const dispatch = useDispatch();
  const countryDetails = useSelector((state) => state.details.countryDetails)
  const status = useSelector((state) => state.details.status)
  const error = useSelector((state) => state.details.error)


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBrandDetails())
      dispatch(fetchBrandImages())
    }
  }, [dispatch,status])

  let content = null;

  if (status === 'loading') {
    content = <Spinner />
  } else if (status === 'succeeded') {
    content = Object.keys(countryDetails).map(country => (
      <Card key={country} name={country} brands={countryDetails[country]}/>
    ))
  } else if (status === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <div className="homepage">
      {content}
    </div>
  );
}

export default Homepage;
