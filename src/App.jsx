import React from "react";
import "./App.css";

import Primeiro from "./components/base/Primeiro";
import ComParametro from "./components/base/ComParametro";
import Fragmento from "./components/base/Fragmento";
import Aleatorio from "./components/base/Aleatorio";
import Card from "./components/layout/Card";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório">
        <Aleatorio min={10} max={20} />
        <Aleatorio min={1} max={10} />
      </Card>
      <Card titulo="#03 - Desafio Fragmento">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro"
          nota={9.3}
        ></ComParametro>
      </Card>
      <Card titulo="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
