import { useEffect, useState } from "react";
import "./style.css";
import { BGbutton } from "../../components/BGbutton";
import BGmodal from "../../components/BGmodal";
import { MyItem, useItem } from "../../context/ItemContext";
import { NewMove } from "./Moves";
import { Movement, useMove } from "../../context/MoveContext";
import { ItemHistory } from "../History";
import { BGtableHead } from "../../components/BGtableHead";

interface MoveProps {
  setTitulo: (titulo: string) => void;
}

export const Movements = () => {
  const { stock } = useItem();
  const { MovementsList, movimientos } = useMove();

  const [isNew, setIsNew] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [itemList, setItemList] = useState<MyItem[]>([]);
  const [moves, setMoves] = useState<Movement[]>([]);

  useEffect(() => {
    setItemList(stock);
  }, [stock]);

  const NewEntry = () => {
    setIsNew(!isNew);
  };

  const handleHistory = () => {
    setOpenHistory(!openHistory);
  };

  const filteredItem = (id: string) => {};

  /* useEffect(() => {
    MovementsList();
  }, []); */

  const movimentos_falsos = [
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

  const llaves = Object.keys(movimentos_falsos[0]);

  // console.log(movimientos);

  return (
    <>
      <header>
        <h1>Movimentos</h1>
      </header>
      <main className="movements">
        <div className="action">
          <BGbutton onClick={NewEntry}>Novo Movimento</BGbutton>
        </div>
        <div className="tabla">
          <BGtableHead titulos={llaves} />
          {/* <div className="encabezado_tabla">
          <div className="titulo_tabla">
            <div className="item_data">{llaves[0]}</div>
          </div>
          <div className="titulo_tabla">
            <div className="item_referência">{llaves[1]}</div>
          </div>
          <div className="titulo_tabla">
            <div className="item_movimento">{llaves[2]}</div>
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
        </div> */}
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
                    <div className="item_data">{item.moveData}</div>
                  </div>
                  <div className="data_item">
                    <div className="item_referência">{item.reference}</div>
                  </div>
                  <div className="data_item">
                    <div className="item_movimento">{item.move}</div>
                  </div>
                  <div className="data_item">
                    <div className="item_item" onClick={() => handleHistory()}>
                      {item.item.item}
                    </div>
                  </div>
                  <div className="data_item">
                    <div className="item_quantidade">{item.quantity}</div>
                  </div>
                  <div className="data_item">
                    <div className="item_unidade">{item.unit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BGmodal isOpen={isNew} setIsOpen={NewEntry}>
          <NewMove itemList={itemList} close={NewEntry} />
        </BGmodal>
        {/* <BGmodal isOpen={openHistory} setIsOpen={handleHistory}>
        <ItemHistory />
      </BGmodal> */}
      </main>
      <footer></footer>
    </>
  );
};
