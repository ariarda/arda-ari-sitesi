// web/app/kvkk/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

// Bu sayfanın özel SEO bilgileri
export const metadata: Metadata = {
  title: 'KVKK Aydınlatma ve Açık Rıza Metni | Arı Hukuk & Danışmanlık',
  description: 'Arı Hukuk & Danışmanlık olarak kişisel verilerinizin işlenmesine yönelik aydınlatma ve açık rıza metnimiz.',
  robots: { index: false, follow: false },
};

export default function KvkkPage() {
  return (
    <main>
      <section className="page-hero" style={{ padding: '180px 20px 100px', background: 'var(--acik-gri)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', color: 'var(--lacivert)' }}>KVKK Aydınlatma ve Açık Rıza Metni</h1>
        </div>
      </section>

      <div className="article-content-area">
        <div className="container">
          <div className="article-main" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <div className="article-body">
                <p><strong>Av. Arda Arı</strong>, veri sorumlusu olarak danışanlarının, müvekkillerinin, web sitesini ziyaret eden ziyaretçilerin kişisel verilerini gerektiğinde çeşitli formlar, e-mail, telefon veya diğer elverişli yöntemlerle toplamakta, işlemekte, güncellemekte, saklamakta, sınıflandırmaktadır. Ancak Av. Arda Arı, 6698 sayılı kanun gereği gerekli teknik ve idari tedbirleri alarak bu verilerinizi korumaktadır.</p>
                <p><strong>Kişisel veri;</strong> kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi ifade eder.</p>
                <p><strong>Kişisel verilerin işlenmesi;</strong> kişisel verilerin elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devredilmesi, elde edilebilir hale getirilmesi, sınıflandırılması, kullanılmasının engellenmesi dahil olmak üzere toplandıktan sonra silme, yok etme ya da anonim hale getirme aşamalarını içeren her türlü faaliyettir.</p>

                <h2>Kişisel Verilerin Toplanması ve İşlenmesi</h2>
                <p>Av. Arda Arı, internet üzerinden web sitesinde (www.ardaari.av.tr) ve hukuk bürosunda işlenme ihtimali bulunan verileriniz ile ilgili olarak veri sorumlusudur.</p>
                <p>Aşağıda yer alan verileriniz hukuk bürosunda fiziksel olarak hazırlanan formlar veya internet sitesi üzerinden elektronik bir şekilde beyan, bilgi ve onayınız doğrultusunda toplanabilecektir:</p>
                <ul>
                    <li>İletişim bölümündeki bilgi formunu kullanarak web sitemiz üzerinde bize ulaşmanız halinde belirttiğiniz ad ve soyad, e-mail ve telefon numaranız ve form içeriğinde verdiğiniz kişisel bilgiler tarafımızdan toplanarak işlenebilecektir.</li>
                    <li>Hukuki zorunluluk nedeniyle; internet sitesine gerçekleştirdiğiniz ziyarete ilişkin; bağlantı/çıkış tarih ve saat bilgisi, internet protokolü, kaynak ve hedef nokta bilgileri ile konum bilgisi, internet sitesini daha etkili, kolay ve hızlı kullanmanızı sağlama, site hizmet ve faaliyetlerini ihtiyaçlarınız doğrultusunda özelleştirme amaçlı kullanılan çerezlerin topladığı veriler toplanabilmekte veya işlenebilmektedir.</li>
                </ul>

                <h2>Kişisel Verilerinizin İşlenme Amaçları</h2>
                <p>Kişisel verileriniz; avukatlık hizmet ve faaliyetlerinden yararlanabilmeniz için gerekli çalışmaların yapılabilmesi, Av. Arda Arı tarafından sunulan hizmet ve faaliyetlerin, beğeni, kullanım şekliniz ve ihtiyaçlarınıza göre özelleştirilerek sizlere önerilmesi ile talepleriniz doğrultusunda gerekli teknik destek ve kalitenin sağlanması, hizmet ve faaliyetlerimize ilişkin her türlü soru ve şikayetinize cevap verilebilmesi, veri güvenliği kapsamında tüm gerekli teknik ve idari tedbirlerin alınması ve düzenleyici ve denetleyici kurumlarla, resmi mercilerin talep ve denetimleri doğrultusunda gerekli bilgilerin temini ve idari operasyonların yürütülmesi amaçlarıyla işlenmektedir.</p>

                <h2>Kişisel Verilerinizin Aktarılması</h2>
                <p>Kişisel verileriniz, tarafınızca yetki verilmiş olan vekil ve temsilcilerinize, düzenleyici ve denetleyici kurumlar ile mahkeme ve icra müdürlükleri gibi sair resmî kurumlara, kişisel verilerinizi talep etmeye yetkili olan diğer kamu kurum veya kuruluşlarına, KVKK nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.</p>

                <h2>Kişisel Verilerin Korunmasına Yönelik Haklarınız</h2>
                <p>Av. Arda Arı’ya başvurarak kendinizle ilgili;</p>
                <ul>
                  <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
                  <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
                  <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                  <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
                  <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                  <li>Kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
                  <li>(d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                  <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
                  <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep edebilirsiniz.</li>
                </ul>
                <p>Taleplerinizi mektup, telefon veya e-posta yoluyla, şahsen başvurarak veya noter aracılığıyla iletebilirsiniz. Tarafımıza iletilmesinden itibaren en geç 30 gün içinde talepleriniz ücretsiz bir şekilde sonuçlandırılacaktır.</p>

                <h2>Açık Rıza veya Onay Metni</h2>
                <p>6698 sayılı Kişisel Verilerin Korunması Kanunu çerçevesinde kişisel/özel nitelikli kişisel verilerimin; fiziksel olarak ofis adresinde veya web sitesi (www.ardaari.av.tr) üzerinden tamamen veya kısmen elde edilmesi, kaydedilmesi, depolanması, değiştirilmesi, güncellenmesi, sınıflandırılması, işlendikleri amaç için gerekli olan ya da ilgili kanunda öngörülen süre kadar muhafaza edilmesi, kanuni nedenlerle veya yapılan işin niteliği gereği üçüncü kişiler ile paylaşılması da dahil olmak üzere yukarıda açıklandığı üzere işlenmesine, konu hakkında tereddüde yer vermeyecek şekilde bilgi sahibi ve aydınlatılmış olarak açık rızam ile onay veriyorum.</p>

                <h2>Veri Sorumlusunun Kimliği</h2>
                <p><strong>Ad, Soyad ve Unvan:</strong> Avukat Arda Arı</p>
                <p><strong>Web Adresi:</strong> www.ardaari.av.tr</p>
                <p><strong>E-posta:</strong> destek@ardaari.av.tr</p>
                <p><strong>Telefon Numarası:</strong> +90 531 507 77 17</p>
                <p><strong>Adres:</strong> Demirtaşpaşa Mah. Ankara Yolu Cad. No:36 Tüze Plaza, K:9 D:30-31 Osmangazi/Bursa</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}