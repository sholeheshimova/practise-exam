import React from 'react'
import styles from './index.module.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer>
  <div className={styles.common}>
  <div className={styles.text}>
        <h3>NewsLetter</h3>
        <input type="email" />
        <button>Subscribe</button>
        
      </div>
      <div className={styles.icons}>
      <FaFacebookF />
      <FaInstagram />
      <FaLinkedinIn />
      <FaTwitter />


      </div>
  </div>
    </footer>
    </>
  )
}

export default Footer
