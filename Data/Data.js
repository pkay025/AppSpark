import AntDesign from '@expo/vector-icons/AntDesign';
import { Styles } from '../Styles/Styles';
import { View, Text, Image} from 'react-native';

export const Cards = [
    {
        id: 1,
        title: 'Sent',
        image: require('../assets/send.png'),
    },
    {
        id: 2,
        title: 'Receive',
        image: require('../assets/receive.png'),
    },
    {
        id: 3,
        title: 'Loan',
        image: require('../assets/loan.png'),
    },
    {
        id: 4,
        title: 'Topup',
        image: require('../assets/topUp.png'),
    },
]
 export const Transactions = [
    {
        id: 1,
        icon: require('../assets/apple.png'),
        name: 'Apple Store',
        type: 'Entertainment',
        amount: '-$5,99',
        color:'black'
      
        },
        {
        id: 2,
        icon: require('../assets/spotify.png'),
        name: 'Spotify',
        type: 'Music',
        amount: '-$12,99',
        color:'black'
      
        },
        {
        id: 3,
        icon: require('../assets/moneyTransfer.png'),
        name: 'Money Transfer',
        type: 'Transaction',
        amount: '$300',
        color:'#1E90FF'
      
        },
        {
        id: 4,
        icon: require('../assets/grocery.png'),
        name: 'Grocery',
        type: 'Grocery',
        amount: '-$88',
        color:'black'
        }
      ]

export const Settings = [
    {
        name: 'Language',
        icon:()=>(
            <AntDesign name='right' size={20} color='#888'/> 
        )
    },
    {
        name: 'My Profile',
        icon:()=>(
            <AntDesign name='right' size={20} color='#888'/> 
        )
    },
    {
        name: 'Contact Us',
        icon:()=>(
            <AntDesign name='right' size={20} color='#888'/> 
        )
    },
    {
        name: 'Change Password',
        icon:()=>(
            <AntDesign name='right' size={20} color='#888'/> 
        )
    },
    {
        name: 'Privacy Policy',
        icon:()=>(
            <AntDesign name='right' size={20} color='#888'/> 
        )
    }
]









