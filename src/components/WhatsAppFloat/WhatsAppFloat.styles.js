import styled, { keyframes } from 'styled-components';

// Animação de pulsação
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

// Animação de slide up
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animação de digitação
const typingAnimation = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }
  30% {
    transform: translateY(-10px);
  }
`;

export const WhatsAppContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
  }
`;

export const WhatsAppButton = styled.button`
  width: 60px;
  height: 60px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
    animation: none;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 1.6rem;
  }
`;

export const ChatBubble = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  max-width: 320px;
  position: relative;
  animation: ${slideUp} 0.3s ease;
  border: 1px solid #e0e0e0;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
  }

  @media (max-width: 768px) {
    max-width: 280px;
    right: -10px;
  }
`;

export const ChatHeader = styled.div`
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const ChatInfo = styled.div`
  flex: 1;
  
  .name {
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  .status {
    font-size: 0.7rem;
    opacity: 0.9;
    color: #4ade80;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ChatMessage = styled.div`
  padding: 20px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
`;

export const ChatActions = styled.div`
  padding: 15px;
  display: flex;
  gap: 10px;
`;

export const ChatButton = styled.button`
  flex: 1;
  padding: 12px;
  background: #25d366;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #20b85a;
    transform: translateY(-2px);
  }
`;

export const InfoButton = styled.button`
  flex: 1;
  padding: 12px;
  background: transparent;
  color: #ff6b35;
  border: 2px solid #ff6b35;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;

  &:hover {
    background: #ff6b35;
    color: white;
    transform: translateY(-2px);
  }
`;

// Novos componentes para o sistema de chat
export const ChatConversation = styled.div`
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;

export const MessagesList = styled.div`
  flex: 1;
  max-height: 300px;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* Scrollbar customization */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff6b35;
    border-radius: 4px;
  }
`;

export const UserMessage = styled.div`
  align-self: flex-end;
  background: #ff6b35;
  color: white;
  padding: 8px 12px;
  border-radius: 15px 15px 5px 15px;
  max-width: 75%;
  font-size: 0.85rem;
  position: relative;
  
  .timestamp {
    display: block;
    font-size: 0.65rem;
    opacity: 0.8;
    margin-top: 4px;
    text-align: right;
  }
`;

export const BotMessage = styled.div`
  align-self: flex-start;
  background: #f5f5f5;
  color: #555;
  padding: 8px 12px;
  border-radius: 15px 15px 15px 5px;
  max-width: 75%;
  font-size: 0.85rem;
  position: relative;
  
  .timestamp {
    display: block;
    font-size: 0.65rem;
    opacity: 0.6;
    margin-top: 4px;
    text-align: left;
  }
`;

export const ChatInputContainer = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  font-size: 0.85rem;
  outline: none;
  
  &:focus {
    border-color: #ff6b35;
  }
  
  &::placeholder {
    color: #999;
  }
`;

export const SendButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ff6b35;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: #f7931e;
    transform: scale(1.05);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const TypingIndicator = styled.div`
  align-self: flex-start;
  background: #f5f5f5;
  color: #555;
  padding: 8px 12px;
  border-radius: 15px 15px 15px 5px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.8;
  
  .typing-dots {
    display: flex;
    gap: 2px;
    
    span {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #ff6b35;
      animation: ${typingAnimation} 1.4s infinite ease-in-out;
      
      &:nth-child(1) {
        animation-delay: -0.32s;
      }
      
      &:nth-child(2) {
        animation-delay: -0.16s;
      }
    }
  }
`;