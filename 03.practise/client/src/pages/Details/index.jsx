import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:4000/clothes";
const Details = () => {
  const { id } = useParams();
  const [c, setC] = useState({});
console.log(id);

  const getClothes = async () => {

    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      setC(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClothes();
  }, []);
  return (
    <>
    <Helmet>
            <title>Hello World</title>
           <meta name='description'  content='clothes pages'/>
          </Helmet>
      <Row style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "20px",
          }}
        >
          {c && (
            <Col span={6} key={c._id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  width: "400px",
                }}
              >
                <img src={c.image} alt="" />
                <h4>{c.title}</h4>
                <p>
                  <span style={{ color: "red", fontSize: "30px" }}>
                    Price: ${c.price}
                  </span>
                </p>
                <div
                  className="btns"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Link >
                    <button
                      style={{
                        marginTop: "20px",
                        width: "100px",
                        height: "30px",
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      Details
                    </button>
                  </Link>
                  <button
                    style={{
                      marginTop: "20px",
                      width: "100px",
                      height: "30px",
                      backgroundColor: "white",
                      border: "none",
                      fontSize: "30px",
                    }}
                  >
                    <FaRegHeart />
                  </button>
                </div>

                <button
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    border: "none",
                    height: "35px",
                    fontSize: "20px",
                    cursor: "pointer",
                    marginTop: "20px",
                  }}
                >
                  Add to card
                </button>
              </div>
            </Col> 
           
          )} 
          
        </div>
       
      </Row>
    </>
  );
};

export default Details;
