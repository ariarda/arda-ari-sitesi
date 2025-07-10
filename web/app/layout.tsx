import type { Metadata } from "next";
import Script from 'next/script';
import Link from 'next/link';
import "./globals.css";
import ClientScripts from './components/ClientScripts';

// Sitenizin varsayılan SEO bilgileri
export const metadata: Metadata = {
  title: "Arı Hukuk & Danışmanlık | Bursa Avukatlık Hizmetleri",
  description: "Bursa'da faaliyet gösteren Arı Hukuk & Danışmanlık, Av. Arda Arı liderliğinde iş hukuku, aile hukuku, ceza hukuku ve diğer alanlarda uzman avukatlık hizmeti sunar.",
  keywords: "bursa avukat, iş hukuku avukatı bursa, aile hukuku avukatı, bursa ceza avukatı, miras hukuku, arı hukuk, osmangazi avukat, bursa hukuk bürosu",
  authors: [{ name: "Av. Arda Arı, Arı Hukuk & Danışmanlık" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* --- FAVICON (İkonlar) --- */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* --- DIŞ KAYNAKLAR: STİLLER (Fontlar ve İkon Kütüphaneleri) --- */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
        
        {/* --- GOOGLE İÇİN YAPISAL VERİ (SCHEMA) --- */}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Attorney",
              "name": "Arı Hukuk & Danışmanlık",
              "image": "https://www.ardaari.av.tr/apple-touch-icon.png",
              "@id": "https://www.ardaari.av.tr/",
              "url": "https://www.ardaari.av.tr/",
              "telephone": "+90 531 507 77 17",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Demirtaşpaşa Mah. Ankara Yolu Cad. No:36 Tüze Plaza, K:9 D:30-31",
                "addressLocality": "Bursa",
                "addressRegion": "Osmangazi",
                "postalCode": "16220",
                "addressCountry": "TR"
              }
            }
          `,
          }}
        />
      </head>
      
            <body>
        <ClientScripts /> {/* BU SATIRI BURAYA EKLEYİN */}
        
        {/* ======================= HEADER (TÜM SAYFALARDA GÖRÜNECEK) ======================= */}
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link href="/" style={{textDecoration:'none', color:'inherit'}}>
                        <p>Arı Hukuk <span className="ampersand">&</span> Danışmanlık</p>
                    </Link>
                </div>
                <nav id="main-nav">
                    <ul>
                        <li><Link href="/">Ana Sayfa</Link></li>
                        <li><a href="/#about">Hakkımızda</a></li>
                        <li><a href="/#services">Uzmanlık Alanları</a></li>
                        <li><Link href="/makaleler">Makaleler</Link></li>
                        <li><a href="/#contact">İletişim</a></li>
                    </ul>
                </nav>
                <button className="mobile-menu" aria-label="Menüyü aç/kapat" aria-expanded="false" aria-controls="main-nav">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </header>

        {/* Ana sayfa (page.tsx) veya makale sayfası gibi içerikler bu {children} alanına gelecek. */}
        {children}

        {/* ======================= FOOTER (TÜM SAYFALARDA GÖRÜNECEK) ======================= */}
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>Arı Hukuk <span className="ampersand">&</span> Danışmanlık</h2>
                    <p>Haklarınızı en etkili şekilde savunmak için profesyonel hukuk hizmeti.</p>
                </div>
                <div className="footer-links">
                    <h3>Hızlı Linkler</h3>
                    <ul>
                        <li><Link href="/">Ana Sayfa</Link></li>
                        <li><a href="/#about">Hakkımızda</a></li>
                        <li><a href="/#services">Uzmanlık Alanları</a></li>
                        <li><Link href="/makaleler">Makaleler</Link></li>
                        <li><a href="/#contact">İletişim</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Bizi Takip Edin</h3>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/arda-ar%C4%B1-88bb68248/" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/av.ardaari/" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>© 2024 Arı Hukuk & Danışmanlık. Tüm hakları saklıdır.</p>
                {/* Linkleri .html uzantısı olmadan yeni adreslere yönlendirdik */}
                <p>Bursa Barosu Sicil No: 6417 | <Link href="/kvkk">KVKK Aydınlatma Metni</Link> | <Link href="/cerez-politikasi">Çerez Politikası</Link></p>
            </div>
        </footer>
        
        {/* ======================= EKLENTİLER (TÜM SAYFALARDA GÖRÜNECEK) ======================= */}
        {/* WHATSAPP BUTONU */}
        <a href="https://wa.me/905315077717?text=Merhaba,%20web%20sitenizden%20ulaşıyorum." className="whatsapp-float" target="_blank" aria-label="WhatsApp ile İletişim Kurun">
            <i className="fab fa-whatsapp"></i>
        </a>

        {/* KVKK/ÇEREZ UYARISI */}
        <div id="cookie-banner">
            <div className="cookie-content">
                <div className="cookie-text">
                    <p>Web sitemizdeki kullanıcı deneyimini artırmak için çerezler kullanıyoruz. Detaylı bilgi için <Link href="/cerez-politikasi.html">Çerez Politikamızı</Link> inceleyebilirsiniz.</p>
                </div>
                <div className="cookie-buttons">
                    <button className="cookie-btn reject-btn">Reddet</button>
                    <button className="cookie-btn accept-btn">Kabul Et</button>
                </div>
            </div>
        </div>
        
        {/* --- DIŞ KAYNAKLAR: JAVASCRIPT --- */}
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="lazyOnload" />
        <Script src="https://unpkg.com/swiper/swiper-bundle.min.js" strategy="lazyOnload" />

      </body>
    </html>
  );
}