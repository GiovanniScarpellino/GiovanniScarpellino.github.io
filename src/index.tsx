import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

// Google Analytics
import ReactGA from 'react-ga';
ReactGA.initialize(TRACKING_CODE);
ReactGA.pageview(window.location.pathname + window.location.search);

// React & Redux
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import * as Firebase from 'firebase/app';
import * as Constants from './constants/env';

// Pages
import Home from './pages/Home/Home';
import { notification, Button } from 'antd';
import { TRACKING_CODE } from './constants';

interface IProps { }

interface IState { }

class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        // Initialisation de firebase
        Firebase.initializeApp({
            apiKey: Constants.REACT_APP_API_KEY,
            authDomain: Constants.REACT_APP_AUTH_DOMAIN,
            databaseURL: Constants.REACT_APP_DATABASE_URL,
            projectId: Constants.REACT_APP_PROJECT_ID,
            storageBucket: Constants.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: Constants.REACT_APP_MESSAGING_SENDER_ID,
        });
    }

    componentWillMount() {
        if (localStorage.getItem('cookieConsent') !== 'true') {
            notification.open({
                message: (
                    <span>
                        This website uses cookies to ensure you get the best experience on our website.<br />
                        <a href="https://cookiesandyou.com/" target="_blank" rel="noopener noreferrer">
                            Learn more
                        </a>
                    </span>
                ),
                type: 'info',
                btn: <Button onClick={() => {
                    localStorage.setItem('cookieConsent', 'true');
                    notification.close('cookieConsent');
                }}>Got it!</Button>,
                duration: null,
                placement: 'bottomRight',
                key: 'cookieConsent'
            });
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));