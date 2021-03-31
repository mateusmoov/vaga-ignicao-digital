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
import IgnicaoLogo from "../../assets/vertical-menu/logo.svg";
import ImageEmail from "../../assets/vertical-menu/mail.svg";
import ImageChat from "../../assets/vertical-menu/message-square.svg";
import ImageTodo from "../../assets/vertical-menu/check-square.svg";
import ImageCalendar from "../../assets/vertical-menu/calendar.svg";
const Navbar = () => {
  return (
    <ContainerNavbar>
      <ContainerLogo>
        <Logo>
          <img src={IgnicaoLogo} alt="logo" />
        </Logo>
      </ContainerLogo>
      <ContainerDropdown>
        <form>
          <select>
            <option> Área do Cliente</option>
          </select>
        </form>
      </ContainerDropdown>
      <ContainerApps>
        <TitleApps>Apps</TitleApps>
        <ContainerAnchors>
          <a href="/">
            <img src={ImageEmail} alt="email" />
            Email
          </a>
          <a href="/">
            <img src={ImageChat} alt="chat" />
            Conversar
          </a>
          <a href="/">
            <img src={ImageTodo} alt="todo" />
            Todo
          </a>
          <a href="/">
            <img src={ImageCalendar} alt="calendario" />
            Calendário
          </a>
        </ContainerAnchors>
      </ContainerApps>
    </ContainerNavbar>
  );
};

export default Navbar;
