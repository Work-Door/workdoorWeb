import React, { useState } from 'react';
import styles from './SideBar.module.css';
import { Avatar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.logo} onClick={toggleSidebar}>
        <img src="work-door-logo.png" alt="Work Door" />
      </div>
      <nav>
        <ul>
          <li className={styles.active}>
            <DashboardIcon />
            {isOpen && <a href="#">Dashboard</a>}
          </li>
          <li>
            <SettingsIcon />
            {isOpen && <a href="#">Configurações</a>}
          </li>
          <li>
            <SupportIcon />
            {isOpen && <a href="#">Suporte</a>}
          </li>
        </ul>
      </nav>
      <div className={styles.logout}>
        <button>
          <ExitToAppIcon />
          {isOpen && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
