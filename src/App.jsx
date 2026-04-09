import { useState } from 'react';
import './App.css';

import { FaTags, FaMask, FaShieldAlt } from 'react-icons/fa';

import destaqueHQ from './imagem/xmen.jpg';

import Cartao from './cartao';
import ProfessorCartao from './cartao_prof.jsx';
import LaboratorioCartao from './cartao_laboratorio.jsx';

import pessoas from './dados_pessoas.js';
import professores from './dados_professores.js';
import laboratorios from './dados_Laboratorios.js';

import Topo from './Topo.jsx';
import Fim from './fim.jsx';
import Slideshow from './Slideshow';

function App() {
  const [telaAtual, setTelaAtual] = useState('home');

  const obterDados = () => {
    if (telaAtual === 'pessoas') return pessoas;
    if (telaAtual === 'professor') return professores;
    if (telaAtual === 'laboratorios') return laboratorios;
    return [];
  };

  const dadosAtuais = obterDados();

  return (
    <>
      <Topo />

      <div className="container">
        {telaAtual === 'home' ? (
          <div className="home-screen">
            <Slideshow />

            <h2 className="titulo-home">Destaque da semana</h2>

            <div className="destaque-card">
              <img
                src={destaqueHQ}
                alt="X-Men: Deus Ama, O Homem Mata"
                className="destaque-imagem"
              />

              <div className="destaque-texto">
                <p className="destaque-revista">
                  X-Men: Deus Ama, O Homem Mata <span>(Marvel Graphic Novel)</span>
                </p>

                <p className="promocao-home">
                  50% de desconto na segunda revista
                </p>
              </div>
            </div>

            <div className="grid-menu">
              <button onClick={() => setTelaAtual('pessoas')} className="card-menu">
                <span className="icon"><FaTags /></span>
                <h3>Promoção</h3>
              </button>

              <button onClick={() => setTelaAtual('professor')} className="card-menu">
                <span className="icon"><FaMask /></span>
                <h3>Marvel</h3>
              </button>

              <button onClick={() => setTelaAtual('laboratorios')} className="card-menu">
                <span className="icon"><FaShieldAlt /></span>
                <h3>DC</h3>
              </button>
            </div>
          </div>
        ) : (
          <div className="listagem-container">
            <div className="header-listagem">
              <button onClick={() => setTelaAtual('home')} className="btn-voltar">
                ← Voltar ao Início
              </button>

              <h2 className="titulo-secao">
                {telaAtual === 'pessoas'
                  ? 'Promoções'
                  : telaAtual === 'professor'
                  ? 'Marvel'
                  : 'DC'}
              </h2>
            </div>

            <div className="grid-cards">
              {dadosAtuais.map((item) =>
                telaAtual === 'pessoas' ? (
                  <Cartao key={item.id} {...item} />
                ) : telaAtual === 'professor' ? (
                  <ProfessorCartao key={item.id} {...item} />
                ) : (
                  <LaboratorioCartao key={item.id} {...item} />
                )
              )}
            </div>
          </div>
        )}
      </div>

      <Fim />
    </>
  );
}

export default App;