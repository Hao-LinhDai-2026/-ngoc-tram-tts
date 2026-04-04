const gTTS = require('gtts');
const fs = require('fs');

const ngonNgu = 'vi';
const fileKetQua = 'Ngoc-Tram-Tien-Hiep.mp3';

const vanBanCuaHao = 'Tiếng sáo trúc vang lên giữa đỉnh núi mờ sương. Ngọc Trâm nhẹ nhàng mở mắt, cảm nhận linh khí đang hội tụ. Chào mừng quý đạo hữu khiếm thị đã đến với thế giới âm thanh huyền ảo. Hệ thống đang khởi tạo không gian tiên hiệp...';

function khoiChay() {
    console.log('--- STARTING ---');
    const speech = new gTTS(vanBanCuaHao, ngonNgu);
    speech.save(fileKetQua, function (err, result) {
        if (err) {
            console.log('Error');
        } else {
            console.log('Success');
        }
    });
}

khoiChay();
