import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20
    },
    ImageStyle: {
        width: 210,
        height: 300
    },
    info: {
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 28
    },
    bookTextStyle: {
        fontSize: 24,
        fontWeight: '500',
    },
    authorTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#666666',
        marginBottom: 8
    },
    starSection: {
        flexDirection: 'row',
        marginBottom: 8
    },
    scoreNum: {
        color: '#666666'
    },
    descriptionText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#131313',
        lineHeight: 24,

        textAlign: 'center'
    },
    buttonStyle: {
        width: 190,
        height: 36,
        backgroundColor: '#6200EE',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        letterSpacing: 0.8,
    }
});

export default styles;