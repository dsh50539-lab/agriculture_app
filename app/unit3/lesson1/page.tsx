export default function Unit3Lesson1() {
  return (
    <div dir="rtl" style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#3e2723' }}>النشاط الرعوي والحيواني</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ flex: 1, padding: '10px', border: '1px dashed #ccc' }}>
          <img src="/images/sheep_grazing.jpg" alt="رعي" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h4>الرعي البدائي</h4>
          <p>يمارس في الصحاري (شبه الجزيرة العربية، شمال أفريقيا، وتندرا آسيا).</p>
        </div>
        <div style={{ flex: 1, padding: '10px', border: '1px dashed #ccc' }}>
          <img src="/images/cows.jpg" alt="أبقار" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h4>الثروة الحيوانية</h4>
          <p>الأبقار: آسيا الأولى (الهند). الأغنام: الصين وأستراليا الأوائل.</p>
        </div>
        <div style={{ flex: 1, padding: '10px', border: '1px dashed #ccc' }}>
          <img src="/images/meat.jpg" alt="لحوم" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h4>المنتجات</h4>
          <p>اللحوم الحمراء، الألبان، الأصواف، والجلود هي المنتجات الرئيسية.</p>
        </div>
      </div>
    </div>
  );
}