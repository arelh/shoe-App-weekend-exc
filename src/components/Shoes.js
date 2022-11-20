import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/Shoes.css";

function Shoes({ setIsLoading }) {
  const [ShoesData, setShoesData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://6374c35a08104a9c5f8866ff.mockapi.io/shoes/${id}`
      );
      setShoesData(data);
      setIsLoading(false);
      console.log(data);
    };

    fetchData();
  }, [id, setIsLoading]);

  return (
    <div>
      {ShoesData && (
        <div className="cardShoe">
          <h1>{ShoesData.name}</h1>
          <img className="imageShoe" src={ShoesData.image} alt={"shoes"}></img>
          <h1>price: {ShoesData.price}</h1>
        </div>
      )}
    </div>
  );
}

export default Shoes;
