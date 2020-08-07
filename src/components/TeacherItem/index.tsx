//==============================================================[ HEADER ]
import React from "react";
//---------------------------------------------------------------[ style ]
import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
//==================================================[ BODY <TeacherItem> ]
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/44307233?s=460&u=6b34866b019bc5e7e4729c689ea3e92579dc903e&v=4"
          alt="Lucas Rezende"
        />
        <div>
          <strong>Lucas Rezende</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Apaixonado em teoria da relatividade e computação quântica.
        <br />
        <br />
        Se não dormir durante as aulas, minhas aulas irão explodir sua cabeça
        com conhecimento!
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
