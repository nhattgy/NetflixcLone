import React, { Fragment } from "react";
import Header from "../Header/Header";
import Routes from "../../Routes/Routers";
import Footer from "../Footer/Footer";

const Layouts = () => {
  return (
    <Fragment>
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  );
};

export default Layouts;
