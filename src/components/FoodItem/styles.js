import styled from 'styled-components';

export const Container = styled.div`
    max-width: 25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme, isNew }) => isNew ? `.1rem solid ${({ theme }) => theme.colors.txtPlaceholder}` : theme.colors.txtPlaceholder};
    
    color: ${({ theme }) => theme.colors.txtBtn1};

    border: ${({ theme, isNew }) => isNew ? `.1rem dashed ${ theme.colors.txtPlaceholder}` : `1px solid ${ theme.colors.txtPlaceholder}`};
    border-radius: .5rem;

    .button-add, .button-delete {
        width: auto;
        background-color: transparent;
        font-family: 'Roboto';
        font-size: 1.4rem;

        white-space: nowrap;
    }
    
    input {
        color: ${({ theme }) => theme.colors.txtBtn1};
        background: transparent;

        border: none;

        padding: 0 .4rem;
        padding-left: 1.4rem;

        font-size: 1.6rem;
        font-family: 'Roboto';

        &::placeholder {
            color: ${({ theme }) => theme.colors.txtPlaceholder};
        }
    }    
`;