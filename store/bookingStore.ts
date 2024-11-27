import { create } from "zustand"

interface BookingFormState {
  origin: string | null;
  destination: string | null;
  setOrigin: (origin: string) => void;
  setDestination: (destination: string) => void;
  resetBooking: () => void;
}

const useBookingStore = create<BookingFormState>((set) => ({
  origin: null,
  destination: null,
  setOrigin: (origin) => set({ origin }),
  setDestination: (destination) => set({ destination }),
  resetBooking: () => set({ origin: null, destination: null }),
}));

export default useBookingStore;