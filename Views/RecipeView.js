import { Image, Text, View } from "react-native"
import { images } from "../Models/Images";
import { ScrollView } from "react-native";
import { styles } from "../Models/Styles";

const RecipeView = ({ navigation, route }) => {

    const recipe = route.params.recipe
    const selectedImage = images[recipe.imageName]
    const unlockImage = images["unlock"]
    const Ingredients = () => {
        return (
            <View style={styles.recipeDetailTextContainer}>
                {recipe.ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.recipeDetailText}>{ingredient}</Text>
                ))}
            </View>
        );
    };

    const Preparation = () => {
        return (
            <View style={styles.recipeDetailTextContainer}>
                {Object.values(recipe.preparations).map((preparation, index) => (
                    <Text key={index} style={styles.recipeDetailText}>{index + 1}. {preparation}</Text>
                ))}
            </View>
        );
    }

    const Nutrition = () => {

        return (
            <View style={styles.unlockContainer}>
                <Image source={unlockImage} style={styles.unLockImage} />
                <Text style={{flex:1}}>Pay now to unlock nutrition information</Text>
            </View>
        )
    }

    const ShopIngredientsInStore = () => {
        return (
            <View style={styles.unlockContainer}>
                <Image source={unlockImage} style={styles.unLockImage} />
                <Text style={{ flex: 1 }}>Pay now to shop all ingredients you need by one click</Text>
            </View>
        )
    }

    const LearnToCook = () => {
        return (
            <View style={styles.unlockContainer}>
                <Image source={unlockImage} style={styles.unLockImage} />
                <Text style={{flex:1}}>Pay now to meet the chef online for more tips</Text>
            </View>
        )
    }

    return (
        <View style={styles.detailContainer}>
            <View style={styles.detailTitleContainer}>
                <Text style={styles.detailTitleText}>{recipe.name}</Text>
            </View>
            <Image source={selectedImage} style={styles.recipeDetailImgae} />
            <ScrollView style={{ height: 380 }}>
                <View style={{ gap: 10 }}>
                    <View style={styles.recipeDetailSectionTitleContainer}>
                        <Text style={styles.recipeDetailSectionTitle}>INGREDIENTS</Text>
                    </View>
                    <Ingredients />

                    <View style={styles.recipeDetailSectionTitleContainer}>
                        <Text style={styles.recipeDetailSectionTitle}>PREPARATION</Text>
                    </View>
                    <Preparation />
                    <View style={styles.recipeDetailSectionTitleContainer}>
                        <Text style={styles.recipeDetailSectionTitle}>NUTRITION INFO</Text>
                    </View>
                    <Nutrition />
                    <View style={styles.recipeDetailSectionTitleContainer}>
                        <Text style={styles.recipeDetailSectionTitle}>SHOP INGREDIENTS IN STORE</Text>
                    </View>
                    <ShopIngredientsInStore />
                    <View style={styles.recipeDetailSectionTitleContainer}>
                        <Text style={styles.recipeDetailSectionTitle}>LEARN TO COOK</Text>
                    </View>
                    <LearnToCook />
                </View>
            </ScrollView>
        </View>
    )
}


export default RecipeView