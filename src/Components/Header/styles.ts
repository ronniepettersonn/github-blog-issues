import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 296px;

    background-image: url('http://localhost:5173/src/assets/bg-header.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    background-color: ${props => props.theme.profile};

    img {
        width: 148px;
        margin-top: 64px;
    }
`