import { useEffect } from "react";
import { BGtableHead } from "../../components/BGtableHead";
import { useMove } from "../../context/MoveContext";

interface HistoryProps {
  setTitulo: (titulo: string) => void;
}

export const ItemHistory = () => {
  const { historico } = useMove();
  const titulos = ["Data", "Referência", "Movimento", "Quantidade", "Unidade"];

  return (
    <>
      <header>
        <h1>Histórico</h1>
      </header>
      <main className="item_history">
        <div className="table">
          <BGtableHead titulos={titulos} />
        </div>
      </main>
      <footer></footer>
    </>
  );
};
