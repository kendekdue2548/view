// admin-script.js

// ฟังก์ชันสำหรับล็อครหัสผ่านเข้าหน้า Admin
function checkAuth() {
    const pass = document.getElementById('adminPass').value;
    if (pass === "123456") { // คุณเปลี่ยนรหัสผ่านตรงนี้ได้ครับ
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('dashSection').style.display = 'block';
    } else {
        alert("รหัสผ่านไม่ถูกต้อง!");
    }
}

// ฟังก์ชันส่งข้อมูลสินค้าขึ้น Firebase
function uploadProduct() {
    const name = document.getElementById('pName').value;
    const price = document.getElementById('pPrice').value;
    const img = document.getElementById('pImg').value;
    const category = document.getElementById('pCategory').value;

    if (name && price && img) {
        // ส่งข้อมูลไปที่โฟลเดอร์ products ใน Firebase
        db.ref('products/').push({
            name: name,
            price: price,
            image: img,
            category: category,
            timestamp: Date.now()
        }).then(() => {
            alert("ลงสินค้าในหมวด " + category + " เรียบร้อยแล้ว!");
            // ล้างค่าในช่องกรอกหลังลงเสร็จ
            document.getElementById('pName').value = '';
            document.getElementById('pPrice').value = '';
            document.getElementById('pImg').value = '';
        }).catch((error) => {
            alert("เกิดข้อผิดพลาด: " + error.message);
        });
    } else {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่องครับ");
    }
}
