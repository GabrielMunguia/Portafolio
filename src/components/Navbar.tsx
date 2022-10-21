import React, { useCallback, useEffect, useState } from "react";
import style from "../assets/css/components/navbar.module.css";

export const Navbar = React.memo(() => {
  const [show, setShow] = useState(false);
  const handleScroll = useCallback(() => {
      if (window.scrollY > 100 && !show  ) {
        setShow(true);
      } else if (window.scrollY < 100 && show) {
        setShow(false);
      }
    }, [show]);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <nav className={`${style.navbar} ${show?style.navbar_show:""} `}>
         <div>
           <span className={style.navbar_name}>Gabriel Munguia</span>
           <span className={style.navbar_occupation}> - Developer</span>
         </div>
  
         <div>
          <ul className={style.navbar_list}>
          <li className={style.navbar_list_item}>Home</li>
            <li className={style.navbar_list_item}>About</li>
            <li className={style.navbar_list_item}>Projects</li>
            <li className={style.navbar_list_item}>
              <span className={style.navbar_contact_button}>Contact</span>
            </li>
          </ul>
          
         </div>
        </nav>
   
    );
  }
  )