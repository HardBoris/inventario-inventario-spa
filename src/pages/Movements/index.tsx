import { useEffect, useState } from "react";
import "./style.css";
import { BGbutton } from "../../components/BGbutton";
import BGmodal from "../../components/BGmodal";
import { BGinput } from "../../components/BG Input";

interface MoveProps {
  setTitulo: (titulo: string) => void;
}

export const Movements = ({ setTitulo }: MoveProps) => {
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    setTitulo("Movimientos");
  });

  const handleNew = () => {
    setIsNew(!isNew);
  };

  /* const titulos = [
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
  ]; */

  const movimientos = [
    {
      data: "25/02/24",
      referência: "2568",
      movimento: "Entrada",
      // código: "0250",
      // categoria: "midia",
      item: "adesivo pid blackout brilho",
      quantidade: 2,
      unidade: "bobina",
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
      unidade: "bobina",
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
      unidade: "bobina",
      // responsável: "Boris",
      // observações: "sin observaciones",
    },
  ];

  const llaves = Object.keys(movimientos[0]);

  return (
    <div className="movements">
      <div className="action">
        <BGbutton onClick={handleNew}>nuevo</BGbutton>
      </div>
      <div className="tabla">
        <div className="encabezado_tabla">
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
          {movimientos.map((item, index) => (
            <div key={index} className="fila">
              <div className="row_title">
                {llaves.map((item, index) => (
                  <div key={index} className="title_item">
                    {item}:
                  </div>
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
                <div className="data_item">
                  <div className="item_item">{item.item}</div>
                </div>
                <div className="data_item">
                  <div className="item_quantidade">{item.quantidade}</div>
                </div>
                <div className="data_item">
                  <div className="item_unidade">{item.unidade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BGmodal isOpen={isNew} setIsOpen={handleNew}>
        <div>
          <div className="fields">
            <div className="field-30">
              <BGinput name="data" placeholder="dd/mm/aaaa" label="Data" />
            </div>
            <div className="field-30">
              <BGinput
                name="referencia"
                placeholder="Número do documento"
                label="Referência"
              />
            </div>
            <div className="field-30">
              <BGinput
                name="movimento"
                placeholder="Entrada ou Saída"
                label="Movimento"
              />
            </div>
          </div>
          <div className="field-100">
            <BGinput name="item" placeholder="Descrição do item" label="Item" />
          </div>
          <div className="fields">
            <div className="field-30 outro-input">
              <BGinput
                name="quantidade"
                placeholder="Somente números"
                label="Quantidade"
              />
            </div>
            <div className="field-30 outro-input">
              <BGinput
                name="unidade"
                placeholder="Unidade de medida"
                label="Unidade"
              />
            </div>
            <div className="field-30 outro-btn">
              {/* <div className="action"> */}
              <BGbutton>Enviar</BGbutton>
              {/* </div> */}
            </div>
          </div>
        </div>
      </BGmodal>
    </div>
  );
};
