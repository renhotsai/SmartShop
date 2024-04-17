import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { images } from '../Models/Images'
import { styles } from '../Models/Styles'

const LocatorView = ({ navigation, route }) => {

    let list = route.params.list
    const currItem = route.params.item
    const currItemselectedImage = images[currItem.imageName]

    list = list.filter(i => i.name !== currItem.name);
    const onOtherVarietiesPress = () => {
        console.log(`onOtherVarietiesPress`);
    }

    const changeToDate = () => {
        const firebaseTimestamp = currItem.validDate
        const jsDate = new Date(firebaseTimestamp.seconds * 1000 + firebaseTimestamp.nanoseconds / 1000000);
        return jsDate.toDateString().slice(4)
    }

    const renderItem = ({ item, index }) => {

        const selectedImage = images[item.imageName]
        return (
            <View style={styles.productContainer}>
                <Image source={selectedImage} style={styles.productImage} />
                <View style={{ width: 100 }}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: "700" }} >{item.name}</Text>
                    <Text style={{ color: "green", fontWeight: "700" }}>${item.price}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require("../assets/locatorMap.png")} style={{ height: 260, width: 375 }} />
                <View style={{ alignItems: "center", marginVertical: 20 }}>
                    <Text style={{ color: 'rgba(97,135,109,1)', fontWeight: '900' }}>{currItem.name}</Text>
                    <View style={{ flexDirection: 'row', gap: 20, marginVertical: 10 }}>
                        <Image source={currItemselectedImage} style={{width:150,height:150}}/>
                        <View style={{ justifyContent: 'space-between' }}>
                            <View style={{ gap: 10 }}>
                                <Text>{currItem.brand}</Text>
                                <Pressable onPress={onOtherVarietiesPress}>
                                    <Text>Other varieties</Text>
                                </Pressable>
                                <Text>Location: {currItem.location}</Text>
                            </View>
                            <View style={{ gap: 5 }}>
                                <Text style={{ color: 'red', fontWeight: "900", fontSize: 30 }}>${currItem.specialPrice}</Text>
                                <Text>Regular Price${currItem.price}</Text>
                                <Text>{changeToDate()}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={{ color: 'rgba(97,135,109,1)', fontWeight: '900' }}>Similar Items</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={list}
                        key={(item) => { return item.id }}
                        renderItem={(item, index) => renderItem(item, index)}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default LocatorView