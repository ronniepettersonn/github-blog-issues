import { Content } from "../../Components/Content";
import { Header } from "../../Components/Header/Header";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Header />
            <Content />
        </HomeContainer>
    )
}