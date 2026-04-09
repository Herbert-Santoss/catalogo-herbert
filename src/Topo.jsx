import logo from  './imagem/logo.png';

function Topo(){
    return(

        <hearder>
        
            <div className="topo">
                <img src={logo} ></img>
                <h1>Multiverso Store HQ</h1>

            </div>
        </hearder>
    );
}

export default Topo;