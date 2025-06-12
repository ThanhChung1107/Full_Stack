function times() {
    setInterval(() => {
        let currentTime = new Date();  // cập nhật mới mỗi lần chạy

        let hours = String(currentTime.getHours()).padStart(2, '0');
        let minutes = String(currentTime.getMinutes()).padStart(2, '0');
        let seconds = String(currentTime.getSeconds()).padStart(2, '0');

        let timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById("clock").innerHTML = timeString;
    }, 1000);
}

times();  // không truyền gì vào nữa
