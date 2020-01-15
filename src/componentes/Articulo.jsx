import React from 'react';

const artEstilo = {
    border: "1px solid var(--rosa)",
    borderRadius: 10,
    padding: 5,
    margin: 6
};

const Articulo = (props) => (
    <div style={artEstilo}>
        <h4 id={`art${props.id}`}>{props.titulo}</h4>
        <p>{props.texto}</p>
    </div>
);

export default Articulo;