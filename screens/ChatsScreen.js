import React from 'react';
import { View, Text, FlatList } from 'react-native';
import chats from '../assets/data/chats.json'
import ChatListItem from '../components/ChatListItem';
function ChatsScreen(props) {
  return (
    <FlatList
    data = { chats }
    renderItem = {({item}) => <ChatListItem chat={item} />}
    />
  );
}

export default ChatsScreen;