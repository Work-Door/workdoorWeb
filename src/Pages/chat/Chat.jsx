import React, { useRef, useState, useEffect, useContext } from 'react';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import style from './Chat.module.css';
import SocketContext from './SocketContext'; // Corrigir o caminho de importação
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import api from '../../api';
import { Api } from '@mui/icons-material';

export default function Chat() {
  const socket = useContext(SocketContext); // Use o contexto para acessar o socket
  const bottomRef = useRef();
  const messageRef = useRef();
  const [messageList, setMessageList] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioAtivo, setUsuarioAtivo] = useState(null); // Estado para o usuário ativo
  const navigate = useNavigate();

  useEffect(() => {
    if (!socket) return;
  
    socket.on('receive_message', data => {
      const messageWithUser = {
        ...data,
        authorData: usuarios.find(user => user.id === data.authorId),
      };
      setMessageList(current => [...current, messageWithUser]);
    });
  
    return () => socket.off('receive_message');
  }, [socket, usuarios]);
  

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  useEffect(() => {
    if (usuarioAtivo !== null) {
      console.log(`Chat iniciado com o usuário ID: ${usuarioAtivo}`);
      fetchMessages(); // Ao iniciar chat, busca as mensagens
    }
  }, [usuarioAtivo]);

  const handleSubmit = async () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    try {
      await axios.post('https://6605fc89d92166b2e3c3194b.mockapi.io/messages', {
        text: message,
        //senderId: socket.id, // ID do remetente (se necessário)
        recipientId: usuarioAtivo, // ID do destinatário
      });
      
      socket.emit('message', { text: message, recipientId: usuarioAtivo });

      clearInput();
      focusInput();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        'https://6605fc89d92166b2e3c3194b.mockapi.io/messages',
        {
          params: {
            recipientId: usuarioAtivo,
          },
        }
      );
      setMessageList(response.data);
      console.log(response.data);
      scrollDown();
    } catch (error) {
      console.error('Erro ao buscar mensagens:', error);
    }
  };

  const clearInput = () => {
    messageRef.current.value = '';
  };

  const focusInput = () => {
    messageRef.current.focus();
  };

  const getEnterKey = e => {
    if (e.key === 'Enter') handleSubmit();
  };

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [empresaNome, setEmpresaNome] = useState('');
  const [empresaFoto, setEmpresaFoto] = useState('');

  useEffect(() => {
    const fetchEmpresaNome = async () => {
      try {
        const response = await axios.get(
          'https://6605fc89d92166b2e3c3194b.mockapi.io/empresa'
        );
        setEmpresaNome(response.data[0].name);
        setEmpresaFoto(response.data[0].foto);
      } catch (error) {
        console.error('Erro ao buscar nome da empresa:', error);
      }
    };

    fetchEmpresaNome();
  }, []);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(
          'https://6605fc89d92166b2e3c3194b.mockapi.io/usuarios'
        );
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar lista de usuários:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const iniciarChat = userId => {
    setUsuarioAtivo(userId); // Definir o usuário ativo com base no ID
  };

  return (
    <div>
      <div className={style['bgblue']}></div>
      <main>
        <div className={style['chat-container']}>
          <div className={style['chat-conversa']}>
            <h2>Mensagens</h2>
            <div className={style['contatos']}>
              {/* Lista de usuários */}
              {usuarios.map(usuario => (
                <div key={usuario.id} className={style['ct']}>
                  <img src={usuario.fotoPerfil} alt={usuario.name} />
                  <p>{usuario.name}</p>
                  <SendIcon
                    sx={{ m: 1, cursor: 'pointer' }}
                    color='primary'
                    onClick={() => iniciarChat(usuario.id)} // Ao clicar, inicia o chat com o usuário
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={style['chat-box']}>
            <div className={style['nome-empresa']}>
              <img src={empresaFoto} alt={empresaNome} />
              <h2>{empresaNome}</h2> {/* Nome da empresa */}
              {/* <Link to="../servicos">
                voltar
              </Link> */}
            </div>
            <div className={style['chat']}>
              <div className={style['mensagens']}>
                {messageList.map((message, index) => (
                  <div
                    className={`${style['message-container']} ${
                      message.authorId === socket.id ? style['message-mine'] : style['message-other']
                    }`}
                    key={index}
                  >
                    <div className='message-author'>
                    <img
                      src={message.authorFotoPerfil}
                      alt={message.author}
                      className={style['author-image']}
                    />
                      <strong>{message.author}</strong>
                    </div>
                    <div className={style['message-text']}>
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
            </div>
            <div className={style['input-chat']}>
              <Input
                inputRef={messageRef}
                placeholder='Mensagem'
                onKeyDown={e => getEnterKey(e)}
                fullWidth
              />
              <SendIcon
                sx={{ m: 1, cursor: 'pointer' }}
                onClick={() => handleSubmit()}
                color='primary'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
