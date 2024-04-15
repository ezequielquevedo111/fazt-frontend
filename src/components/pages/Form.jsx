import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataGlobalContext } from "../../context/GlobalContext.jsx";
axios.defaults.withCredentials = true;

const Form = () => {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();
  console.log(title, photo, price, stock);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const productData = {
        title: title,
        photo: photo,
        price: price,
        stock: stock,
      };

      const response = await axios.post(
        "http://localhost:8080/api/products/",
        productData
      );
      console.log(response);
      alert("Producto creado correctamente");
      navigate("/");
    } catch (error) {
      console.error("Error en la creacion", error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#eeeeed]">
      <div className="flex  w-full justify-evenly items-center">
        <section className="w-1/2 flex items-center justify-center">
          <div className="">
            <h2 className="font-black text-4xl md:text-6xl lg:text-7xl text-[#303a3d] text-center">
              Create your product.
            </h2>
            <p className="font-medium text-lg lg:text-xl text-[#303a3d] mt-6 text-center">
              Enter the corresponding values for each field.
            </p>
          </div>
        </section>
        <section className="w-1/2 flex flex-col items-center justify-center gap-5">
          <form
            className=" h-100 w-4/5 m-5 flex flex-col justify-content-center items-center gap-3"
            onSubmit={handleSubmit}
          >
            <div className="w-full min-h-32 flex flex-col items-center justify-center gap-4">
              <label htmlFor="title" className="form-label fw-semibold fs-4">
                Title
              </label>
              <input
                type="text"
                className="form-control w-9/12 "
                id="title"
                aria-describedby="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {/* <div id="emailHelp" className="form-text text-[#303a3d]">
            Example: ezequielquevedo111@gmail.com
          </div> */}
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <label htmlFor="photo" className="form-label fw-semibold fs-4">
                Photo
              </label>
              <input
                type="text"
                className="form-control w-9/12 m-4 "
                id="photo"
                aria-describedby="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
              {/* <div id="photoHelp" className="form-text">
            The password
          </div> */}
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <label htmlFor="price" className="form-label fw-semibold fs-4">
                Price
              </label>
              <input
                type="number"
                className="form-control w-9/12 m-4 "
                id="price"
                aria-describedby="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {/* <div id="photoHelp" className="form-text">
            The password
          </div> */}
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <label htmlFor="stock" className="form-label fw-semibold fs-4">
                Stock
              </label>
              <input
                type="number"
                className="form-control w-9/12 m-4 "
                id="stock"
                aria-describedby="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
              {/* <div id="photoHelp" className="form-text">
            The password
          </div> */}
            </div>
            <button
              type="submit"
              className="mt-8 w-9/12Ñ inline-block px-6 py-3 font-medium bg-[#1c76fb] text-[#eeeeed] rounded hover:bg-[#303a3d] transition-all	 duration-300 ease-in-out "
              id="create"
              // style="background-color: #fcefaa; color: #121010"
            >
              Create
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Form;
