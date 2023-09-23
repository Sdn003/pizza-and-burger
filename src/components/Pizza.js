import React, { Fragment, useContext, useEffect, useState } from 'react';
import { FoodContext } from '../App';
import { CircularProgress } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


function Pizza() {
  let context = useContext(FoodContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  let getData = () => {
    context.setLoading(true);
    if(context.data.length > 0){
       setProducts(context.data[0].subItemsData.subItems);
       setTimeout(()=>{context.setLoading(false);},600)
       
    }
    else{
      navigate('/');
    }
  }
  useEffect( ()=>{
    getData();
  },[])

  return (
    <>
      {context.loading ? (
        <div id="Loader" style={context.styleForLoader}>
          <CircularProgress color="secondary" size="5rem" />
        </div>
      ) : (
        <>
          <div className="product-wrap">
            <div className="pizza_header">
              <Link to="/" className='arrowIcon'>
                <ArrowBackIcon></ArrowBackIcon>
              </Link>
              <h2>Pizzas</h2>
            </div>
            {products.map((data, i) => {
              let productName = data.name;
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
                          context.cart.push(data);
                          console.log(context.cart);
                          context.setCartValue(context.cart.length);
                        }}
                      >
                        Order now
                      </button>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </>
      )}
    </>
  );

       
  
}

export default Pizza