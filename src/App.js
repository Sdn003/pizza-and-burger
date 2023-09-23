import React,{ useState, useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pizza from "./components/Pizza"; 
import Burger from "./components/Burger";
import Cart from "./components/Cart";
import Home from "./components/Home/Home";
import food from './Local-JSON/data.json';
import { CircularProgress } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./ErrorBoundary.js";
export const FoodContext = React.createContext();


function App() {

const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [cart, setCart] = useState([]);
const [cartValue, setCartValue] = useState(cart.length);


const getData = () => {
  setLoading(true);
  setData(() => [...food]);
  setTimeout(() => {
    setLoading(false);
  }, 600); 
}
useEffect(getData, []);

const styleForLoader = {
  width : "100%",
  height: "100vh",
  color : "#cc201b",
  marginTop: "20%",
  display : "grid",
  justifyContent : "center",
}


  return (
    <div className="app_container">
      {loading ? (
        <div id="Loader" style={styleForLoader}>
          <CircularProgress color="secondary" size="5rem" />
        </div>
      ) : null}

      <Router>
        <FoodContext.Provider
          value={{
            data,
            cart,
            setCart,
            cartValue,
            setCartValue,
            styleForLoader,
            loading,
            setLoading,
          }}
        >
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>

          <Routes>
            <Route
              path="/Pizza"
              element={
                <ErrorBoundary>
                  <Pizza />
                </ErrorBoundary>
              }
            ></Route>
            <Route
              path="/Burger"
              element={
                <ErrorBoundary>
                  <Burger />
                </ErrorBoundary>
              }
            />
            <Route
              path="/Cart"
              element={
                <ErrorBoundary>
                  <Cart />
                </ErrorBoundary>
              }
            ></Route>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              }
            />
          </Routes>
          <Footer />
        </FoodContext.Provider>
      </Router>
    </div>
  );
}

export default App;
