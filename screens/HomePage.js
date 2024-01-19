import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const HomePage = () => {
  return (
    <View style={styles.homePage}>
      <View style={styles.frame}>
        <Image
          style={styles.image2Icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <View style={styles.timeParent}>
          <Text style={styles.time}>9:41</Text>
          <View style={styles.icons}>
            <Image
              style={styles.cellularConnectionIcon}
              contentFit="cover"
              source={require("../assets/cellular-connection1.png")}
            />
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi1.png")}
            />
            <View style={styles.battery}>
              <View style={styles.capacity} />
              <Image
                style={styles.capIcon}
                contentFit="cover"
                source={require("../assets/cap1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.frameParent}>
            <View style={styles.frame3}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-480.png")}
              />
              <View style={styles.welcomeBackParent}>
                <Text style={styles.welcomeBack}>{`Welcome Back  `}</Text>
                <Text style={styles.noraJohnson}>{`Nora Johnson `}</Text>
              </View>
            </View>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/group-1533.png")}
            />
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frame4}>
              <Text style={styles.findYourLostContainer}>
                <Text style={styles.find}>Find</Text>
                <Text style={styles.yourLostBelongings}>
                  {` your `}
                  <Text style={styles.lostB}>Lost B</Text>elongings
                </Text>
              </Text>
              <View style={styles.frameContainer}>
                <View style={styles.frame5}>
                  <Text style={styles.devices}>Devices</Text>
                  <Text style={styles.items}>Items</Text>
                </View>
                <View style={styles.rectangleParent}>
                  <View style={styles.frameInner} />
                  <Image
                    style={styles.ellipseIcon}
                    contentFit="cover"
                    source={require("../assets/ellipse-8.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameWrapper}>
              <View style={styles.frame6}>
                <View style={styles.frame7}>
                  <Image
                    style={styles.mkuu3Vw34frwatch45AlumStIcon}
                    contentFit="cover"
                    source={require("../assets/mkuu3-vw-34frwatch45alumstarlightnc7s-vw-34fr-wf-co-1.png")}
                  />
                </View>
                <View style={styles.frame8}>
                  <Text style={styles.norasAppleWatch}>Nora’s Apple Watch</Text>
                  <View style={styles.frame9}>
                    <View style={styles.car} />
                    <View style={styles.frameView}>
                      <View style={styles.vectorParent}>
                        <Image
                          style={styles.vectorIcon}
                          contentFit="cover"
                          source={require("../assets/vector2.png")}
                        />
                        <Text style={styles.min}>8 min</Text>
                      </View>
                      <View style={styles.groupParent}>
                        <Image
                          style={styles.groupIcon}
                          contentFit="cover"
                          source={require("../assets/group2.png")}
                        />
                        <Text style={styles.min}>32 min</Text>
                      </View>
                      <View style={styles.groupGroup}>
                        <Image
                          style={styles.groupIcon1}
                          contentFit="cover"
                          source={require("../assets/group3.png")}
                        />
                        <Text style={styles.min}>50%</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParent1}>
            <View style={styles.frame10}>
              <Text style={styles.withYou}>With you</Text>
              <View style={styles.frameParent2}>
                <View style={styles.homepodMini1Wrapper}>
                  <Image
                    style={styles.homepodMini1Icon}
                    contentFit="cover"
                    source={require("../assets/homepodmini-1.png")}
                  />
                </View>
                <View style={styles.norasHomepadParent}>
                  <Text style={styles.norasAppleWatch}>Nora’s Homepad</Text>
                  <View style={styles.vectorGroup}>
                    <Image
                      style={styles.vectorIcon1}
                      contentFit="cover"
                      source={require("../assets/vector3.png")}
                    />
                    <Text style={styles.playSound}>Play Sound</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frame11}>
              <View style={styles.rectangleGroup}>
                <View style={styles.rectangleView} />
                <View style={styles.norasHomepadParent}>
                  <Text style={styles.norasAppleWatch}>Nora’s AirPods</Text>
                  <View style={styles.vectorGroup}>
                    <Image
                      style={styles.vectorIcon1}
                      contentFit="cover"
                      source={require("../assets/vector3.png")}
                    />
                    <Text style={styles.playSound}>Play Sound</Text>
                  </View>
                </View>
              </View>
              <Image
                style={styles.ed65745298de8a3209d1dbc409615dIcon}
                contentFit="cover"
                source={require("../assets/ed65745298de8a3209d1dbc409615dd5-1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frame12}>
          <View style={styles.frame13}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame32.png")}
            />
          </View>
          <View style={styles.frame14}>
            <Image
              style={styles.frameIcon1}
              contentFit="cover"
              source={require("../assets/frame33.png")}
            />
            <View style={styles.frame15}>
              <View style={styles.frameInner1}>
                <View style={styles.vectorParent1}>
                  <Image
                    style={styles.vectorIcon3}
                    contentFit="cover"
                    source={require("../assets/vector4.png")}
                  />
                  <Text style={styles.settings}>Settings</Text>
                </View>
              </View>
            </View>
            <View style={styles.frame16}>
              <View style={styles.frame17}>
                <Text style={styles.map}>Map</Text>
                <Image
                  style={styles.frameIcon2}
                  contentFit="cover"
                  source={require("../assets/frame34.png")}
                />
              </View>
              <View style={styles.frame18}>
                <Image
                  style={styles.frameIcon3}
                  contentFit="cover"
                  source={require("../assets/frame35.png")}
                />
                <View style={styles.frame19}>
                  <Image
                    style={styles.frameIcon4}
                    contentFit="cover"
                    source={require("../assets/frame36.png")}
                  />
                  <View style={styles.user81Parent}>
                    <Image
                      style={styles.user81}
                      contentFit="cover"
                      source={require("../assets/user-8-1.png")}
                    />
                    <Text style={styles.settings}>Profile</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image2Icon: {
    width: 1200,
    height: 900,
    marginLeft: 94,
  },
  time: {
    position: "relative",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFUIText,
    color: Color.gray1,
    textAlign: "left",
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 17,
    height: 11,
  },
  wifiIcon: {
    position: "relative",
    width: 15,
    height: 11,
    marginLeft: 5,
  },
  capacity: {
    position: "relative",
    borderRadius: 1,
    backgroundColor: Color.gray1,
    width: 18,
    height: 7,
  },
  capIcon: {
    position: "relative",
    width: 1,
    height: 4,
    opacity: 0.4,
    marginLeft: 3,
  },
  battery: {
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 1,
    width: 22,
    height: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 4,
    paddingBottom: 2,
    marginLeft: 5,
  },
  icons: {
    width: 67,
    height: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 245,
  },
  timeParent: {
    width: 344,
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 23,
    marginTop: 142,
  },
  frame: {
    position: "absolute",
    top: -1028,
    left: 0,
    width: 1294,
    height: 1062,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameChild: {
    position: "relative",
    borderRadius: Border.br_xs,
    width: 40,
    height: 40,
  },
  welcomeBack: {
    position: "relative",
    fontSize: FontSize.size_lg,
    letterSpacing: 1,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.sFUIText,
    color: Color.mainColor,
    textAlign: "left",
    width: 195,
  },
  noraJohnson: {
    position: "relative",
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: FontFamily.sFUIText,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    width: 140,
    marginTop: -8,
  },
  welcomeBackParent: {
    width: 195,
    height: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 8,
  },
  frame3: {
    width: 243,
    height: 48,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameItem: {
    position: "relative",
    width: 40,
    height: 40,
    marginLeft: 59,
  },
  frameParent: {
    width: 342,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: 24,
  },
  find: {
    color: Color.mainColor1,
  },
  lostB: {
    textTransform: "lowercase",
  },
  yourLostBelongings: {
    color: Color.mainColor,
  },
  findYourLostContainer: {
    position: "relative",
    fontSize: 24,
    letterSpacing: 1,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.sFUIText,
    textAlign: "left",
    width: 410,
  },
  devices: {
    position: "relative",
    fontSize: FontSize.size_base,
    letterSpacing: 0.3,
    fontWeight: "600",
    fontFamily: FontFamily.sFUIText,
    color: Color.mainColor,
    textAlign: "left",
  },
  items: {
    position: "relative",
    fontSize: FontSize.size_base,
    letterSpacing: 0.3,
    fontWeight: "600",
    fontFamily: FontFamily.sFUIText,
    color: Color.mainColor,
    textAlign: "left",
    opacity: 0.5,
    marginLeft: 28,
  },
  frame5: {
    width: 138,
    height: 19,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameInner: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: Color.mainColor1,
    width: 24,
    height: 3,
  },
  ellipseIcon: {
    position: "relative",
    width: 3,
    height: 3,
    marginLeft: 4,
  },
  rectangleParent: {
    width: 31,
    height: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 16,
    marginTop: 6,
  },
  frameContainer: {
    width: 138,
    height: 28,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 92,
    marginTop: 9,
  },
  frame4: {
    width: 410,
    height: 77,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  mkuu3Vw34frwatch45AlumStIcon: {
    position: "relative",
    width: 141,
    height: 134,
  },
  frame7: {
    borderRadius: 32,
    backgroundColor: Color.colorGhostwhite,
    width: 238,
    height: 180,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  norasAppleWatch: {
    position: "relative",
    fontSize: FontSize.size_base,
    letterSpacing: 0.3,
    fontWeight: "600",
    fontFamily: FontFamily.sFUIText,
    color: Color.mainColor,
    textAlign: "left",
    width: 160,
    height: 16,
  },
  car: {
    width: 20,
    height: 20,
    overflow: "hidden",
    marginLeft: 5,
  },
  vectorIcon: {
    position: "relative",
    width: 16,
    height: 12,
  },
  min: {
    position: "relative",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    fontWeight: "600",
    fontFamily: FontFamily.sFUIText,
    color: Color.mainColor,
    textAlign: "left",
    opacity: 0.7,
    marginLeft: 5,
  },
  vectorParent: {
    width: 55,
    height: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupIcon: {
    position: "relative",
    width: 7,
    height: 12,
    opacity: 0.7,
  },
  groupParent: {
    width: 55,
    height: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 15,
  },
  groupIcon1: {
    position: "relative",
    width: 16,
    height: 9,
    opacity: 0.7,
  },
  groupGroup: {
    width: 48,
    height: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 15,
  },
  frameView: {
    width: 188,
    height: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 1,
    marginTop: -6,
  },
  frame9: {
    width: 189,
    height: 28,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame8: {
    width: 189,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 14,
  },
  frame6: {
    width: 238,
    height: 282,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameWrapper: {
    width: 500,
    height: 282,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 1,
    marginTop: 25,
  },
  frameGroup: {
    width: 501,
    height: 384,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 23,
    marginTop: 23,
  },
  withYou: {
    position: "relative",
    fontSize: FontSize.size_lg,
    letterSpacing: 1,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.sFUIText,
    color: Color.mainColor,
    textAlign: "left",
    width: 336,
  },
  homepodMini1Icon: {
    position: "relative",
    borderRadius: Border.br_370xl_5,
    width: 52,
    height: 54,
  },
  homepodMini1Wrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGhostwhite,
    width: 64,
    height: 64,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon1: {
    position: "relative",
    width: 16,
    height: 16,
  },
  playSound: {
    position: "relative",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    fontWeight: "600",
    fontFamily: FontFamily.sFUIText,
    color: Color.mainColor1,
    textAlign: "left",
    marginLeft: 6,
  },
  vectorGroup: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorRoyalblue_100,
    width: 114,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_2xs,
    marginTop: 12,
  },
  norasHomepadParent: {
    width: 161,
    height: 58,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_12xs,
    marginLeft: 17,
  },
  frameParent2: {
    width: 242,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 7,
  },
  frame10: {
    width: 336,
    height: 111,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "relative",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGhostwhite,
    width: 64,
    height: 64,
  },
  rectangleGroup: {
    width: 242,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ed65745298de8a3209d1dbc409615dIcon: {
    position: "relative",
    width: 36,
    height: 56,
    marginLeft: -228,
  },
  frame11: {
    width: 242,
    height: 64,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  frameParent1: {
    width: 336,
    height: 195,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 24,
    marginTop: 23,
  },
  frame2: {
    width: 524,
    height: 673,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameIcon: {
    position: "relative",
    width: 391,
    height: 101,
    overflow: "hidden",
  },
  frame13: {
    width: 391,
    height: 101,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frameIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 19,
    height: 56,
    overflow: "hidden",
  },
  vectorIcon3: {
    position: "relative",
    width: 20,
    height: 20,
    opacity: 0.5,
  },
  settings: {
    position: "relative",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    fontFamily: FontFamily.sFUIText,
    color: Color.mainColor,
    textAlign: "left",
    opacity: 0.5,
    marginTop: 7,
  },
  vectorParent1: {
    width: 49,
    height: 41,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameInner1: {
    width: 49,
    height: 41,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame15: {
    position: "absolute",
    top: 0,
    left: 262,
    width: 49,
    height: 77,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  map: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    fontFamily: FontFamily.sFUIText,
    color: Color.mainColor,
    textAlign: "left",
    opacity: 0.5,
    width: 77,
    marginTop: 63,
  },
  frameIcon2: {
    position: "relative",
    width: 20,
    height: 56,
    overflow: "hidden",
    marginTop: -77,
  },
  frame17: {
    width: 25,
    height: 77,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameIcon3: {
    position: "relative",
    width: 145,
    height: 93,
    overflow: "hidden",
  },
  frameIcon4: {
    position: "relative",
    width: 20,
    height: 34,
    overflow: "hidden",
  },
  user81: {
    position: "relative",
    width: 20,
    height: 20,
    overflow: "hidden",
    opacity: 0.5,
  },
  user81Parent: {
    width: 77,
    height: 41,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 36,
    marginLeft: 39,
  },
  frame19: {
    width: 97,
    height: 77,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: -84,
  },
  frame18: {
    width: 158,
    height: 93,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: -7,
  },
  frame16: {
    position: "absolute",
    top: 0,
    left: 64,
    width: 176,
    height: 93,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame14: {
    position: "relative",
    width: 311,
    height: 93,
    overflow: "hidden",
    marginTop: -101,
  },
  frame12: {
    width: 391,
    height: 101,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  frame1: {
    position: "absolute",
    top: 55,
    left: 0,
    width: 524,
    height: 790,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  homePage: {
    position: "relative",
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default HomePage;
