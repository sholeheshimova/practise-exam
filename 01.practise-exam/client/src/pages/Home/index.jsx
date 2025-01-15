import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import axios, { AxiosHeaders } from "axios";

import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import styles from "./index.module.scss";
const { Meta } = Card;

const BASE_URL = "http://localhost:4000/shoes";

const Home = () => {
  const [shoes, setShoes] = useState([]);
  const { toggleFavorites } = useContext(FavoritesContext);
  const [searchQuery, setSearchQuery] = useState("");

  const getShoes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      setShoes(response.data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getShoes();
  }, []);

  const filteredShoes = shoes.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const handleChange = (e) => {
    let sortedShoes = null;
    if (e.target.value === "asc") {
      sortedShoes = [...shoes].toSorted((a, b) => a.price - b.price);
    } else if (e.target.value === "desc") {
      sortedShoes = [...shoes].toSorted((a, b) => b.price - a.price);
    } else {
      sortedShoes = [...shoes];
    }
    setShoes(sortedShoes);
    console.log(sortedShoes);
  };

  return (
    <>
      {/* <Helmet>
        <title>Hello World</title>
      </Helmet> */}

      <div className={styles.sec1}>
        <div className={styles.img}>
          <img
            src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h3>Finding Your Perfect Shoes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            unde iusto pariatur nisi. Iusto veniam quasi beatae harum! Porro,
            cumque.
          </p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className={styles.sec2}>
        <div
          style={{
            display: "flex",
            marginTop: "100px",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <div>
            <input
              type="search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <select name="" id="" onChange={handleChange}>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
              <option value="default">Default</option>
            </select>
          </div>

          {shoes.length > 0 &&
            filteredShoes.map((sh) => {
              return (
                <div>
                  <Card
                    key={sh._id}
                    hoverable
                    style={{
                      width: 240,
                      alignItems: "center",
                      marginTop: 100,
                    }}
                    cover={<img alt={sh.title} src={sh.image} />}
                  >
                    <Meta title={sh.title} description={sh.description} />

                    <h4>Price: ${sh.price}</h4>

                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        paddingTop: "20px",
                      }}
                    >
                      <Link to={`/${sh._id}`}>
                        {" "}
                        <Button>Details</Button>
                      </Link>
                      <Button
                        onClick={() => {
                          toggleFavorites(sh._id);
                        }}
                      >
                        <FaRegHeart />
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>

      <div className={styles.sec3}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h5>Free Shipping</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
              nam incidunt? Praesentium illum debitis officia sequi atque vero
              ipsa eum.
            </p>
          </div>
          <div className={styles.card}>
            <h5>Free Shipping</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
              nam incidunt? Praesentium illum debitis officia sequi atque vero
              ipsa eum.
            </p>
          </div>
          <div className={styles.card}>
            <h5>Free Shipping</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
              nam incidunt? Praesentium illum debitis officia sequi atque vero
              ipsa eum.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sec4}>
        <div className={styles.imgs}>
          <img
            src="https://preview.colorlib.com/theme/shoppers/images/women.jpg"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/shoppers/images/children.jpg"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/shoppers/images/men.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.sec5}>
        <div className={styles.img}>
          <img
            src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h4>50% less in all items</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Alias perferendis excepturi libero commodi dolor aliquam voluptas
            nisi debitis. Autem, nisi.
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default Home;
