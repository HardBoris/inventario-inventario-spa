interface TableHeadProps {
  titulos: string[];
}
export const BGtableHead = ({ titulos }: TableHeadProps) => {
  return (
    <>
      <div className="encabezado_tabla">
        {titulos &&
          titulos.map((item, index) => (
            <div key={index} className="titulo_tabla">
              <div className={`item_${item}`}>{item}</div>
            </div>
          ))}
      </div>
    </>
  );
};
