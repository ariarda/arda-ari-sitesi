// web/app/cerez-politikasi/page.tsx

import type { Metadata } from 'next';

// Bu sayfanın özel SEO bilgileri
export const metadata: Metadata = {
  title: 'Çerez Politikası | Arı Hukuk & Danışmanlık',
  description: 'Arı Hukuk & Danışmanlık web sitesi olarak kullandığımız çerezlere ilişkin politikamız.',
  robots: { index: false, follow: false },
};

export default function CerezPolitikasiPage() {
  return (
    <main>
      <section className="page-hero" style={{ padding: '180px 20px 100px', background: 'var(--acik-gri)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', color: 'var(--lacivert)' }}>Çerez Politikası</h1>
        </div>
      </section>

      <div className="article-content-area">
        <div className="container">
          <div className="article-main" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <div className="article-body">
                <p><strong>Değerli Ziyaretçi,</strong></p>
                <p>Arı Hukuk & Danışmanlık olarak internet sitemizi ziyaret ederken gizliliğiniz ve güvenliğinizi temin etmek birincil önceliklerimizdendir.</p>
                <p>Bu çerçevede internet sitemizi bizimle hiçbir kişisel veri paylaşmadan, hizmetlerimiz hakkında bilgi edinebilir ve ziyaretinizi tamamlayabilirsiniz.</p>
                <p>Ziyaretlerinizde, internet sitemizi ziyaret deneyiminizin ihtiyaçlarınızı karşılaması amacıyla çok sınırlı çerez türleri kullanılmaktadır. Ziyaretiniz sırasında, internet tarayıcınızın ya da mobil uygulamanızın dili, bulunduğunuz saat dilimi, sayfalarımızda geçirilen süre ve arama motoru optimizasyon bilgileri vb. bilgiler elde edilmektedir. Bu bilgiler aracılığıyla kimliğinizi belirleyebilmemiz mümkün değildir. Bu nedenle, bizimle iletişime geçmediğiniz sürece herhangi bir kişisel verinizin işlenmeyeceğini temin ederiz.</p>

                <h2>Çerez Nedir?</h2>
                <p>Çerez, bir internet sitesini ziyaret ettiğinizde bilgisayarınıza internet sitemizin sunucusu tarafından gönderilen basit bir metin dosyasıdır. Çerezler, size daha iyi ve daha hızlı bir ziyaret deneyimi yaşatabilmek için yaygın olarak kullanılırlar.</p>

                <h2>Hangi Tür Çerezleri Niçin Kullanıyoruz?</h2>
                <p>Öncelikle belirtmek gerekir ki geçerlilik sürelerine göre iki tür çerez vardır: Kalıcı Çerez ve Geçici Çerez. Sitemizde de aşağıda belirtilen amaçlar çerçevesinde bu iki tür çerez de kullanılabilir:</p>
                <ul>
                    <li><strong>Kalıcı Çerez:</strong> Tarayıcı veya uygulamayı kapattıktan sonra da bilgisayar / mobil cihazda kalan çerezlerdir. Siz silene ya da süreleri sona erene kadar kalırlar.</li>
                    <li><strong>Geçici Çerez:</strong> Ziyaretiniz sırasında oluşturulan ve ziyaretinizin sona ermesinden sonra silinen, “seans” çerezleri olarak da adlandırılan çerezlerdir.</li>
                </ul>
                <p>Web sitemiz, temel olarak yalnızca sitenin işlevsel ve güvenli bir şekilde çalışması için gerekli olan zorunlu ve geçici oturum çerezlerini kullanmaktadır. Bunun dışında, site performansını ölçümlemek ve analiz etmek amacıyla üçüncü taraf hizmetler (örn: Google Analytics) tarafından oluşturulan kalıcı çerezler de kullanılabilir. Bu araçların gizlilik ve çerez politikalarını ayrıca incelemenizi öneririz.</p>

                <h2>Çerez Tercihlerinizi Nasıl Değiştirebilirsiniz?</h2>
                <p>Çerezleri dilediğiniz gibi kontrol edebilir, toplanmasını/kaydedilmesini engelleyebilirsiniz veya toplanmış olması halinde silebilirsiniz. Çoğu internet tarayıcısı ve mobil cihaz buna imkân vermektedir. Bunu nasıl yapabileceğiniz her tarayıcı ve mobil cihaz için farklılık gösterebilir. Gerekli bilgi ve yönlendirmelere tarayıcınızın ve mobil cihazınızın ayarlar bölümünden ulaşabilirsiniz.</p>
                <p>Çerezleri silmeyi tercih ederseniz kalıcı çerezler silinecektir. Çerezleri tamamen engellemeyi tercih ederseniz bu fonksiyonel çerezlerin çalışmasını da engelleyebilir. Dolayısıyla, internet sitemiz doğru ve etkin şekilde çalışmayabilir.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}