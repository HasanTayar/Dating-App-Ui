import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { profile } from "../../assets/images";
import { BellIcon } from "react-native-heroicons/outline";
import { Carousel } from "react-native-snap-carousel";
import { datesData } from "../constants";
import DatesCard from "../components/dates-card";
import { DatesData } from "../types";

const HomeScreen = () => {
  const android = Platform.OS === "android";
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView
      className="bg-white flex-1 justify-between"
      style={{ paddingTop: android ? hp(2) : 0 }}
    >
      {/* Header */}
      <View className="w-full flex-row justify-between items-center px-4 mb-8">
        {/* Image */}
        <View className="rounded-full items-center justify-center">
          <Image
            source={profile}
            style={{ width: hp(4), height: hp(4.5) }}
            resizeMode="cover"
            className="rounded-full"
          />
        </View>
        {/* Brand Name */}
        <View>
          <Text className="text-xl font-semibold text-center uppercase">
            Stacks Dates
          </Text>
        </View>
        {/* Bell Icon */}
        <View className="bg-black/10 p-2 rounded-full items-center justify-center">
          <TouchableOpacity>
            <BellIcon size={25} strokeWidth={2} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Carousal */}
      <View className="pb-4">
        <View className="mx-4 mb-4">
          <Text
            className="capitalize text-2xl font-semibold"
            style={{ fontFamily: "SpaceGroteskBold" }}
          >
            Find your love
          </Text>
        </View>
        <View>
          <Carousel
            data={datesData}
            //@ts-ignore
            renderItem={({
              item,
              index,
            }: {
              item: DatesData;
              index: React.Key;
            }) => <DatesCard item={item as DatesData} index={index} />}
            firstItem={1}
            inactiveSlideScale={0.86}
            inactiveSlideOpacity={0.6}
            sliderWidth={width}
            itemWidth={width * 0.8}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
