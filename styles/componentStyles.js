import { StyleSheet } from 'react-native';

const componentStyles = StyleSheet.create({
    
    // variables
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
        backgroundColor: '#37D159'
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
    textSecondary: {
        color: '#20c997'
    },
    textSecondaryBeautician: {
        color: '#17a2b8'
    },
    textInfo: {
        color: '#b48dd3'
    },
    textSuccess: {
        color: '#37D159'
    },
    textWarning: {
        color: '#FFC368'
    },
    textDanger: {
        color: '#FF6746'
    },
    textGray: {
        color: "#999"
    },
    textCenter: {
        textAlign: 'center'
    },
    textBold: {
        fontWeight: 'bold'  
    },
    generalDescription: {
        fontSize: 16,
        marginHorizontal: 12,
        lineHeight: 20
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

    // images
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
    // navbar
    navBarContainer: {
        backgroundColor: 'white',
        minHeight: 80,
        paddingHorizontal: 16,
        paddingTop:14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    navHeaderLogo: {
        width: 40,
        height: 50,
        resizeMode: 'contain'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    headerIconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    headerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical:4,
        paddingHorizontal: 8,
        margin:4,
        borderRadius: 16,
        elevation: 2, // slight shadow for Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    headerIconsole: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical:8,
        paddingHorizontal: 16,
        margin:4,
        borderRadius: 16,
        elevation: 2, // slight shadow for Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        position: 'relative'
        
    },
    headerIconText: {
        fontSize: 10,
        color: '#20c997',
        flexShrink: 1,
        textAlign: 'center'
    },
    headerButton: {
        backgroundColor: '#20c997',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal: 12,
        paddingVertical:14,
        borderRadius: 16,
        flexShrink: 0
    },
    headerButtonText: {
        fontSize: 12,
        color: 'white',
        marginLeft: 8
    },

    // notification
    notificationDot: {
        position: 'absolute',
        top: 4,
        right: 4,
        width: 15,
        height: 15,
        backgroundColor: '#FFC368',
        borderRadius: 10,
        borderWidth: 2,
        borderColor:'white'
    },
    notDropMenu: {
        position: 'absolute',
        top: 82, // just below the avatar
        right:2,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)',
        paddingVertical: 6,
        paddingHorizontal: 12,
        width: 300,
        height: 400,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        zIndex: 999
    },
    notContainer: {
        padding: 8,
    },
    singleNotContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1
    },
    notInitials: {
        width: 50, 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        padding:4
    },
    notInitialsText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    notContent: {
        padding: 8
    },
    notMessage: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom:8
    },
    notTime: {
        color: 'gray',
        fontSize: 12
    },
    
    // userInfo
    initialsBg: {
        width: 50, // equal width & height for perfect circle
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25, // half of width/height for circle
        padding:4
    },
    avatar: {
        width: 56, // equal width & height for perfect circle
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#17a2b8',
        borderWidth: 1,
        borderRadius: 28, // half of width/height for circle
        paddingHorizontal: 4
    },

    initialsBgText: {
        fontSize: 24,
        fontWeight:'bold'
    },
    // dopdowns
    dropdownMenu: {
        position: 'absolute',
        top: 82, // just below the avatar
        right: 2,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)',
        paddingVertical: 6,
        paddingHorizontal: 12,
        minWidth: 160,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        zIndex: 999
    },
    profileDropdownMenu: {
        position: 'absolute',
        top: 50, // just below the avatar
        right: 2,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)',
        paddingVertical: 6,
        paddingHorizontal: 12,
        minWidth: 160,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        zIndex: 999
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12
    },
    dropdownText: {
        fontSize: 14,
        color: '#464a53',
        marginLeft: 8
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // ensures it covers the entire screen
        zIndex: 100
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

    // shadow
    textShadow: {
        textShadowColor: 'rgba(20, 20, 20, 0.2)', // very subtle shadow
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1.5,
    },
    shadow: {
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2 // for Android shadow
    },

    // charts
    radialDonutContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    radialDonutText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333", 
    },

    /// list cards

    // small 
    smallListCardContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderColor: '#f0f0f0',
        borderWidth: 1,
        marginVertical: 12,
        borderRadius: 12
    },
    squareAvatar: {
        width: 80,
        height: 80,
        marginHorizontal: 12,
        borderRadius: 12
    },
    listCardContent: {
        flex: 1,
        padding: 8
    },
    listCardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom:8
    },
    listCardDate: {
        color: 'gray',
        fontSize: 12,
        marginBottom: 8,
        flexShrink: 1,
        flexWrap: 'wrap'
    },

    // large
    largeListCardContainer: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        paddingVertical: 12,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
        marginVertical: 12,
        borderRadius: 12
    },
    largeListCardRow: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingBottom: 16
    },
    largeListCardDescription: {
        fontSize:16,
        marginHorizontal: 12,
        lineHeight:20
    },
    largeHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 12
    },
     
    // rating & review 
    startRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        marginRight: 4 
    },
    
    // latest booking
    squareInitials: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12,
        borderRadius: 12
    },
    
    // pageTitle
    pageTitleContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 8,
        borderRadius: 12
    },
    motherMenuUser: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#20c997'
    },
    motherMenuBeautician: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#17a2b8'
    },
    activeMenu: {
        fontSize: 20,
        color: '#999'
    },
    menuSeparator: {
        fontSize:20,
        marginHorizontal: 12,
        color: '#6666ff'
    },

    // lists
    listContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center',
        margin: 8,
        paddingVertical: 24,
        borderRadius: 12,  
    },
    listImage: {
        width: 300,
        height: 350,
        marginBottom: 16 
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
    listText: {
        fontSize: 16,
        marginBottom: 16
    },

    // button
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLarge: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 8,
        padding: 12,
        borderRadius: 12,
       
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    floatBackButton: {
        position: 'absolute',
        width:60,
        bottom: 20,
        left: 20,
        borderRadius: 20,
        padding: 12,
        elevation: 5, // android shadow
        shadowColor: "#000", // iOS shadow
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    
    // tabs
    tabHeader: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    activeTabUser: {
        borderBottomWidth: 3,
        borderColor: "#20c997"
    },
    activeTabBeautician: {
        borderBottomWidth: 3,
        borderColor: "#17a2b8"
    },
    tabText: {
        fontSize: 16,
        color: "#555"
    },
    activeTabTextUser: {
        color: "#20c997",
        fontWeight: 'bold'
    },
    activeTabTextBeautician: {
        color: "#17a2b8",
        fontWeight: 'bold'
    },
    tabContent: {
        padding: 0,
    },

    // cards
    cardShadow: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 8, // equivalent to 0.75rem
        padding: 4,
        marginVertical: 15,
        elevation: 2, // slight shadow for Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    cardHeader: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#f0f0f0",
        marginBottom: 16
        
    },
    cardBody: {
        padding: 4 
    },
    cardBodySubHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8
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

    // alerts
    alertContainer: {
        flex: 1,
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
        color: "white",
        textAlign: 'center',
        marginBottom: 5
    },
    alertTextBold: {
            fontWeight: 'bold'
    },

    // shopMenu
    grayCardContainer: {
        padding: 8
    },
    grayCard: {
        backgroundColor: '#ddd',
        padding: 12,
        margin: 8
        
    },

    /// modals
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)", // dark backdrop
    },
    modalContainer: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        elevation: 10, // shadow for Android
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    modalMessage: {
        color: "#999",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 20,
    },
    modalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginHorizontal: 5,
    },
    modalCancel: {
        backgroundColor: '#222'
    },
    modalButtonText: {
        color: "white",
        fontWeight: "bold",
    },

    // user modal
    
    modalConfirmUser: {
        backgroundColor: '#20c997'
    },

    // beautician modal
    modalConfirmBeautician: {
        backgroundColor: '#17a2b8'
    },
    
    /// footer

    // modal
    modalFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    // general
    footerContainer: {
        backgroundColor:'white',
        paddingVertical: 8,
        paddingHorizontal: 0
    },
    copyright: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    copyrightComp: {
        color:'#20c997'
    },
    copyrightCompBeautician: {
        color:'#17a2b8'
    },
    footerLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:8

    },
    footerLink: {
        fontSize: 12,
        color:'gray'
    },

    // error screens
    errorContainer: {
        marginVertical: 8
    },
    errorText: {
        color: '#FF6746',
        textAlign: 'center',
        fontSize:16
    },
     // bootstrap 
    row: {
        flexDirection: 'column',
        justifyContent: 'space-between'   
    },
    serialRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    column: {
        paddingHorizontal: 8
    }
    // test
    
})


export default componentStyles;