import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";



const HomeHeader = ({onSearch}) => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          ></Image>
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              bottom: -5,
              right: -5,
            }}
          ></Image>
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
          }}
        >
          Hello, Sajad 👋
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            marginTop: SIZES.base,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection:"row",
            alignItems:"center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small -2
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
