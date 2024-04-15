import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import GlobalContext from "./context/GlobalContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <AppRouter />
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
