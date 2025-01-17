import useConfig from 'antd/es/config-provider/hooks/useConfig'
import React, { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { FaRegHeart } from "react-icons/fa";
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const Favorites = () => {

  const {favorites, toggleFavorites} = useContext(FavoritesContext)
  return (
   <>
   <Helmet>
           <title>Hello World</title>
          <meta name='description'  content='clothes pages'/>
         </Helmet>
    <Row style={{display: "flex", justifyContent: "space-around"}}>
   <div style={{display: "flex", justifyContent: "space-around", gap: "20px"}}>
     {favorites.length > 0 && favorites.map((c) => {
        return (
          
             <Col span={6} key={c._id} >
               <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", width: "400px"}}>
               <img src={c.image} alt="" />
                <h4>{c.title}</h4>
                <p><span style={{color: "red", fontSize: "30px"}}>Price: ${c.price}</span></p>
                <div className="btns" style={{display: "flex", justifyContent:"space-around"}}>
                <Link to={`clothes/${c._id}`}><button style={{marginTop: "20px", width: "100px", height: "30px", backgroundColor: "green", color: "white" , border: "none", borderRadius: "5px"}}>Details</button></Link>
                <button style={{marginTop: "20px",width: "100px", height: "30px", backgroundColor: "white", border: "none", fontSize: "30px"}}><FaRegHeart onClick={() => {toggleFavorites(c)}} /></button>
                </div>

                
                <button style={{color: "white", backgroundColor: "red", border: "none", height: "35px", fontSize: "20px", cursor: "pointer", marginTop: "20px"}}>Add to card</button>
               </div>
            </Col>
        
        )
     })}

   </div>
   </Row>

   </>
  )
}

export default Favorites
