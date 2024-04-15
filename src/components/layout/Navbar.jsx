// import {style} from "../layout/styles.modules.css"

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGlobalContext } from "../../context/GlobalContext.jsx";
axios.defaults.withCredentials = true;

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [role, setRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { setDataUser, products, setProducts } = useContext(DataGlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios("http://localhost:8080/api/sessions")
      .then((res) => {
        if (
          res.data.response.role !== undefined &&
          res.data.statusCode === 200
        ) {
          setRole(res.data.response.role);
          setIsLogged(true);
          setDataUser(res.data.response._id);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSignOut = async () => {
    try {
      await axios.post("http://localhost:8080/api/sessions/signout");
      setDataUser(null);
      alert("Signing out!");
      return navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products", {
        params: {
          title: searchTerm,
        },
      });
      console.log(res.data);
      if (res.data.statusCode !== 404) {
        setProducts(res.data.docs);
      } else {
        alert("Error product not found");
      }
    } catch (error) {
      alert("Error product not found:", error);
    }
  };

  return (
    <div className="w-full flex justify-center h-[90px] bg-[#eeeeed]">
      <nav className="flex items-center px-10 w-full max-w-screen-xl h-full">
        <Link className="font-black text-3xl text-[#1c76fb]" to="/">
          ByteBay
        </Link>
        <div className="flex-grow mx-4">
          <div className="max-w-[26%] mx-auto flex p-1 h-10">
            <input
              type="text"
              className="px-1 py-2 font-medium text-[#303a3d] focus:outline-none border-2 border-[#1c76fb] placeholder:text-[#303a3d] placeholder:text-base bg-transparent"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="flex items-center justify-end bg-[#eeeeed] border-2 border-y-[#1c76fb] border-r-[#1c76fb] text-zinc-950 rounded-sm p-2 w-[40px] h-full focus:outline-none"
              onClick={handleSearch}
            >
              <svg
                className="w-4 h-4 fill-gray-700 bg-[#eeeeed]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 3C5.686 3 3 5.686 3 9s2.686 6 6 6c1.292 0 2.492-.406 3.497-1.096l5.5 5.5c.194.194.45.293.706.293s.512-.098.707-.293c.39-.39.39-1.024 0-1.414l-5.5-5.5c.69-1.005 1.096-2.205 1.096-3.497 0-3.314-2.686-6-6-6zm0 2c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:gap-5 md:items-center ml-auto">
          {role === null && isLogged === false && (
            <>
              <Link
                className="font-medium text-[#303a3d] text-lg hover:text-[#1c76fb]"
                to="/login"
                id="loginNav"
              >
                Login
              </Link>
              <Link
                className="font-medium text-[#303a3d] text-lg hover:text-[#1c76fb]"
                to="/register"
                id="registerNav"
              >
                Register
              </Link>
            </>
          )}
          {role === 1 && isLogged === true && (
            <Link
              className="font-medium text-[#303a3d] text-lg hover:text-[#1c76fb]"
              to="/form"
              id="formNav"
            >
              Form
            </Link>
          )}
          {role === 0 && isLogged === true && (
            <Link
              className="font-medium text-[#303a3d] text-lg hover:text-[#1c76fb]"
              to="/orders"
              id="ordersNav"
            >
              Orders
            </Link>
          )}
          {(role === 0 || role === 1 || role === 2) && isLogged === true && (
            <Link
              className="font-medium text-[#303a3d] text-lg hover:text-[#1c76fb]"
              id="signout"
              onClick={handleSignOut}
            >
              Sign out
            </Link>
          )}
          <Link
            href="#"
            className="m-2 cart position-relative hover:text-[#1c76fb] flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="38"
              fill=""
              className="bi bi-cart fill-[#303a3d] hover:fill-[#1c76fb]"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <span className="">12</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
