document.addEventListener("DOMContentLoaded", function() {
    var videoContainer = document.getElementById("videoContainer");

    // Tạo danh sách tên video
    var videoNames = ["./assets/trailer video/1.mp4", "./assets/trailer video/2.mp4", "./assets/trailer video/3.mp4", "./assets/trailer video/4.mp4", "./assets/trailer video/5.mp4", "./assets/trailer video/6.mp4"];

    // Duyệt qua danh sách và tạo phần tử video cho mỗi tên video
    for (var i = 0; i < videoNames.length; i++) {
        var video = document.createElement("video");
        video.src = videoNames[i];

        // Thêm sự kiện khi rê chuột vào
        video.addEventListener("mouseover", function() {
            this.play(); // Tự động phát video
            this.muted = true; // Tắt âm thanh
        });

        // Thêm sự kiện khi rê chuột ra
        video.addEventListener("mouseout", function() {
            if (!this.paused) {
                this.pause(); // Tạm dừng video
                this.controls = false; // Ẩn thanh điều khiển
                this.muted = true; // Tắt âm thanh
            }
        });

        // Thêm sự kiện khi nhấp vào video
        video.addEventListener("click", function() {
            if (this.paused) {
                this.play(); // Phát video
                this.controls = true; // Hiển thị thanh điều khiển
                this.muted = false; // Bật âm thanh
            } else {
                this.pause(); // Tạm dừng video
                this.controls = false; // Ẩn thanh điều khiển
                this.muted = true; // Tắt âm thanh
            }
        });

        videoContainer.appendChild(video);
    }
});
