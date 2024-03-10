import "./style.css";

export const Movements = () => {
  const titulos = [
    "data",
    "referência",
    "Movimento",
    "Código",
    "Categoria",
    "Item",
    "Quantidade",
    "Unidade",
    "Responsável",
    "Observações",
  ];

  const movimientos = [
    {
      data: "25/02/24",
      referência: "2568",
      movimento: "Entrada",
      // código: "0250",
      // categoria: "midia",
      item: "adesivo pid blackout brilho",
      quantidade: 2,
      unidade: "bovina",
      // responsável: "Boris",
      // observações: "sin observaciones",
    },
    {
      data: "25/02/24",
      referência: "2568",
      movimento: "Entrada",
      // código: "0250",
      // categoria: "midia",
      item: "adesivo pid blackout brilho",
      quantidade: 2,
      unidade: "bovina",
      // responsável: "Boris",
      // observações: "sin observaciones",
    },
    {
      data: "25/02/24",
      referência: "2568",
      movimento: "Entrada",
      // código: "0250",
      // categoria: "midia",
      item: "adesivo pid blackout brilho",
      quantidade: 2,
      unidade: "bovina",
      // responsável: "Boris",
      // observações: "sin observaciones",
    },
  ];

  const llaves = Object.keys(movimientos[0]);

  return (
    <div className="movements">
      <header>
        <h1>Movimentos</h1>
      </header>
      <main>
        <button>nuevo</button>
        <div className="tabla">
          <div className="encabezado_tabla">
            {/* {llaves.map((item, index) => (
              <div key={index} className="titulo_tabla">
                {item}
              </div>
            ))} */}
            <div className="titulo_tabla">
              <div className="item_data">{llaves[0]}</div>
            </div>
            <div className="titulo_tabla">
              <div className="item_referencia">{llaves[1]}</div>
            </div>
            <div className="titulo_tabla">
              <div className="item_movimiento">{llaves[2]}</div>
            </div>
            <div className="titulo_tabla">
              <div className="item_item">{llaves[3]}</div>
            </div>
            <div className="titulo_tabla">
              <div className="item_quantidade">{llaves[4]}</div>
            </div>
            <div className="titulo_tabla">
              <div className="item_unidade">{llaves[5]}</div>
            </div>
          </div>
          <div className="cuerpo_tabla">
            {/* <div className="fila">
              {titulos.map((item, index) => (
                <div key={index} className="caja">
                  <div className="titulo_caja">{item}:</div>
                  <div className="cuerpo_caja">cuerpo</div>
                </div>
              ))}
            </div> */}
            {/* <div> */}
            {movimientos.map((item, index) => (
              <div key={index} className="fila">
                <div className="row_title">
                  {llaves.map((item, index) => (
                    // <div key={index} className="caja">
                    <div className="title_item">{item}:</div>
                    // </div>
                  ))}
                </div>
                <div className="row_data">
                  <div className="data_item">
                    <div className="item_data">{item.data}</div>
                  </div>
                  <div className="data_item">
                    <div className="item_referencia">{item.referência}</div>
                  </div>
                  <div className="data_item">
                    <div className="item_movimiento">{item.movimento}</div>
                  </div>
                  {/* <div className="data_item">{item.código}</div> */}
                  {/* <div className="data_item">{item.categoria}</div> */}
                  <div className="data_item">
                    <div className="item_item">{item.item}</div>
                  </div>
                  <div className="data_item">
                    <div className="item_quantidade">{item.quantidade}</div>
                  </div>
                  <div className="data_item">
                    <div className="item_unidade">{item.unidade}</div>
                  </div>
                  {/* <div className="data_item">{item.responsável}</div> */}
                  {/* <div className="data_item">{item.observações}</div> */}
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </main>
      <footer>
        <h3>pie de pagina</h3>
      </footer>
    </div>
  );
};
