import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.main`
  grid-area: content;
  max-width: 100%;
  height: 100%;
  padding: 2.4rem 12.3rem;

  display: flex;
  flex-direction: column;
  gap: 4.2rem;

  color: ${({ theme }) => theme.colors.txtDescription};
  font-family: "Poppins";

  a {
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    font-size: 2.4rem;
    font-weight: bold;

    color: ${({ theme }) => theme.colors.txtBtn1};
  }

  .sectionFood {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    align-items: center;
  }

  img {
    width: 39rem;
    height: 39rem;
    border-radius: 50%;
    object-fit: contain;
  }

  .infoFood {
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 2.4rem;

    h1 {
      font-size: 4rem;
      font-weight: 500;
    }

    p {
      font-size: 2.4rem;
    }

    a {
      font-weight: 500;
    }

    .tagsline {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
      width: 100%;
    }

    > div {
      display: flex;
      align-items: center;
      margin-top: 2.4rem;
    }

    .btnEdit {
      width: auto;

      font-family: "Roboto";
      font-size: 1.4rem;

      white-space: nowrap;
    }
  }

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;

    img {
      width: 26rem;
      height: 26rem;
      border-radius: 50%;
    }

    .infoFood {
      align-items: center;

      p {
        text-align: center;
      }
      .tagsline {
        width: 90%;
        flex-wrap: wrap;
        gap: none;
        justify-content: space-evenly;
      }
    }
  }

  @media (max-width: 790px) {
    .sectionFood {
      display: flex;
      flex-direction: column;
    }
  }
`;
