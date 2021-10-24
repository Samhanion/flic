import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import "./global";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  return (
    // <WalletConnectProvider
    //   redirectUrl={Platform.OS === "web" ? window.location.origin : "https://metamask.app.link/dapp/dapp"}
    //   storageOptions={{
    //     asyncStorage: AsyncStorage,
    //   }}
    // >
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
    /* </WalletConnectProvider> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
