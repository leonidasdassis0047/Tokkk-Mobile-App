import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ChatScreen, ChatsScreen, SettingsScreen} from './source/screens';

import {store} from './source/state';

type ChatStackParams = {
  Chats: undefined;
  Chat: {
    id: string;
  };
};
const ChatStack = createNativeStackNavigator<ChatStackParams>();

const ChatsStackScreen = () => {
  return (
    <ChatStack.Navigator screenOptions={{headerShown: false}}>
      <ChatStack.Screen name="Chats" component={ChatsScreen} />
      <ChatStack.Screen name="Chat" component={ChatScreen} />
    </ChatStack.Navigator>
  );
};

type SettingsStackParams = {
  Settings: undefined;
};
const SettingsStack = createNativeStackNavigator<SettingsStackParams>();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

type BottomTabParams = {
  ChatsStack;
  SettingsStack;
};
const BottomTab = createBottomTabNavigator<BottomTabParams>();

const BottomTabScreen = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <BottomTab.Screen
        name="ChatsStack"
        component={ChatsStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="ios-chatbubbles-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="SettingsStack"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-settings-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      {/* whole app state provider */}

      <NavigationContainer>
        {/* navigation container provider */}

        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <BottomTabScreen />

        {/* navigation container provider */}
      </NavigationContainer>

      {/* whole app state provider */}
    </Provider>
  );
};

export default App;
