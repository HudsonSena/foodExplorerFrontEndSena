import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  let [count, setCount] = useState(1);
  if (count < 1) {
    count = 1;
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  const formatValue = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <IoIosArrowBack />
          voltar
        </Link>
        {data && (
          <div className="sectionFood">
            <img
              src={`${api.defaults.baseURL}/files/${data.foodimage}`}
              alt=""
            />
            <div className="infoFood">
              <h1>{data.title}</h1>
              <p>{data.description}</p>

              {data.tags && (
                <section className="tagsline">
                  {data.tags.map((tag) => (
                    <Tag key={tag.id} title={tag.name} />
                  ))}
                </section>
              )}

              <div className="btnEditdiv">
                <div className="plusminus">
                  <ButtonText
                    icon={AiOutlineMinus}
                    onClick={() => setCount(count - 1)}
                  />

                  <h3>{formatValue(count)}</h3>

                  <ButtonText
                    icon={AiOutlinePlus}
                    onClick={() => setCount(count + 1)}
                  />
                </div>
                <Button
                  title={
                    "Incluir Prato - Valor: R$ " +
                    parseFloat(data.cost).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  }
                  className="btnEdit"
                />
              </div>
            </div>
          </div>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
