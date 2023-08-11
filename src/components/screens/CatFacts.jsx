import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MyButton from "../MyButton";
import axios from "axios";

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#234'
    },
    containerSafeArea: {
        backgroundColor: '#234'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#599',
    },
    catfact: {
        fontStyle: 'italic',
        textAlign: 'justify',
        margin: 30,
        marginBottom: 30,
        paddingBottom: 5,
        color: '#fff',
        fontSize: 15
    }
})

const CatFacts = () => {
    const [catFact, setCatFact] = useState();
    const [catFact2, setCatFact2] = useState();

    const fetchCatFact = async () => {
        try {
            const {data} = await axios.get('https://catfact.ninja/fact');
            setCatFact(data.fact)
            const {data:data2} = await axios.get('https://catfact.ninja/fact')
            setCatFact2(data2.fact)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={styles.containerSafeArea}>
            <View style={styles.body}>
                <Text style={styles.text}>Cat fact</Text>
                <MyButton
                    title={'Fato aleatório sobre gatos'}
                    onPressButton={fetchCatFact}
                />
                <Text style={styles.catfact}>{catFact ? catFact : ""}</Text>
                <Text style={styles.catfact}>{catFact2 ? catFact2 : ""}</Text>
            </View>
        </SafeAreaView>
    );
}

export default CatFacts;