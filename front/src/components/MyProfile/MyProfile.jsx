import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPencilAlt,
  faAd,
} from "@fortawesome/free-solid-svg-icons";

const iconMeet = <FontAwesomeIcon icon={faComments} size="2x" />;
const iconEditProfile = <FontAwesomeIcon icon={faPencilAlt} size="2x" />;
const iconComodin = <FontAwesomeIcon icon={faAd} size="2x" />;

export default () => {

  

  return (
    <div className="MyProfileFather">
      {/* INICIO PARTE SUPERIOR DE MI PERFIL */}
      <section>
        <img src="https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/e35/66641973_394347101250857_3361261859679580024_n.jpg?_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=4Nq48nCycGUAX_g33Gs&tp=1&oh=80775c823e1e50b25af4f595c0d14402&oe=5FDF80E3" />
        <p style={{ margin: 0, fontWeight: "bold" }}>MENTOR</p>
        <p style={{ margin: 0 }}>Bricio Gissara</p>
        <div className="iconsFather">
          <div> {iconMeet}</div>
          <div className="iconMid">{iconEditProfile}</div>
          <div>{iconComodin}</div>
        </div>
      </section>
      {/* FIN PARTE SUPERIOR DE MI PERFIL */}

  {/*  INICIO FONDO ANIMADO  */}
      <img
        className="backgroundAnimation1"
        src="https://i.ibb.co/7nhLm8S/02.png"
      />
      <img
        className="backgroundAnimation2"
        src="https://i.ibb.co/YX02RmT/01.png"
      />

      {/*  FIN FONDO ANIMADO  */}



      {/* INICIO PARTE INFERIOR DE MI PERFIL */}

      <div className="LinkInferior">
        <div className="MyProgress">
          
            Mis progresos 
        
         
          </div>
        <div className="MyMenteesOrMentor">
          
           Mis Mentees/Mentores 
                   
          </div>
      </div>
      {/* FIN PARTE INFERIOR DE MI PERFIL */}

    
    </div>
  );
};
