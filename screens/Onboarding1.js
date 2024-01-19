import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding1 = () => {
  return (
    <View style={styles.onboarding}>
      <View style={[styles.frame, styles.frameLayout3]}>
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
      <View style={[styles.frame3, styles.frameLayout2]}>
        <View style={[styles.frame4, styles.frame4Position]}>
          <View style={[styles.frame4, styles.frame4Position]}>
            <Image
              style={[styles.d2Icon, styles.frame4Position]}
              contentFit="cover"
              source={require("../assets/3d-2.png")}
            />
          </View>
          <View style={[styles.frame6, styles.frame6Layout]}>
            <View style={[styles.iconsParent, styles.frame6Layout]}>
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
        </View>
        <View style={[styles.frame7, styles.frameLayout1]}>
          <View style={[styles.frameChild, styles.frameLayout1]} />
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame37.png")}
          />
          <View style={styles.frameParent}>
            <View style={styles.findWhatMattersFastParent}>
              <Text style={styles.findWhatMattersContainer}>
                <Text style={styles.findWhat}>{`Find what
`}</Text>
                <Text style={styles.mattersFast}>
                  <Text style={styles.mattersFast1}>matters, fast</Text>
                  {`. `}
                </Text>
              </Text>
              <Text style={[styles.dressmeTransformsYour, styles.skipNowTypo]}>
                Dressme transforms your phone into a powerful tracking device.
                Whether your items are under the couch or across town, we'll
                guide you to them.
              </Text>
              <View style={[styles.frame8, styles.frameLayout]}>
                <Text style={[styles.skipNow, styles.skipNowTypo]}>
                  Skip Now
                </Text>
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/group-1780.png")}
                />
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/group-1782.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout3: {
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
  frameLayout2: {
    width: 714,
    overflow: "hidden",
  },
  frame4Position: {
    height: 704,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame6Layout: {
    height: 20,
    width: 344,
    position: "absolute",
  },
  iconsPosition: {
    top: 4,
    position: "absolute",
  },
  frameLayout1: {
    height: 364,
    width: 390,
    position: "absolute",
  },
  skipNowTypo: {
    color: Color.colorDarkslategray_100,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    textAlign: "left",
    fontFamily: FontFamily.sFUIText,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 64,
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
  d2Icon: {
    width: 705,
  },
  frame4: {
    width: 714,
    overflow: "hidden",
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
    color: Color.gray1,
    textAlign: "left",
    fontFamily: FontFamily.sFUIText,
    left: 0,
    position: "absolute",
  },
  iconsParent: {
    left: 0,
    top: 0,
  },
  frame6: {
    top: 117,
    left: 185,
    overflow: "hidden",
  },
  frameChild: {
    borderTopLeftRadius: 80,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    left: 0,
    top: 0,
  },
  frameIcon: {
    top: 352,
    left: 121,
    width: 148,
    height: 5,
    position: "absolute",
    overflow: "hidden",
  },
  findWhat: {
    color: Color.mainColor,
  },
  mattersFast1: {
    textTransform: "lowercase",
  },
  mattersFast: {
    color: Color.mainColor1,
  },
  findWhatMattersContainer: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: "700",
    letterSpacing: 1,
    textAlign: "left",
    fontFamily: FontFamily.sFUIText,
    left: 0,
    top: 0,
    position: "absolute",
  },
  dressmeTransformsYour: {
    top: 85,
    width: 308,
  },
  skipNow: {
    top: 20,
  },
  frameItem: {
    left: 244,
    width: 64,
    top: 0,
  },
  frame8: {
    top: 187,
    width: 308,
    left: 0,
    overflow: "hidden",
  },
  findWhatMattersFastParent: {
    top: 45,
    height: 251,
    width: 308,
    left: 0,
    position: "absolute",
  },
  frameInner: {
    left: 112,
    width: 80,
    height: 8,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    top: 34,
    left: 41,
    height: 296,
    width: 308,
    position: "absolute",
  },
  frame7: {
    top: 583,
    left: 162,
    overflow: "hidden",
  },
  frame3: {
    top: -103,
    left: -162,
    height: 947,
    position: "absolute",
  },
  onboarding: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Onboarding1;
