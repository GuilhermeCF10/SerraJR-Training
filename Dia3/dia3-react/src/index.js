import "./style.css";
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Componente extends React.Component {
  render () {
    return (
     
      <div>
        <header id="header">
            <div id="headerItems">
                <div id="headerTitulo">
                    <h5>Loucos por Carros</h5>
                </div>
            </div>
          </header>

        <div id="main">
            <div id="container">
                <div class="membros">
                    <div class="membrosTitulo">
                        <h5>{this.props.informacoes.nome[0]}</h5>
                    </div>
                    <div class="membrosIdade">
                        <span>Idade: {this.props.informacoes.idade[0]}</span>
                    </div>
                    <div class="membrosTime">
                        <span>Time: {this.props.informacoes.time[0]}</span>
                    </div>
                    <div class="membrosSobrenome">
                        <span>Sobrenome: {this.props.informacoes.sobrenome[0]}</span>
                    </div>
                </div>

                <div class="membros">
                    <div class="membrosTitulo">
                        <h5>{this.props.informacoes.nome[1]}</h5>
                    </div>
                    <div class="membrosIdade">
                        <span>Idade: {this.props.informacoes.idade[1]}</span>
                    </div>
                    <div class="membrosTime">
                        <span>Time: {this.props.informacoes.time[1]}</span>
                    </div>
                    <div class="membrosSobrenome">
                        <span>Sobrenome: {this.props.informacoes.sobrenome[1]}</span>
                    </div>
                </div>

                <div class="membros">
                    <div class="membrosTitulo">
                        <h5>{this.props.informacoes.nome[2]}</h5>
                    </div>
                    <div class="membrosIdade">
                        <span>Idade: {this.props.informacoes.idade[2]}</span>
                    </div>
                    <div class="membrosTime">
                        <span>Time: {this.props.informacoes.time[2]}</span>
                    </div>
                    <div class="membrosSobrenome">
                        <span>Sobrenome: {this.props.informacoes.sobrenome[2]}</span>
                    </div>
                </div>

                <div class="membros">
                    <div class="membrosTitulo">
                        <h5>{this.props.informacoes.nome[3]}</h5>
                    </div>
                    <div class="membrosIdade">
                        <span>Idade: {this.props.informacoes.idade[3]}</span>
                    </div>
                    <div class="membrosTime">
                        <span>Time: {this.props.informacoes.time[3]}</span>
                    </div>
                    <div class="membrosSobrenome">
                        <span>Sobrenome: {this.props.informacoes.sobrenome[3]}</span>
                    </div>
                </div>
            </div>
        </div>

        <footer id="footer">
            <div id="footerItems">
                <div id="footerTitulo">
                    <span>
                        COPYRIGHT © 2021 - SERRA JUNIOR ENGENHARIA
                    </span>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

//JSON
var dados = {
  nome: ["Guilherme", "João Matheus", "Júlya", "Thiago"],
  idade: [18, 19, 19, 19],
  time: ["Fluminense", "Flamengo", "Flamengo", "Flamengo"],
  sobrenome: ["Fialho", "Ramos", "Matias", "Paixão"],
};

// Render
ReactDOM.render( < Componente informacoes={dados}  />, document.getElementById("root"));



