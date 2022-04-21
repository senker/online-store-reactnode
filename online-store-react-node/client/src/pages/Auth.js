import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email ..." />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password ..."
          />
        </Form>
        <div className="d-flex justify-content-between mt-3 ps-3 pe-3">
          {isLogin ? (
            <div>
              Not registered?{" "}
              <NavLink to={REGISTRATION_ROUTE}>Register now!</NavLink>
            </div>
          ) : (
            <div>
              Already registered? <NavLink to={LOGIN_ROUTE}>Login now!</NavLink>
            </div>
          )}

          <Button variant={"outline-success"}>
            {isLogin ? "Enter" : "Register"}
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Auth;
