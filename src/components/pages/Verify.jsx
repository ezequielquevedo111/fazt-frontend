import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataGlobalContext } from "../../context/GlobalContext.jsx";
axios.defaults.withCredentials = true;

const Verify = () => {
  const [verifyCode, setVerifyCode] = useState("");
  const navigate = useNavigate();
  const { emailRegister } = useContext(DataGlobalContext);
  console.log(emailRegister);

  const handleSubmit = async (event) => {
    const verifyData = {
      email: emailRegister,
      verifiedCode: verifyCode,
    };
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/sessions/verify",
        verifyData
      );
      alert("Cuenta verificada correctamente");
      navigate("/login");
    } catch (error) {
      console.error("Error en el codigo ingresado", error);
    }
  };
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#eeeeed]">
      <div>
        <h2 className="font-black text-4xl md:text-6xl lg:text-7xl text-[#303a3d] text-center">
          Verify your account.
        </h2>
        <p className="font-medium text-lg lg:text-xl text-[#303a3d] mt-6 text-center">
          Enter the code sent to your email inbox to verify your account.
        </p>
      </div>
      <form
        className="h-100 m-5 flex flex-col justify-content-center items-center gap-3 "
        onSubmit={handleSubmit}
      >
        <div className="w-full min-h-32 flex flex-col items-center justify-center gap-4">
          <label htmlFor="Email" className="form-label fw-semibold fs-4">
            Verification code
          </label>
          <input
            type="text"
            className="form-control w-9/12 "
            id="code"
            aria-describedby="code"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-8 inline-block px-6 py-3 font-medium bg-[#1c76fb] text-[#eeeeed] rounded hover:bg-[#303a3d] transition-all	 duration-300 ease-in-out "
          id="verify"
        >
          Verify account
        </button>
      </form>
    </main>
  );
};

export default Verify;
