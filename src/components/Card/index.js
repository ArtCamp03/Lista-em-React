// usando useState , para criaçao de aniçoes e estados
import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [valor, setValor] = useState(0);

    function Adicionar(){
        setValor(valor + 1);
    }

    function Remove(){
        setValor(valor - 1);
    }

    return(
        <div className="card">
            <div className="card-header">
                Meu primeiro Card 
            </div>
            <div className="card-body">
                <button 
                    className="btn btn-success "
                    onClick={Adicionar}
                >
                    Adicionar
                </button>

                <button 
                    className="btn btn-danger "
                    onClick={Remove}
                >
                    Remove
                </button>

                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;

//onClick={(event)=>{setValor(event.target.value + 1)}}>