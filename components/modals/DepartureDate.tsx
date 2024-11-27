import React from "react";
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Calendar, DateData } from "react-native-calendars";

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
        padding: 16,
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
});

const DepartureDate = ({
    date,
    setDate,
    modalVisible,
    setModalVisible,
}: {
    date: DateData | null;
    setDate: React.Dispatch<React.SetStateAction<DateData | null>>;
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Select a Date</Text>

                    <Calendar
                        onDayPress={day => {
                            setDate(day)
                        }}
                        markedDates={{
                            [date?.dateString as string]: { selected: true, disableTouchEvent: true }
                        }}
                    />

                    {/* Hide Modal Button */}
                    <TouchableOpacity
                        style={styles.hideButton}
                        onPress={() => setModalVisible(false)}

                    >
                        <Text style={styles.hideButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default DepartureDate;
