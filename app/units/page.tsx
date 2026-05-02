import Link from 'next/link';

export default function UnitsPage() {
  const units = [
    { id: 1, title: 'الوحدة الأولى', lessons: [{ name: 'النشاط الزراعي', path: '/unit1/lesson1' }, { name: 'المحاصيل الغذائية', path: '/unit1/lesson2' }], color: '#2e7d32' },
    { id: 2, title: 'الوحدة الثانية', lessons: [{ name: 'محاصيل الألياف', path: '/unit2/lesson1' }, { name: 'المطاط والشاي', path: '/unit2/lesson2' }], color: '#1b5e20' },
    { id: 3, title: 'الوحدة الثالثة', lessons: [{ name: 'النشاط الرعوي', path: '/unit3/lesson1' }, { name: 'الثروة السمكية', path: '/unit3/lesson2' }], color: '#4caf50' }
  ];

  return (
    <div dir="rtl" style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2e7d32', marginBottom: '40px' }}>وحدات المنهج الدراسي</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {units.map((unit) => (
          <div key={unit.id} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', borderTop: '6px solid ' + unit.color, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: unit.color, marginBottom: '15px' }}>{unit.title}</h2>
            {unit.lessons.map((lesson, idx) => (
              <Link key={idx} href={lesson.path} style={{ display: 'block', padding: '12px', backgroundColor: '#f1f8e9', marginBottom: '10px', borderRadius: '8px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
                📖 {lesson.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}