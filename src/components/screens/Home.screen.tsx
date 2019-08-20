import React, { useContext } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { Button, Text, ThemeContext } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Helmet } from '../lib/Helmet';
import { Link, TextLink, useRouter } from '../lib/Routing';
import { getColors } from '../../config/Theme.config';
import { LogoModule } from '../modules/Logo.module';

export const HomeScreen = () => {
  const { history } = useRouter();
  const theme = useContext(ThemeContext);

  return (
    <ScrollView>
      <Helmet title="Home" />
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          paddingVertical: 60,
          paddingHorizontal: 30,
          maxWidth: 400
        }}
      >
        <LogoModule />
        <Text h4 style={styles.text}>
          Welcome to EUSA
        </Text>
        <Text style={styles.text}>
          Expo Universal Starter: A low-config, low-bloat, moderately opinionated
          starter/boilerplate for a universal web+mobile app built upon the managed Expo-CLI
          workflow.
        </Text>
        <Text style={styles.text}>
          It comes with and demonstrates many commonly used UX patterns. All that with exceptional
          hot-reload support and less 150kb bundle. More info at{' '}
          <TextLink to={'https://github.com/hookedjs/eusy'}>
            https://github.com/hookedjs/eusy
          </TextLink>
          .
        </Text>
        <Link to="/home/page">
          <Button
            onPress={() => Platform.OS !== 'web' && history.push('/home/page')}
            title="Goto Inner Page"
          />
        </Link>

        <Button
          onPress={() =>
            theme.updateTheme({
              colors: getColors(Math.floor(Math.random() * 255) + 1)
            })
          }
          title="Feeling Lucky?"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 24,
    textAlign: 'center'
  }
});
