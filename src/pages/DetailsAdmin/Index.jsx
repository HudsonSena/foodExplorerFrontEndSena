import { Container, Content } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

export function DetailsAdmin() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <HeaderAdmin />
      <Content>
        <Link to="/">
          <IoIosArrowBack />
          voltar
        </Link>
        {data && (
          <div className="sectionFood">
            <img
              src={`${api.defaults.baseURL}/files/${data.foodimage}`}
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
                <Button
                  title={
                    "Editar Prato - Valor: R$ " +
                    parseFloat(data.cost).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  }
                  to={`/updatefood/${data.id}`}
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
