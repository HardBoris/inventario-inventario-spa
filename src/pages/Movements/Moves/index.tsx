import { useState } from "react";
import { BGinput } from "../../../components/BG Input";
import { BGSelect } from "../../../components/BGSelect";
import { BGbutton } from "../../../components/BGbutton";
import { BGradio } from "../../../components/BGradio";
import { useForm } from "react-hook-form";
import { Movement } from "../../../context/MoveContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MyItem } from "../../../context/ItemContext";

const MoveSchema = yup.object().shape({
  moveData: yup.string().required(),
  reference: yup.string().required(),
  move: yup.string().required(),
  item: yup.string().required(),
  quantity: yup.number().required(),
  unit: yup.string().required(),
});

interface moveInfo {
  moveData: string;
  reference: string;
  move: string;
  item: string;
  quantity: number;
  unit: string;
}

interface NewMoveProps {
  itemList: MyItem[];
}

export const NewMove = ({ itemList }: NewMoveProps) => {
  const [moveType, setMoveType] = useState("");
  const handleChange = (e: any) => {
    setMoveType(e.target.value);
  };

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<moveInfo>({
    resolver: yupResolver(MoveSchema),
  });

  const envia = (data: moveInfo) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(envia)}>
      <div className="fields">
        <div className="field-30">
          <BGinput
            name="moveData"
            placeholder="dd/mm/aaaa"
            label="Data"
            register={register}
            error={errors.moveData?.message}
          />
        </div>
        <div className="field-30">
          <BGinput
            name="reference"
            register={register}
            placeholder="Número do documento"
            label="Referência"
            error={errors.reference?.message}
          />
        </div>
        <div className="field-30">
          <BGradio
            id="entrada"
            name="move"
            register={register}
            value="entrada"
            label="Entrada"
            checked={moveType === "entrada"}
            onChange={handleChange}
            error={errors.move?.message}
          />
          <BGradio
            id="saida"
            name="move"
            register={register}
            value="saída"
            label="Saída"
            checked={moveType === "saída"}
            onChange={handleChange}
            error={errors.move?.message}
          />
        </div>
      </div>
      <div className="field-100">
        <BGSelect
          name="item"
          label="Item"
          register={register}
          error={errors.item?.message}
        >
          <option>Selecione um item</option>
          {itemList &&
            itemList.map((item, index) => (
              <option key={index} value={item.itemId}>
                {item.item}
              </option>
            ))}
        </BGSelect>
      </div>
      <div className="fields">
        <div className="field-30 outro-input">
          <BGinput
            name="quantity"
            register={register}
            placeholder="Somente números"
            label="Quantidade"
            error={errors.quantity?.message}
          />
        </div>
        <div className="field-30 outro-input">
          <BGinput
            name="unit"
            register={register}
            placeholder="Unidade de medida"
            label="Unidade"
            error={errors.unit?.message}
          />
        </div>
        <div className="field-30 outro-btn">
          {/* <div className="action"> */}
          <BGbutton type="submit">Enviar</BGbutton>
          {/* </div> */}
        </div>
      </div>
    </form>
  );
};
