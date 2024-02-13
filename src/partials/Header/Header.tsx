import { useTranslation } from 'react-i18next';
import classes from './Header.module.scss'
import { HeaderLink } from "./HeaderLink/HeaderLink";
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import SearchIcon from '../Icons/SearchIcon';
import AccountIcon from '../Icons/AccountIcon';
import CineplexIcon from '../Icons/CineplexIcon';
import { Menu } from '../MenuBar/Menu';


export const Header = ()=>{


return <header className={classes.StoreNav}>
        <nav>
          <CineplexIcon></CineplexIcon>
        </nav>
        <nav style={{display:'flex',minWidth:350,justifyContent:'space-between',marginRight:50}}>
          <SearchIcon></SearchIcon>
          <LanguageSelector></LanguageSelector>
          <AccountIcon></AccountIcon>
        </nav>

  </header>
}



export default Header;