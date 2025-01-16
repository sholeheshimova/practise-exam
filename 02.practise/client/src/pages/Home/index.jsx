import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import { FaRegHeart } from "react-icons/fa";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";

const BASE_URL = "http://localhost:3000/foods";
const Home = () => {
  let [foods, setFoods] = useState([]);
  let [foods2, setFoods2] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { favorites, toggleFavorites } = useContext(FavoritesContext);

  const getFoods = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      setFoods(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  let filteredFoods = foods.filter((fo) =>
    fo.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );
  // console.log(filteredFoods);

  let handleChange = (e) => {
    let sortedFoods = null;
    if (e.target.value === "asc") {
      sortedFoods = [...foods].toSorted((a, b) => a.price - b.price);
    } else if (e.target.value === "desc") {
      sortedFoods = [...foods].toSorted((a, b) => b.price - a.price);
    } else {
      sortedFoods = [...foods2];
    }
    setFoods([...sortedFoods]);
  };

  return (
    <>
      <div className={styles.sec1}>
        <div className={styles.bgc}>
          <div className={styles.text}>
            <h1>Tasty & Delicious food</h1>
            <button>Book a table</button>
          </div>
        </div>
      </div>
      <div className={styles.sec2}>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <img
              src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg"
              alt=""
            />
          </div>
          <div className={styles.texts}>
            <h2>Our chef cooks the most delicious food for you</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              debitis incidunt autem vero quisquam, eum culpa dolor, blanditiis
              nostrum, quo dolore quod. Cumque ab expedita nesciunt officiis
              incidunt similique deserunt, excepturi illum maxime consequuntur?
              In assumenda neque totam ab, rem, excepturi consequatur
              praesentium eum optio eos, asperiores expedita quo! Corrupti!
            </p>
          </div>
        </div>
      </div>
      <div className="sec3">
        <div style={{ marginTop: "50px", marginLeft: "50px" }}>
          <input
            type="search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "50px", marginLeft: "50px" }}>
          <select name="" id="" onChange={handleChange}>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
            <option value="default">Default</option>
          </select>
        </div>
        <div className={styles.foods}>
          <Grid container spacing={2}>
            {foods.length > 0 &&
              filteredFoods.map((f) => {
                return (
                  <Grid size={3} key={f._id}>
                    <div className={styles.food}>
                      <div className={styles.imgs}>
                        <img src={f.image} alt="" width={100} />
                      </div>
                      <div className={styles.text}>
                        <h3>{f.title}</h3>
                        <br />
                        <h5>{f.description}</h5>
                        <br />
                        <p>
                          <span>Price: {f.price}</span>
                        </p>
                      </div>

                      <Link to={`/${f._id}`}>
                        {" "}
                        <button className={styles.btn1}>Details</button>
                      </Link>
                      <button className={styles.btn2}>
                        <FaRegHeart
                          onClick={() => {
                            toggleFavorites(f);
                          }}
                        />
                      </button>
                    </div>
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </div>
      <div className="sec4"></div>
    </>
  );
};

export default Home;
