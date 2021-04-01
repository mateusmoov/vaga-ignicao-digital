import styled from "styled-components";

export const ListViewSearch = styled.div`
  margin: 0 2rem;
`;

export const ContainerListView = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const ListViewText = styled.div`
  display: flex;
`;

export const ListViewStats = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 18px;
  color: #2c2c2c;
`;

export const ListViewButtons = styled.div`
  display: flex;
  gap: 13px;
`;

export const ContainerDropdown = styled.div`
  display: flex;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  select {
    font-family: Montserrat;
    font-size: 15px;
    border: none;
    background: #ececec;
    border-radius: 4px;
    height: 40px;
    width: 135px;
  }
`;

export const Button = styled.div`
  width: 40px;
  height: 40px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;

  form {
    position: relative;
    width: 100%;
  }

  input[type="text"] {
    width: 100%;
    padding-left: 30px;
    box-sizing: border-box;
    height: 62px;
    font-family: Montserrat;
    font-weight: 300;
    font-size: 22px;
    border: none;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
  }

  ::placeholder {
    color: #999999;
  }

  img {
    transform: translateY(-50%);
    top: 50%;
    right: 2%;
    position: absolute;
  }
`;
