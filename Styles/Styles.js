import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'green',
    },
    settingsContainer: {
        flex: 1,
        backgroundColor:'white',
        paddingTop:70,
        alignItems:'center',
    },
    homeContainer:{
        flex: 1,
        backgroundColor:'white',
        paddingTop: 40,
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height: 70,
        display:'flex',
    },
    headerLeft:{
        flexDirection:'row',
        alignItems:'center',
        display:'flex',
        height: 70,
    },
    profileImage:{
        width: 60,
        height: 60,
        marginLeft: 15,
        marginRight: 20,
    },
    welcome: {
        color: '#000',
        marginBottom: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchContainer:{
        width: 40,
        height: 40,
        borderRadius: '50%',
        justifyContent:'center',
        alignItems:'center',
        marginRight: 20,
        display:'flex',
    },
    card: {
       marginLeft: 40,
        marginTop: 30,
        marginBottom: 30,
    },
    cardList:{
        height: 80,
        paddingLeft: 30, 
    },
    cardContainer:{
        marginRight: 40,
        display: 'flex',
        alignItems:'center',
    },
    cardIconContainer:{
        height: 60,
        width: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        marginBottom: 2,
    },
    cardName:{
        color: 'grey',
    },
    transactionsHeader: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingLeft: 10,
        paddingRight: 30,
        marginVertical:25
      },
    
      transaction:{
        fontSize:24,
        fontFamily:'sanSerif'
      },
      sellAll:{
        color:'#1E90FF',
        size:22,
        fontWeight: 'bold'
      },
    
      transactionContainer: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        height:70
      },
    
      transactionLeft:{
        display:'flex',
        flexDirection:'row'
      },
    
      icon:{
        marginRight: 20,
        height: 40,
        width: 40,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: '50%',
      },
    
      transactionName:{
        fontSize: 20,
      },
    
      transactionType:{
        color: 'grey',
      },
    
      amount:{
        fontSize: 18
      },
    
      settings:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 70,
      },
    
      eachSettings:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height: 80,
        borderBottomWidth: 1,
      },
    
      switchContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 30,
      },
    
    
      theme:{
        fontSize: 24,
        fontWeight: 'bold',
      }
      
    })



































