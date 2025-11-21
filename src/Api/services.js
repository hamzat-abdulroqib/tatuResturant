export const getRooms = async () => {
  try {
    const response = await api.get("/room");
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await api.post("/booking", bookingData);
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

export const getHotelRooms = async () => {
  try {
    const response = await api.get("/hotelRooms");
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel rooms:", error);
    throw error;
  }
};
