export default function StudentInfo({ name, studentId, className }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
      <h2>Thông tin cá nhân</h2>
      <ul style={{ listStyleType: 'none', padding: 0, fontSize: '18px', lineHeight: '1.6' }}>
        <li><strong>Họ tên:</strong> {name}</li>
        <li><strong>MSSV:</strong> {studentId}</li>
        <li><strong>Lớp:</strong> {className}</li>
      </ul>
    </div>
  );
}