import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 300px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.bgCard};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding: 24px;
  padding-top: 0px;
  margin: auto;

  border-radius: 0.8rem;
  z-index: -1;

  .btnfavority {
    position: relative;
    right: -124px;
    top: 16px;
  }

  .btnfavority:hover {
    scale: 1.1;
  }

  .imgHeart {
    width: 24px;
  }

  img {
    width: 17.6rem;
    height: 17.6rem;
    object-fit: contain;
    border-radius: 50%;
  }

  .btnDetails {
    font-size: 24px;
  }

  .btnDetails:hover {
    scale: 1.1;
  }

  p {
    margin: auto;
    width: 256px;
    height: 45px;

    text-align: center;
    overflow: hidden;

    font-size: 14px;
  }

  span {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.txtCostAdm};
  }

  div {
    display: flex;
    flex-direction: row;
    height: 48px;
    gap: 16px;

    align-items: center;

    h4 {
      font-size: 20px;
    }

    .buttonIncluir {
      padding: 12px 24px;
    }
  }
`;
