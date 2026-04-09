import { useState } from "react";
import { useEffect } from "react";
import imagem1 from "./imagem/banner1.png";
import imagem2 from "./imagem/banner2.png";
import imagem3 from "./imagem/banner3.png";
import imagem4 from "./imagem/banner4.png";
import imagem5 from "./imagem/banner5.png";
import imagem6 from "./imagem/banner6.png";

function Slideshow() {
    const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]; 
    const [indiceAtual, setIndiceAtual] = useState(0); 

    const proximoSlide = () => {
       
        setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    };

    const voltarSlide = () => {
      
        setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
    };

        useEffect(() => {
            const interval = setInterval (proximoSlide, 2000);
            return () => clearInterval (interval);
        }, []);

    
   
    return (
        <div className="slideshow">
            <img 
                src={imagens[indiceAtual]} 
                alt={`Imagem ${indiceAtual + 1}`} 
                className="banner"
            />
            <div className="controles">
                <button onClick={voltarSlide}>Anterior</button>
                <button onClick={proximoSlide}>Próximo</button>
            </div> 
        </div>



    );
}

export default Slideshow;