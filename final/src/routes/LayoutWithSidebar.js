import React from "react";
import styles from "./Layout.module.css";
import SideBar from "../layout/SideBar/sideBar.js"

function LayoutWithSidebar ({children}) {

    return(
        <>
            <div className={styles.container} 
                        style={{
                            minHeight: "8vh",
                            margin: "0%",
                            display: "grid",
                            gridTemplateColumns:" auto 1fr",
                            columnGap: "0%",
                          }}
            >
                <SideBar/>
                {children}
            </div>
        </>
    )
}

export default LayoutWithSidebar;