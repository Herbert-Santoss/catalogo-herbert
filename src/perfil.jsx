function Perfil(props) {
    return (
        <img
        src={props.foto}
        alt={props.nome}
        className="foto"
        />

    );
}

export default Perfil;