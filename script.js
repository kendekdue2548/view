// ฟังก์ชันสำหรับเลือกด้าน L-Shape
function setSide(side, el) {
    document.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
}

// ฟังก์ชันหัวใจสำคัญสำหรับการเปลี่ยนสีแบบ Real-time
function selectColor(colorCode, el) {
    // 1. เปลี่ยนสีเลเยอร์ที่ซ้อนอยู่ใต้รูปโซฟา
    const layer = document.getElementById('colorLayer');
    layer.style.backgroundColor = colorCode;

    // 2. ปรับสถานะปุ่มวงกลมสีที่ถูกเลือก
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    el.classList.add('active');

    // 3. ปรับค่าความสว่างของรูป PNG ให้เนียนไปกับสีที่เลือก
    const sofa = document.getElementById('sofaImage');
    if(colorCode === '#333333') { // กรณีเลือกสีดำ ให้ดรอปความสว่างลงหน่อย
        sofa.style.filter = "brightness(0.85) contrast(1.2)";
    } else {
        sofa.style.filter = "brightness(1.1) contrast(1.1)";
    }
}
