import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
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

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Simular delay del bot
    setTimeout(() => {
      const response = findAnswer(inputText.trim());
      const defaultResponse: ChatbotResponse = {
        answer: 'No encuentro esa información en el manual o en esta app. ¿Quieres contactar soporte? Puedes hacerlo desde la sección de Ayuda o llamando a nuestro equipo técnico.',
        keywords: [],
        typingSpeed: 30,
        typingDelay: 500
      };
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response?.answer || defaultResponse.answer,
        isBot: true,
        timestamp: new Date(),
        typingText: '',
        highlightWords: response?.highlightWords || []
      };
      
      setMessages(prev => [...prev, botResponse]);

      // Animación de escritura
      const speed = response?.typingSpeed || defaultResponse.typingSpeed;
      const delay = response?.typingDelay || defaultResponse.typingDelay;
      const text = response?.answer || defaultResponse.answer;
      
      setTimeout(() => {
        let i = 0;
        const typing = setInterval(() => {
          setMessages(prev => prev.map(msg => 
            msg.id === botResponse.id
              ? { ...msg, typingText: text.slice(0, i + 1) }
              : msg
          ));
          i++;
          if (i === text.length) {
            clearInterval(typing);
          }
        }, speed);
      }, delay);
    }, 1000);

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
                <Text style={[
                  styles.messageText,
                  message.isBot ? styles.botText : styles.userText
                ]}>
                  {message.isBot && message.typingText !== undefined ? message.typingText : message.text}
                </Text>
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