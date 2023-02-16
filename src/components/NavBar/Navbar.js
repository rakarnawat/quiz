import { Component } from "react";
import "../NavBar/NavbarStyles.css";
import BUSOMIcon from '../../images/BUBCLSLogo.png';
import BUuserLogoIconIcon from '../../images/UserLogo.png';


class Navbar extends Component{
    render(){
        return(
          <nav className="NavbarItems">
            <div>
            <a target="_self" href="/SelectionScreen" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
            </div>
            <div>
                <img src={BUuserLogoIconIcon} className="BUuserLogoImageClass" alt=""/>            
            </div>
          </nav>  
        );
    }
}

export default Navbar;