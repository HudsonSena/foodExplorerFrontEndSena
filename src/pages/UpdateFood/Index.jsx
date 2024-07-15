import { useState, useEffect } from "react";
import { Container, Content, Form, Avatar } from "./styles";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { FoodItem } from "../../components/FoodItem";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { api } from "../../services/api";
import foodPlaceholder from "../../assets/foodimage_placeholder.svg";
import { FiUpload } from "react-icons/fi";

export function UpdateFood() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [cost, setCost] = useState("");
  const [foodImage, setFoodImage] = useState(foodPlaceholder);
  const [foodImageFile, setFoodImageFile] = useState(null);

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await api.get(`/foods/${params.id}`);
        setData(response.data);

        setTitle(response.data.title);
        setCategory(response.data.category);
        setTags(response.data.tags.map(tag => tag.name));
        setCost(response.data.cost);
        setDescription(response.data.description);

        if (response.data.foodimage) {
          setFoodImage(`${api.defaults.baseURL}/files/${response.data.foodimage}`);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do prato:", error);
      }
    }

    fetchNote();
  }, [params.id]);

  function handleChangeImgFood(event) {
    const file = event.target.files[0];
    setFoodImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setFoodImage(imagePreview);
  }

  function handleAddTag() {
    if (newTag.trim() !== "") {
      setTags((prevState) => [...prevState, newTag]);
      setNewTag("");
    } else {
      alert("Você deixou em branco!");
    }
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleUpdateFood() {
    try {
      if (!title.trim()) {
        return alert("Você deixou o título em Branco!");
      }

      if (!category) {
        return alert("Você não escolheu a categoria!");
      }

      if (newTag) {
        return alert("Você deixou um ingrediente em branco ou não adicionou!");
      }

      if (!cost) {
        return alert("Você não colocou o valor do prato!");
      }

      if (!description.trim()) {
        return alert("Você deixou a descrição em Branco!");
      }

      const foodData = {
        title,
        category,
        description,
        tags,
        cost,
      };

      const response = await api.put(`/foods/${params.id}`, foodData);

      if (response.status === 200) {
        alert("Prato atualizado com sucesso!");

        if (foodImageFile) {
          const imageUploadForm = new FormData();
          imageUploadForm.append("foodimage", foodImageFile);

          const imageResponse = await api.post(`/foods/${params.id}/upload`, imageUploadForm);

          if (imageResponse.status === 200) {
            alert("Imagem atualizada com sucesso!");
          } else {
            throw new Error(`Erro no upload da imagem: ${imageResponse.statusText}`);
          }
        }

        navigate(-1);
      } else {
        throw new Error(`Erro na atualização: ${response.statusText}`);
      }
    } catch {
      alert("Erro ao atualizar prato. Verifique os detalhes e tente novamente.");
    }
  }

  async function handleRemoveFood() {
    const confirm = window.confirm("Deseja realmente deletar este prato?");

    if (confirm) {
      try {
        await api.delete(`/foods/${params.id}`);
        navigate("/");
      } catch (error) {
        console.error("Erro ao deletar prato:", error);
        alert("Erro ao deletar prato. Tente novamente.");
      }
    }
  }

  return (
    <Container>
      <HeaderAdmin />
      <Content>
        <Link to="/">
          <IoIosArrowBack />
          voltar
        </Link>

        <h1>Editar prato</h1>

        {data && (
          <Form>
            <div className="info01">
              <div>
                <label htmlFor="inputImg">Imagem do prato</label>
                <section>
                  <img src={foodImage} alt="Food" />
                  <Avatar>
                    <FiUpload size={30} />
                    <label htmlFor="inputImg">Selecione imagem</label>
                    <input
                      id="inputImg"
                      type="file"
                      onChange={handleChangeImgFood}
                    />
                  </Avatar>
                </section>
              </div>
              <div>
                <label htmlFor="inputName">Nome</label>
                <Input
                  id="inputName"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="inputCategory">Categoria</label>
                <Input
                  id="inputCategory"
                  type="search"
                  list="category"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                />
                <datalist id="category">
                  <option value="Refeições" />
                  <option value="Sobremesas" />
                  <option value="Bebidas" />
                </datalist>
              </div>
            </div>
            <div className="info02">
              <div>
                <label htmlFor="inputIngred">Ingredientes</label>
                <div className="newTags">
                  <FoodItem
                    isNew
                    placeholder="Adicionar"
                    onChange={(e) => setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag}
                  />
                  {tags.map((tag, index) => (
                    <FoodItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))}
                </div>
              </div>
              <div className="sectioncost">
                <label htmlFor="inputCost">Preço</label>
                <Input
                  id="inputCost"
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  step="0.01"
                  min="0.00"
                  max="10000.00"
                />
              </div>
            </div>
            <div className="info03">
              <label htmlFor="inputDescription">Descrição</label>
              <Textarea
                id="inputDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="deleteUpdate">
              <Button title="Excluir prato" id="deleteFood" onClick={handleRemoveFood} />
              <Button
                title="Salvar Alterações"
                id="addFood"
                onClick={handleUpdateFood}
              />
            </div>
          </Form>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
