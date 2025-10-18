import { Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import NavbarUser from '@/components/NavbarUser';

export default function ScreenUsersLayout() {
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <NavbarUser />
                <Stack screenOptions={{ headerShown: false }} />
            </View>
        </SafeAreaView>
    )
}