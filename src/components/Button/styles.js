import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    width: 100%;
    padding: 1.2rem 2.4rem 1.2rem 2.4rem;

    border-radius: .5rem;
    border: none;

    background-color: ${({ theme }) => theme.colors.bgBtn};
    color: ${({ theme }) => theme.colors.txtBtn1};

    font-family: 'Roboto';
    font-size: 1.4rem;

    white-space: nowrap;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    cursor: pointer;

    &:disabled {
        opacity: 0.5
    }
`;