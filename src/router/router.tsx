/* eslint-disable react-refresh/only-export-components */
import { CustomSuspense } from "@components/index";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('@pages/home/Home'));
const Login = lazy(() => import('@pages/auth/login/Login'));
const Register = lazy(() => import('@pages/auth/register/Register'));


export const router = createBrowserRouter([
  {
    path: '',
    element: <CustomSuspense><Home /></CustomSuspense>,

  },
  {
    path: 'login',
    element: <CustomSuspense><Login /></CustomSuspense>
  },
  {
    path: 'register',
    element: <CustomSuspense><Register /></CustomSuspense>
  }
])