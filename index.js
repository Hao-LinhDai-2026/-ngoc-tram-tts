// 1. Gọi thư viện Google Text-to-Speech
const gTTS = require('gtts');
const fs = require('fs');

// 2. Nội dung văn bản Hạo muốn chuyển sang tiếng nói
// Hạo có thể thay đổi nội dung trong dấu nháy đơn này tùy ý
const noiDung = 'Chào mừng Hạo đến với dự án Ngọc Trâm. Hệ thống chuyển đổi văn bản sang âm thanh đã sẵn sàng khởi động.';

// 3. Cấu hình giọng đọc (vi = tiếng Việt)
const ngonNgu = 'vi';
const speech = new gTTS(noiDung, ngonNgu);

// 4. Lệnh lưu file MP3
const tenFile = 'ngoc-tram-voice.mp3';

console.log('Đang bắt đầu chuyển đổi văn bản của Hạo...');

speech.save(tenFile, function (err, result) {
    if (err) {
        console.error('Hạo ơi, có lỗi xảy ra rồi: ', err);
    } else {
        console.log('--- THÀNH CÔNG! ---');
        console.log('Tệp âm thanh đã được lưu tại: ' + tenFile);
        console.log('Hạo có thể tải file này về để nghe thử nhé.');
    }
});
