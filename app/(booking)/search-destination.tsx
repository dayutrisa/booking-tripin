import InputRow from "@/components/atoms/InputRow";
import SearchNotFound from "@/components/molecules/SearchNotFound";
import useBookingStore from "@/store/bookingStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, ScrollView, StyleSheet, StatusBar, Platform, Image, TouchableOpacity, TextInput } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#49ABFF',
        height: 125
    },
})

const origin = [
    {
        city: 'JAKARTA',
        station: 'Stasiun Gambir'
    },
    {
        city: 'JAKARTA',
        station: 'Stasiun Pasar Senen'
    },
    {
        city: 'Surabaya',
        station: 'Stasiun Pasar Turi'
    },
]

export default function SearchDestination() {
    const route = useRouter()
    const { destination, setDestination } = useBookingStore();
    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

    const [search, setSearch] = useState('')

    const mappedDestination = origin.filter((item) => item.city.toLocaleLowerCase().search(search.toLocaleLowerCase()) != -1 || item.station.toLocaleLowerCase().search(search.toLocaleLowerCase()) != -1)

    return (<View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ ...styles.header, paddingTop: statusBarHeight, position: 'relative' }}>
            <TouchableOpacity onPress={() => { route.back() }}>
                <Image style={{ width: 46, height: 46, marginRight: 12 }} source={require('@/assets/images/chevron.png')} />
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
                <TextInput onChangeText={e => setSearch(e)} placeholder="Search" style={{ height: 50, padding: 8, paddingLeft: 40, borderRadius: 16, backgroundColor: '#fff' }} />
                <Image style={{ position: 'absolute', width: 24, height: 24, top: 12, left: 8 }} source={require('@/assets/images/search.png')} />
            </View>
        </View>
        <ScrollView
            contentContainerStyle={{ paddingBottom: 80 }} // Tambahkan padding untuk menghindari overlap dengan tombol
            style={{ ...styles.container }}
        >
            <View style={{ flexDirection: 'column', padding: 24, backgroundColor: '#fff' }}>
                {mappedDestination.length > 0 ? mappedDestination.map((item, index) => (
                    <InputRow key={index}>
                        <TouchableOpacity onPress={() => { setDestination(item.station); route.back() }} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>{item.city}</Text>
                                <Text style={{ fontFamily: 'Poppins-Light', fontSize: 14 }}>{item.station}</Text>
                            </View>
                        </TouchableOpacity>
                    </InputRow>
                )) :
                <SearchNotFound />
                }
            </View>
        </ScrollView>
    </View>

    );
}