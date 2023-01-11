import { HeaderContainer } from "./styles";
import Logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <Link to={'/'}>
                <img src={Logo} alt="" />
            </Link>
        </HeaderContainer>
    )
}