import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding = () => {
  return (
    <View style={styles.onboarding}>
      <View style={[styles.frame, styles.frameLayout1]}>
        <View style={[styles.frame1, styles.frame1Position]}>
          <Image
            style={[styles.image2Icon, styles.frame1Position]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
        </View>
        <View style={[styles.frame2, styles.frame2Layout]}>
          <View style={[styles.image4, styles.frame2Layout]} />
        </View>
      </View>
      <View style={[styles.frame3, styles.frameLayout]}>
        <View style={[styles.frame4, styles.frameLayout]}>
          <View style={[styles.frame5, styles.frame5Layout]}>
            <View style={[styles.iconsParent, styles.frame5Layout]}>
              <View style={[styles.icons, styles.iconsPosition]}>
                <View style={styles.battery}>
                  <Image
                    style={[styles.capIcon, styles.iconsPosition]}
                    contentFit="cover"
                    source={require("../assets/cap.png")}
                  />
                  <View style={styles.capacity} />
                </View>
                <Image
                  style={styles.wifiIcon}
                  contentFit="cover"
                  source={require("../assets/wifi.png")}
                />
                <Image
                  style={styles.cellularConnectionIcon}
                  contentFit="cover"
                  source={require("../assets/cellular-connection.png")}
                />
              </View>
              <Text style={styles.time}>9:41</Text>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-42.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    width: 2576,
    overflow: "hidden",
  },
  frame1Position: {
    height: 900,
    top: 0,
    position: "absolute",
  },
  frame2Layout: {
    height: 1225,
    position: "absolute",
  },
  frameLayout: {
    width: 714,
    position: "absolute",
    overflow: "hidden",
  },
  frame5Layout: {
    height: 20,
    width: 344,
    position: "absolute",
  },
  iconsPosition: {
    top: 4,
    position: "absolute",
  },
  image2Icon: {
    left: 998,
    width: 1200,
  },
  frame1: {
    left: 189,
    width: 2198,
    overflow: "hidden",
  },
  image4: {
    left: 933,
    width: 1643,
    top: 0,
  },
  frame2: {
    top: 833,
    left: 0,
    width: 2576,
    overflow: "hidden",
  },
  frame: {
    top: -1028,
    left: -1093,
    height: 2058,
    position: "absolute",
  },
  capIcon: {
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.gray1,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 1,
    width: 22,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  icons: {
    left: 277,
    width: 67,
    height: 11,
  },
  time: {
    marginTop: -10,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFUIText,
    color: Color.gray1,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  iconsParent: {
    left: 0,
    top: 0,
  },
  frame5: {
    top: 117,
    left: 185,
    overflow: "hidden",
  },
  frameChild: {
    top: 171,
    left: 317,
    width: 291,
    height: 291,
    position: "absolute",
  },
  frame4: {
    height: 704,
    left: 0,
    top: 0,
  },
  frame3: {
    top: -103,
    left: -162,
    height: 947,
  },
  onboarding: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Onboarding;
