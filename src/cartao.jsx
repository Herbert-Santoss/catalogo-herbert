import Perfil from "./perfil";

function Cartao(props) {
  return (
    <div className="cartao">
      <Perfil foto={props.foto} nome={props.titulo} />
      <h3>{props.titulo}</h3>
      <p>Preço: {props.preco}</p>
      <p>Desconto: {props.desconto}</p>
      <p>Validade: {props.validade}</p>
    </div>
  );
}

export default Cartao;