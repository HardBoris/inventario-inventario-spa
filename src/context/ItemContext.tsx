import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { localApi as api } from "../services/api";
// import { useAuth } from "./UserContext";

interface ItemProviderProps {
  children: ReactNode;
}

export interface MyItem {
  itemId?: string;
  item: string;
}

export interface ItemToBuy {
  item: MyItem;
  quantity: string;
  measurement: string;
  unitPrice?: string;
}

export interface Midia {
  itemId?: string;
  item: string;
  description?: string;
  defaultUnit?: string;
  minimunStock?: string;
  idealStock?: string;
  width?: number;
  height?: number;
  thickness?: number;
}

export interface Stuff {
  itemId?: string;
  item: string;
  description?: string;
  defaultUnit?: string;
  minimumStock?: string;
  idealStock?: string;
  packet?: string;
  unitPerPacket?: string;
}

export interface Tool {
  itemId?: string;
  item: string;
  description?: string;
  defaultUnit?: string;
  minimumStock?: number;
  idealStock?: number;
  toolModel?: string;
  toolPower?: string;
  producer?: string;
}

interface ItemContextData {
  item: MyItem;
  stock: MyItem[];
  ItemList: () => void;
}

export const ItemContext = createContext<ItemContextData>(
  {} as ItemContextData
);

const useItem = () => useContext(ItemContext);

const ItemProvider = ({ children }: ItemProviderProps) => {
  // const { company, token } = useAuth();
  const [stock, setStock] = useState<MyItem[]>([]);
  const [item, setItem] = useState<MyItem>({} as MyItem);

  const ItemList = async () => {
    await api
      .get(
        "/items" /* {
        headers: { authorization: `Bearer ${token}` },
      } */
      )
      .then((response) => setStock(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    ItemList();
  }, []);

  /* const ItemCreator = async (data: ItemToBuy) => {
    await api
      .post(
        "/items/register",
        data, {
        headers: { authorization: `Bearer ${token}` },
      }
      )
      .then((response) => setItem(response.data))
      .catch((error) => console.log(error));
  }; */

  return (
    <ItemContext.Provider
      value={{
        item,
        stock,
        ItemList,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export { useItem, ItemProvider };
