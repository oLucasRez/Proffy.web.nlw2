//==============================================================[ HEADER ]
import React from "react";
//----------------------------------------------------------[ components ]
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
//---------------------------------------------------------------[ style ]
import "./styles.css";
//================================================================[ BODY ]
export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
      </main>
    </div>
  );
}
