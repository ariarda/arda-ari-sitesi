// app/components/TestimonialsSlider.tsx

"use client"; // BU SATIR ÇOK ÖNEMLİ! Bu kodun tarayıcıda çalışacağını belirtir.

import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle'; // Swiper kütüphanesini import ediyoruz
import 'swiper/css/bundle'; // Swiper stillerini import ediyoruz

// Bu bileşen, müvekkil yorumlarını içeren slider'ı oluşturur.
export default function TestimonialsSlider() {

  // useEffect, bileşen ekrana yüklendikten sonra çalışır.
  // Swiper'ı burada başlatıyoruz.
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: { 
        delay: 5000, 
        disableOnInteraction: false 
      },
      pagination: { 
        el: '.swiper-pagination', 
        clickable: true 
      },
      navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev' 
      },
    });

    // Sayfadan ayrılırken Swiper'ı temizlemek iyi bir pratiktir.
    return () => {
      swiper.destroy();
    };
  }, []); // [] boş dizi, bu etkinin sadece bir kez çalışmasını sağlar.

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="testimonial-card">
            <blockquote>"Arda Bey işini layıkıyla yapan ve güven veren bir avukat. Babamın vasiyet ve miras davasında bütün süreci detaylı bir şekilde anlattı ve her konuda bizi bilgilendirdi. Davayı kazandık, kendisine ne kadar teşekkür etsek az."</blockquote>
            <p className="testimonial-author">Furkan A.</p>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-card">
            <blockquote>"İş yeri ile yaşadığım sorunlar hakkında bilgi almak için başvurdum. Kendisi bu süreçte tüm haklarımı ve seçeneklerimi açıkça anlattı. Profesyonel ve ilgili yaklaşımı sayesinde kendimi güvende hissettim. Herkese tavsiye ederim."</blockquote>
            <p className="testimonial-author">Merve K.</p>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-card">
            <blockquote>"Arda Bey alanında uzman, bilgili ve en önemlisi dürüst bir avukat. Boşanma davamda her adımda yanımdaydı ve süreci en az hasarla atlatmamı sağladı. Kendisine ve ekibine minnettarım."</blockquote>
            <p className="testimonial-author">Ayşe T.</p>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-card">
            <blockquote>"Trafik kazası sonrası tazminat davası için Arda Bey ile çalıştık. Süreci başından sonuna kadar titizlikle yürüttü ve haklarımızı sonuna kadar savundu. Güvenilir ve sonuç odaklı bir hukuk bürosu."</blockquote>
            <p className="testimonial-author">Mehmet S.</p>
          </div>
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
}