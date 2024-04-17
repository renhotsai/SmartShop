import { FlatList, Image, Pressable, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { styles } from '../Models/Styles'
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { db } from '../Controllers/firebaseConfig';
import { collection, endAt, getDocs, onSnapshot, orderBy, query, startAt, where } from 'firebase/firestore';
import { images } from '../Models/Images';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const HomeView = ({ navigation, route }) => {

    const [search, setSearch] = useState('')
    const [recipes, setRecipes] = useState([])
    const [products, setProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState([])
    const [location, setLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })

    useEffect(() => {
        const address = "941 Progress Ave, Scarborough,"
        getGeocode(address)
    }, [])

    const getGeocode = async (address) => {
        try {
            const temp = await Location.geocodeAsync(address)
            setLocation(temp[0])
        } catch (err) {
            console.error(err);
        }
    }

    const onChangeStorePress = () => {
        console.log(`onChangeStorePress`);
    }

    useEffect(() => {
        try {
            const unsubscribe = onSnapshot(collection(db, "recipes"), (querySnapshot) => {
                const temp = []
                querySnapshot.forEach((doc) => {
                    const recipe = {
                        id: doc.id,
                        ...doc.data()
                    }

                    temp.push(recipe)
                });
                setRecipes(temp)
            });
            return () => {
                unsubscribe();
            }
        } catch (err) {
            console.error(`error${err}`)
        }
    }, [])

    const onRecipePress = (index) => {
        navigation.navigate("RecipeView", { recipe: recipes[index] })
    }


    const renderRecipeItem = ({ item, index }) => {
        const selectedImage = images[item.imageName]
        return (
            <View style={styles.recipeContainer}>
                <Pressable onPress={() => onRecipePress(index)}>
                    <Image source={selectedImage} style={styles.recipeImage} />
                    <Text style={styles.recipeName}>{item.name}</Text>
                    <View style={styles.recipieInfo}>
                        <FontAwesome6 name="clock" size={18} color="gray" />
                        <Text style={styles.recipieTimeText}>{item.time} minutes</Text>
                    </View>
                </Pressable>
            </View>
        )
    }

    useEffect(() => {
        try {
            const unsubscribe = onSnapshot(collection(db, "products"), (querySnapshot) => {
                const temp = []
                querySnapshot.forEach((doc) => {
                    const recipe = {
                        id: doc.id,
                        ...doc.data()
                    }

                    temp.push(recipe)
                });
                setProducts(temp)
            });
            return () => {
                unsubscribe();
            }
        } catch (err) {
            console.error(`error${err}`)
        }
    }, [])

    const renderProductItem = ({ item }) => {
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
    const onViewAllPress = () => {
        console.log(`onViewAllPress`);
    }

    const onDonatePress = () => {
        console.log('onDonatePress')
        navigation.navigate('Donate')
    }

    const onPurchaseHistoryPress = () => {
        console.log('onPurchaseHistoryPress')
    }

    const onCommunityPress = () => {
        console.log('onCommunityPress')
    }

    const onBarCodePress = () => {
        console.log('onBarCodePress')
    }

    const onMoreRecipesPress = () => {
        console.log('onMoreRecipesPress')
    }

    useEffect(() => {
        retriveFromDB()
    }, [search])

    const retriveFromDB = async () => {
        const q = query(
            collection(db, 'products'),
            where('tag', '>=', search.toLowerCase()),
            where('tag', '<=', search.toLowerCase() + '\uf8ff'),
        );
        try {


            const datasFromDB = await getDocs(q);
            const temp = []
            datasFromDB.forEach((doc) => {
                const product = {
                    id: doc.id,
                    ...doc.data()
                }
                temp.push(product)
            })
            setSearchProducts(temp)
        } catch (err) {
            console.error(err);
        }
    }

    const onLocatorPress = (item) => {
        console.log('onLocatorPress');
        setSearch("");
        navigation.navigate('Locator', { item: item, list: searchProducts })
    }

    const onAddItemPress = () => {
        console.log('onAddItemPress')
    }

    const Search = () => {
        return (

            <FlatList
                data={searchProducts}
                key={(item) => { return item.id }}
                renderItem={(item, index) => renderSearchItem(item, index)}
            />
        )
    }

    const renderSearchItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 10, marginVertical: 5, gap: 10 }}>
                <Image source={images[item.imageName]} style={styles.searchItemImage} />
                <View style={{ flex: 1 }}>
                    <Text>{item.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '900', fontSize: 20 }}>${item.price}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable onPress={() => onLocatorPress(item)} style={{ backgroundColor: 'green', borderRadius: 100, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome6 name="location-arrow" size={24} color="black" />
                            </Pressable>
                            <Pressable onPress={onAddItemPress}>
                                <FontAwesome6 name="circle-plus" size={40} color="green" />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const NoSearch = () => {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ height: '90%' }}>
                    <View style={styles.container}>
                        <View style={styles.optionGroup}>

                            <Pressable style={styles.option} onPress={onDonatePress}>
                                <View style={[styles.optionIcon, styles.donateColor]}>
                                    <AntDesign name="heart" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>Donate</Text>
                            </Pressable>
                            <Pressable style={styles.option} onPress={onPurchaseHistoryPress}>
                                <View style={[styles.optionIcon, styles.purchaseHistoryColor]}>
                                    <MaterialIcons name="attach-money" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>Purchase History</Text>
                            </Pressable>
                            <Pressable style={styles.option} onPress={onCommunityPress}>
                                <View style={[styles.optionIcon, styles.communityColor]}>
                                    <Ionicons name="people" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>Community</Text>
                            </Pressable>
                            <Pressable style={styles.option} onPress={onBarCodePress}>
                                <View style={[styles.optionIcon, styles.barcodeScannerColor]}>
                                    <FontAwesome6 name="barcode" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>Barcode Scanner</Text>
                            </Pressable>
                            <Pressable style={styles.option} onPress={onMoreRecipesPress}>
                                <View style={[styles.optionIcon, styles.moreRecipesColor]}>
                                    <SimpleLineIcons name="book-open" size={24} color="white" />
                                </View>
                                <Text style={styles.optionText}>More Recipes</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.sectionTitle}>
                            <Text style={styles.sectionTitleText}>Recipes for youu...</Text>
                            <Pressable onPress={onViewAllPress}>
                                <Text style={{ color: 'gray' }}>View all</Text>
                            </Pressable>
                        </View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={recipes}
                            key={(item) => { return item.id }}
                            renderItem={(item, index) => renderRecipeItem(item, index)}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.sectionTitleText}>Discounts from your favorite shops</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={products}
                            key={(item) => { return item.id }}
                            renderItem={renderProductItem}
                        />
                    </View>
                    <View style={styles.container}>
                        <View style={styles.sectionTitle}>
                            <Text style={styles.sectionTitleText}>My Preferred Store</Text>
                            <Pressable onPress={onChangeStorePress}>
                                <Text style={{ color: 'green', fontWeight: 'bold', textDecorationLine: 'underline' }}>Change</Text>
                            </Pressable>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text>Food Basic & Pharmacy - Toronto, Ontario</Text>
                            <Text>1234 Elm Street, Somewhere Avenue</Text>
                        </View>

                        <MapView
                            style={{ height: 200 }}
                            region={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}
                        >
                            <Marker coordinate={location}>
                                <View>
                                    <FontAwesome6 name="location-pin" size={24} color="red" />
                                </View>
                            </Marker>
                        </MapView>
                    </View>
                </ScrollView>
            </View>
        )
    }

    return (
        <View>
            <View style={styles.searchBar}>
                <View style={styles.searchText}>
                    <FontAwesome6 name="magnifying-glass" size={24} color="black" />
                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder='What item are you looking for?'
                        placeholderTextColor='black'
                    />
                </View>
            </View>
            {search === "" ?
                <NoSearch /> : <Search />
            }
        </View>
    )
}

export default HomeView