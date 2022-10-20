import React from "react";
import style from "../assets/css/components/navbar.module.css";

export const Navbar = () => {
  return (

      <nav className={style.navbar}>
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
};
