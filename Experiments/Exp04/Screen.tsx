import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Screen = ()=>{
    const [screen, setScreen] = useState("Login");

    if(screen === "Login"){
        return <Login goToRegister={()=> setScreen("register")}/>;
    }
    return <Register goToLogin={()=> setScreen("Login")}/>;
}
export default Screen;
