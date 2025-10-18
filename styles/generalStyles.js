import { StyleSheet } from 'react-native';

const generalStyles = StyleSheet.create({

    // color
    primary: {
        backgroundColor: "#222"
    },
    secondary: {
        backgroundColor: '#20c997'
    },
    secondaryBeautician: {
        backgroundColor:'#17a2b8'
    },
    success: {
        backgroundColor: '#0b0b0bff'
    },
    info: {
        backgroundColor: '#b48dd3'
    },
    warning: {
        backgroundColor: '#FFC368'
    },
    danger: {
        backgroundColor: '#FF6746'  
    },
    smokeBackground: {
        backgroundColor: 'whitesmoke'
    },
    whiteBackground: {
        backgroundColor: '#fff'
    },
    authBackground: {
        backgroundColor: '#d1d1e0'
    },
    dashBg1: {
        backgroundColor: '#222'
    },
    dashBg2: {
        backgroundColor: '#6666ff'
    },
    dashBg3: {
        backgroundColor: '#777'
    },
    dashBg4: {
        backgroundColor: '#00cc88'
    },
    initialsBg: {
        position: 'absolute',
        top:-40,
        width: 80, // equal width & height for perfect circle
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40, // half of width/height for circle
        padding: 4,
        borderWidth: 2,
        borderColor: "#20c997"
    },
    
    // containers
    container: {
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal:2
    },
    center: {
        justifyContent: 'center',
        alignItems:'center',
    },
    between: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contentBody: {
        paddingTop: 8,
        paddingHorizontal: 0
    },
    authContent: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical:24,
        borderRadius:8
    },
    profileAvatarWrapper: {
        position: 'absolute',
        top: -40,
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // needed for shadow to be visible
        elevation: 4, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    // card styles
    card: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 8, // equivalent to 0.75rem
        padding: 8,
        marginVertical: 15,
        elevation: 2, // slight shadow for Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    cardShadow: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 8, // equivalent to 0.75rem
        padding: 8,
        marginVertical: 15,
        elevation: 2, // slight shadow for Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    dashCard: {
        borderRadius: 12,
        padding: 8,
        marginVertical: 8,
        elevation: 2, // slight shadow for Android
    },
    cardHeader: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#f0f0f0",
        marginBottom: 16
        
    },
    cardBody: {
        padding: 8 
    },

    // shadows
    shadow: {
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    textShadow: {
        textShadowColor: 'rgba(20, 20, 20, 0.2)', // very subtle shadow
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1.5,
    },
    initialsBgShadow: {
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    profileAvatarShadow: {
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    // alerts
    alertContainer: {
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 8
    },
    alert: {
        width: "100%",
        padding: 10,
        borderRadius: 16 
    },
    alertText: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 4
    },
    alertTextBold: {
            fontWeight: 'bold'
    },
   
    // text
    largeHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 12
    },
    dashCardCount: {
        fontFamily: 'JostBold',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingBottom: 8 
    },
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardBodyHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8 
    },
    cardBodySubHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8
    },
    cardBodyText: {
        fontSize: 16,
        color: 'gray',
        lineHeight:24,
        marginBottom: 32,
        opacity:0.8
    },
    textSecondary: {
        color: '#20c997'
    },
    textSecondaryBeautician: {
        color: '#17a2b8'
    },
    textSuccess: {
        color: '#37D159'
    },
    textInfo: {
        color: '#b48dd3'
    },
    textWarning: {
        color: '#FFC368'
    },
    textDanger: {
        color: '#FF6746'
    },
    textGray: {
        color: '#999'
    },
    textWhite: {
        color: '#fff'
    },
    textCenter: {
        textAlign:'center'
    },
    textBold: {
        fontWeight: 'bold'
    },
    fieldHeading: {
        fontFamily: 'JostBold',
        fontSize: 14,
        fontWeight: 'bold'
    },
    fieldText: {
        fontFamily: 'JostRegular',
        fontSize: 14,
        color: '#999'
    },
    rating: {
        backgroundColor: '#b48dd3',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 16,
        marginBottom: 12
    },
    ratingText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#fff',
        marginRight: 8
    },
    initialsBgText: {
        fontFamily: 'DancingScriptBold',
        fontSize: 32,
        fontWeight:'bold'
    },
    generalDescription: {
        fontSize: 16,
        marginHorizontal: 12,
        lineHeight: 20
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
        padding: 12
    },

    // images
    imageFluid: {
        width: '100%',
        height: 200,
        marginBottom: 24
    },
    authBgImage: {
        width: 250,
        height: 100,
        marginBottom: 16
    },
    loginBgImage: {
        width: 350,
        height: 250,
        marginVertical:8
    },
    shopImage: {
        width: 290,
        height: 220,
        marginBottom: 16,
        borderRadius: 12
    },
    profilePicPhoto: {
        width: 300,
        height: 400,
        marginBottom: 16,
        borderRadius: 12
    },
    profileAvatar: {
        width: 76, // equal width & height for perfect circle
        height: 76,
        borderRadius: 38, // half of width/height for circle
        borderWidth: 2,
        borderColor: "#17a2b8"
    },

    // button
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLink: {
        width:"50%",
        padding: 8,
        marginHorizontal: 5,
        borderRadius: 5
    },
    buttonLarge: {
        flexDirection: 'row',
        height: 50,
        padding: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    profilePicAccessButton: {
        position: 'absolute',
        right: 5,
        top: 5,
        backgroundColor: '#d1d1e0',
        width: 45,
        height: 45,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    
    // forms
    authFormContainer: {
        marginVertical: 8,
        padding: 8
    },
    formGroup: {
        paddingHorizontal: 16,
        marginBottom: 8
    },
    formGroupLabel: {
        color: 'gray',
        fontFamily: 'JostBold',
        fontSize: 16,
        marginBottom: 6
        
    },
    formGroupTextInput: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 14,
        color:'#969ba0',
        borderColor: '#F2F2F2',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius:12
        
    },
    formGroupTextInputFocused: {
        borderColor: '#606060', // highlight color when selected
        borderWidth: 2
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    inputWithIcon: {
        paddingRight: 40, // space for the icon
    },
    iconContainer: {
        position: 'absolute',
        right: 12,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        paddingHorizontal: 8
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: "#999",
    },
    
    // media
    mediaSecondary: {
        backgroundColor: '#bdf5e4'
    },
    mediaSecondaryBeautician: {
        backgroundColor: '#8ee4f1'  
    },
    mediaInfo: {
        backgroundColor: '#e7daf1' 
    },
    mediaSuccess: {
        backgroundColor: '#acecba' 
    },
    mediaWarning: {
        backgroundColor: '#ffebcc'
    },
    mediaDanger: {
        backgroundColor: '#ffd5cc'
    },
    mediaGray: {
        backgroundColor: '#e6e6e6'
    },

    // bootstrap 
    row: {
        flexDirection: 'column',
        justifyContent: 'space-between'   
    },
    serialRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    column: {
        paddingHorizontal: 8
    }
})


export default generalStyles
