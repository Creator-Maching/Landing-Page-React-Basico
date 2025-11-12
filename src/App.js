import React from "react";
import './App.css';
import camiseta from './/assets/img/camisa.jpg'
import uniformes from './/assets/img/Camisetas-e-uniformes.webp'

export default function App() {
  return (
    <div className="container">
      <header>
        <h1 className="titulo" >Camisas do Projeto Tamar</h1>
      </header>
      <div className="conteudo">
        <img className="uniformes" src={uniformes} alt="Uniformes do Projeto Tamar" />
        <div className="descricao">
          <p>As camisas oficiais do Projeto Tamar estão disponíveis para compra! Ao adquirir uma camisa, você estará apoiando a conservação das tartarugas marinhas e ajudando a proteger esses incríveis animais. Escolha entre uma variedade de estilos e tamanhos, todos feitos com materiais sustentáveis. Vista a camisa do Projeto Tamar e faça parte dessa causa importante!</p>
          <a className="botao" href="https://www.tamar.org.br/">Compre Agora</a>
        </div>
        <img className="camiseta" src={camiseta} alt="Camiseta do Projeto Tamar" />
      </div>
      <footer>
        <p>© 2024 Projeto Tamar. Esse não é o site oficial. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
