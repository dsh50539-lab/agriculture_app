export default function Unit2Lesson1() {
  return (
    <div dir="rtl" style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#1b5e20' }}>محاصيل الألياف</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', textAlign: 'center' }}>
        <div>
          <img src="/images/cotton_field.jpg" alt="حقول القطن" style={{ width: '100%', borderRadius: '10px' }} />
          <h4>القطن في آسيا</h4>
          <p>آسيا تنتج ثلثي الإنتاج العالمي (الصين والهند).</p>
        </div>
        <div>
          <img src="/images/cotton_egypt.jpg" alt="القطن المصري" style={{ width: '100%', borderRadius: '10px' }} />
          <h4>القطن المصري</h4>
          <p>أجود أنواع القطن في العالم لأنه طويل التيلة.</p>
        </div>
        <div>
          <img src="/images/jute.jpg" alt="الجوت والكتان" style={{ width: '100%', borderRadius: '10px' }} />
          <h4>محاصيل أخرى</h4>
          <p>تشمل الكتان والجوت وتستخدم في صناعات متنوعة.</p>
        </div>
      </div>
      <p style={{ marginTop: '20px', padding: '15px', background: '#f1f8e9' }}><b>الأهمية الاقتصادية للقطن:</b> إنتاج الخيوط للملابس، استخراج زيت بذرة القطن، واستخدام القشور كأعلاف للحيوانات.</p>
    </div>
  );
}