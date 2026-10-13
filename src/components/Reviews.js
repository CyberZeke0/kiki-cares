"use client";
const reviews = [
  {
    id: 1,
    name: 'Amara Okonkwo',
    location: 'Mum of 1 · Lagos',
    avatar: '👩🏾',
    avatarBg: '#E0F5F3',
    stars: 5,
    text: "Kiki Cares® is the only brand that hasn't caused any rashes on my baby's skin. My daughter has always been very sensitive and this has been a complete lifesaver for us!",
    product: 'Kiki Cares® Newborn',
  },
  {
    id: 2,
    name: 'Blessing Kehinde',
    location: 'Mum of twins · Abuja',
    avatar: '👩🏽',
    avatarBg: '#FFF0F3',
    stars: 5,
    text: "The Overnites are absolutely a game-changer. My twins sleep all night without any leaks. I've tried 4 other brands and nothing comes close to Kiki Cares®!",
    product: 'Kiki Cares® Baby Soft',
  },
  {
    id: 3,
    name: 'Chidinma Eze',
    location: 'Mum of 2 · Port Harcourt',
    avatar: '👩🏿',
    avatarBg: '#FFF9EC',
    stars: 5,
    text: "Soft, reliable and affordable. Delivery was fast — arrived the next day! I've been recommending Kiki Cares® to every mum in my mother-and-baby group.",
    product: 'Kiki Cares® Baby Wipes',
  },
];

export default function Reviews() {
  return (
    <section style={{padding: '80px 40px', maxWidth: '1280px', margin: '0 auto'}}>

      {/* Header */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px'}}>
        <div>
          <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>
            Reviews
          </div>
          <h2 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px', margin: 0}}>
            Loved by 50,000+ Nigerian parents
          </h2>
        </div>
        <a href="#" style={{fontSize: '14px', fontWeight: '700', color: '#00A699', textDecoration: 'none'}}>
          Read all reviews →
        </a>
      </div>

      {/* Reviews grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}>
        {reviews.map((review) => (
          <div key={review.id} style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '28px',
            border: '1.5px solid #E5EBF0',
          }}>
            {/* Stars */}
            <div style={{color: '#FFD166', fontSize: '16px', marginBottom: '14px', letterSpacing: '2px'}}>
              {'★'.repeat(review.stars)}
            </div>

            {/* Review text */}
            <p style={{
              fontSize: '14px',
              color: '#6B7F8C',
              lineHeight: '1.8',
              fontStyle: 'italic',
              marginBottom: '20px',
            }}>
              "{review.text}"
            </p>

            {/* Product tag */}
            <div style={{
              display: 'inline-block',
              backgroundColor: '#E0F5F3',
              color: '#00A699',
              fontSize: '11px',
              fontWeight: '700',
              padding: '4px 10px',
              borderRadius: '100px',
              marginBottom: '16px',
              fontFamily: 'sans-serif',
            }}>
              ✓ {review.product}
            </div>

            {/* Author */}
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: review.avatarBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                flexShrink: 0,
              }}>
                {review.avatar}
              </div>
              <div>
                <div style={{fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '800', color: '#1A2A35'}}>
                  {review.name}
                </div>
                <div style={{fontSize: '12px', color: '#6B7F8C'}}>
                  {review.location}
                </div>
                <div style={{fontSize: '11px', color: '#00A699', fontWeight: '700', fontFamily: 'sans-serif', marginTop: '2px'}}>
                  ✓ Verified purchase
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}