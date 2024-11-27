import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'Poppins-Light': require('@/assets/fonts/Poppins-Light.ttf'),
        'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(booking)" />
                <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar translucent style="dark" />
        </>
    );
}
