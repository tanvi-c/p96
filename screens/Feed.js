import React, {Component} from "react";
import {Platform, StatusBar, Text, View} from 'react-native';
import PostCard from "./PostCard";
import {Flatlist} from "react-native-gesture-handler";

export default class Feed extends Component {

    renderItem = ({ item: post }) => {
        return <PostCard post = {post} />;
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style = {styles.container}>
                <SafeAreaView styles = {styles.droidSafeArea} />
                <View style = {styles.appTitle}>
                    <Text style = {styles.appTitleText}> Spectagram </Text>
                </View>
                <View style = {styles.cardContainer}>
                    <Flatlist
                    keyExtractor = {this.keyExtractor}
                    data = {posts}
                    renderItem = {this.renderItem} />
                </View>
            </View>
        );
    }
}

const styles = Stylesheet.create({
    container: {
        flex: 1, 
        backgroundColor: "lightpurple"
    }, 
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 35
    }, 
    appTitle: {
        flex: 0.07, 
        padding: 5, 
        flexDirection: "row", 
        justifyContent: "center"
    }, 
    appTitleText: {
        color: "black", 
        fontSize: 28
    }, 
    cardContainer: {
        flex: 0.93
    }
});