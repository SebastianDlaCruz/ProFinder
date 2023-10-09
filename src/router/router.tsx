import { Home, Login, Register } from "@pages/index";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: '',
    element: <Home />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  }
])