import { Container, Content } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import imgHome from "../../assets/home.svg";
import { CardFoodAdmin } from "../../components/CardFoodAdmin";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function HomeAdmin() {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      const [titleResponse, tagsResponse] = await Promise.all([
        api.get(`/foods?title=${search}`),
        api.get(`/foods?tags=${search}`)
      ]);

      const combinedFoods = [
        ...titleResponse.data,
        ...tagsResponse.data
      ];

      // Remove duplicates
      const uniqueFoods = Array.from(new Set(combinedFoods.map(food => food.id)))
        .map(id => {
          return combinedFoods.find(food => food.id === id);
        });

      setFoods(uniqueFoods);
    }

    fetchFoods();
  }, [search]);

  return (
    <Container>
      <HeaderAdmin onChange={(e) => setSearch(e.target.value)} />
      <Content>
        <div className="intro">
          <img src={imgHome} alt="" />
          <div className="infointro">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <h2>Refeições</h2>

        <div>
          <Swiper
            className="wiperId"
            modules={[Navigation, A11y, Pagination]}
            breakpoints={{
              1800: { slidesPerView: 4.5 },
              1500: { slidesPerView: 4 },
              1300: { slidesPerView: 3 },
              1100: { esPerView: 2.5 },
              700: { slidesPerView: 2 },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation
          >
            {foods
              .filter((food) => food.category === "Refeições")
              .map((food) => (
                <SwiperSlide>
                  <CardFoodAdmin key={String(food.id)} data={food} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <h2>Sobremesas</h2>

        <div>
          <Swiper
            className="wiperId"
            modules={[Navigation, A11y, Pagination]}
            breakpoints={{
              1800: { slidesPerView: 4.5 },
              1500: { slidesPerView: 4 },
              1300: { slidesPerView: 3 },
              1100: { esPerView: 2.5 },
              700: { slidesPerView: 2 },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation
          >
            {foods
              .filter((food) => food.category == "Sobremesas")
              .map((food) => (
                <SwiperSlide>
                  <CardFoodAdmin key={String(food.id)} data={food} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <h2>Bebidas</h2>

        <div>
          <Swiper
            className="wiperId"
            modules={[Navigation, A11y, Pagination]}
            breakpoints={{
              1800: { slidesPerView: 4.5 },
              1500: { slidesPerView: 4 },
              1300: { slidesPerView: 3 },
              1100: { esPerView: 2.5 },
              700: { slidesPerView: 2 },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation
          >
            {foods
              .filter((food) => food.category === "Bebidas")
              .map((food) => (
                <SwiperSlide>
                  <CardFoodAdmin key={String(food.id)} data={food} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
