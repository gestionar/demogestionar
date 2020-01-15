import React from 'react';


const Articulo = (props) => (
    <div style={{border: "1px dashed var(--rosa)", borderRadius: 10}}>
        <h4 id={`art${props.id}`}>{props.titulo}</h4>
        <p>{props.texto}</p>
    </div>
);

export default Articulo;