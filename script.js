// ฟังก์ชันสำหรับเลือกด้าน L-Shape
function setSide(side, el) {
    document.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
}

// ฟังก์ชันสำหรับเปลี่ยนสีโซฟาแบบ Real-time (ฉบับแก้ไข)
function selectColor(colorCode, el) {
    // 1. เปลี่ยนชื่อ ID จาก colorLayer เป็น sofaTint ให้ตรงกับ HTML ล่าสุด
    const tint = document.getElementById('sofaTint');
    
    // 2. เงื่อนไขการเปลี่ยนสี
    if (colorCode === '#2D5A27') {
        // ถ้าเลือกสีเขียวเดิม ให้โปร่งใสเพื่อโชว์ความสวยของรูปต้นฉบับ
        tint.style.backgroundColor = 'transparent';
    } else {
        // ถ้าเลือกสีอื่น ให้เปลี่ยนสีเลเยอร์ที่ถูก Mask ไว้บนตัวโซฟา
        tint.style.backgroundColor = colorCode;
    }

    // 3. ปรับสถานะปุ่มวงกลมสีที่ถูกเลือก
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    el.classList.add('active');
}
