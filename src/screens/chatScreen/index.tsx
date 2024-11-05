import React, { useState, useRef, useEffect } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
  Button,
  View,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  KeyboardEvent,
} from 'react-native';

interface Message {
  id: string;
  text: string;
  isSent: boolean;
}

const ChatScreen: React.FC = () => {
  const flatListRef = useRef<FlatList<Message>>(null);

  const generateSampleMessages = (): Message[] => {
    const messages: Message[] = [];
    for (let i = 1; i <= 20; i++) {
      const message: Message = {
        id: i.toString(),
        text: `Message ${i}`,
        isSent: i % 2 === 0, // Alternate between sent and received messages
      };
      messages.push(message);
    }
    return messages;
  };

  const [messages, setMessages] = useState<Message[]>(generateSampleMessages());
  const [inputText, setInputText] = useState<string>('');
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event: KeyboardEvent) => {
        const { height } = event.endCoordinates;
        setKeyboardHeight(height);
        if (flatListRef.current) {
          flatListRef.current.scrollToOffset({ offset: height, animated: true });
        }
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      text: inputText,
      isSent: true, // Sent message
    };
    setMessages([newMessage, ...messages]);
    setInputText('');
  };

  const MessageItem: React.FC<{ message: string; isSent: boolean }> = ({ message, isSent }) => {
    return (
      <View style={[styles.container, isSent ? styles.sentContainer : styles.receivedContainer]}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        inverted={true}
        renderItem={({ item }) => <MessageItem message={item.text} isSent={item.isSent} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: keyboardHeight }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          onSubmitEditing={(event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => sendMessage()}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  sentContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6', // Sent message color
  },
  receivedContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF', // Received message color
  },
  messageText: {
    fontSize: 16,
  },
});
