export const createBooking = (req, res) => {
  const { camperId, name, email, bookingDate, comment } = req.body;

  // базовая валидация
  if (!camperId || !name || !email || !bookingDate) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  // простая проверка email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email",
    });
  }

  // имитация успешного бронирования
  res.status(200).json({
    message: "Booking successful",
  });
};