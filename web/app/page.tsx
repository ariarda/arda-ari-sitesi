import Image from 'next/image';
import Link from 'next/link';
import TestimonialsSlider from './components/TestimonialsSlider';
import { client } from '@/sanity'; // Sanity istemcisini import ediyoruz
import ContactForm from './components/ContactForm';

// BU EKSİK OLAN KISIMDI: Sanity'den en son 3 makaleyi çeken fonksiyon
async function getRecentPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) [0...3] {
    title,
    "currentSlug": slug.current,
    mainImage,
    "excerpt": pt::text(body[0]) 
  }`;
  const posts = await client.fetch(query);
  return posts;
}

// Not: Bu dosya, eski index.html'deki tüm bölümleri içerir.
// Ancak "Müvekkil Yorumları" ve "Animasyonlar" gibi JavaScript gerektiren
// bölümlerin çalışması için ek adımlar gerekecektir.
// Bu kod, öncelikle görsel yapıyı kurmak içindir.

export default async function HomePage() {
  // BU EKSİK OLAN İKİNCİ KISIMDI: Fonksiyonu çağırıp veriyi değişkene atıyoruz
  const recentPosts = await getRecentPosts();

  return (
    <main>
      {/* ======================= HERO BÖLÜMÜ ======================= */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Hukuki Sorunlarınızda Güvenilir Çözüm Ortağınız</h1>
          <p>Arı Hukuk & Danışmanlık, Bursa'da hukukun her alanında uzmanlaşmış ekibiyle müvekkillerine en kaliteli hukuki danışmanlık ve temsil hizmetini sunar.</p>
          <a href="#contact" className="btn">Bize Ulaşın</a>
        </div>
      </section>

      {/* ======================= HAKKIMIZDA BÖLÜMÜ ======================= */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div className="about-img">
            <Image src="/profil-fotografi.jpg" alt="Avukat Arda Arı - Arı Hukuk & Danışmanlık" width={800} height={533} />
          </div>
          <div className="about-content">
            <h2 className="section-title">Hakkımızda</h2>
            <p><strong>Av. Arda ARI</strong>, Bursa Barosu'na kayıtlı bir avukat olarak, müvekkillerine adil ve etkili çözümler sunma misyonuyla yola çıkmıştır. Hukuk Fakültesi'nden mezun olduktan sonra kurumsal ofislerde çalışarak edindiği tecrübelerle kendi ofisini kurmuştur.</p>
            <p>Özellikle iş hukuku, tazminat hukuku, aile hukuku, icra hukuku, gayrimenkul hukuku, miras hukuku ve ceza hukuku alanlarında derin bir uzmanlığa sahiptir. Her davaya özel bir ilgi ve titizlikle yaklaşarak müvekkillerinin haklarını en üst düzeyde korumayı hedefler.</p>
          </div>
        </div>
      </section>

      {/* ======================= UZMANLIK ALANLARI BÖLÜMÜ ======================= */}
      <section className="section" id="services"> 
        <div className="container"> 
            <div className="section-header"> 
                <h2 className="section-title">Uzmanlık Alanlarımız</h2> 
                <p>Hukukun çeşitli alanlarında uzmanlaşmış ekibimizle size en kaliteli hizmeti sunuyoruz.</p> 
            </div> 
            <div className="services-grid"> 
                <div className="service-card"><div className="service-icon"><i className="fas fa-ring"></i></div><h3>Aile Hukuku</h3><p>Boşanma, nafaka, velayet, mal paylaşımı ve aile içi şiddet davalarında uzman hukuki danışmanlık.</p></div> 
                <div className="service-card"><div className="service-icon"><i className="fas fa-briefcase"></i></div><h3>İş Hukuku</h3><p>İşten çıkarma, kıdem tazminatı, mobbing, iş kazaları ve toplu iş hukuku konularında destek.</p></div> 
                <div className="service-card"><div className="service-icon"><i className="fas fa-file-invoice-dollar"></i></div><h3>Tazminat Hukuku</h3><p>Maddi ve manevi tazminat davaları, trafik kazaları ve mesleki tazminat talepleri.</p></div> 
                <div className="service-card"><div className="service-icon"><i className="fas fa-gavel"></i></div><h3>İcra Hukuku</h3><p>İcra takipleri, itirazlar, haciz işlemleri ve alacaklarınızın tahsili için etkin hukuki çözümler.</p></div> 
                <div className="service-card"><div className="service-icon"><i className="fas fa-home"></i></div><h3>Gayrimenkul Hukuku</h3><p>Tapu işlemleri, kat mülkiyeti, imar uyuşmazlıkları, kamulaştırma ve kira davaları.</p></div> 
                <div className="service-card"><div className="service-icon"><i className="fas fa-landmark"></i></div><h3>Miras Hukuku</h3><p>Miras paylaşımı, vasiyetname düzenleme, tenkis davaları ve miras reddi işlemleri.</p></div> 
                <div className="service-card"><div className="service-icon"><i className="fas fa-balance-scale"></i></div><h3>Ceza Hukuku</h3><p>Savunma hizmetleri, tutukluluk duruşmaları, tahliye talepleri, şikayet ve itirazlar.</p></div> 
                <div className="service-card"><div className="service-icon"><i className="fas fa-handshake"></i></div><h3>Ticaret Hukuku</h3><p>Şirketler hukuku, sözleşmeler, rekabet hukuku, ticari davalar ve iflas hukuku.</p></div> 
                <div className="service-card"><div className="service-icon"><i className="fas fa-university"></i></div><h3>İdare Hukuku</h3><p>İptal davaları, tam yargı davaları, idari başvurular, kamu ihale hukuku ve memur hukuku.</p></div> 
            </div> 
        </div> 
      </section>

      {/* ======================= NEDEN BİZ BÖLÜMÜ ======================= */}
      <section className="section" id="why-us"> 
        <div className="container"> 
            <div className="section-header"> 
                <h2 className="section-title">Neden Arı Hukuk ve Danışmanlık?</h2> 
                <p>Hukuki süreçlerinizde bizi tercih etmeniz için birkaç neden:</p> 
            </div> 
            <div className="why-us-grid"> 
                <div className="why-us-item"><div className="why-us-icon"><i className="fas fa-users"></i></div><h3>Müvekkil Odaklılık</h3><p>Her müvekkilimizin davasını kendi davamız gibi benimser, şeffaf ve anlaşılır bir iletişim kurarız.</p></div> 
                <div className="why-us-item"><div className="why-us-icon"><i className="fas fa-medal"></i></div><h3>Uzmanlık ve Deneyim</h3><p>Geniş uzmanlık alanlarımız ve yılların getirdiği tecrübe ile karmaşık davalarda bile etkili sonuçlar alırız.</p></div> 
                <div className="why-us-item"><div className="why-us-icon"><i className="fas fa-chart-line"></i></div><h3>Sonuç Odaklı Çözümler</h3><p>Sadece hukuki süreçleri yönetmekle kalmaz, sizin için en avantajlı sonucu elde etmeyi hedefleriz.</p></div> 
            </div> 
        </div> 
      </section>

            {/* ======================= MÜVEKKİL YORUMLARI BÖLÜMÜ (DİNAMİK) ======================= */}
      <section className="section" id="testimonials">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Müvekkillerimiz Ne Dedi?</h2>
            </div>
            {/* Az önce oluşturduğumuz slider bileşenini buraya çağırıyoruz */}
            <TestimonialsSlider />
        </div>
      </section>
      
            {/* ======================= MAKALELER BÖLÜMÜ (DİNAMİK) ======================= */}
      <section className="section" id="articles">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Güncel Makaleler</h2>
                <p>Hukuki konularda bilgi sahibi olmanız için hazırladığımız güncel yazılarımız.</p>
            </div>
            <div className="articles-grid">
                {/* 
                  Bu kod, sayfanın en üstünde çağırdığımız 'recentPosts' verisini kullanır.
                  Sanity'den gelen en son 3 makaleyi burada otomatik olarak listeler.
                */}
                {recentPosts.map((post: any) => (
                  <div key={post.currentSlug} className="article-card">
                    <div className="article-img">
                         {post.mainImage ? (
                            <img 
                                src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`} 
                                alt={post.title}
                                width={400} 
                                height={220} 
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                         ) : <div style={{width: 400, height: 220, backgroundColor: '#e0e0e0'}}></div>}
                    </div>
                    <div className="article-content">
                        <h3>{post.title}</h3>
                        <p>{post.excerpt?.substring(0, 150) + '...'}</p> {/* Özetin ilk 150 karakterini gösterir */}
                        
                        {/* DİKKAT: Link artık .html olmadan, dinamik olarak oluşturuluyor */}
                        <Link href={`/makaleler/${post.currentSlug}`} className="btn-read-more">
                            Devamını Oku <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                  </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '60px' }}>
                <Link href="/makaleler" className="btn">Tüm Makaleleri Gör</Link>
            </div>
        </div>
      </section>

      {/* ======================= İLETİŞİM BÖLÜMÜ ======================= */}
      <section className="section" id="contact">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">İletişim</h2>
                <p>Hukuki sorunlarınız için bize ulaşın, profesyonel çözümlerle yanınızda olalım.</p>
            </div>
            <div className="contact-info-grid">
                <div className="contact-item"> <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div> <div> <h3>Adresimiz</h3> <p>Demirtaşpaşa Mah. Ankara Yolu Cad. No:36 Tüze Plaza, K:9 D:30-31 Osmangazi/Bursa</p> </div> </div>
                <div className="contact-item"> <div className="contact-icon"><i className="fas fa-phone"></i></div> <div> <h3>Telefon</h3> <p><a href="tel:+905315077717" style={{textDecoration: 'none', color: 'inherit'}}>+90 531 507 77 17</a></p> </div> </div>
                <div className="contact-item"> <div className="contact-icon"><i className="fas fa-envelope"></i></div> <div> <h3>E-posta</h3> <p><a href="mailto:destek@ardaari.av.tr" style={{textDecoration: 'none', color: 'inherit'}}>destek@ardaari.av.tr</a></p> </div> </div>
            </div>
                        <ContactForm />
            <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.884144122176!2d29.072737676646733!3d40.192437968565256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3e71fa0ce2f5%3A0x90d2c411634a741e!2zVMOcemUgUGxhemE!5e0!3m2!1str!2str!4v1701026071478!5m2!1str!2str" title="Arı Hukuk & Danışmanlık Ofis Konumu" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </section>
    </main>
  );
}