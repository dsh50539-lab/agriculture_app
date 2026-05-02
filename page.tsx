import Link from 'next/link';

export default function HomePage() {
  // تنسيقات الكروت - تم تعديل اللون ليظهر بوضوح في الموبايل
  const cardStyle: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '15px',
    padding: '30px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s',
    color: '#333333', // اللون الجديد للنصوص داخل الكروت
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    marginTop: '15px',
    padding: '10px 25px',
    backgroundColor: '#2e7d32',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div dir="rtl" style={{ textAlign: 'center', padding: '20px' }}>
      {/* العنوان الرئيسي بأخضر أغمق للوضوح */}
      <h2 style={{ color: '#1b5e20', marginBottom: '30px' }}>منصة النشاط الزراعي التعليمية</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        marginTop: '20px'
      }}>

        {/* كارت الوحدات */}
        <div style={cardStyle}>
          <div style={{ fontSize: '40px' }}>📚</div>
          <h3 style={{ color: '#1b5e20' }}>الوحدات الدراسية</h3>
          <p>كل ما يخص النشاط الزراعي من خلال وحداتنا المنظمة</p>
          <Link href="/units" style={buttonStyle}>تصفح الوحدات</Link>
        </div>

        {/* كارت الامتحان */}
        <div style={cardStyle}>
          <div style={{ fontSize: '40px' }}>📝</div>
          <h3 style={{ color: '#1b5e20' }}>الامتحان الشامل</h3>
          <p>اختبر مهاراتك ومعلوماتك الزراعية بعد الانتهاء من الدروس</p>
          <Link href="/exam" style={buttonStyle}>ابدأ الاختبار</Link>
        </div>

        {/* كارت بيانات الطالبة */}
        <div style={cardStyle}>
          <div style={{ fontSize: '40px' }}>👩‍🎓</div>
          <h3 style={{ color: '#1b5e20' }}>بيانات الطالبة</h3>
          <p><b>الاسم:</b> ضحى شكري</p>
          <p><b>المشروع:</b> تطبيق تعليمي زراعي</p>
        </div>

        {/* كارت التواصل */}
        <div style={cardStyle}>
          <div style={{ fontSize: '40px' }}>📩</div>
          <h3 style={{ color: '#1b5e20' }}>تواصل معنا</h3>
          <p>يمكنك مراسلتنا في أي وقت عبر البريد الإلكتروني</p>
          <Link href="/contact" style={buttonStyle}>أرسل رسالة</Link>
        </div>

      </div>
    </div>
  );
}