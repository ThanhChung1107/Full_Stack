// WeatherAdvice.jsx
import React, { useState } from 'react';
import axios from 'axios';

const WeatherAdvice = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = '5c4e85a4509d758e35b13f64f5605e6f';


  const handleSubmit = async (e) => {
    e.preventDefault();
    setAdvice('');
    setLoading(true);

    try {
      // Step 1: Get coordinates of location
      const geoRes = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
      );

      if (!geoRes.data[0]) {
        setAdvice('Không tìm thấy địa điểm.');
        setLoading(false);
        return;
      }

      const { lat, lon } = geoRes.data[0];

      // Step 2: Get 7-day forecast
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&lang=vi&appid=${API_KEY}`
      );

      // Step 3: Find forecast for the selected date
      const selectedTimestamp = new Date(date).setHours(0, 0, 0, 0) / 1000;
      const dayForecast = weatherRes.data.daily.find((day) => {
        const dayTimestamp = new Date(day.dt * 1000).setHours(0, 0, 0, 0) / 1000;
        return dayTimestamp === selectedTimestamp;
      });

      if (!dayForecast) {
        setAdvice('Dự báo cho ngày này không có sẵn (chỉ trong 7 ngày tới).');
        setLoading(false);
        return;
      }

      // Step 4: Generate advice
      const { weather, temp, uvi, wind_speed } = dayForecast;
      const main = weather[0].main.toLowerCase();
      let message = `📅 Ngày ${date} tại ${location} dự báo: ${weather[0].description}, nhiệt độ trung bình khoảng ${temp.day}°C.\n`;

      if (main.includes('rain')) message += '☔ Bạn nên mang theo ô hoặc áo mưa.\n';
      if (temp.day < 18) message += '🧥 Thời tiết lạnh, nhớ mặc ấm.\n';
      if (uvi > 7) message += '🌞 Chỉ số UV cao, hãy dùng kem chống nắng hoặc tránh ra ngoài giữa trưa.\n';
      if (wind_speed > 8) message += '💨 Gió mạnh, hạn chế các hoạt động ngoài trời.\n';
      if (main.includes('clear')) message += '✅ Trời quang đãng, rất thích hợp cho hoạt động ngoài trời!\n';

      setAdvice(message);
    } catch {
      setAdvice('Lỗi khi lấy dữ liệu thời tiết.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4 rounded-xl shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">🧭 Tư vấn lịch trình theo thời tiết</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nhập địa điểm (VD: Da Nang)"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Xem lời khuyên
        </button>
      </form>

      {loading && <p className="mt-4 text-center">🔄 Đang lấy dữ liệu...</p>}
      {advice && (
        <pre className="mt-4 bg-gray-100 p-4 rounded whitespace-pre-wrap">
          {advice}
        </pre>
      )}
    </div>
  );
};

export default WeatherAdvice;
