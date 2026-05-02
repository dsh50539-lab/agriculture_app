"use client";
import { useState } from 'react';

const questions = [
  { q: "ما هي أولى دول العالم في إنتاج القمح؟", options: ["الصين", "الهند", "مصر", "أمريكا"], a: "الصين" },
  { q: "الغذاء الرئيسي لمعظم شعوب العالم هو:", options: ["الذرة", "القمح", "الأرز", "البطاطس"], a: "القمح" },
  { q: "تحتل المركز الأول عالمياً في إنتاج قصب السكر:", options: ["الهند", "البرازيل", "فرنسا", "تايلاند"], a: "البرازيل" },
  { q: "يستخرج المطاط الطبيعي من عصارة أشجار:", options: ["استوائية", "مدارية", "صحراوية", "قطبية"], a: "استوائية" },
  { q: "تعتبر قارة آسيا أولى القارات إنتاجاً لمحصول:", options: ["البنجر", "القطن", "الكتان", "الذرة"], a: "القطن" },
  { q: "الدولة الأولى في العالم في إنتاج الشاي هي:", options: ["البرازيل", "الصين", "إنجلترا", "مصر"], a: "الصين" },
  { q: "تحتل المركز الأول في تربية الأبقار عالمياً:", options: ["البرازيل", "أستراليا", "الهند", "الصين"], a: "الهند" },
  { q: "تعتبر أستراليا أولى دول العالم في إنتاج:", options: ["اللحوم", "الألبان", "الأصواف", "الجلود"], a: "الأصواف" },
  { q: "تنتج الصين أكثر من ثلث إنتاج العالم من:", options: ["اللحوم الحمراء", "الأسماك", "الدواجن", "الألبان"], a: "الأسماك" },
  { q: "يعد القطن المصري والسوداني من أجود الأنواع لأنه:", options: ["رخيص الثمن", "طويل التيلة", "سهل التصنيع", "متوفر بكثرة"], a: "طويل التيلة" },
];

export default function ExamPage() {
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(""));

  const handleSelect = (index: number, choice: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = choice;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    let finalScore = 0;
    questions.forEach((item, index) => {
      if (item.a === answers[index]) finalScore++;
    });
    setScore(finalScore);
  };

  return (
    <div dir="rtl" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#2e7d32', borderBottom: '2px solid #2e7d32', paddingBottom: '10px' }}>اختبار الدراسات الاجتماعية (الجغرافيا)</h1>
      
      {questions.map((item, index) => (
        <div key={index} style={{ marginBottom: '25px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{index + 1}. {item.q}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
            {item.options.map(option => (
              <button
                key={option}
                onClick={() => handleSelect(index, option)}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  backgroundColor: answers[index] === option ? '#4caf50' : '#fff',
                  color: answers[index] === option ? '#fff' : '#000',
                  transition: '0.3s'
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button 
        onClick={calculateResult}
        style={{ width: '100%', padding: '15px', backgroundColor: '#2e7d32', color: '#fff', fontSize: '20px', border: 'none', borderRadius: '10px', cursor: 'pointer', marginTop: '20px' }}
      >
        إظهار النتيجة
      </button>

      {score !== null && (
        <div style={{ marginTop: '30px', padding: '20px', textAlign: 'center', backgroundColor: '#e8f5e9', borderRadius: '10px', border: '2px solid #2e7d32' }}>
          <h2>درجتك هي: {score} من 10</h2>
          <p>{score >= 5 ? "🎉 أحسنت! أنت طالب مجتهد." : "💪 حاول مرة أخرى، يمكنك التفوق!"}</p>
          <button onClick={() => window.location.reload()} style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}>إعادة الامتحان</button>
        </div>
      )}
    </div>
  );
}