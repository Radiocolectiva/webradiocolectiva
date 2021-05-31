import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Radio Colectiva"
          subtitle="PROGRAMAS EN VIVO Y EN DIFERIDO POR INSTAGRAM Y FACEBOOK">
          <Link to="/un" className="btn-primary">
            Últimas Noticias
          </Link>


        </Banner>
      </Hero>

    </>
  );
};

export default home;
