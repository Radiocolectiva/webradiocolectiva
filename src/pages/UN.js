import React from "react";
import imgDIARIA from '../img/logo.ladiaria.JPG';
import imgDIARIA1 from '../img/21.05.29-ladiaria1.jpg';
import imgNI1 from '../img/21.05.28 - NI.jpg';


const UN = () => {
  return (
    <>
      <div className="container mt-5">
        <div>
          <button className="cart-btn">
            <a href="https://ladiaria.com.uy/coronavirus/articulo/2021/5/este-sabado-se-registraron-49-muertes-por-covid-19-y-un-nuevo-record-de-personas-con-la-enfermedad-37675/">
              <img src={imgDIARIA} className="img" alt="" />
            </a>
          </button>

        </div>
        <br></br>
        <h1>#NoticialaDiaria - 29 de mayo 2021</h1>
        <br></br>
        <h3>“Este sábado se registraron 49 muertes por covid-19 y un nuevo récord de personas con la enfermedad: 37.675
        El Sinae reportó también datos actualizados del viernes: se sumaron 2.400 casos nuevos y nueve muertes no informadas"</h3>
        <a href="https://ladiaria.com.uy/coronavirus/articulo/2021/5/este-sabado-se-registraron-49-muertes-por-covid-19-y-un-nuevo-record-de-personas-con-la-enfermedad-37675/">
          <img src={imgDIARIA1} className="img" alt="" />
        </a>


      </div>

      <div className="container mt-5">

        <br></br>
        <h1>#NoticiaInternacional - 28 de mayo 2021</h1>
        <br></br>
        <h3>“AMERICA AL RITMO DEL COVID-19
        Las noticias más preocupantes ayer jueves llegaron de Argentina, que alcanzó un nuevo récord de contagios al sumar 41.080 casos en un día, en tanto que registró 551 muertes y superó los 76.000 decesos desde que se inició la pandemia.
Chile volvió a superar ayer jueves los 8.000 casos nuevos de COVID-19, una cifra que no se registraba desde abril, cuando el país vivió los momentos más críticos de la segunda ola de la pandemia, y pese a que más del 50% de la población ya ha recibido las dos dosis de la vacuna."</h3>
        <br></br>
        <div>
          <button className="cart-btn">
            <a href="https://www.facebook.com/ColectivaRadioo/photos/a.134366241651765/319097376511983/?type=3&theater">
              <img src={imgNI1} className="img" alt="" />
            </a>
          </button>
        </div>


      </div>



    </>
  );
};

export default UN;
