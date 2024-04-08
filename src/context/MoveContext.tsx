import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { localApi as api } from "../services/api";
import { MyItem } from "./ItemContext";
// import { Requisicion } from "./RequisitionContext";
// import { Entry } from "./EntryContext";
// import { useAuth } from "./UserContext";

interface MoveProviderProps {
  children: ReactNode;
}

export interface Movement {
  moveId?: string;
  moveData: string;
  reference: string;
  move: string;
  item: MyItem;
  quantity: number;
  unit: string;
}

export interface moveInfo {
  moveData: string;
  reference: string;
  move: string;
  item: string;
  quantity: number;
  unit: string;
}

interface MoveContextData {
  movimientos: Movement[];
  request: Movement[];
  historico: Movement[];
  referencia: Movement[];
  MovementsList: () => void;
  NewMovement: (data: moveInfo) => void;
  ReqMove: (doc: string) => void;
  History: (itemId: string) => void;
  Reference: (reference: string) => void;
  moveByReq: (requestId: string) => void;
  moveEditor: (data: Movement) => void;
  moveDeletor: (id: string) => void;
}

export const MoveContext = createContext<MoveContextData>(
  {} as MoveContextData
);

const useMove = () => useContext(MoveContext);

const MoveProvider = ({ children }: MoveProviderProps) => {
  // const { company } = useAuth();
  const [movimientos, setMovimientos] = useState<Movement[]>([]);
  // const [movida, setMovida] = useState<Movement>({} as Movement);
  const [request, setRequest] = useState<Movement[]>([]);
  const [historico, setHistorico] = useState<Movement[]>([]);
  const [referencia, setReferencia] = useState<Movement[]>([]);

  const MovementsList = async () => {
    await api
      .get("/moves")
      .then((response) => {
        setMovimientos(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    MovementsList();
  }, []);

  const NewMovement = async (data: moveInfo) => {
    await api
      .post("/moves/register", data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const ReqMove = async (id: string) => {
    await api
      .get(`/moves/${id}`)
      .then((response) => console.log(response.data));
  };

  /* funcion para buscar el historico de un item */
  const History = async (itemId: string) => {
    await api
      .get(`/moves/history/${itemId}`)
      .then((response) => setHistorico(response.data))
      .catch((error) => console.log(error));
  };

  const Reference = async (reference: string) => {
    await api
      .get(`/moves/reference/${reference}`)
      .then((response) => setReferencia(response.data))
      .catch((error) => console.log(error));
  };

  const moveByReq = async (requestId: string) => {
    await api
      .get(`/moves/req/${requestId}`)
      .then((response) => setRequest(response.data));
  };

  const moveEditor = async (data: Movement) => {
    await api
      .patch(`/moves/${data.moveId}`, data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const moveDeletor = async (id: string) => {
    await api
      .delete(`/moves/${id}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <MoveContext.Provider
      value={{
        movimientos,
        request,
        historico,
        referencia,
        MovementsList,
        NewMovement,
        ReqMove,
        History,
        Reference,
        moveByReq,
        moveEditor,
        moveDeletor,
      }}
    >
      {children}
    </MoveContext.Provider>
  );
};

export { useMove, MoveProvider };
