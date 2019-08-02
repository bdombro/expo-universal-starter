/**
 * Tips:
 * - You should use non-functional components for higher level stuff, b/c fc's tend to break hot reload
 * - Use the assets features on this page to load fonts and stuff
 */
import { hot } from 'react-hot-loader';
import React from 'react';
import { Platform } from 'react-native';
import { Router } from './src/components/lib/Routing';
import { cacheAssets, cacheFonts } from './src/lib/AssetsCaching';
import { AppLoading } from './src/routes/AppLoading';
import { Routes } from './src/Routes';
import { light as lightTheme, mapping } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { Helmet } from './src/components/lib/Helmet';
import { SidebarSection } from './src/components/sections/SidebarSection';

interface state {
  isReady: boolean;
}

class App extends React.PureComponent<any, state> {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheAssets([
      // require("../assets/images/bg_screen1.jpg"),
    ]);

    const fontAssets = cacheFonts({
      // "FontAwesome": require("@expo/vector-icons/fonts/FontAwesome.ttf"),
    });

    await Promise.all([imageAssets, fontAssets]);
  }

  render() {
    return (
      <>
        <Helmet />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          {this.state.isReady ? (
            <SidebarSection>
              <Router>
                <Routes />
              </Router>
            </SidebarSection>
          ) : (
            <AppLoading
              startAsync={this._loadAssetsAsync}
              onFinish={() => this.setState({ isReady: true })}
            />
          )}
        </ApplicationProvider>
      </>
    );
  }
}

let HotApp = App;
if (Platform.OS === 'web') HotApp = hot(module)(App);
export default HotApp;
