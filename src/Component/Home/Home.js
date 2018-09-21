import React, { Component } from "react";
import Header from "./../Header/Header";
import MiddleLayer from "../MiddleLayer/MiddleLayer";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Header />
        <MiddleLayer />
        <Footer />
      </div>
    );
  }
}
export default Home;
