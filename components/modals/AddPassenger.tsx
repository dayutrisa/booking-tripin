import React, { useState } from "react";
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Gunakan Ionicons untuk ikon +/-.

export default function AddPassenger({ modalVisible, setModalVisible, seats, setSeats }: { modalVisible: any, setModalVisible: any, seats: any, setSeats: any }) {

    const increaseSeats = () => setSeats((prev: any) => prev + 1);
    const decreaseSeats = () => setSeats((prev: any) => (prev > 1 ? prev - 1 : 1));

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    {/* Judul */}
                    <Text style={styles.title}>Passenger</Text>

                    {/* Bagian Add Seats */}
                    <View style={styles.row}>
                        <Text style={styles.subtitle}>Add Seats</Text>
                        <View style={styles.counter}>
                            <TouchableOpacity onPress={decreaseSeats}>
                                <Ionicons name="remove-circle-outline" size={24} color="#394867" />
                            </TouchableOpacity>
                            <Text style={styles.seatCount}>{seats}</Text>
                            <TouchableOpacity onPress={increaseSeats}>
                                <Ionicons name="add-circle-outline" size={24} color="#394867" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Tombol Done */}
                    <TouchableOpacity
                        style={styles.doneButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.doneButtonText}>DONE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
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
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        width: "90%",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: "#000000",
        marginBottom: 6,
    },
    row: {
        display: 'flex',
        width: "100%",
        marginBottom: 16,
        flexDirection: 'row'
    },
    subtitle: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        color: "#000000",
        // marginBottom: 8,
    },
    counter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
    },
    seatCount: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: "#000000",
        marginHorizontal: 24
    },
    doneButton: {
        backgroundColor: "#394867",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        width: "100%",
    },
    doneButtonText: {
        color: "#FFFFFF",
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
    },
});
