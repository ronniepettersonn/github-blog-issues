import styled from "styled-components";

export const ContentContainer = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 864px;
    margin: 0 auto;
    
`

export const ContentHeader = styled.div`
    display: flex;
    gap: 32px;
    padding: 32px;
    margin-top: -88px;
    background: ${props => props.theme.profile};
    border-radius: 10px;

    img {
        height: 148px;
        width: 148px;
        border-radius: 8px;
    }
`

export const ContentMain = styled.div`
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 8px;

        h1 {
            font-size: 24px;
            font-weight: 700;
            color: ${props => props.theme.title};
        }

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
        justify-content: space-between;
        height: 100%;

        p {
            font-size: 16px;
            color: ${props => props.theme.text};
        }

        .icons {
            display: flex;
            gap: 24px;

            span {
                display: flex;
                gap: 8px;

                font-size: 16px;
                color: ${props => props.theme.subtitle};

                img {
                    height: 18px;
                    width: 18px;
                }
            }
        }
        
    }

`

export const ContentForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 72px;
    width: 100%;

    header {
        display: flex;
        justify-content: space-between;
        
        h2 {
            font-size: 18px;
            font-weight: 700;
            color: ${props => props.theme.subtitle};
        }

        span {
            font-size: 14px;
            color: ${props => props.theme.span};
        }
    }

    input {
        padding: 12px 16px;
        background: ${props => props.theme.input};
        border: 1px solid ${props => props.theme.border};
        border-radius: 6px;
        color: ${props => props.theme.text};
        margin-top: 12px;

        &::placeholder {
            color: ${props => props.theme.label};
        }
    }
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 48px;
    margin-bottom: 48px;
    gap: 32px;

    a {
        text-decoration: none;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 416px;
    height: 260px;
    background: ${props => props.theme.post};
    border-radius: 10px;
    padding: 32px;
    overflow: hidden;

    header {
        display: flex;
        justify-content: space-between;
        
        h1 {
            font-size: 20px;
            color: ${props => props.theme.title};
            max-width: 250px;

        }

        span {
            color: ${props => props.theme.span};
            font-size: 14px;
        }
    }

    p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: pre-wrap;

        margin-top: 20px;

        font-size: 16px;
        color: ${props => props.theme.text};
        font-weight: 400;
        line-height: 160%;
        
    }

    
`