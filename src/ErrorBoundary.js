import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Errorboundary.css'
import { Button } from "@mui/material";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.groupCollapsed(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <section className="page_404">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 ">
                  <div className="col-sm-10 col-sm-offset-1  text-center">
                    <div className="four_zero_four_bg">
                      <h1 className="text-center ">404</h1>
                    </div>

                    <div className="contant_box_404">
                      <h3 className="h2">Looks like you're lost</h3>

                      <p>
                        The Webpage which you are looking for is not Available
                      </p>
                      <div className="errorBoundary_btn">
                        <Link to="/" style={{ textDecoration: "none" }}>
                        <Button
                          variant="contained"
                        >
                          Go to Home
                        </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
