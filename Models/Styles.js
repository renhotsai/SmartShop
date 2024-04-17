import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    loginHeaderImg: {
        width: 300,
        height:100,
        alignSelf: "center",
      },
    loginContainer: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 20,
        gap: 10,
      },
    loginButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
      },
    loginButton: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
      },
    loginInput: {
        width: "100%",
        height: 40,
        borderColor: "#ddd",
        fontSize: 16,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
      },
    loginLabel: {
        fontSize: 16,
        margin: 5,
        fontWeight: "bold",
      },
    container: {
        padding: 10,
        gap: 10,
    },
    searchBar: {
        padding: 10,
        backgroundColor: '#b0c5c0',
    },
    searchText: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 2,
        borderRadius: 15,
        gap: 20,
    },
    optionIcon: {
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    option: {
        alignItems: 'center',
        width: 75,
    },
    optionText: {
        textAlign: 'center',
    },
    optionGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    donateColor: {
        backgroundColor: '#c3b19b',
    },
    purchaseHistoryColor: {
        backgroundColor: '#b2888a'
    },
    communityColor: {
        backgroundColor: '#b0b4b3'
    },
    barcodeScannerColor: {
        backgroundColor: '#688781'
    },
    moreRecipesColor: {
        backgroundColor: '#d7d9d4'
    },
    sectionTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionTitleText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    recipeContainer: {
        gap: 5,
        padding: 10
    },
    recipeImage: {
        width: 170,
        height: 120,
    },
    recipeName: {
        fontWeight: 'bold',
    },
    recipieInfo: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-end'
    },
    recipieTimeText: {
        color: 'gray',
    },
    productContainer: {
        flex:1,
        backgroundColor:'white',
        margin:10,
        padding:10,
    },
    productImage: {
        width: 100,
        height: 100,
    },
    donateImageOutside: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(33, 87, 50, 0.5)',
    },
    donateImage: {
        width: '100%',
        height: 250,
    },
    donateTextContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
    },
    donateInfoText: {
        textAlign: 'justify',
        color: 'rgba(97,135,109,1)'
    }
    ,
    donateQuestion: {
        flexDirection: 'row',
        backgroundColor: 'rgba(149,173,156,1)',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    questionText: { color: 'white' },
    detailContainer: {
        padding: 20,
        gap: 10,
    },
    detailTitleContainer: {
        backgroundColor: 'rgba(97,135,109,1)',
        padding: 10,
        width: '75%',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
    },
    detailTitleText: {
        color: 'white',
        fontWeight: '900',
        fontSize: 20,
        textAlign: 'center',
    },
    recipeDetailImgae: {
        width: '100%',
        height: 200,
        alignSelf: 'center',
    },
    recipeDetailSectionTitleContainer: {
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    recipeDetailSectionTitle: {
        fontWeight: '800',
    },
    recipeDetailText: {
        fontSize: 15,
    },
    recipeDetailTextContainer: {
        gap: 10,
    },
    unLockImage: {
        height: 55
        , width: 80
    },
    unlockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    searchItemImage: {
        height: 100,
        width: '30%',
    },
})

export { styles }