import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 15,
        borderRadius: 4,
        backgroundColor: '#215',
        margin: 5
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18
    }
})

const MyButton = ({title, onPressButton}) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;