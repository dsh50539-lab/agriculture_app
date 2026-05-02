import './globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>النشاط الزراعي</title>
      </head>
      {/* هنا التعديل السحري: ضفنا اللون الأسود والخلفية البيضاء للـ body كله */}
      <body style={{ 
        margin: 0, 
        fontFamily: 'Arial, sans-serif', 
        color: '#000000', 
        backgroundColor: '#ffffff' 
      }}>

        {/* الهيدر (شريط التنقل) */}
        <header style={{
          backgroundColor: '#2e7d32',
          color: 'white',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>🌿 النشاط الزراعي</h1>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/" style={navLinkStyle}>الرئيسية</Link>
            <Link href="/units" style={navLinkStyle}>الوحدات</Link>
            <Link href="/exam" style={navLinkStyle}>الامتحان</Link>
          </nav>
        </header>

        {/* المحتوى الرئيسي */}
        <main style={{ minHeight: '80vh', padding: '20px' }}>
          {children}
        </main>

        {/* الفوتر (أسفل الصفحة) */}
        <footer style={{
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          marginTop: '40px'
        }}>
          <p>موقع النشاط الزراعي التعليمي</p>
          <p>للتواصل: <a href="mailto:dohashokry345@gmail.com" style={{ color: '#81c784', textDecoration: 'none' }}>dohashokry345@gmail.com</a></p>
        </footer>
      </body>
    </html>
  )
}

// ستايل لينكات المنيو
const navLinkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem'
}