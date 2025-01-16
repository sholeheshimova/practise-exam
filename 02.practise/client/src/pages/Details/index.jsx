import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";

const BASE_URL = "http://localhost:3000/foods";
const Details = () => {
  const { id } = useParams();

  const [foods, setFoods] = useState([]);

  const getFoods = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      setFoods(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <>
      <div className={styles.foods}>
        {foods ? (
          <Grid size={3} key={foods._id}>
            <div className={styles.food}>
              <div className={styles.imgs}>
                <img src={foods.image} alt="" width={100} />
              </div>
              <div className={styles.text}>
                <h3>{foods.title}</h3>
                <br />
                <h5>{foods.description}</h5>
                <br />
                <p>
                  <span>Price: {foods.price}</span>
                </p>
              </div>
            </div>
            <div className={styles.texts}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                vitae ad quibusdam nisi unde <br />sequi eos vero earum officia,
                beatae voluptas? Esse maxime pariatur, repellat officiis
                accusantium harum sed quo adipisci <br /> facilis illum nisi
                laudantium, quasi, dolores mollitia tempore autem?
              </p>
            </div>
          </Grid>
        ) : (
          <h2>No such data</h2>
        )}
      </div>
    </>
  );
};

export default Details;
