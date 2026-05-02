export default function Unit2Lesson2() {
  return (
    <div dir="rtl" style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#bf360c' }}>محاصيل ذات طبيعة خاصة</h1>
      
      <section style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <img src="/images/rubber_tree.jpg" alt="شجر المطاط" style={{ width: '30%', borderRadius: '10px' }} />
        <div style={{ flex: 1 }}>
          <h3>🌳 المطاط الطبيعي:</h3>
          <p>يستخرج من عصارة أشجار استوائية. أهميته: يدخل في صناعة إطارات السيارات وصناعات أخرى. <b>تايلاند</b> هي المركز الأول عالمياً.</p>
        </div>
      </section>

      <section style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <img src="/images/tea.jpg" alt="الشاي" style={{ width: '30%', borderRadius: '10px' }} />
        <div style={{ flex: 1 }}>
          <h3>🍃 الشاي:</h3>
          <p>نبات دائم الخضرة موطنه شرق آسيا. ظروف زراعته: تربة خصبة خفيفة، مناخ حار، هواء رطب، ومطر غزير. <b>الصين</b> هي الأولى عالمياً.</p>
        </div>
      </section>

      <section style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <img src="/images/coffee.jpg" alt="البن" style={{ width: '30%', borderRadius: '10px' }} />
        <div style={{ flex: 1 }}>
          <h3>☕ البن:</h3>
          <p>يعتبر من المحاصيل المدارية التي تحتاج حرارة مرتفعة وأمطار وفيرة، وتعتبر البرازيل من أشهر مناطق إنتاجه وتصديره.</p>
        </div>
      </section>
    </div>
  );
}