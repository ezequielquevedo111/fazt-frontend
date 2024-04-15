import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    try {
      const response = await axios.post(
        "http://localhost:8080/api/sessions/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      alert(response.data.message);
      return navigate("/"); // Puedes hacer algo con la respuesta si es necesario
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#eeeeed]">
      <div className="flex  w-full justify-evenly items-center">
        <section className="w-1/2 flex items-center justify-center">
          <div className="">
            <h2 className="font-black text-4xl md:text-6xl lg:text-7xl text-[#303a3d] text-center">
              Login with your account.
            </h2>
            <p className="font-medium text-lg lg:text-xl text-[#303a3d] mt-6 text-center">
              Enter the corresponding values for each field.
            </p>
          </div>
        </section>
        <section className="w-1/2 flex flex-col items-center justify-center gap-5">
          <form
            className="h-100 m-5 flex flex-col justify-content-center items-center gap-3 "
            onSubmit={handleSubmit}
          >
            <div className="w-full min-h-32 flex items-center justify-center gap-4">
              <label htmlFor="Email" className="form-label fw-semibold fs-4">
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
            </div>
            <div className="w-full flex items-center justify-center">
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
            </div>
            <button
              type="submit"
              className="mt-8 inline-block px-6 py-3 font-medium bg-[#1c76fb] text-[#eeeeed] rounded hover:bg-[#303a3d] transition-all	 duration-300 ease-in-out "
              id="login"
            >
              Enter
            </button>
          </form>
          <div className="flex flex-col-reverse items-center gap-3 icons ">
            <div>
              <h3>Sign in with Google</h3>
            </div>
            <a href="#" type="submit" id="googleLogin">
              {/* Aquí tu icono de Google */}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
