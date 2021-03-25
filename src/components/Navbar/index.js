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
import IgnicaoLogo from "../../assets/navbar/logo.svg";
import ImageEmail from "../../assets/navbar/mail.svg";
import ImageChat from "../../assets/navbar/message-square.svg";
import ImageTodo from "../../assets/navbar/check-square.svg";
import ImageCalendar from "../../assets/navbar/calendar.svg";
const Navbar = () => {
  return (
    <ContainerNavbar>
      <ContainerLogo>
        <Logo>
          <img src={IgnicaoLogo} alt="logo" />
        </Logo>
      </ContainerLogo>
      <ContainerDropdown>
        <form action="/action_page.php">
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
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
