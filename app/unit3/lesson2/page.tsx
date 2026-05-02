export default function Unit3Lesson2() {
  return (
    <div dir="rtl" style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#01579b' }}>الثروة السمكية ومصايد العالم</h1>
      
      <p>تعتبر الأسماك غذاءً رئيسياً لسكان العالم خاصة في المناطق الساحلية.</p>

      <section style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <img src="/images/fish_china.jpg" alt="صيد الأسماك" style={{ width: '30%', borderRadius: '10px' }} />
        <div style={{ flex: 1 }}>
          <h3>🇨🇳 الصين والإنتاج العالمي:</h3>
          <p>تنتج الصين أكثر من ثلث الإنتاج العالمي بسبب مصايدها على المحيط الهادي والأنهار والمزارع السمكية الضخمة.</p>
        </div>
      </section>

      <section style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <img src="/images/fish_currents.jpg" alt="تيارات بحرية" style={{ width: '30%', borderRadius: '10px' }} />
        <div style={{ flex: 1 }}>
          <h3>🌊 عوامل تطور الصيد:</h3>
          <p>ضحالة المياه الساحلية، التقاء التيارات البحرية الدافئة مع الباردة، توافر الموانئ، واستخدام الوسائل العلمية في الصيد.</p>
        </div>
      </section>

      <section style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <img src="/images/shrimp.jpg" alt="أحياء بحرية" style={{ width: '30%', borderRadius: '10px' }} />
        <div style={{ flex: 1 }}>
          <h3>🦀 أنواع أخرى:</h3>
          <p>بجانب الأسماك، هناك القشريات (الجمبري)، والرخويات (السبيط)، والحيتان التي تُصاد للاستفادة من لحومها وشحومها.</p>
        </div>
      </section>
    </div>
  );
}