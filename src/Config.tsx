import { Route, Stack } from './components/lib/Routing';
import { HeaderSection } from './components/sections/Header.section';
import { FooterFixedSection } from './components/sections/FooterFixed.section';
import { FooterEndSection } from './components/sections/FooterEnd.section';
import React from 'react';

const PackageJson = require('../package.json');
const AppJson = require('../app.json').expo;
export const DotEnv = require('../.env.json');

// Const variables

export const AppName = AppJson.name;
export const AppDescription = AppJson.description;
export const NodeEnv = process.env.NODE_ENV;
export const AppEnv = DotEnv.APP_ENV;
export const PublicUrl = DotEnv.PUBLIC_URL;
export const Version = PackageJson.version;

// export const MixpanelId = AppEnv === 'production'
//   ? ''
//   : '';
//
// export const GoogleTagManagerTag = AppEnv === 'production'
//     ? `(function(w,d,s,l,i)(...GTM-XXXXXXX');`
//     : `(function(w,d,s,l,i)(...GTM-XXXXXXX');`;

import { NotFoundRoute } from './components/routes/NotFound.route';
import { HomeRoute } from './components/routes/Home.route';
import { LoginRoute } from './components/routes/Login.route';
import { RegisterRoute } from './components/routes/Register.route';
import { InnerPageRoute } from './components/routes/InnerPage.route';
import { SettingsRoute } from './components/routes/Settings.route';
import { UserEditRoute } from './components/routes/UserEdit.route';
import { UserProfileRoute } from './components/routes/UserProfile.route';

export const AppRoutes = () => (
  <Stack animationType="slide-horizontal">
    <Route
      path="/"
      exact
      component={HomeRoute}
      headerComponent={HeaderSection}
      footerComponent={FooterFixedSection}
      footerEndComponent={FooterEndSection}
      animationType="slide-vertical"
    />

    <Route
      path="/settings"
      component={SettingsRoute}
      headerComponent={HeaderSection}
      footerComponent={FooterFixedSection}
      footerEndComponent={FooterEndSection}
      animationType="slide-vertical"
    />

    <Route path="/login" component={LoginRoute} animationType="slide-vertical" />
    <Route path="/register" component={RegisterRoute} />
    <Route
      path="/user/edit"
      component={UserEditRoute}
      headerComponent={HeaderSection}
      footerComponent={FooterFixedSection}
      footerEndComponent={FooterEndSection}
    />
    <Route
      path="/user/profile"
      component={UserProfileRoute}
      headerComponent={HeaderSection}
      footerComponent={FooterFixedSection}
      footerEndComponent={FooterEndSection}
    />

    <Route
      path="/page"
      component={InnerPageRoute}
      headerComponent={HeaderSection}
      footerComponent={FooterFixedSection}
      footerEndComponent={FooterEndSection}
    />

    <Route
      component={NotFoundRoute}
      headerComponent={HeaderSection}
      footerComponent={FooterFixedSection}
      footerEndComponent={FooterEndSection}
    />
  </Stack>
);
