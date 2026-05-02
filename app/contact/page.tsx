"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // محاكاة إرسال الرسالة
    setStatus("شكراً لك! تم إرسال رسالتك إلى أ/ ضحى شكري بنجاح.");
  };

  return (
    <div dir="rtl" style={{ padding: '40px', maxWidth: '700px', margin: '0 auto', fontFamily: 'Arial' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2e7d32', fontSize: '32px' }}>📬 تواصل معنا</h1>
        <p style={{ color: '#555', fontSize: '18px' }}>نحن هنا لمساعدتك في رحلتك التعليمية</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
        {/* معلومات التواصل الخاصة بيكي */}
        <div style={{ padding: '20px', backgroundColor: '#e8f5e9', borderRadius: '15px', border: '1px solid #c8e6c9' }}>
          <h3 style={{ color: '#2e7d32' }}>بيانات الإدارة:</h3>
          <p><b>الاسم:</b> ضحى شكري</p>
          <p><b>البريد الإلكتروني:</b></p>
          <p style={{ fontSize: '14px', color: '#1b5e20' }}>dohashokry345@gmail.com</p>
        </div>

        {/* نموذج المراسلة */}
        <div style={{ backgroundColor: '#fff', padding: '10px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input 
              type="text" 
              placeholder="اسمك" 
              required 
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} 
            />
            <textarea 
              placeholder="كيف يمكننا مساعدتك؟" 
              rows={4} 
              required 
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', resize: 'none' }} 
            />
            <button 
              type="submit" 
              style={{ padding: '15px', backgroundColor: '#2e7d32', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              إرسال الآن
            </button>
          </form>
        </div>
      </div>

      {status && (
        <div style={{ padding: '15px', backgroundColor: '#d1e7dd', color: '#0f5132', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
          {status}
        </div>
      )}
    </div>
  );
}