import { Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import NavbarBeautician from '@/components/NavbarBeautician';

export default function FormsBeautician() {
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <NavbarBeautician />
                <Stack screenOptions={{ headerShown: false }} />
            </View>
        </SafeAreaView>
    )
}