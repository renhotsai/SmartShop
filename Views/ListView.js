import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import Checkbox from 'expo-checkbox';
import { useEffect, useState } from "react";
import { styles } from "../Models/Styles";
import { FontAwesome6 } from '@expo/vector-icons';
import { db } from '../Controllers/firebaseConfig'
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";


const ListView = ({ navigation, route }) => {

    const [groceriesList, setGroceriesList] = useState([
        { item: "Ginger", isChecked: false },
        { item: "Tomato", isChecked: false },
        { item: "Garlic", isChecked: false },
        { item: "Chicken breast", isChecked: false },
        { item: "Olive oil", isChecked: false },
        { item: "", isChecked: false },
        { item: "", isChecked: false },
        { item: "", isChecked: false },
        { item: "", isChecked: false },
        { item: "", isChecked: false },
        { item: "", isChecked: false },
        { item: "", isChecked: false },
    ]);

    const setIsChecked = (index) => {
        if (groceriesList[index].item !== "") {
            setGroceriesList((prevList) =>
                prevList.map((item, i) =>
                    i === index ? { ...item, isChecked: !item.isChecked } : item
                )
            );
        }
    };

    const setText = (index, value) => {
        setGroceriesList((prevList) => {
            if (index >= prevList.length) {
                const newList = [...prevList];
                for (let i = prevList.length; i <= index; i++) {
                    newList.push({ item: "", isChecked: false });
                }
                newList[index] = { item: value, isChecked: false };
                return newList;
            } else {
                return prevList.map((item, i) =>
                    i === index ? { ...item, item: value } : item
                );
            }
        });
    };


    const onLocatorPress = (item) => {
        // console.log(`onLocatorPress`);
        // console.log(`item: ${JSON.stringify(item)}`);

        const q1 = query(collection(db, 'products'), where('name', '==', item.item));
        try {
            getDocs(q1)
            .then((snapshot) => {
                const temp1 = [];
                snapshot.forEach((doc) => {
                    temp1.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                return temp1
            }).then((products) => {
                console.log(`product: ${JSON.stringify(products)}`);
                const q2 = query(collection(db, 'products'), where('tag', '==', products[0].tag));
                const temp = [];
                getDocs(q2).then((snapshot) => {
                    snapshot.forEach((doc) => {
                        temp.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                    console.log(`item: ${JSON.stringify(products[0])} , list: ${JSON.stringify(temp)}`);
                    navigation.navigate('Locator', { item: products[0], list: temp })
                })
            })
        } catch (err) {
            console.error(err);
        }
    }

    const GroceriesList = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <Checkbox
                    style={styles.checkbox}
                    value={item.isChecked}
                    onValueChange={() => setIsChecked(index)}
                />
                <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 10, borderBottomWidth: 1 }}>
                    <TextInput
                        value={item.item}
                        onChangeText={(value) => setText(index, value)}
                        style={{
                            width: '90%',
                            borderColor: 'gray',
                            padding: 5
                        }}
                    />
                    {item.item !== "" &&
                        <Pressable onPress={() => onLocatorPress(item)}>
                            <FontAwesome6 name="location-arrow" size={24} color="black" />
                        </Pressable>
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={styles.detailContainer}>
            <View style={styles.detailTitleContainer}>
                <Text style={styles.detailTitleText}>Groceries List</Text>
            </View>
            <FlatList
                data={groceriesList}
                key={(item) => item.item}
                renderItem={(item, index) => GroceriesList(item, index)}
            />
        </View>
    )
}

export default ListView;