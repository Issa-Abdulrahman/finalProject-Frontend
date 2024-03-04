import React from "react";
import styles from"./sideBar.module.css";

const SideBar = () =>{
    return(
        <div className={styles.sidebar}>
        <ul>
          <li>Products</li>
          <li>Brands</li>
          <li>Overview</li>
        </ul>
      </div>
    )
}
export default SideBar;