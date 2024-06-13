import React, { useRef, useState, useEffect, useContext } from 'react';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import style from './Chat.module.css';
import SocketContext from './SocketContext'; // Corrigir o caminho de importação

export default function Chat() {
  const socket = useContext(SocketContext); // Use o contexto para acessar o socket
  const bottomRef = useRef();
  const messageRef = useRef();
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.on('receive_message', data => {
      setMessageList((current) => [...current, data]);
    });

    return () => socket.off('receive_message');
  }, [socket]);

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    socket.emit('message', message);
    clearInput();
    focusInput();
  };

  const clearInput = () => {
    messageRef.current.value = '';
  };

  const focusInput = () => {
    messageRef.current.focus();
  };

  const getEnterKey = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={style["bgblue"]}></div>
      <main>
        <div className={style["chat-container"]}>
          <div className={style["chat-conversa"]}>
            <h2>Mensagens</h2>
            <div className={style["contatos"]}>
                {/* vai ficar os contatos */}
            </div>
          </div>
          <div className={style["chat-box"]}>
            <div className={style["nome-empresa"]}>
              <h2>AGK Ar-condicionados</h2> {/* Nome da empresa */}
            </div>
            <div className={style["chat"]}>
              <div className={style["mensagens"]}>
                {messageList.map((message, index) => (
                  <div
                    className={`${style["message-container"]} ${message.authorId === socket.id && style["message-mine"]}`}
                    key={index}
                  >
                    <div className="message-author"><strong>{message.author}</strong></div>
                    <div className={style["message-text"]}>{message.text}</div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
            </div>
            <div className={style["input-chat"]}>
              <Input inputRef={messageRef} placeholder='Mensagem' onKeyDown={(e) => getEnterKey(e)} fullWidth />
              <SendIcon sx={{ m: 1, cursor: 'pointer' }} onClick={() => handleSubmit()} color="primary" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
