import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MemoryGame from "./pages/MemoryGame";
import Home from "./components/Home/Home";
import QuizGame from "./components/QuizGame/QuizGame";
import Unihome from "./pages/Unihome";
import Profile from "./components/Profile/Profile";
import HomeContent from "./components/UniHome/HomeContext";
import MainMenu from "./components/Menu/MainMenu";
import TicTac from "./components/TicTac/TicTac";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route path="/memorygame" element={<MemoryGame />} /> */}
        {/* <Route path="/tictac" element={<TicTac />} /> */}
        {/* <Route path="/menu" element={<MainMenu/>} /> */}

        {/* on authentication */}
        <Route element={<Unihome />}>
          <Route path="/universe" element={<HomeContent />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
