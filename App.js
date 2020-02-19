import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AuthScreen } from './src/screens/AuthScreen'
import MainScreen from './src/screens/MainScreen'
const App = () => {
  const [isAuth, setAuth] = useState(false)
  const [vkName, setVKName] = useState('')
  let content = (
    <AuthScreen onAuth={setAuth} onChangeName={setVKName}/>
  )

  if(isAuth, vkName) {
    content = (
      <MainScreen name={vkName} onAuth={setAuth} onChangeName={setVKName}/>
    )
  }
  return (
    <View style={styles.app}>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
})

export default App
