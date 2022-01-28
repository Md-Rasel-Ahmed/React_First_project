import React from "react";
// import "./Styles/first.css";
import BioData from "./Component/BioData";
function App() {
  return (
    <div>
      <h1>Bio Data</h1>
      <BioData
        name="Rasel"
        dateOfBirth="6/6/2000"
        birthTime="Night"
        birthPlace="My house"
        weight="60"
        height="5.5"
        education="HSC"
        religion="Islam"
        grandFather="Abdul Haq Maji"
        father="Mostafa"
        mother="Monowara"
        brother={["Shohag", "Faysal"]}
        sister={["Sarmin", "Khalada"]}
      />
      <br />
      <hr />
      <BioData
        name="Nahida"
        dateOfBirth="19/9/2002"
        birthTime="Night"
        birthPlace=" House"
        weight="50"
        height="5.4"
        education="Fazil"
        religion="Islam"
        grandFather="Abdul Haq Maji"
        father="Hasan Haji"
        mother="Hasnara"
        brother={["Mehedi", "Abir"]}
        sister={["Only One"]}
      />
      <br />
      <hr />
      <BioData
        name="Meheraj"
        dateOfBirth="25/03/2000"
        birthTime="Morning"
        birthPlace=" House"
        weight="55"
        height="5.6"
        education="Honurs"
        religion="Islam"
        grandFather="Amar mone nai"
        father="Sahabuddin"
        mother="Lilufa"
        brother={["Hellal", "Riyaj"]}
        sister={["Sahida", "Jasmin"]}
      />
    </div>
  );
}

export default App;
