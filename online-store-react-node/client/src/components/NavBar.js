import React, { useContext, useTransition } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import s from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className={s.navLink} to={SHOP_ROUTE}>
          Buy device
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto">
            <Button
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin panel
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ms-2"
            >
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto">
            <Button
              variant={"outline-light"}
              onClick={() => {
                navigate(LOGIN_ROUTE);
              }}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
