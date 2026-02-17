function setSide(side, el) {
    document.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
}

function selectColor(colorCode, el) {
    const tint = document.getElementById('sofaTint');
    
    if (colorCode === '#2D5A27') {
        tint.style.backgroundColor = 'transparent'; // สีเขียวเดิมให้เป็นใส
    } else {
        tint.style.backgroundColor = colorCode;
    }

    // จัดการสถานะปุ่มสีที่เลือก
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.classList.remove('active');
    });
    el.classList.add('active');
}
