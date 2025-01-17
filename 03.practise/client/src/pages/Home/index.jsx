import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Row } from 'antd';
import { FaRegHeart } from "react-icons/fa";
import { Link, Links } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoritesContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styles from './index.module.scss'


const BASE_URL = "http://localhost:4000/clothes"
const Home = () => {
    const [clothes, setClothes] = useState([])
    const [clothesCopy, setClothesCopy] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    const {favorites, toggleFavorites} = useContext(FavoritesContext)

    const getClothes = async() => {
        try {
            const response = await axios.get(`${BASE_URL}`)
            setClothes(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getClothes()
    },[])

    const filteredClothes = clothes.filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))

    const handleChange = (e) => {
        let sortedCloth = null;
        if (e.target.value === "asc") {
            sortedCloth = [...clothes].toSorted((a,b) => a.price - b.price)
        }else if (e.target.value === "desc") {
            sortedCloth = [...clothes].toSorted((a,b) => b.price - a.price)
        }else{
            sortedCloth = [...clothesCopy]
        }
        setClothes([...sortedCloth])
    }
  return (
   <>
    <Helmet>
        <title>Hello World</title>
       <meta name='description'  content='clothes pages'/>
      </Helmet>
   <div className={styles.sec1}>
    <div className={styles.text}>
      <h1>Get up to 30% Off
        <br /> New Arrivals</h1>
      <button>Shop Now</button>
    </div>
   </div>

   <div className={styles.sec2}>
    <div className={styles.cards}>
        <div className={styles.card1}>
            <button>WOMEN'S</button>
        </div>
        <div className={styles.card2}>
            <button>ACCESSORIES'S</button>
        </div>
        <div className={styles.card3}>
            <button>MEN'S</button>
        </div>
    </div>
   </div>

    <div className={styles.sec3}>
        <h2>New Arrivals</h2>
    <input type="search" onChange={(e) => {setSearchQuery(e.target.value)}} />
    <select name="" id="" onChange={handleChange}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
        <option value="deafult">Default</option>
    </select>
    <Row style={{display: "flex", justifyContent: "space-around"}}>
   
   <div style={{display: "flex", justifyContent: "space-around", gap: "20px"}}>
   
     {clothes.length > 0 && filteredClothes.map((c) => {
        return (
          
             <Col span={6} key={c._id} >
               <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", width: "400px"}}>
               <img src={c.image} alt="" />
                <h4>{c.title}</h4>
                <p><span style={{color: "red", fontSize: "30px"}}>Price: ${c.price}</span></p>
                <div className="btns" style={{display: "flex", justifyContent:"space-around"}}>
                <Link to={`${c._id}`}><button style={{marginTop: "20px", width: "100px", height: "30px", backgroundColor: "green", color: "white" , border: "none", borderRadius: "5px"}}>Details</button></Link>
                <button style={{marginTop: "20px",width: "100px", height: "30px", backgroundColor: "white", border: "none", fontSize: "30px"}}><FaRegHeart onClick={() => {toggleFavorites(c)}} /></button>
                </div>

                
                <button style={{color: "white", backgroundColor: "red", border: "none", height: "35px", fontSize: "20px", cursor: "pointer", marginTop: "20px"}}>Add to card</button>
               </div>
            </Col>
        
        )
     })}

   </div>
   </Row>
    </div>

 <div className={styles.sec4}>
  <h2>Best Sellers </h2>
     <div className={styles.cards}>
        <div className={styles.card1}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_8.png" alt="" />
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p><span>$500</span></p>
        </div>
        <div className={styles.card1}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_10.png" alt="" />
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p><span>$500</span></p>
        </div>
        <div className={styles.card1}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_9.png" alt="" />
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p><span>$500</span></p>
        </div>
        <div className={styles.card1}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_6.png" alt="" />
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p><span>$500</span></p>
        </div>
     </div>
 </div>
    <div className={styles.sec5}>
        <h2>Latest Blogs</h2>
        <div className={styles.imgs}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg" alt="" />
            <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" alt="" />
            <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg" alt="" />
        </div>
    </div>
   </>
  )
}

export default Home
