import React, { Component } from "react";
import { Divider } from "antd";
import Membro from "./Membro";

class Equipe extends Component {
  // Adicionar referências para todo mundo, seja GitHub ou até mesmo link do facebook.
  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <Divider orientation="left">
          <h2>Equipe</h2>
        </Divider>
        <div style={{ marginLeft: "50px" }}>
          <div className="row">
            <Membro
              nome="Andryw Marques"
              foto="https://avatars2.githubusercontent.com/u/6682687"
              facebook="https://www.facebook.com/andrywmr"
              github="https://github.com/andryw"
              linkedin="https://www.linkedin.com/in/andryw/"
            />
            <Membro
              nome="Igleson Freire"
              foto="https://avatars0.githubusercontent.com/u/2916896"
              facebook="https://www.facebook.com/igleson.freire"
              github="https://github.com/igleson"
              linkedin="https://www.linkedin.com/in/igleson/"
            />
            <Membro
              nome="João Arthur"
              foto="https://avatars1.githubusercontent.com/u/5099338"
              facebook="https://www.facebook.com/joaoarthurbm"
              github="https://github.com/joaoarthurbm"
              linkedin=""
            />
            <Membro
              nome="Nazareno Andrade"
              foto="https://scontent.fcpv4-1.fna.fbcdn.net/v/t1.0-9/12143252_10153835639691844_2315686290784527281_n.jpg?_nc_cat=0&oh=5912d7d2f2ff235e1e190c101d08d422&oe=5C0E4588"
              facebook="https://www.facebook.com/nazareno.andrade"
              github="https://github.com/nazareno"
              linkedin=""
            />
            <Membro
              nome="Paulo Soares"
              foto="https://avatars0.githubusercontent.com/u/9946330"
              facebook="https://www.facebook.com/1bibiu"
              github="https://github.com/paul0vinicius"
              linkedin="https://linkedin.com/in/paulo-vinícius-soares-896909a1/"
            />
            <Membro
              nome="Rodolfo Viana"
              foto="https://avatars3.githubusercontent.com/u/472331"
              facebook="https://www.facebook.com/rodolfoo.viana"
              github="https://github.com/RodolfoViana"
              linkedin="https://www.linkedin.com/in/rodolfooviana/"
            />
          </div>
          <p>
            Projeto idealizado no 3º Hackfest Analytics, promovido pelo{" "}
            <a href="https://www.facebook.com/analytics.ufcg">
              Laboratório Analytics
            </a>{" "}
            da Universidade Federal de Campina Grande.
          </p>
        </div>
      </div>
    );
  }
}

export default Equipe;
