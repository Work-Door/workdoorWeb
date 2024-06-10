import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './SideBar.module.css';
import { Avatar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo from "../../utils/assets/logo.svg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.logo} onClick={toggleSidebar}>
        <img src={Logo} alt="Work Door" />
      </div>
      <nav>
        <ul>
          <li id={styles["dashIcon"]} className={location.pathname === '/dash' ? styles.active : ''}>
            <DashboardIcon />
            {isOpen && <a href="#">Dashboard</a>}
          </li>
          <li className={location.pathname === '/empresa/configuracoes' ? styles.active : ''}>
            <SettingsIcon />
            {isOpen && <a href="#">Configurações</a>}
          </li>
        </ul>
      </nav>
      <div className={isOpen ? styles.logout : styles.logoutSmall}>
        <button>
          <ExitToAppIcon className={styles["iconeLogout"]}/>
          {isOpen && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
}
export default Sidebar;
