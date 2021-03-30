import React from "react";
import * as S from './styles.js';

import ImageCheck from '../../assets/navbar/check-square.svg'
import ImageMessage from '../../assets/navbar/message-square.svg'
import ImageMail from '../../assets/navbar/mail.svg'
import ImageCalendar from '../../assets/navbar/calendar.svg'
import ImageStar from '../../assets/navbar/star.svg'

import ImageBell from '../../assets/navbar/bell.svg'
import ImageSearch from '../../assets/navbar/search.svg'
import ImageOval from '../../assets/navbar/Oval.svg'

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