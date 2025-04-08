import { FlatList, SafeAreaView, Switch, Text, View } from 'react-native'
import { Settings } from '../Screens/Settings.js'
import { useTheme } from '../Styles/ThemeContext.js'
import { styles } from '../Styles/Styles.js'

export default function Screens() {

  const theme  = useTheme();
  const { isDarkMode } = theme;

  return (
    <SafeAreaView style={[styles.settingsContainer, {backgroundColor:theme.colors.background}]}>
      <Text style={[styles.settings, {color: theme.colors.text}]}>Settings</Text>
      <View style={{width:'100%', paddingHorizontal: 30,}}>
        <FlatList
        data={Settings}
        renderItem={({item})=>{
          return(
            <View style={[styles.eachSettings, {borderBottomColor:isDarkMode? '#3b3838' : '#dadbe0'}]}>
              <Text style={{fontSize: 18, color: theme.colors.text}}>{item.name}</Text>
              {item.icon()}
            </View>
          )
        }}
        />
        <View style={styles.switchContainer}>
          <Text style={[styles.theme, {color: theme.colors.text}]}>Theme</Text>
          <Switch
          thumbColor={'white'}
            value={theme.isDarkMode}
            onValueChange={theme.toggleTheme}
            trackColor={{ false: "#767577", true: "#80ed8d" }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

