import styled from "styled-components";

export const ContainerNavbar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 62px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    
`;


export const IconsNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const IconsLeft = styled.div`
    display: flex;
    gap: 22px;
    margin-left: 22px;
`;

export const IconsRight = styled.div`
    display: flex;
    gap: 22px;
    margin-right: 19px;
`;

export const Client = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ClientName = styled.p`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    color: #2C2C2C;
`;

export const ClientSubtitle = styled.p`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
    color: #2C2C2C;
`;