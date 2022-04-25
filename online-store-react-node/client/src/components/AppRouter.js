import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
});

export default AppRouter;
