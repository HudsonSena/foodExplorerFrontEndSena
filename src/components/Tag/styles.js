import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.bgTags};
    border-radius: .5rem;
    padding: .4rem .5rem;
    white-space: nowrap;
    font-size: 1.4rem;
`;