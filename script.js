<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="10 Maktab - Modern educational center for quality learning and personal growth."
    />
    <title>10 Maktab - Modern Education</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container nav">
        <div class="brand">
          <span class="brand-mark">10</span>
          <span class="brand-text">Maktab</span>
        </div>
        <nav class="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="nav-actions">
          <button class="lang-toggle" id="langToggle" aria-label="Toggle language">
            <span class="lang-text">O'z</span>
          </button>
          <a class="button button-small" href="#contact">Enroll Now</a>
        </div>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Modern Education</p>
            <h1 data-en="Build a brighter future with 10 Maktab." data-uz="10 Maktab bilan ko'proq to'g'ri kelajakni quraylik.">Build a brighter future with 10 Maktab.</h1>
            <p class="lead" data-en="We help students grow with quality learning, strong values, and a supportive environment that inspires success." data-uz="Biz o'quvchilarning yuqori sifatli ta'lim, kuchli qadriyatlar va muvaffaqiyatga ilhomlantiruvchi muhitda o'sishiga yordam beramiz.">
              We help students grow with quality learning, strong values, and a
              supportive environment that inspires success.
            </p>
            <div class="hero-actions">
              <a class="button" href="#contact" data-en="Enroll Now" data-uz="Hozir yoziling">Enroll Now</a>
              <a class="button button-secondary" href="#about" data-en="Learn More" data-uz="Batafsil o'rganish">Learn More</a>
            </div>
            <ul class="hero-stats" aria-label="Key highlights">
              <li><strong>500+</strong><span data-en="Students" data-uz="O'quvchilar">Students</span></li>
              <li><strong>12+</strong><span data-en="Courses" data-uz="Kurslar">Courses</span></li>
              <li><strong>98%</strong><span data-en="Satisfaction" data-uz="Rizo">Satisfaction</span></li>
            </ul>
          </div>

          <div class="hero-card" aria-label="School overview">
            <div class="card-top">
              <span class="badge" data-en="Admissions Open" data-uz="Qabul Ochiq">Admissions Open</span>
            </div>
            <h2 data-en="Learning for life" data-uz="Hayot uchun o'qish">Learning for life</h2>
            <div class="mini-stats">
              <div>
                <strong data-en="Early" data-uz="Erta">Early</strong>
                <span data-en="Childhood" data-uz="Bolaliq">Childhood</span>
              </div>
              <div>
                <strong data-en="School" data-uz="Maktab">School</strong>
                <span data-en="Programs" data-uz="Dasturlar">Programs</span>
              </div>
              <div>
                <strong data-en="Career" data-uz="Karera">Career</strong>
                <span data-en="Readiness" data-uz="Tayyorligi">Readiness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="section">
        <div class="container split">
          <div>
            <p class="section-tag" data-en="About Us" data-uz="Biz Haqida">About Us</p>
            <h2 data-en="Helping students learn with confidence." data-uz="O'quvchilarga ishonch bilan o'qishga yordam berish.">Helping students learn with confidence.</h2>
          </div>
          <div>
            <p data-en="At 10 Maktab, we believe every learner deserves a supportive and inspiring place to grow. Our focus combines academic excellence, creativity, and personal development to prepare students for success in school and beyond." data-uz="10 Maktabda biz har bir o'quvchi qo'llab-quvvatlayuvchi va ilhomlantiruvchi o'sish joyiga loyiq deyemiz. Bizning e'tiborimiz akademik mukammalilik, ijodiylik va shahsiy rivojlanishni birlashtirib, o'quvchilarni maktabdagi va undan tashqari muvaffaqiyatga tayyorlaydi.">
              At 10 Maktab, we believe every learner deserves a supportive and
              inspiring place to grow. Our focus combines academic excellence,
              creativity, and personal development to prepare students for
              success in school and beyond.
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact" class="site-footer">
      <div class="container footer-wrap">
        <div class="footer-left">
          <div class="brand footer-brand">
            <span class="brand-mark">10</span>
            <span class="brand-text">Maktab</span>
          </div>
          <p data-en="Empowering learners for a brighter tomorrow." data-uz="Bugungi o'quvchilarning o'zini yetaklantirish uchun.">Empowering learners for a brighter tomorrow.</p>
        </div>

        <div class="contact-box">
          <h3 data-en="Contact Us" data-uz="Biz bilan bog'lanish">Contact Us</h3>
          <form id="contactForm" class="contact-form">
            <input 
              type="email" 
              placeholder="your@email.com" 
              required 
              aria-label="Email address"
            />
            <button type="submit" class="button" data-en="Send" data-uz="Yuborish">Send</button>
          </form>
          <p>📧 hello@10maktab.com</p>
          <p>📞 +998 (70) 123-45-67</p>
        </div>
      </div>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
