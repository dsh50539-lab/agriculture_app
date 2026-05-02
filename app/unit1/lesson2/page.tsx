export default function Unit1Lesson2() {
  return (
    <div dir="rtl" style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#2e7d32', textAlign: 'center', borderBottom: '3px solid' }}>المحاصيل الغذائية</h1>
      
      <section style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <img src="/images/wheat.jpg" alt="القمح" style={{ width: '30%', borderRadius: '10px' }} />
        <div style={{ flex: 1 }}>
          <h3>🌾 القمح (محصول الغذاء الرئيسي):</h3>
          <p>يصنع منه الخبز والمكرونة والحلويات. قارة <b>آسيا</b> هي الأولى عالمياً (الصين ثم الهند). يعتبر الركيزة الأساسية للأمن الغذائي العالمي.</p>
        </div>
      </section>

      <section style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <img src="/images/corn.jpg" alt="الذرة" style={{ width: '30%', borderRadius: '10px' }} />
        <div style={{ flex: 1 }}>
          <h3>🌽 الذرة:</h3>
          <p>تستخدم كغذاء للإنسان في بعض المناطق وكعلف للحيوانات في مناطق أخرى. تعتبر <b>أمريكا الشمالية</b> القارة الأولى في الإنتاج وتصدر معظم إنتاجها للخارج.</p>
        </div>
      </section>

      <section style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <img src="/images/sugar.jpg" alt="قصب السكر" style={{ width: '30%', borderRadius: '10px' }} />
        <div style={{ flex: 1 }}>
          <h3>🍬 المحاصيل السكرية:</h3>
          <p><b>قصب السكر:</b> المحصول الأول، يزرع في المناطق المدارية (البرازيل الأولى). <b>بنجر السكر:</b> المحصول الثاني، يزرع في المناطق المعتدلة (أوروبا وخاصة فرنسا الأولى).</p>
        </div>
      </section>
    </div>
  );
}