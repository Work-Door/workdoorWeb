import "./utils/globals.css";
import Rotas from "../src/routes";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
import SocketContext from '../src/Pages/chat/SocketContext'; // Corrigir o caminho de importação
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');
function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Rotas />
    </SocketContext.Provider>
  );
}

export default App;
