// Lấy biểu mẫu và phần hiển thị kết quả
const vcardForm = document.getElementById('vcardForm');
const vcardOutput = document.getElementById('vcardOutput');

// Ngăn sự kiện gửi mặc định của biểu mẫu
vcardForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Lấy giá trị từ biểu mẫu
  const fullName = document.getElementById('fullName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  // Tạo chuỗi vCard
  const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:${fullName}
TEL:${phoneNumber}
END:VCARD`;

  // Tạo liên kết tải vCard
  const vcardBlob = new Blob([vcardData], { type: 'text/vcard' });
  const vcardURL = URL.createObjectURL(vcardBlob);

  // Tạo và hiển thị liên kết tải
  const downloadLink = document.createElement('a');
  downloadLink.href = vcardURL;
  downloadLink.download = 'contact.vcf';
  downloadLink.textContent = 'Tải vCard';

  vcardOutput.innerHTML = '';
  vcardOutput.appendChild(downloadLink);
});
