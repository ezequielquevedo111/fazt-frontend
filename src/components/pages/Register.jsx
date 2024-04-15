import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataGlobalContext } from "../../context/GlobalContext";
axios.defaults.withCredentials = true;
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const { emailRegister, setEmailRegister } = useContext(DataGlobalContext);

  console.log(email, password, name, photo, age);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        email: email,
        password: password,
        name: name,
        photo: photo,
        age: age,
      };

      const response = await axios.post(
        "http://localhost:8080/api/sessions/register",
        userData
      );
      setEmailRegister(userData.email);
      console.log(userData.email);
      alert("Registro exitoso", response.data);
      navigate("/verify");
    } catch (error) {
      console.error("Error en el registro", error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#eeeeed]">
      <div className="flex  w-full justify-evenly items-center">
        <section className="w-1/2 flex items-center justify-center">
          <div className="">
            <h2 className="font-black text-4xl md:text-6xl lg:text-7xl text-[#303a3d] text-center">
              Register with your account.
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
              <label htmlFor="email" className="form-label fw-semibold fs-4">
                Email
              </label>
              <input
                type="text"
                className="form-control w-9/12 "
                id="email"
                aria-describedby="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <div id="emailHelp" className="form-text text-[#303a3d]">
                Example: ezequielquevedo111@gmail.com
              </div> */}
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <label htmlFor="password" className="form-label fw-semibold fs-4">
                Password
              </label>
              <input
                type="password"
                className="form-control w-9/12 m-4 "
                id="password"
                aria-describedby="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <div id="photoHelp" className="form-text">
                The password
              </div> */}
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <label htmlFor="name" className="form-label fw-semibold fs-4">
                Name
              </label>
              <input
                type="text"
                className="form-control w-9/12 m-4 "
                id="name"
                aria-describedby="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* <div id="photoHelp" className="form-text">
                The password
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
              <label htmlFor="age" className="form-label fw-semibold fs-4">
                Age
              </label>
              <input
                type="text"
                className="form-control w-9/12 m-4 "
                id="age"
                aria-describedby="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              {/* <div id="photoHelp" className="form-text">
                The password
              </div> */}
            </div>
            <button
              type="submit"
              className="mt-8 inline-block px-6 py-3 font-medium bg-[#1c76fb] text-[#eeeeed] rounded hover:bg-[#303a3d] transition-all	 duration-300 ease-in-out "
              id="register"
              // style="background-color: #fcefaa; color: #121010"
            >
              Register
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Register;
