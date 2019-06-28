import React from 'react';
import {AppRegistry} from 'react-native';
import {AzureInstance, AzureLoginView} from 'react-native-azure-ad-2';

const CREDENTIAILS = {
    client_id: 'ab6859bd-960a-4173-a5e3-9fe189be8a59',
    client_secret: '2fzWtX7e4g4_dalePtVl/QBaTabt.rj[',
    scope: 'User.Read'
  };
  
  export default class AzureAuth extends React.Component {
	constructor(props){
		super(props);
		this.azureInstance = new AzureInstance(CREDENTIAILS);
		this._onLoginSuccess = this._onLoginSuccess.bind(this);
	}
	
	_onLoginSuccess(){
		this.azureInstance.getUserInfo().then(result => {
			console.log(result);
		}).catch(err => {
			console.log(err);
		})
	}

    render() {
        return (
            <AzureLoginView
            	azureInstance={this.azureInstance}
            	loadingMessage="Requesting access token"
            	onSuccess={this._onLoginSuccess}
            />
        );
    }
}

AppRegistry.registerComponent('azureAuth', () => azureAuth);