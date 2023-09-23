import React,{ useCallback, useContext, useEffect, useRef, useState } from 'react';
import { FoodContext } from '../../App';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from 'react-router-dom';
import './Header.css'
import { IconButton } from '@mui/material';
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import logo from '../images/food_app_logo.png'


function Header() {
  const context = useContext(FoodContext);

  const navigate = useNavigate();
  const nav_list_ref = useRef();
  const [crossIcon, setCrossIcon] = useState(false);
  const [brandName, setBrandName] = useState(false);

  const openSideBar = () => {
    nav_list_ref.current.classList.add("show_navBar");
    setCrossIcon((prev) => !prev);
  };

  const closeSideBar = () => {
    nav_list_ref.current.classList.remove("show_navBar");
    setCrossIcon((prev) => !prev);
  };

  const brandNameHandler = () => {
    if(window.innerWidth <= 510){
      setBrandName(true);
    }
    else{
      setBrandName(false);
    }
  }

 const hr_ref = useRef();
 const header_ref = useRef();
 const myFunction = () => {
  //
    if (window.scrollY > hr_ref.current.offsetTop) {
      header_ref.current.classList.add("sticky");
    } else {
      header_ref.current.classList.remove("sticky");
    }
    
 };

 useEffect(() => {
  brandNameHandler();
   window.addEventListener(
     "scroll",
     myFunction
   );
   return () => {
     window.removeEventListener("onscroll", myFunction);
   };
 }, []);
 window.addEventListener("resize", brandNameHandler);
   
  return (
    <>

      <header ref={header_ref} className="head">
        <div className="menu_icon">
          {crossIcon ? (
            <>
              <IconButton className="burger_icon" onClick={closeSideBar}>
                <RestaurantMenuIcon
                  style={{ color: "#cc201b" }}
                  className="burger_icon"
                />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton className="burger_icon" onClick={openSideBar}>
                <FastfoodIcon className="burger_icon" />
              </IconButton>
            </>
          )}
        </div>

        <div className="brand_and_logo">
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
          {brandName ? (
            <>
              <h4>P&B</h4>
            </>
          ) : (
            <>
              <h4>Pizza & Burgers</h4>
            </>
          )}
        </div>

        <div className="nav_list" ref={nav_list_ref}>
          <ul>
            <li onClick={() => {
              closeSideBar();
              navigate("/");
              
              }}>Home</li>
            <li onClick={() => {
              closeSideBar();
              navigate("/Pizza")
              }}>Pizza</li>
            <li onClick={() => {
              closeSideBar();
              navigate("/Burger")
            }}>Burger</li>
          </ul>
        </div>

        <div className="cart">
          <IconButton className="cartIcon" onClick={() => {
            try {
              navigate("/Cart")
            } catch (error) {
              navigate("/");
            }
            }}>
            <ShoppingCartIcon className="cartIcon" />
          </IconButton>
          {context.cartValue ? (
            <>
              <div className="count_of_ordered_items">
                <span>{context.cartValue}</span>
              </div>
            </>
          ) : null}
        </div>
      </header>
      <hr ref={hr_ref} />
    </>
  );
}

export default Header