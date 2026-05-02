export default function Unit1Lesson1() {
  return (
    <div dir="rtl" style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.8' }}>
      <h1 style={{ color: '#2e7d32', textAlign: 'center', background: '#e8f5e9', padding: '15px', borderRadius: '15px' }}>النشاط الزراعي وموارده في العالم</h1>
      
      <section style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '30px' }}>
        <img src="/images/agri_simple.jpg" alt="الزراعة البسيطة" style={{ width: '35%', borderRadius: '15px' }} />
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#2e7d32' }}>1. الزراعة البسيطة (البدائية):</h2>
          <p>يعمل بها عدد قليل من السكان في مناطق معزولة. تتميز بضيق المساحة المزروعة وتباعدها، وتهدف لتوفير الاحتياجات الغذائية اللازمة للسكان المحليين دون وجود فائض للتصدير. أهم محاصيلها: <b>اليام، الكسافا، والذرة</b>.</p>
        </div>
      </section>

      <section style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '30px', background: '#f9f9f9', padding: '15px' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#2e7d32' }}>2. الزراعة الكثيفة:</h2>
          <p>هي زراعة الأرض أكثر من مرة في العام بمحاصيل مختلفة لإشباع حاجة السكان المحليين. تتطلب أيدي عاملة وفيرة لأنها تتم من خلال عمليات متعددة مثل بذر الحبوب والري وتنقيبة الحشائش، ويصعب فيها استخدام الآلات لصغر مساحة الحقول.</p>
        </div>
        <img src="/images/agri_intensive.jpg" alt="الزراعة الكثيفة" style={{ width: '35%', borderRadius: '15px' }} />
      </section>

      <section style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '30px' }}>
        <img src="/images/agri_commercial.jpg" alt="الزراعة التجارية" style={{ width: '35%', borderRadius: '15px' }} />
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#2e7d32' }}>3. الزراعة التجارية والعلمية:</h2>
          <p>تُعرف بالزراعة الواسعة وتتم في مزارع واسعة وتتخصص في محصول معين (مثل النطاق القمح أو المطاط). تهدف للإنتاج التجاري الضخم وتستخدم أحدث الآلات الزراعية والطرق العلمية، مما يؤدي إلى قلة التكاليف وقلة العمالة الزراعية.</p>
        </div>
      </section>
    </div>
  );
}