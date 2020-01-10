import React from 'react';

const ConfigPag = (props) => {
    return (
      <>
        {props.colores.map(col => (
          <>
            <div style={{backgroundImage: `linear-gradient(var(--${col}), #000`}}>
              <h1 style={{background: `var(--${col})`, color:"#000"}}>{col}</h1>
              <h1 style={{color: `var(--${col})`}}>{col}</h1>
            </div>
            <div style={{backgroundImage: `linear-gradient(var(--${col}), #fff`}}>
              <h1 style={{background: `var(--${col})`, color:"#fff"}}>{col}</h1>
              <h1 style={{color: `var(--${col})`}}>{col}</h1>
            </div>
            <div>
              <h1 style={{backgroundImage: `linear-gradient(var(--${col}), #fff`}}>{col}</h1>
              <h1 style={{
                backgroundImage: `linear-gradient(#fff, var(--${col})`,
                color: `var(--${col})`
              }}>{col}</h1>
            </div>
          </>
        ))}
      </>
    )
  };
  
  export default ConfigPag;