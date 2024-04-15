import Cart from "../components/pages/Cart.jsx";
import Form from "../components/pages/Form.jsx";
import Home from "../components/pages/Home.jsx";
import Login from "../components/pages/Login.jsx";
import Orders from "../components/pages/Orders.jsx";
import Register from "../components/pages/Register.jsx";
import Verify from "../components/pages/Verify.jsx";

export const routesArray = [
  { id: 1, path: "/", Element: Home },
  { id: 2, path: "/register", Element: Register },
  {
    id: 3,
    path: "/login",
    Element: Login,
  },

  {
    id: 4,
    path: "/form",
    Element: Form,
  },
  {
    id: 5,
    path: "/cart",
    Element: Cart,
  },
  {
    id: 6,
    path: "/orders",
    Element: Orders,
  },
  {
    id: 7,
    path: "/verify",
    Element: Verify,
  },
];
