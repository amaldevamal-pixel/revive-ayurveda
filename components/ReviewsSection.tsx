export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[var(--background)] py-20 lg:py-24 border-t border-black/5">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
            Guest Experiences
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--primary)]">
            Loved by Travelers Worldwide
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Authentic experiences shared by guests who visited Revive Ayurveda
            in Munroe Island.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* REVIEW 1 */}
          <div className="review-card">
            <div className="review-header">
              <div className="review-avatar">A</div>
              <div>
                <p className="review-name">Anna Anna</p>
               
              </div>
            </div>

            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              Amazing massage place! I tried deep tissue and Ayurvedic massage
              with kizhi. Perfect pressure and oil temperature. Instantly relieved
              my neck and shoulders.
            </p>
          </div>

          {/* REVIEW 2 */}
          <div className="review-card">
            <div className="review-header">
              <div className="review-avatar bg-purple-500">A</div>
              <div>
                <p className="review-name">Anju Vallu</p>
                
              </div>
            </div>

            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              Wonderful experience with Abhyanga massage and lepam treatment.
              Warm oils, relaxing atmosphere and very professional staff.
              My skin felt great after!
            </p>
          </div>

          {/* REVIEW 3 */}
          <div className="review-card">
            <div className="review-header">
              <div className="review-avatar bg-green-600">M</div>
              <div>
                <p className="review-name">Michael D.</p>
                
              </div>
            </div>

            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              A peaceful Ayurvedic clinic in Munroe Island. Very clean,
              authentic therapies and excellent consultation before treatment.
              Highly recommended for travelers.
            </p>
          </div>

        </div>

        {/* GOOGLE CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://share.google/psaEXvm75UcpBq1dy"
            target="_blank"
            className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            View More Reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
}