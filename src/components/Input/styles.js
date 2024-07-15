import styled from 'styled-components';

export const Container = styled.div`
    width: auto;

    border: none;
    background-color: ${({ theme }) => theme.colors.bgIpt01};
    border-radius: .5rem;

    padding-left: 1.4rem;

    color: ${({ theme }) => theme.colors.txtPlaceholder};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    input {
        width: 100%;
        height: 100%;
        background: transparent;
        color: ${({ theme }) => theme.colors.txtPlaceholder};

        border: none;
        border-radius: .5rem;
        padding: 1.4rem;

        font-family: 'Roboto';
        font-size: 1.6rem;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;