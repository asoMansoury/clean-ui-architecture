import { useTranslation } from 'react-i18next';
import classes from './Header.module.scss'
import { HeaderLink } from "./HeaderLink/HeaderLink";
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';


export const Header = ()=>{
  const{t} =useTranslation(); 
  const {Home,Stats,About} = t("Header") as any;
return <header className={classes.Header}>
    <div className={classes.HeaderTitle}>Todo App</div>
    <nav className="m-auto">
      <HeaderLink url="/">{Home}</HeaderLink>
      <HeaderLink url="/stats ">{Stats}</HeaderLink>
      <HeaderLink url="/about">{About}</HeaderLink>
    </nav>
    <nav>
      <LanguageSelector></LanguageSelector>
    </nav>
  </header>
}



export default Header;