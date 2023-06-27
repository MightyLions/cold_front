import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import HelloPage from '../pages/HelloPage';
import Error404Page from '../pages/Error404Page';
import { UserMyPage } from '../pages/UserMyPage';
import SignUpPage from '../pages/SignUpPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { UserEditPage } from "../pages/UserEdit";


const UserRouter = () => {
  return (
    <Routes>
      <Route path="" element={<MainPage />} errorElement={<Error404Page />} />
      <Route
        path="/hello"
        element={<HelloPage />}
        errorElement={<Error404Page />}
      />
      <Route
        path="/home"
        element={<HomePage />}
        errorElement={<Error404Page />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
        errorElement={<Error404Page />}
      />
      <Route
        path="/signup"
        element={<SignUpPage />}
        errorElement={<Error404Page />}
      />
      <Route
        path="/registration"
        element={<RegistrationPage />}
        errorElement={<Error404Page />}
      />
      <Route
        path="/mypage"
        element={<UserMyPage />}
        errorElement={<Error404Page />}
      />
      <Route
        path="/edit"
        element={<UserEditPage />}
        errorElement={<Error404Page />}
      />
    </Routes>
  );
};

export default UserRouter;
