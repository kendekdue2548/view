function toggleShopMenu() {
    const overlay = document.getElementById('shopOverlay');
    
    // ตรวจสอบสถานะการแสดงผล
    if (overlay.style.display === 'flex') {
        // กรณีสั่งปิดเมนู
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // คืนค่าหน้าเว็บหลักให้เลื่อนได้ปกติ
    } else {
        // กรณีสั่งเปิดเมนู
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // ล็อคหน้าจอไม่ให้เลื่อนขณะเปิดเมนู
    }
}

// ปิดเมนูอัตโนมัติเมื่อผู้ใช้คลิกพื้นที่ว่าง (สีดำโปร่งแสง) ด้านนอกเมนู
window.onclick = function(event) {
    const overlay = document.getElementById('shopOverlay');
    if (event.target == overlay) {
        toggleShopMenu();
    }
}
