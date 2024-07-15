import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;
`;

export const Content = styled.main`
    grid-area: content;
    max-width: 98vw;
    height: 100%;

    padding: 2rem 12.3rem;    

    display: flex;
    flex-direction: column;
    gap: 6.2rem;

    color: ${({ theme }) => theme.colors.txtBtn1};
    font-family: 'Poppins';

    h2 {
        font-size: 3.2rem;
        font-weight: 400;
    }

    .wiperId {
        --swiper-navigation-color: white;

        .swiper-button-prev {
            box-shadow: -10px 0px 100px 100px ${({ theme }) => theme.colors.bgPages};
            background-color: ${({ theme }) => theme.colors.bgPages};
        }

        .swiper-button-next {
            box-shadow: 10px 0px 100px 100px ${({ theme }) => theme.colors.bgPages};
            background-color: ${({ theme }) => theme.colors.bgPages};
        }
    }
    
    > .intro {
        height: 26rem;
        border-radius: .8rem;
        background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        margin-top: 17.5rem;
        padding: 10rem;

        position: relative;
        
        > img {
            width: 63.2rem;
            position: absolute;
            bottom: 0rem;
            left: -5.3rem;            
        }

        .infointro {
            width: 50%;
        }

        h1 {
            font-size: 4rem;
        }

        p {
            font-size: 1.4rem;
        }        
    }

    > section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1350px) {
        .intro {
            img {
                width: 40rem;
            }
        }
    }
    
    @media (max-width: 920px) {
        width: 96vw;
        padding: 2.4rem;

        .wiperId {

            .swiper-button-prev, .swiper-button-next {
                box-shadow: none;
            }
        }

        .intro {
            height: 12rem;
            margin-top: 4.4rem;

            padding: 2rem;

            .infointro {
                width: 50%;
            }
            
            h1 {
                font-size: 1.8rem;
            }

            p {
                font-size: 1.2rem;
            }
            
            img {
                width: 19.1rem;
                height: 14.9rem;

                left: -1.5rem;
                bottom: -1.3rem;
            }
        }
        
        h2 {
            font-size: 1.8rem;
        }
    }
`;