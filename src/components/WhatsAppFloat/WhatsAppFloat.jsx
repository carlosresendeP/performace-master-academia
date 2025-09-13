import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import { 
  ChatActions, 
  ChatBubble, 
  ChatHeader, 
  ChatInfo, 
  ChatMessage, 
  CloseButton, 
  InfoButton, 
  ProfileImage, 
  WhatsAppButton, 
  WhatsAppContainer,
  ChatButton,
  ChatConversation,
  MessagesList,
  UserMessage,
  BotMessage,
  ChatInputContainer,
  ChatInput,
  SendButton,
  TypingIndicator
} from './WhatsAppFloat.styles';



const WhatsAppFloat = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! 👋 Seja bem-vindo(a) à Performance Master! Como podemos te ajudar hoje?",
      type: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  // Função para enviar mensagem para o n8n
  const sendToN8N = async (message) => {
    try {
      // Substitua pela URL do seu webhook n8n
      const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;
      
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          sessionId: `session_${Date.now()}`, // ID da sessão para contexto
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.response || "Desculpe, não consegui processar sua mensagem. Tente novamente.";
      } else {
        throw new Error('Erro na comunicação com o servidor');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem para n8n:', error);
      return "Desculpe, estou com problemas técnicos. Tente usar o WhatsApp diretamente ou entre em contato por telefone.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      type: "user",
      timestamp: new Date()
    };

    // Adiciona mensagem do usuário
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setChatStarted(true);

    // Simula delay de digitação e envia para n8n
    setTimeout(async () => {
      const botResponse = await sendToN8N(inputMessage);
      
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        type: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500); // Simula tempo de resposta
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de conhecer mais sobre a Performance Master e os planos disponíveis.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <WhatsAppContainer>
      {showChat && (
        <ChatBubble>
          <ChatHeader>
            <ProfileImage>PM</ProfileImage>
            <ChatInfo>
              <div className="name">Performance Master</div>
              <div className="status">● Online</div>
            </ChatInfo>
            <CloseButton onClick={toggleChat}>
              <FaTimes />
            </CloseButton>
          </ChatHeader>

          {!chatStarted ? (
            <>
              <ChatMessage>
                Olá! 👋 Seja bem-vindo(a) à Performance Master! 
                Como podemos te ajudar hoje?
              </ChatMessage>
              <ChatActions>
                <ChatButton onClick={() => setChatStarted(true)}>
                  💬 Iniciar Chat
                </ChatButton>
                <InfoButton onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                  💰 Ver Planos
                </InfoButton>
              </ChatActions>
              <ChatActions style={{ marginTop: '8px' }}>
                <ChatButton onClick={openWhatsApp} style={{ background: '#25d366' }}>
                  <FaWhatsapp style={{ marginRight: '5px' }} />
                  WhatsApp
                </ChatButton>
              </ChatActions>
            </>
          ) : (
            <ChatConversation>
              <MessagesList>
                {messages.map((message) => (
                  message.type === 'user' ? (
                    <UserMessage key={message.id}>
                      {message.text}
                      <span className="timestamp">
                        {message.timestamp.toLocaleTimeString('pt-BR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </UserMessage>
                  ) : (
                    <BotMessage key={message.id}>
                      {message.text}
                      <span className="timestamp">
                        {message.timestamp.toLocaleTimeString('pt-BR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </BotMessage>
                  )
                ))}
                {isTyping && (
                  <TypingIndicator>
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    Performance Master está digitando...
                  </TypingIndicator>
                )}
              </MessagesList>
              
              <ChatInputContainer>
                <ChatInput
                  type="text"
                  placeholder="Digite sua mensagem..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <SendButton onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                  <FaPaperPlane />
                </SendButton>
              </ChatInputContainer>

              <ChatActions style={{ marginTop: '8px', gap: '5px' }}>
                <InfoButton 
                  onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                  style={{ fontSize: '0.7rem', padding: '4px 8px' }}
                >
                  💰 Planos
                </InfoButton>
                <ChatButton 
                  onClick={openWhatsApp} 
                  style={{ background: '#25d366', fontSize: '0.7rem', padding: '4px 8px' }}
                >
                  <FaWhatsapp style={{ marginRight: '3px', fontSize: '0.8rem' }} />
                  WhatsApp
                </ChatButton>
              </ChatActions>
            </ChatConversation>
          )}
        </ChatBubble>
      )}
      
      <WhatsAppButton onClick={showChat ? toggleChat : toggleChat}>
        <FaWhatsapp />
      </WhatsAppButton>
    </WhatsAppContainer>
  );
};

export default WhatsAppFloat;
