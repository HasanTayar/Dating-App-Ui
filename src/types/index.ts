import { ImageProps } from "react-native";

export type RootStackParamList = {
  Welcome: undefined;
  ChatDetails: { params: ChatData };
  HomeTabs: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
  Profile: undefined;
  Chat: ChatData;
};

export type UserData = {
  id: number;
  name: string;
  age: number;
  hobbies: string[];
  bio: string;
  distance: string;
  imgPath: number;
};
export type DatesData = {
  id: number;
  imgUrl: number;
  name: string;
  lastName: string;
  age: number;
  city: string;
  country: string;
};
export interface ChatMessage {
  sender: string;
  message: string;
  timestamp: string;
}
export type ChatData = {
  id: number;
  name: string;
  imgUrl: number;
  age: number;
  isOnline: boolean;
  lastMessage: string;
  date: string;
  timeSent: string;
  chat?: ChatMessage[];
};
