import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

// components
import NavbarUser from '@/components/NavbarUser';

export default function tabsUserLayout() {
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <NavbarUser />
                <Tabs
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveTintColor: '#20c997',
                        tabBarInactiveTintColor: 'gray',
                        tabBarLabelStyle: { fontSize: 12 },
                        tabBarStyle: { paddingVertical: 5, height: 60 }
                    }}
                >
                    <Tabs.Screen
                        name='Dashboard'
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name='home-outline' size={size} color={color} />
                            )
                        }}

                    />
                    <Tabs.Screen
                        name='BeautyShops'
                        options={{
                            tabBarLabel: 'Beauty Shops',
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome5 name='store' size={size} color={color} />
                            )
                        }}
                        
                    />
                    <Tabs.Screen
                        name='MyBookings'
                        options={{
                            tabBarLabel: 'My Bookings',
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome5 name='calendar-check' size={size} color={color} />
                            )
                        }}
                        
                    />

                </Tabs> 
            </View>
        </SafeAreaView>
    )
}