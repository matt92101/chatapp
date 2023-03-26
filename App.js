import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './components/ChatListItem';

const chat = {
  id: "1",
  user: {
    image:
      "https://freesvg.org/img/winkboy.png",
    name: "Lukas",
  },
  lastMessage: {
    text: "This is a test...This is .",
    createdAt: "07:30",
  },
};
export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
