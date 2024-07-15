import { Container } from "./styles";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";
import { api } from "../../services/api";
import imgPlaceholder from "../../assets/foodimage_placeholder.svg";

export function CardFood({ data, ...rest }) {
  const imgURL = data.foodimage
    ? `${api.defaults.baseURL}/files/${data.foodimage}`
    : imgPlaceholder;

  const formatValue = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  let [count, setCount] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (count < 0) {
    count = 0;
  }

  return (
    <Container {...rest} to="/details">
      <ButtonText
        icon={GoHeartFill}
        className="btnfavority"
        onClick={() => setIsFavorite(!isFavorite)}
        style={{ color: isFavorite ? "red" : "white" }}
      />

      <img src={imgURL} className="imgFood" />
      <ButtonText
        value={data.title}
        className="btnDetails"
        to={`/details/${data.id}`}
      />
      <p>{data.description}</p>
      <span>
        R$
        {parseFloat(data.cost).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
      <div>
        <ButtonText icon={AiOutlineMinus} onClick={() => setCount(count - 1)} />

        <h4>{count}</h4>

        <ButtonText icon={AiOutlinePlus} onClick={() => setCount(count + 1)} />
        <Button title="Incluir" className="buttonIncluir" />
      </div>
    </Container>
  );
}
