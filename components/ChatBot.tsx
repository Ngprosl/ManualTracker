import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TouchableOpacity, 
  ScrollView, 
  StyleSheet,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Send, X, Bot, User } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';
import { chatbotData, type ChatbotResponse } from '@/data/chatbotData';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  typingText?: string;
  highlightWords?: string[];
  isThinking?: boolean;
}

interface ChatBotProps {
  onClose: () => void;
}

export function ChatBot({ onClose }: ChatBotProps) {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el asistente virtual de NGPRO. Puedo ayudarte con cualquier pregunta sobre Tracker NGPRO. ¿En qué puedo ayudarte?',
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  const styles = createStyles(theme);
  // Reemplaza por la URL pública de tu instancia n8n + path del webhook
  const N8N_WEBHOOK_URL = 'http://192.168.10.2:3010/webhook/chatbot-docs-qa';

  // Indicador de puntos suspensivos mientras el bot "piensa"
  const TypingIndicator: React.FC = () => {
    const [dots, setDots] = useState('');
    useEffect(() => {
      const t = setInterval(() => {
        setDots(prev => (prev.length >= 3 ? '.' : prev + '.'));
      }, 400);
      return () => clearInterval(t);
    }, []);
    return <Text style={[styles.messageText, styles.botText]}>{dots}</Text>;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  const findAnswer = (question: string): ChatbotResponse | null => {
    const lowercaseQuestion = question.toLowerCase();
    let firstMatch: { response: ChatbotResponse; position: number } | null = null;
    
    // Buscar en las respuestas del chatbot
    for (const item of chatbotData) {
      for (const keyword of item.keywords) {
        const keywordLower = keyword.toLowerCase();
        const position = lowercaseQuestion.indexOf(keywordLower);
        
        // Si encontramos la palabra clave
        if (position !== -1) {
          // Si es la primera coincidencia o está antes que la actual
          if (!firstMatch || position < firstMatch.position) {
            firstMatch = { response: item, position };
          }
        }
      }
    }

    return firstMatch ? firstMatch.response : null;
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const question = inputText.trim();

    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Mostrar typing placeholder del bot
    const botId = (Date.now() + 1).toString();
    const placeholderBotMessage: Message = {
      id: botId,
      text: '',
      isBot: true,
      timestamp: new Date(),
      typingText: '',
      isThinking: true,
    };
    setMessages(prev => [...prev, placeholderBotMessage]);

    // Intentar enviar la pregunta al webhook n8n. Si falla, usar búsqueda local.
    let finalAnswer = '';
    let typingSpeed = 30;
    let typingDelay = 300;

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });

      if (!res.ok) throw new Error(`Webhook error ${res.status}`);

      const data = await res.json();
      // El workflow n8n devuelve { answer: '...' } según el nodo "Formato Respuesta"
      finalAnswer = (data && data.answer) ? data.answer : '';
    } catch (e) {
      // Fallback local: buscar en `chatbotData`
      const response = findAnswer(question);
      finalAnswer = response?.answer || '';
      typingSpeed = response?.typingSpeed || typingSpeed;
      typingDelay = response?.typingDelay || typingDelay;
    }

    if (!finalAnswer) {
      finalAnswer = 'No encuentro esa información en el manual. Puedes contactar soporte o revisar el PDF del manual.';
    }

    // Desactivar indicador de "pensando" y empezar animación de escritura
    setMessages(prev => prev.map(msg => msg.id === botId ? { ...msg, isThinking: false } : msg));

    // Animación de escritura
    const text = finalAnswer;
    setTimeout(() => {
      let i = 0;
      const typing = setInterval(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === botId
            ? { ...msg, typingText: text.slice(0, i + 1) }
            : msg
        ));
        i++;
        if (i === text.length) {
          clearInterval(typing);
        }
      }, typingSpeed);
    }, typingDelay);

    setInputText('');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.botIcon}>
            <Bot size={20} color="#fff" />
          </View>
          <View>
            <Text style={styles.headerTitle}>Asistente NGPRO</Text>
            <Text style={styles.headerSubtitle}>Siempre disponible</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <X size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView 
        ref={scrollViewRef}
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.isBot ? styles.botMessage : styles.userMessage
            ]}
          >
            <View style={styles.messageContent}>
              <View style={styles.messageHeader}>
                <View style={[
                  styles.messageIcon,
                  { backgroundColor: message.isBot ? theme.colors.primary : theme.colors.secondary }
                ]}>
                  {message.isBot ? (
                    <Bot size={16} color="#fff" />
                  ) : (
                    <User size={16} color="#fff" />
                  )}
                </View>
                <Text style={styles.messageTime}>
                  {formatTime(message.timestamp)}
                </Text>
              </View>
              <View style={[
                styles.messageBubble,
                message.isBot ? styles.botBubble : styles.userBubble
              ]}>
                {message.isBot ? (
                  message.isThinking ? (
                    <TypingIndicator />
                  ) : (
                    <Text style={[styles.messageText, styles.botText]}>{message.typingText !== undefined ? message.typingText : message.text}</Text>
                  )
                ) : (
                  <Text style={[styles.messageText, styles.userText]}>{message.text}</Text>
                )}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Input */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <View style={styles.inputRow}>
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Escribe tu pregunta..."
            placeholderTextColor={theme.colors.textSecondary}
            multiline
            maxLength={500}
            onSubmitEditing={sendMessage}
            blurOnSubmit={false}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
              // En dispositivos, la tecla Enter suele venir como 'Enter'
              if (e.nativeEvent.key === 'Enter') {
                // En multiline, Enter añade salto de línea; enviamos y eliminamos el salto
                sendMessage();
                // Quitar el salto de línea añadido (si existe)
                setTimeout(() => setInputText(prev => prev.replace(/\n$/, '')), 0);
              }
            }}
          />
          <TouchableOpacity 
            style={[
              styles.sendButton,
              { opacity: inputText.trim() ? 1 : 0.5 }
            ]}
            onPress={sendMessage}
            disabled={!inputText.trim()}
          >
            <Send size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: theme.colors.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  botIcon: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  headerSubtitle: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  closeButton: {
    padding: 4,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  messageContainer: {
    marginBottom: 16,
  },
  botMessage: {
    alignItems: 'flex-start',
  },
  userMessage: {
    alignItems: 'flex-end',
  },
  messageContent: {
    maxWidth: '80%',
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 8,
  },
  messageIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageTime: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  messageBubble: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  botBubble: {
    backgroundColor: theme.colors.card,
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: theme.colors.primary,
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  botText: {
    color: theme.colors.text,
  },
  userText: {
    color: '#fff',
  },
  inputContainer: {
    backgroundColor: theme.colors.card,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
  },
  textInput: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: theme.colors.text,
    fontSize: 16,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  sendButton: {
    backgroundColor: theme.colors.primary,
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});