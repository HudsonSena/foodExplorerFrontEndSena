import { styled } from 'styled-components';

export const Container = styled.header`
    z-index: 2;
    grid-area: header;

    input {
        width: 100vw;
    };

    .menuclassic {
        width: 100%;
        height: 10.4rem;
        background-color: ${({ theme }) => theme.colors.bgHeader};

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 3.2rem;

        padding: 1rem 12.3rem;
        
        position: fixed;

        .newplateSignOut {
            display: flex;
            gap: 4rem;
        }

        .newFood {
            width: auto;
            font-family: 'Roboto';
            font-size: 1.4rem;

            white-space: nowrap;
        }

        > div {
            display: flex;
            gap: 1rem;
            min-width: 21rem;

            h1 {
                font-size: 2.8rem;
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                line-height: 1;
            }

            span {
                color: ${({ theme }) => theme.colors.txtCostAdm};
                font-size: 1.2rem;
            }
        }

        > img {
            width: 5.6rem;
            height: 5.6rem;
            border-radius: 50%;
        }

        a {
            color: ${({ theme }) => theme.colors.txtBtn1};
            font-size: 2.2rem;
            display: flex;
            align-items: center;
        }
        
        
    }
    
    .btnmenu {
        width: 100%;
        height: 10.4rem;
        background-color: ${({ theme }) => theme.colors.bgHeader};

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4.5rem;

        z-index: 1;
        
        padding: 2.8rem;
        
        position: fixed;

        a {
            color: ${({ theme }) => theme.colors.txtBtn1};
            font-family: 'Roboto';
            font-size: 2.1rem;

            display: flex;
            align-items: center;
            gap: 1.6rem;
        }       

        .menu {
            display: none;
            flex-direction: row;
            gap: 1rem;
        }

        .svgmenu {
            display: flex;
        }
    }

    .foodexplorer {
        display: flex;
        gap: .8rem;
        align-items: center;
        justify-content: center;

        h1 {
            cursor: pointer;
        }

        h1:hover {
                scale: 1.05;
        }

        span {
            color: ${({ theme }) => theme.colors.txtCostAdm};
            font-size: 1.2rem;
        }
    }

    .menulist {
        position: absolute;
        top: 0rem;
        left: 0;

        width: 100%;
        height: 55rem;

        z-index: 1;

        padding: 2rem 2.8rem;
        margin-top: 10rem;

        display: none;
        flex-direction: column;

        gap: 3rem;

        background-color: ${({ theme }) => theme.colors.bgPages};

        a {
            color: ${({ theme }) => theme.colors.txtBtn1};
            font-size: 2.4rem;
            font-weight: 200;

            border-bottom: .1rem solid ${({ theme }) => theme.colors.bgIpt01};

            padding-bottom: 1rem;
        }
    }    

    @media (max-width: 920px) {
        .menuclassic {
            display: none;
        }
    }

    @media (min-width: 920px) {
        #foodexplorer, #btnmenu {
            display: none;
        }
    }
`;