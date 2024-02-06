import { createElement } from "react";
import classes from './Header.module.scss'
import { HeaderLink } from "./HeaderLink/HeaderLink";


export const Header = ()=>
<header className={classes.Header}>
    <div className={classes.HeaderTitle}>Todo App</div>
    <nav className="m-auto">
      <HeaderLink url="./">Home</HeaderLink>
      <HeaderLink url="./About">About</HeaderLink>
      <HeaderLink url="./Stats ">Stats</HeaderLink>
    </nav>
  </header>


export default Header;