import React from "react";
import img1 from '../img/galerian-1.jpg';
import img2 from '../img/galerian-2.jpg';
import img3 from '../img/galerian-3.jpg';
import img4 from '../img/galerian-4.jpg';



const galeriaNosotros = () => {
  return (
    <>
      <div className="contenedor">
        <div className="cubos c1">
          <img
            src={img1}
            className="img"
            alt=""
          />
        </div>
        <div className="cubos">
          <img
            src={img2}
            className="img"
            alt=""
          />
        </div>
        <div className="cubos">
          <img
            src={img3}
            className="img"
            alt=""
          />
        </div>
        <div className="cubos">
          <img
            src={img4}
            className="img"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default galeriaNosotros;
