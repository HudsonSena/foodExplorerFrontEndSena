import styled from 'styled-components';

export const Container = styled.footer`
    grid-area: footer;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bgHeader};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 2.4rem 12.3rem;
    
    color: ${({ theme }) => theme.colors.txtPlaceholder};
    
    > h2 {
        font-size: 1.4rem;
    }

    > div {
        display: flex;
        gap: 1rem;
        align-items: center;

        h1 {
            font-size: 2.4rem;
        }
        
        svg > path {
            fill: ${({ theme }) => theme.colors.txtPlaceholder};
        }
        
    }

    @media (max-width: 920px){
        justify-content: space-evenly;
        padding: 3rem 2.8rem;

        div {
            h1 {
                font-size: 1.5rem;
            }
        }        

        > h2 {
            font-size: 1.2rem;
        }
    }
`;