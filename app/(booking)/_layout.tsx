import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
    return (
        <>
            <Stack screenOptions={{ headerShown: false, animation: 'ios_from_right' }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="search-destination" />
                <Stack.Screen name="search-origin" />
            </Stack>
        </>
    );
}
