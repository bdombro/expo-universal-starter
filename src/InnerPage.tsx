import React from "react";
import {Button, Layout, Text} from "react-native-ui-kitten";
import {StyleSheet} from "react-native";
import {withRouter} from "./helpers/Routing";

export const Page = withRouter(({history}) => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Welcome to an inner pages.</Text>
    <Button onPress={() => history.goBack()}>Go Back</Button>
  </Layout>
));
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  text: {
    marginVertical: 16,
  },
  button: {
    marginVertical: 16,
  }
});
