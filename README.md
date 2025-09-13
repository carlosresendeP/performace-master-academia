# 🏋️‍♂️ Performance Master - Landing Page com IA

Uma landing page completa e profissional para a academia Performance Master, desenvolvida com React, Vite e Styled Components, **integrada com chatbot inteligente powered by n8n**.

## 🤖 Novidade: Chatbot com Inteligência Artificial

Esta landing page inclui um **sistema de chat conversacional** integrado ao n8n, proporcionando atendimento automatizado e inteligente 24/7.

### 🧠 Funcionalidades do Chatbot IA:

- **💬 Chat Interativo**: Interface moderna estilo WhatsApp
- **🔗 Integração n8n**: Webhook para processamento de IA
- **⚡ Respostas Instantâneas**: IA treinada sobre academia e fitness
- **📱 Multi-canal**: Chat interno + redirecionamento WhatsApp
- **🎯 Contextual**: Respostas personalizadas para planos, horários e serviços
- **📊 Analytics**: Tracking de conversas via n8n

## 🏋️‍♂️ Sobre o Projeto

Landing page responsiva para academia com design moderno e profissional, incluindo:

### 📋 Seções Implementadas

1. **Header** - Navegação fixa com menu responsivo
2. **Hero** - Seção principal com call-to-action
3. **About** - Sobre a academia com estatísticas
4. **Services** - Serviços oferecidos (6 modalidades)
5. **Pricing** - Planos e preços (3 opções)
6. **Gallery** - Galeria de fotos da academia
7. **Testimonials** - Depoimentos de clientes
8. **CTA** - Call-to-action com oferta especial
9. **Footer** - Informações de contato e links
10. **🤖 WhatsApp Float** - Widget de chat com IA integrada

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e rápida
- **Styled Components** - CSS-in-JS para estilização
- **React Icons** - Biblioteca de ícones

### IA & Automação
- **n8n** - Plataforma de automação para chatbot
- **Webhook Integration** - Comunicação em tempo real
- **AI Processing** - Processamento inteligente de mensagens

## 🤖 Arquitetura do Chatbot

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Chat    │────│   n8n Webhook   │────│   AI Processing │
│   Interface     │    │   Integration   │    │   & Responses   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                        │                        │
        ▼                        ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ State Management│    │  Session Mgmt   │    │ Knowledge Base  │
│ & UI Updates    │    │  & Analytics    │    │ (Academia Info) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📱 Recursos

### 🎯 Funcionalidades Core
- ✅ Totalmente responsiva
- ✅ Design moderno e profissional
- ✅ Animações suaves
- ✅ Menu mobile hamburger
- ✅ Scroll suave entre seções
- ✅ Otimizada para SEO
- ✅ Cores e identidade visual consistente

### 🤖 Funcionalidades IA/Chat
- ✅ **Chat Widget Flutuante** - Sempre acessível
- ✅ **Interface Conversacional** - UX intuitiva
- ✅ **Typing Indicators** - Feedback visual em tempo real
- ✅ **Message History** - Histórico da conversa
- ✅ **Multi-estado** - Inicial, chat ativo, loading
- ✅ **Fallback WhatsApp** - Integração com WhatsApp Web
- ✅ **Responsive Design** - Mobile-first approach

## 🎨 Paleta de Cores

- **Primária**: #ff6b35 (Laranja Performance)
- **Secundária**: #f7931e (Amarelo Energy)
- **Escura**: #2c3e50 (Professional Dark)
- **Clara**: #f8f9fa (Clean Light)
- **Success**: #25d366 (WhatsApp Green)

## 📦 Instalação e Uso

```bash
# Clonar repositório
git clone <repository-url>
cd projeto-performace

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🔧 Configuração do Chatbot n8n

### 1. Setup do Webhook

Configure um workflow no n8n com:

```javascript
// Function Node - Processamento IA
const userMessage = $('Webhook').first().json.message;

let response = "";

if (userMessage.toLowerCase().includes("preço") || userMessage.toLowerCase().includes("plano")) {
  response = "Temos 3 planos incríveis! 🏋️‍♂️\n\n💪 Básico: R$ 89/mês\n🔥 Premium: R$ 129/mês\n⭐ VIP: R$ 189/mês\n\nQual desperta seu interesse?";
} else if (userMessage.toLowerCase().includes("horário")) {
  response = "Funcionamos de:\n📅 Segunda a Sexta: 5h às 23h\n📅 Sábado: 7h às 19h\n📅 Domingo: 8h às 18h";
} else {
  response = "Olá! Sou o assistente da Performance Master! 💪 Posso te ajudar com informações sobre planos, horários, modalidades e muito mais!";
}

return { json: { response } };
```

### 2. Estrutura do Webhook Response

```json
{
  "response": "{{ $json.response }}"
}
```

### 3. URL Configuration

Configure a URL do webhook no arquivo `WhatsAppFloat.jsx`:

```javascript
const N8N_WEBHOOK_URL = 'https://your-n8n-instance.com/webhook/chatbot';
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.styles.js
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.styles.js
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.styles.js
│   ├── Services/
│   │   ├── Services.jsx
│   │   └── Services.styles.js
│   ├── Pricing/
│   │   ├── Pricing.jsx
│   │   └── Pricing.styles.js
│   ├── Gallery/
│   │   ├── Gallery.jsx
│   │   └── Gallery.styles.js
│   ├── Testimonials/
│   │   ├── Testimonials.jsx
│   │   └── Testimonials.styles.js
│   ├── CTA/
│   │   ├── CTA.jsx
│   │   └── CTA.styles.js
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.styles.js
│   └── 🤖 WhatsAppFloat/
│       ├── WhatsAppFloat.jsx    # Chat IA Component
│       └── WhatsAppFloat.styles.js
├── styles/
│   ├── GlobalStyles.js
│   └── theme.js
└── App.jsx
```

## 🎯 Funcionalidades Detalhadas

### 🏠 Landing Page Core
- Menu de navegação com scroll suave
- Seção hero com background parallax
- Cards interativos com hover effects
- Galeria de imagens responsiva
- Formulário de contato (CTA)
- Links para redes sociais
- Informações de contato e horários

### 🤖 Sistema de Chat IA
- **Chat Interface**: Design moderno estilo WhatsApp
- **State Management**: React hooks para gerenciar conversa
- **Message Types**: Suporte a mensagens de usuário e bot
- **Typing Simulation**: Indicador visual de "digitando..."
- **Session Persistence**: Histórico da conversa mantido
- **Error Handling**: Fallbacks para problemas de conexão
- **Multi-channel**: Chat direto + WhatsApp integration

## 🔗 Integrações

### WhatsApp Business
- Link direto para WhatsApp Web
- Mensagens pré-formatadas por contexto
- Números de telefone configuráveis

### n8n Automation
- Webhook para receber mensagens
- Processamento de IA customizável
- Analytics e logging de conversas
- Integração com CRM (futuro)

## 📊 Analytics & Monitoring

O sistema de chat coleta métricas importantes:

- **Engagement**: Taxa de interação com o chat
- **Conversion**: Mensagens que geram leads
- **Popular Queries**: Perguntas mais frequentes
- **Session Duration**: Tempo médio de conversa

## 🚀 Próximas Funcionalidades

- [ ] **Integração CRM** - Salvar leads automaticamente
- [ ] **Chat Persistente** - Histórico entre sessões
- [ ] **Rich Responses** - Botões e carrosséis
- [ ] **Voice Integration** - Comandos por voz
- [ ] **Multilingual** - Suporte a múltiplos idiomas
- [ ] **Analytics Dashboard** - Métricas detalhadas

## 📧 Contato & Suporte

Para dúvidas sobre implementação ou personalização:

- **Chat IA**: Use o próprio sistema de chat da página! 🤖
- **WhatsApp**: +55 11 9999-9999
- **Email**: contato@performancemaster.com

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ e 🤖 para a Performance Master**

*Transformando fitness com tecnologia e inteligência artificial*
