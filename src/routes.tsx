//==============================================================[ HEADER ]
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//----------------------------------------------------------[ components ]
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";
//==================================================[ BODY <TeacherList> ]
export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}
