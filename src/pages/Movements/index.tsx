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
  return (
    <div className="movements">
      <header>
        <h1>Movimentos</h1>
      </header>
      <main>
        <div className="tabla">
          <div className="encabezado_tabla">
            {titulos.map((item, index) => (
              <div key={index} className="titulo_tabla">
                {item}
              </div>
            ))}
          </div>
          <div className="cuerpo_tabla">
            <div className="fila">
              {titulos.map((item, index) => (
                <div key={index} className="caja">
                  <div className="titulo_caja">{item}:</div>
                  <div className="cuerpo_caja">cuerpo</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h3>pie de pagina</h3>
      </footer>
    </div>
  );
};
