import React from 'react';
import './InicioPag.css';
import BotonesIncio from '../componentes/BotonesInicio'

const InicioPag = (props) => {
  return (
    <div className="Inicio-grid">
      <div className="Inicio-detalle">
        <h1 style={{"color": "var(--test)"}}>
          Muestra del proyecto de desarrollo web para la asistencia en la gestión de recursos empresariales
        </h1>
        <h4>
          Objetivos
        </h4>
        <p>- Crear un front de muestra de la herramienta web para conseguir clientes, colaboradores e inversores<br />
          - Implementar normas de estandarización que faciliten el desarrollo en equipo<br />
          - Detallar el plan a largo plazo, el propósito y la visión del proyecto general<br />
        </p>
        <section>
          <div style={{"color": "var(--mostaza)",
            "backgroundImage": "linear-gradient(#eef, #eff)"}}>
            <a href="https://github.com/gestionar/demogestionar/blob/master/README.md">Instrucciones del repositorio</a>
          </div>
          <p>Las props van a venir del componente de más alto nivel "App". Ver como referenciar secciones de la página usando Routes</p>
          <hr />
        </section>
        <code style={{"color": "var(--naranja)"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam a
          neque. Beatae culpa minima quisquam! Voluptates totam autem cupiditate natus temporibus
          perspiciatis nemo earum. Voluptatum nam tempora asperiores numquam.
        </code>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut eaque ducimus, quam beatae itaque, quia eveniet culpa nostrum nisi dolorem asperiores mollitia! Aliquam quasi magnam inventore commodi nostrum animi molestias voluptatem accusantium aspernatur culpa officia sed beatae, eveniet, tempora enim eligendi, provident voluptas. In quasi, totam fugiat sunt, minima ducimus quibusdam ab sed cum minus velit eius doloribus molestias impedit natus debitis facere quaerat commodi adipisci cupiditate provident qui magnam dolores. Sint modi dignissimos asperiores culpa reiciendis omnis nisi quas assumenda, nobis, sit non veritatis autem hic nesciunt vitae unde inventore rerum a recusandae deserunt. Ipsa dolor vel, deserunt repellendus sit eligendi eos cum consectetur, atque repellat maxime voluptas natus aliquid voluptatibus ab quasi illum sunt nihil ea blanditiis odio praesentium fugiat consequatur. Sapiente iure, quidem alias quasi soluta vel aut cupiditate, error laboriosam illum minima aperiam earum excepturi? Impedit veniam iste iusto officiis ipsam. Culpa esse officiis adipisci praesentium saepe aliquam quos, nam nulla accusantium tempore voluptatem voluptas architecto cumque numquam soluta aut necessitatibus nobis totam cupiditate. Ipsa, tempora. Quisquam enim eum facilis? Officia odit eaque ab culpa facere minima magnam provident libero vel fugit. Vitae voluptatibus, harum doloremque dolorum numquam exercitationem quos eum. Illum molestias magni non accusamus voluptatem optio excepturi tempore quo soluta atque eos ab, nesciunt id cumque at dicta libero sed officiis alias asperiores dignissimos voluptatibus! Rerum eaque molestias itaque tenetur reprehenderit minima, ea delectus quam. Sed sapiente hic inventore pariatur eum libero accusantium blanditiis excepturi dignissimos consequatur nobis magnam autem tempore, cum, alias mollitia est aliquam, maxime enim. Fugiat quis deserunt debitis? Dolore blanditiis sunt et labore sequi, qui reprehenderit ullam ipsa ex, quaerat enim eum! Rem possimus minus consequatur natus et eius voluptas. Tempora accusantium, voluptatem accusamus ab quidem deleniti ex necessitatibus asperiores natus aliquam cumque, perspiciatis incidunt porro quam magni doloribus maiores!</p>

      </div>

      <div className="Inicio-indice">
        <h3 style={{"color": "var(--grisoscuro)"}}>Índice</h3>
        <BotonesIncio opciones={props.menuInicio}/>
      </div>
      
      <div className="Inicio-pie">
        <p>Anterior</p><p>Pie de página</p><p>Siguiente</p>
      </div>  
    </div>
  );
};

export default InicioPag;