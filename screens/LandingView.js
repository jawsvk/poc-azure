import React from 'react';
import {ReactNativeAD, ADLoginView} from 'react-native-azure-ad'

const CREDENTIAILS = {
    client_id: 'ab6859bd-960a-4173-a5e3-9fe189be8a59',
    client_secret: '2fzWtX7e4g4_dalePtVl/QBaTabt.rj[',
    scope: 'User.Read'
};

class LandingView extends React.Component {

  constructor(props) {
    super(props)
    this.AzureADContext = {
      client_id : CREDENTIAILS.client_id,
      // Optional
      redirect_url : 'http://localhost:8080',  
      // Optional
      authority_host : 'https://login.microsoftonline.com/common/oauth2/authorize',
      // Optional
      prompt : 'none',  
      // This is required if client_id is a web application id
      // but not recommended doing this way.
      client_secret : CREDENTIAILS.client_secret,
      resources : [
        'https://graph.microsoft.com',
        'https://outlook.office365.com',
        // ... more resources
      ]
    }
  }

  render() {

  new ReactNativeAD({
    client_id: CREDENTIAILS.client_id,
    // tenant: 'zde.onmicrosoft.com',
    resources: [
        'https://graph.microsoft.com',
    ]})
  
    return <ADLoginView
            context={ReactNativeAD.getContext(CREDENTIAILS.client_id)}
            onSuccess={this.onLoginSuccess.bind(this)}/>
  }

  onLoginSuccess(credentials) {
    console.log('token from azure >>>',credentials['https://graph.microsoft.com'].access_token);
    // use the access token ..
  }

}

export default LandingView;