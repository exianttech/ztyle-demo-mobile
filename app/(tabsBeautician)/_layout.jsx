import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

// components
import NavbarBeautician from '@/components/NavbarBeautician'

export default function TabsBeauticianLayout() {
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <NavbarBeautician />
                <Tabs
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveTintColor: '#17a2b8',
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
                        name='ServiceBookings'
                        options={{
                            tabBarLabel: 'Service Bookings',
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