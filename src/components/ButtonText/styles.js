import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    border: none;

    background-color: transparent;
    color: ${({ theme }) => theme.colors.txtDescription};

    font-family: 'Poppins';

    white-space: nowrap;

    display: flex;
    
    &:disabled {
        opacity: 0.5
    }
`;