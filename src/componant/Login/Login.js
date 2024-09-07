import Login from "./LoginPage"
import "../../App.css";
import LoginHeading from "../Header/HeaderLogin";
import { dark } from "@mui/material/styles/createPalette";
export default function LogingIn() {
  return (
    
    <div>
    <LoginHeading /><br></br><br></br>
    <br></br><Login />
    </div>
  );
}