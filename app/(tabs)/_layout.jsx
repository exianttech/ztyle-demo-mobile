import { View } from 'react-native';
import { useEffect } from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

// components
import NavbarUser from '@/components/Navbar';



export default function tabsUserLayout() {

    const router = useRouter();

    // JWT
    const token = useSelector(state => state.auth.token);

     // redirect logic 
    useEffect(() => {
        if (!token) {
            router.replace('/')
        }
    }, [router, token]);
    
    if (!token) return null;


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