import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "@/Pages/Signup.jsx";
import Login from "@/Pages/Login.jsx";
import Home from "@/Pages/Home.jsx";
import Dashboard from "@/Pages/Dashboard.jsx";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";
import NotFound from "@/Pages/NotFound.jsx";
import {Toaster} from "sonner";
import Navbar from "@/components/Navbar.jsx";

function App() {
  return (
      <div className={"min-h-screen flex items-center justify-center"}>
        <BrowserRouter>
          <Toaster richColors position="top-right"/>
          <Navbar/>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/signup"} element={<Signup/>}/>
            <Route path={"/dashboard"} element={<ProtectedRoute/>}>
              <Route path={"/dashboard"} element={<Dashboard/>}/>
            </Route>
            <Route path={"*"} element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;
