import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { styles } from "../Models/Styles"
import { AntDesign } from '@expo/vector-icons';


const DonateView = () => {
    const onDonateNowPress = () => {
        console.log("Donate Now Pressed")
    }
    const onLearnMorePress = () => {
        console.log("Learn More Pressed")
    }
    const onQ1Press = () => {

    }

    return (
        <View style={{ color: 'rgba(184,199,188,1)', }}>
            <View>
                <Image source={require('../assets/donate_picture.png')} style={styles.donateImage} />
                <View style={styles.donateImageOutside} />
                <View style={styles.donateTextContainer}>
                    <View>
                        <Text style={{ color: 'white', fontWeight: '900', fontSize: 30 }}>Make a Donation</Text>
                        <Text style={{ color: 'white', fontSize: 11 }}>Donate and make a different in your community</Text>
                    </View>
                    <Pressable onPress={onDonateNowPress} style={{ backgroundColor: 'rgba(184,199,188,0.8)', padding: 10, paddingHorizontal: 20, borderRadius: 50 }}>
                        <Text style={{ fontWeight: '900', fontSize: 20, color: 'rgba(33,87,55,1)' }}>Donate Now</Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView style={{ height: 400 }}>
                <View style={{ padding: 30 }}>
                    <View style={{ alignItems: 'center', gap: 20 }}>
                        <Text style={{ color: 'rgba(33,87,55,1)', fontWeight: '900', fontSize: 20 }}>Did you know?</Text>
                        <Text style={styles.donateInfoText}>
                            In Canada, an astonishing 50 million tonnes of food are wasted every year. To put this into perspective, this amount of wasted food is enough to feed approximately 114 million people for a year, based on an average daily consumption of 1.2 kg of food per person. This statistic not only highlights the scale of food waste in Canada but also emphasizes the potential of this wasted resource to address food insecurity and hunger, both nationally and globally.
                        </Text>
                        <Pressable onPress={onLearnMorePress} style={{ backgroundColor: 'rgba(97,135,109,1)', paddingHorizontal: 40, padding: 5, borderRadius: 30 }}>
                            <Text style={{ color: 'white', fontWeight: '900', fontSize: 20 }}>Learn More...</Text>
                        </Pressable>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text>FAQ's</Text>
                        <Pressable onPress={onQ1Press} style={styles.donateQuestion}>
                            <Text style={styles.questionText}>Where can you drop of your donation</Text>
                            <AntDesign name="plus" size={10} color="white" />
                        </Pressable>
                        <Pressable onPress={onQ1Press} style={styles.donateQuestion}>
                            <Text style={styles.questionText}>How can I get involved with the community?</Text>
                            <AntDesign name="plus" size={10} color="white" />
                        </Pressable>
                        <Pressable onPress={onQ1Press} style={styles.donateQuestion}>
                            <Text style={styles.questionText}>How do you ensure my data is protected</Text>
                            <AntDesign name="plus" size={10} color="white" />
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};



export default DonateView

