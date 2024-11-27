import InputRow from "@/components/atoms/InputRow";
import AddPassenger from "@/components/modals/AddPassenger";
import DepartureDate from "@/components/modals/DepartureDate";
import useBookingStore from "@/store/bookingStore";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Modal, Text, View, ScrollView, StyleSheet, StatusBar, Platform, Image, TouchableOpacity, Pressable } from "react-native";
import { DateData } from "react-native-calendars";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#49ABFF',
        height: 125
    },



    container2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    openButton: {
        backgroundColor: "#394867",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    openButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)", // Dark transparent overlay
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 8,
        width: "90%",
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#394867",
        textAlign: "center",
    },
    hideButton: {
        backgroundColor: "#394867",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 16,
    },
    hideButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
})

export default function Booking() {
    const { origin, destination } = useBookingStore();
    const router = useRouter();
    const [calendarVisible, setCalendarVisible] = useState(false)
    const [passengerVisible, setPassengerVisible] = useState(false)

    const [seats, setSeats] = useState(1);

    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

    const [date, setDate] = useState<DateData | null>(null)

    return (<View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView
            contentContainerStyle={{ paddingBottom: 80 }}
            style={{ ...styles.container }}
        >
            <View style={{ ...styles.header, paddingTop: statusBarHeight }}>
                <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'Poppins-Bold', fontSize: 26 }}>Booking</Text>
            </View>
            <View style={{ flexDirection: 'column', padding: 24, backgroundColor: '#fff' }}>
                <InputRow>
                    <TouchableOpacity onPress={() => router.push('/(booking)/search-origin')} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 46, height: 46, marginRight: 8 }} source={require('@/assets/images/origin.png')} />
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Light', fontSize: 14 }}>Origin</Text>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>{origin}</Text>
                        </View>
                    </TouchableOpacity>
                </InputRow>
                <InputRow>
                    <TouchableOpacity onPress={() => router.push('/(booking)/search-destination')} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 46, height: 46, marginRight: 8 }} source={require('@/assets/images/destination.png')} />
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Light', fontSize: 14 }}>Destination</Text>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>{destination}</Text>
                        </View>
                    </TouchableOpacity>
                </InputRow>
                <InputRow>
                    <TouchableOpacity onPress={() => setCalendarVisible(true)} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 46, height: 46, marginRight: 8 }} source={require('@/assets/images/departure.png')} />
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Light', fontSize: 14 }}>Departure Date</Text>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>{date ? date!.dateString : 'Departure Date'}</Text>
                        </View>
                    </TouchableOpacity>
                </InputRow>
                <InputRow>
                    <TouchableOpacity onPress={() => setPassengerVisible(true)} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 46, height: 46, marginRight: 8 }} source={require('@/assets/images/passenger.png')} />
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Light', fontSize: 14 }}>Passenger</Text>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>{seats + (seats > 1 ? ` Seats` : ` Seat`)}</Text>
                        </View>
                    </TouchableOpacity>
                </InputRow>
            </View>
        </ScrollView>
        <View style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: 16,
            backgroundColor: '#fff'
        }}>
            <TouchableOpacity
                style={{
                    backgroundColor: '#394867',
                    paddingVertical: 12,
                    borderRadius: 8,
                    alignItems: 'center'
                }}
                onPress={() => { alert('Button Pressed') }}
            >
                <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins-Bold' }}>SEARCH TICKETS</Text>
            </TouchableOpacity>
        </View>
        <DepartureDate modalVisible={calendarVisible} setModalVisible={setCalendarVisible} date={date} setDate={setDate} />
        <AddPassenger modalVisible={passengerVisible} setModalVisible={setPassengerVisible} seats={seats} setSeats={setSeats} />
    </View>
    );
}