import styled from 'styled-components';

export const Container = styled.textarea`
    max-width: 85vw;
    min-width: 50rem;

    min-height: 10rem;

    border: none;
    background-color: ${({ theme }) => theme.colors.bgIpt02};
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.txtPlaceholder};

    padding: 14px;

    font-family: 'Roboto';
    font-size: 16px;
`;