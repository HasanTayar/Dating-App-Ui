import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { datesData } from "../constants";

const Matches = () => {
  return (
    <View className="mt-4 ">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{
          paddingLeft: hp(2),
          paddingRight: hp(2),
        }}
      >
        {datesData.map((match, index) => (
          <TouchableOpacity
            key={index}
            className="flex items-center space-y-1 "
          >
            <View className="rounded-full">
              <Image
                source={match.imgUrl}
                style={{
                  width: hp(6),
                  height: hp(6),
                }}
                className="rounded-full"
              />
            </View>
            <Text
              className="text-neutral-800 font-bold "
              style={{
                fontSize: hp(1.6),
              }}
            >
              {match.name}
            </Text>
            <Text
              className="text-neutral-800 font-bold "
              style={{
                fontSize: hp(1.6),
              }}
            >
              {match.age}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Matches;
