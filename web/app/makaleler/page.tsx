// web/app/makaleler/page.tsx

import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity"; // Sanity istemcisini import ediyoruz

export const revalidate = 60; // Bu sayfanın içeriğini her 60 saniyede bir yeniden kontrol et

// Sanity'den tüm makaleleri çekmek için fonksiyon
async function getPosts() {
  // GROQ sorgusu: Tüm 'post' türündeki belgeleri al, en yeniden en eskiye sırala.
  // İhtiyacımız olan alanları (title, slug, mainImage, excerpt) belirtiyoruz.
  const query = `*[_type == 'post'] | order(_createdAt desc) {
    title,
    "currentSlug": slug.current,
    mainImage,
    "excerpt": pt::text(body[0])
  }`;

  const posts = await client.fetch(query);
  return posts;
}

// Bu, /makaleler URL'sinin sayfa bileşenidir.
export default async function ArticlesPage() {
  const posts: any[] = await getPosts(); // Makaleleri çekiyoruz

  return (
    <main>
      <section className="page-hero" style={{ padding: '180px 20px 100px', background: 'var(--acik-gri)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', color: 'var(--lacivert)' }}>Tüm Makaleler</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1rem', color: 'var(--koyu-gri)' }}>Hukuki konularda bilgi sahibi olmanız için hazırladığımız güncel yazılarımız.</p>
        </div>
      </section>

      <section id="all-articles" className="section" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="articles-grid">
            {posts.map((post) => (
              <div key={post.currentSlug} className="article-card">
                {post.mainImage ? (
                  <div className="article-img">
                    {/* Sanity'den gelen görsel URL'sini oluşturuyoruz */}
                    <img
                      src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                      alt={post.title}
                      width={400}
                      height={220}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      loading="lazy"
                    />
                  </div>
                ) : <div className="article-img" style={{backgroundColor: '#eee'}}></div> } 
                
                <div className="article-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p> {/* Sanity'den gelen özet */}
                  {/* Makale detay sayfasına link veriyoruz */}
                  <Link href={`/makaleler/${post.currentSlug}`} className="btn-read-more">
                    Devamını Oku <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}