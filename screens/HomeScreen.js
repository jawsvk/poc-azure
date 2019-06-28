import React from 'react';
import { Alert, Button} from 'react-native';
import LandingView from './LandingView';
import AzureAuth from './AzureAuth';
import MaterialInput from '../components/MaterialInput';
import {
  LoginContainer,
  LoginStyle,
  InputContainer,
} from './styles';


export default function HomeScreen() {

   return (
    <AzureAuth />
   );

}

HomeScreen.navigationOptions = {
  header: null,
};

