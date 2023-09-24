import React, { Fragment, useContext, useEffect, useState } from "react";
import { FoodContext } from "../App";
import {  CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Cart() {
  let context = useContext(FoodContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  let [cartPrice] = useState(0);

  let getData = () => {
      context.setLoading(true);
    try {
    
          if (context.data.length > 0) {
            setProducts(context.cart);
            context.setLoading(false);
          } else {
            navigate("/");
          }
    } catch (error) {
      context.setLoading(false);
      navigate("/");
      
    }

  };
  useEffect(() => {
    getData();
  }, [cartPrice]);

  const handleDelete = (data) => {
    context.cart.splice(context.cart.indexOf(data),1);
    context.setCartValue(context.cart.length);
  }

  return (
    <>
      {context.loading ? (
        <div id="Loader" style={context.styleForLoader}>
          <CircularProgress color="secondary" size="5rem" />
        </div>
      ) : (
        <>
          <div className="product-wrap">
            {context.cart.length ? (
              <>
                <div className="pizza_header">
                  <Link to="/" className="arrowIcon">
                    <ArrowBackIcon></ArrowBackIcon>
                  </Link>
                  <h2>My Cart</h2>
                </div>
                {products.map((data, i) => {
                  let productName = data.name;
                  cartPrice += Number(data.price);
                  return (
                    <Fragment key={i}>
                      <div className="product-wrapper">
                        <div className="product-image">
                          <img src={data.image} alt={productName} />
                        </div>
                        <div className="product-details">
                          <h4>{data.name}</h4>
                          <div className="product-desc">{data.description}</div>
                          <div className="product-price">
                            <b>&#x20B9;</b>
                            {data.price}
                          </div>
                          <button
                            className="order-now-btn"
                            onClick={() => {
                              handleDelete(data, i);
                            }}
                          >
                            Remove Item
                          </button>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
                <div className="price-wrapper">
                  <div className="price-value">
                    Total Price: <b>&#x20B9;&nbsp;{cartPrice}/-</b>
                  </div>
                  <Link to="/">
                    <button
                      className="order-now-btn"
                      onClick={() => {
                        context.setCart([]);
                        context.setCartValue(0);
                      }}
                    >
                      Place order
                    </button>
                  </Link>
                  <br />
                  <br />
                  <br />
                </div>
              </>
            ) : (
              <>
                <div className="pizza_header">
                  <h2>Your Cart is Empty</h2>
                </div>
                <div className="btn-2-wrapper">
                  <Link to="/">
                    <button className="order-now-btn-2">
                      Choose your Delight
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
