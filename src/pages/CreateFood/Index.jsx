import { useState } from "react";
import { Container, Content, Form, Avatar } from "./styles";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { FoodItem } from "../../components/FoodItem";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { api } from "../../services/api";
import { FiUpload } from "react-icons/fi";

export function CreateFood() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [cost, setCost] = useState("");
  const [foodImage, setFoodImage] = useState([]);
  const [foodImageFile, setFoodImageFile] = useState(null);

  function handleChangeFoodImage(event) {
    const file = event.target.files[0];
    setFoodImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setFoodImage(imagePreview);
  }

  const navigate = useNavigate();

  function handleAddTag() {
    if (!newTag) {
      alert("Você deixou em branco!");
    } else {
      setTags((prevState) => [...prevState, newTag]);
      setNewTag("");
    }

  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewFood() {
    try {
      if (!foodImageFile) {
        return alert("Você deixou sem imagem!");
      }

      if (!title) {
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

      const fileUploadForm = new FormData();

      if (foodImageFile) {
        fileUploadForm.append("foodimage", foodImageFile);
      }

      fileUploadForm.append("title", title);
      fileUploadForm.append("category", category);
      fileUploadForm.append("description", description);
      tags.forEach((tag) => fileUploadForm.append("tags[]", tag));
      fileUploadForm.append("cost", cost);

      await api.post("/foods", fileUploadForm);

      alert("Prato cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar prato:", error);
      alert(
        "Erro ao cadastrar prato. Verifique os detalhes e tente novamente."
      );
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

        <h1>Adicionar prato</h1>

        <Form>
          <div className="info01">
            <div>
              <label htmlFor="inputImg">Imagem do prato</label>
              <section>
                <img src={foodImage} />
                <Avatar>
                  <FiUpload size={30} />
                  <label htmlFor="inputImg">Selecione imagem</label>
                  <input
                    id="inputImg"
                    type="file"
                    onChange={handleChangeFoodImage}
                  />
                </Avatar>
              </section>
            </div>
            <div>
              <label htmlFor="inputName">Nome</label>
              <Input
                id="inputName"
                type="text"
                placeholder="Ex.: Salada Ceasar"
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
                placeholder="R$ 00,00"
                step="0.00"
                min="0.00"
                max="10000.00"
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
          </div>
          <div className="info03">
            <label htmlFor="inputDescription">Descrição</label>
            <Textarea
              id="inputDescription"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="deleteUpdate">
            <Button
              title="Salvar Prato"
              disabled={true}
              id="addFood"
              onClick={handleNewFood}
            />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
