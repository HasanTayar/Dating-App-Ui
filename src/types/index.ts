import { ImageProps } from "react-native";

export type RootStackParamList = {
  Welcome: undefined;
  ChatDetails: undefined; // Add parameters if any, e.g., { userId: string }
  HomeTabs: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
  Profile: undefined;
  Chat: undefined;
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
