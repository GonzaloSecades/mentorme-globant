import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPencilAlt,
  faAd,
} from "@fortawesome/free-solid-svg-icons";

const iconMeet = (
  <FontAwesomeIcon icon={faComments} color="#3b3b3b" size="2x" />
);
const iconEditProfile = (
  <FontAwesomeIcon icon={faPencilAlt} color="#3b3b3b" size="2x" />
);
const iconComodin = <FontAwesomeIcon icon={faAd} color="#3b3b3b" size="2x" />;

function myProfile() {
  return (
    <div className="MyProfileFather">
      <section>
        <img
          alt="user-avatar"
          src="https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/e35/66641973_394347101250857_3361261859679580024_n.jpg?_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=4Nq48nCycGUAX_g33Gs&tp=1&oh=80775c823e1e50b25af4f595c0d14402&oe=5FDF80E3"
        />
        <p>Bricio Gissara</p>
        <div className="iconsFather">
          <div> {iconMeet}</div>
          <div className="iconMid">{iconEditProfile}</div>
          <div>{iconComodin}</div>
        </div>
      </section>

      <img
        alt="backgroud-animation1"
        className="backgroundAnimation1"
        src="https://i.ibb.co/7nhLm8S/02.png"
      />
      <img
        alt="backgroud-animation2"
        className="backgroundAnimation2"
        src="https://i.ibb.co/YX02RmT/01.png"
      />
      <div className="prueba">
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>

      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <div>chau</div>



      </div>
      

    </div>
  );
}
export default myProfile;
