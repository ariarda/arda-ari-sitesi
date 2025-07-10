import { client } from "@/sanity";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import Link from 'next/link';

export const revalidate = 60;

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0] {
    ...,
    "authorName": author->name,
    "categoryTitles": categories[]->title,
    "ilgiliMakaleler": *[_type == "post" && slug.current != "${slug}" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc) [0...3] {
      title,
      "currentSlug": slug.current,
      mainImage
    }
  }`;
  
  const post = await client.fetch(query);
  return post;
}

// Props tipini bu şekilde dışarıda tanımlıyoruz
type Props = {
  params: { slug: string };
};

// Ve fonksiyon bu tipi kullanıyor
export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Makale bulunamadı.</div>;
  }
  
  const portableTextComponents = {
    types: {
      image: ({ value }: { value: any }) => (
        <img
          src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
          alt={post.title}
          className="my-8 rounded-lg"
          style={{ width: '100%', height: 'auto' }}
        />
      ),
    },
  };

  return (
    <main>
      <section className="article-hero" style={{ 
        backgroundImage: post.mainImage ? `linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.85)), url(https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')})` : 'var(--lacivert)'
      }}>
        <div className="container">
          <span className="category">{post.categoryTitles ? post.categoryTitles.join(', ') : 'Makale'}</span>
          <h1>{post.title}</h1>
          <div className="article-meta">
            <span><i className="fas fa-user"></i> {post.authorName || 'Av. Arda Arı'}</span>
            <span><i className="fas fa-calendar-alt"></i> {new Date(post.publishedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </section>

      <div className="article-content-area">
        <div className="container">
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <ol>
                  <li><Link href="/">Ana Sayfa</Link></li>
                  <li><Link href="/makaleler">Makaleler</Link></li>
                  <li aria-current="page">{post.title}</li>
              </ol>
          </nav>
          <div className="article-layout">
            <div className="article-main">
              <div className="article-body">
                <PortableText value={post.body} components={portableTextComponents} />
              </div>
            </div>
            
            <aside className="article-sidebar">
              <div className="sidebar-widget widget-author">
                <Image src="/profil-sidebar.jpg" alt="Avukat Arda Arı" width={130} height={130} />
                <h3>Av. Arda Arı</h3>
                <p>Hukuki sorunlarınızda şeffaf, güvenilir ve sonuç odaklı çözümler için yanınızdayım.</p>
                <Link href="/#contact" className="btn">İletişime Geç</Link>
              </div>
            </aside> 
            
          </div>

          {post.ilgiliMakaleler && post.ilgiliMakaleler.length > 0 && (
            <div className="related-posts-section" style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid #eee', width: '100%' }}>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem', borderBottom: 'none', paddingBottom: 0 }}>Bunlar da İlginizi Çekebilir</h2>
              <div className="articles-grid" style={{ marginTop: '40px' }}>
                {post.ilgiliMakaleler.map((relatedPost: any) => (
                  <div key={relatedPost.currentSlug} className="article-card">
                    {relatedPost.mainImage ? (
                      <div className="article-img">
                        <img
                          src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${relatedPost.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                          alt={relatedPost.title}
                          width={400}
                          height={220}
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          loading="lazy"
                        />
                      </div>
                    ) : <div className="article-img" style={{backgroundColor: '#e0e0e0'}}></div>}
                    
                    <div className="article-content">
                      <h3>{relatedPost.title}</h3>
                      <Link href={`/makaleler/${relatedPost.currentSlug}`} className="btn-read-more">
                        Devamını Oku <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </main>
  );
}