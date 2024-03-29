import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { localApi as api } from "../services/api";
// import { Requisicion } from "./RequisitionContext";
// import { Entry } from "./EntryContext";
// import { useAuth } from "./UserContext";

interface MoveProviderProps {
  children: ReactNode;
}

export interface Movement {
  moveId?: string;
  moveData?: string;
  reference?: string;
  move: string;
  item: string;
  quantity: number;
  unit: string;
}

interface MoveContextData {
  movimientos: Movement[];
  request: Movement[];
  MovementsList: () => void;
  NewMovement: (data: Movement) => void;
  ReqMove: (doc: string) => void;
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
  const [movida, setMovida] = useState<Movement>({} as Movement);
  const [request, setRequest] = useState<Movement[]>([]);

  const MovementsList = async () => {
    await api
      .get("/moves")
      .then((response) => {
        setMovimientos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    MovementsList();
  }, []);

  const NewMovement = async (data: Movement) => {
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
        MovementsList,
        NewMovement,
        ReqMove,
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
