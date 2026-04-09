import Perfil from "./perfil";

function LaboratorioCartao(props) {
  return (
    <div className="cartao">
      <Perfil foto={props.foto} nome={props.nome} />
      <h3>{props.nome}</h3>
      <p>Preço: {props.preco}</p>
      <p>Universo: {props.universo}</p>
      <p>Descrição: {props.descricao}</p>
    </div>
  );
}

export default LaboratorioCartao;