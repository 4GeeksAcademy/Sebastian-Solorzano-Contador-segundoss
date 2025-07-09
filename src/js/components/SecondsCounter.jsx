import React from "react";
import Home from "./Home";

const Counter = (props) => {
    return(
        <div className=" cajas  p-3 bg- text-light border-danger rounded-2 text-center">{ props.tiempo}</div>
    
    )
}

const SecondsCounter = (props) => {

    return(

        <div className="contenedor  d-flex justify-content-center align-items-center gap-2 mt-5 bg-dark">
            <div className=" icono"> <i className="fa-solid fa-clock"></i></div>
            
        
    <Counter tiempo= {Math.floor((props.seconds % 1000000) / 100000)}></Counter>
    <Counter tiempo= {Math.floor((props.seconds % 100000) / 10000)}></Counter>
    <Counter tiempo= {Math.floor((props.seconds % 10000) / 1000)}></Counter>
    <Counter tiempo= {Math.floor((props.seconds % 1000) / 100)}></Counter>
    <Counter tiempo= {Math.floor((props.seconds % 100) / 10)}></Counter>
    <Counter tiempo= {Math.floor((props.seconds % 10) / 1)}></Counter>
    

    </div>

    
);
};


export default SecondsCounter;
