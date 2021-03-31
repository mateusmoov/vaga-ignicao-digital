import React from "react";
import {
  ContainerNavbar,
  ContainerLogo,
  Logo,
  ContainerApps,
  TitleApps,
  ContainerDropdown,
  ContainerAnchors,
} from "./styles";
import IgnicaoLogo from "assets/navbar/logo.svg";
import ImageEmail from "assets/navbar/mail.svg";
import ImageChat from "assets/navbar/message-square.svg";
import ImageTodo from "assets/navbar/check-square.svg";
import ImageCalendar from "assets/navbar/calendar.svg";
const Navbar = () => {
    return (
        <S.ContainerNavbar>
            <S.IconsNavbar>
                <S.IconsLeft>
                    <img src={ImageCheck} alt="checkmark" />
                    <img src={ImageMessage} alt="message" />
                    <img src={ImageMail} alt="email" />
                    <img src={ImageCalendar} alt="calendario" />
                    <img src={ImageStar} alt="star" />
                </S.IconsLeft>
                <S.IconsRight>
                    <img src={ImageBell} alt="sino" />
                    <img src={ImageSearch} alt="pesquisar" />
                    <S.Client>
                        <S.ClientName>
                            Maria Elza
                        </S.ClientName>
                        <S.ClientSubtitle>
                            Cliente Vip
                        </S.ClientSubtitle>
                    </S.Client>
                        <img src={ImageOval} alt="perfil" />
                </S.IconsRight>
            </S.IconsNavbar>
        </S.ContainerNavbar>
    )
}

export default Navbar;