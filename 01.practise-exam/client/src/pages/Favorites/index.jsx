import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { FaRegHeart } from "react-icons/fa";
const { Meta } = Card;
import axios from "axios";
import { useParams } from "react-router-dom";

const Favorites = () => {
  const [shoes, setShoes] = useState(null);
  const BASE_URL = "http://localhost:4000/shoes";
  const { id } = useParams();

  const getshoes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      console.log(response.data);

      setShoes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getshoes();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          justifyContent: "center",
        }}
      >
        {shoes && (
          <Card
            key={shoes._id}
            hoverable
            style={{
              width: 240,
              alignItems: "center",
              marginTop: 100,
            }}
            cover={<img alt={shoes.title} src={shoes.image} />}
          >
            <Meta title={shoes.title} description={shoes.description} />

            <h4>Price: ${shoes.price}</h4>

            <div style={{ display: "flex", gap: "10px", paddingTop: "20px" }}>
              <Button>
                <FaRegHeart />
              </Button>
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default Favorites;
