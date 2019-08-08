import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button, Text, ThemeContext } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { LogoIcon } from '../svgs';
import { Helmet } from '../lib/Helmet';
import { useRouter } from '../lib/Routing';

export const NotFoundRoute = () => {
  const { history } = useRouter();
  const theme = useContext(ThemeContext).theme;

  return (
    <View>
      <Helmet title="404" />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingVertical: 60,
          paddingHorizontal: 30
        }}
      >
        <LogoIcon width={200} height={200} fill={theme.colors.primaryDark} />
        <Text h4 style={styles.text}>
          Uh oh, the url you entered does not exist.
        </Text>
        <Button onPress={() => history.push('/')} title="Go Home?" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 24
  }
});
