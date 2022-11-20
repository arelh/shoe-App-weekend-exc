import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MainShoes.css";

function MainShoes({ setIsLoading }) {
  const [shoeArr, setShoeArr] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [nameVal, setNameVal] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const [imageVal, setImageVal] = useState("");
  const [errorMes, setErrorMes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://6374c35a08104a9c5f8866ff.mockapi.io/shoes`
        );

        setShoes(data);
      } catch (e) {
        console.log(e.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setIsLoading]);

  const handleInputName = ({ target: { value } }) => {
    setNameVal(value);
  };
  const handleInputPrice = ({ target: { value } }) => {
    setPriceVal(value);
  };
  const handleInputImage = ({ target: { value } }) => {
    setImageVal(value);
  };
  //Add
  const handleAddShoe = () => {
    const { data } = axios.post(
      "https://6374c35a08104a9c5f8866ff.mockapi.io/shoes",
      {
        name: nameVal,
        price: priceVal,
        image: imageVal,
      }
    );
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://6374c35a08104a9c5f8866ff.mockapi.io/shoes/${id}`
      );
      console.log(data);
      console.log(shoeArr);

      console.log(id);
      setShoeArr((prevState) =>
        prevState.filter((shoe) => {
          return shoe.id !== data.id;
        })
      );
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 1500);
    }
  };

  // const handleDelete = (index) => {
  //   setShoeArr((prevState) =>
  //     prevState.filter((shoe, mapIndex) => {
  //       return mapIndex !== index;
  //     })
  //   );
  // };

  const insertShoes = () => {
    return shoes.map((s) => {
      return (
        <div className="line" key={s.id}>
          {errorMes && <h2>{errorMes}</h2>}
          <Link to={`/shoes/${s.id}`}>
            <div className="card">
              <h1>name : {s.name}</h1>
              <h1>price : {s.price}</h1>
              <img src={s.image} alt={"Img"}></img>
              <button
                className="btnDel"
                onClick={() => {
                  handleDelete(s.id);
                }}
              >
                delete
              </button>
              <button className="btnEd">edit</button>
            </div>
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="inputsAndButton">
        <h1>shoes-collection</h1>

        {shoeArr.map((t, i) => (
          <div className="card" key={t.value + i}>
            {t.value}
          </div>
        ))}
        <div className="inputs">
          <input
            className="inputName"
            value={nameVal}
            onChange={handleInputName}
            placeholder="enter a name"
          ></input>
          <input
            className="inputPrice"
            value={priceVal}
            onChange={handleInputPrice}
            placeholder="enter a price"
          ></input>

          <input
            className="inputImage"
            value={imageVal}
            onChange={handleInputImage}
            placeholder="enter a image"
          ></input>
          <button className="btnAdd" onClick={handleAddShoe}>
            Add shoe
          </button>
        </div>
      </div>
      <div className="cards">{insertShoes()}</div>
    </div>
  );
}
export default MainShoes;
