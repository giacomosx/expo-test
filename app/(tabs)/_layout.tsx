import {Tabs} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Image} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#DAEA07',
                tabBarInactiveTintColor: '#FFFFFF',
                headerStyle: {
                    backgroundColor: '#8051FA',
                    height: 120
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#8051FA',
                    paddingTop: 4,
                    shadowColor: '#fff',
                },
                headerLeft: props => <Image source={require('../../assets/images/Logo.png')} className={'size-18 ms-4'}/>,
                headerTitle: () => <></>,
                headerRight: () => <FontAwesome name="user-circle" size={40} color="white" className={'pe-4'} />
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={32}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'search' : 'search-outline'} color={color}
                                  size={32}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="inbox"
                options={{
                    title: 'Inbox',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'mail' : 'mail-outline'} color={color}
                                  size={32}/>
                    ),
                }}
            />
        </Tabs>
    );
}
