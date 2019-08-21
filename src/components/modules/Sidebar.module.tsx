import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from 'react-native-elements';
import { HoverObserver } from '../lib/HoverObserver';
import { Link, useRouter } from '../lib/Routing';
import { LogoModule } from './Logo.module';
import { WindowState } from '../../state/Window.state';
import { observer } from 'mobx-react-lite';
import { NotificationsState } from '../../state/Notifications.state';

const SidebarHeader = () => {
  const theme = useContext(ThemeContext).theme;

  return (
    <HoverObserver
      children={({ isHovering }) => (
        <Link to="/">
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 15,
              paddingVertical: 20,
              backgroundColor: isHovering ? theme.colors.primaryLight : 'transparent'
            }}
          >
            <LogoModule width={40} height={40} />
            <View style={{ alignContent: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, color: 'white', paddingLeft: 15 }}>EUSY</Text>
            </View>
          </View>
        </Link>
      )}
    />
  );
};

const SidebarMenuItem = ({
  to,
  text,
  featherIconName,
  showActivityBubble
}: {
  to: any;
  text: string;
  featherIconName: string;
  showActivityBubble?: boolean;
}) => {
  const { location } = useRouter();
  const theme = useContext(ThemeContext).theme;
  const isActive = location.pathname === to;

  return (
    <HoverObserver
      children={({ isHovering }) => (
        <Link to={to}>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 20,
              paddingVertical: 20,
              backgroundColor: isHovering || isActive ? theme.colors.primaryLight : 'transparent'
            }}
          >
            <View>
              <Feather name={featherIconName} size={28} color="white" />
              {!!showActivityBubble && (
                <Feather
                  name="activity"
                  size={8}
                  color="white"
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 4,
                    width: 9,
                    position: 'relative',
                    top: -8,
                    left: 19,
                    marginBottom: -9
                  }}
                />
              )}
            </View>
            <View style={{ alignContent: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: 'white', paddingLeft: 22 }}>{text}</Text>
            </View>
          </View>
        </Link>
      )}
    />
  );
};

export const SidebarModule = observer(() => {
  const theme = useContext(ThemeContext).theme;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: theme.colors.primaryDark
      }}
    >
      <View>
        {WindowState.isLarge && <SidebarHeader />}
        <SidebarMenuItem to="/home" text="Home" featherIconName="home" />
        <SidebarMenuItem
          to="/notifications"
          text="Notifications"
          featherIconName="bell"
          showActivityBubble={!!NotificationsState.unreadCount}
        />
        <SidebarMenuItem to="/user" text="My Account" featherIconName="user" />
      </View>
      <View>
        <SidebarMenuItem to="/settings" text="Settings" featherIconName="settings" />
      </View>
    </View>
  );
});
