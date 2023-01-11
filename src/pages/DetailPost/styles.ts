import styled from "styled-components";

export const DetailPostContainer = styled.div`

`

export const CardPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 20px;
    margin: 0 auto;
    margin-top: -88px;
    background: ${props => props.theme.profile};
    border-radius: 10px;

    max-width: 864px;

    header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 8px;

        

        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            line-height: 0;
            gap: 8px;
            text-transform: uppercase;

            font-size: 12px;
            font-weight: 700;
            color: ${props => props.theme["brand-blue"]};

            img {
                height: 12px;
                width: 12px;
            }

        }

        
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 8px;
        height: 100%;

        h1 {
            font-size: 24px;
            font-weight: 700;
            color: ${props => props.theme.title};
        }

        .icons {
            display: flex;
            gap: 24px;

            span {
                display: flex;
                gap: 8px;

                font-size: 16px;
                color: ${props => props.theme.span};

                img {
                    height: 18px;
                    width: 18px;
                }
            }
        }
        
    }
`

export const ContentPost = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 864px;
    margin: 0 auto;
    padding: 40px 32px;

    p{
        line-height: 25.6px;
        color: ${props => props.theme.text};
        
    }

    pre {
        padding: 16px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        background-color: ${props => props.theme.post};
        border-radius: 6px;
        margin-top: 24px;
    }
`