import { styled } from "styled-components";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

let Nav_Container = styled.div`
  height: 60px;
  padding: 10px 40px;
  background: yellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

let Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  background-color: blue;
  align-items: center;
`;

let Nav_Items = styled.div`
  display: flex;
  background-color: red;
`;

let Nav_Item = styled.div`
  margin: 0px 25px;
  padding: 10px;
`;

function NavBar() {
  let navigate = useNavigate();

  return (
    <Nav_Container>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        GNI
      </Logo>
      <Nav_Items>
        <Nav_Item
          onClick={() => {
            navigate("/");
          }}
        >
          MAIN
        </Nav_Item>
        <Nav_Item
          onClick={() => {
            navigate("/talk");
          }}
        >
          INFO
        </Nav_Item>
        <Nav_Item
          onClick={() => {
            navigate("/bot");
          }}
        >
          BOT
        </Nav_Item>
        <Nav_Item
          onClick={() => {
            navigate("/game");
          }}
        >
          GAME
        </Nav_Item>
      </Nav_Items>
    </Nav_Container>
  );
}

export default NavBar;
