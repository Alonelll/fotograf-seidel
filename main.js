(function () {
  const works = [
    { id:'v5w1', n:'2', title:'Hochzeit',       meta:'2025', ph:'Hochzeit',           text:'Ganztägige Begleitung, dokumentarisch und ruhig. Kein Posieren, keine Standard­formeln — nur euer Tag, wie er tatsächlich war. Vom ersten Kaffee am Morgen bis zum letzten Tanz.',                                                              test:'https://image.pollinations.ai/prompt/moody-black-and-white-wedding-portrait-bride-soft-light/1200/1600?nologo=true&seed=11', fb:'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&sat=-100' },
    { id:'v5w2', n:'3', title:'Portrait',       meta:'2025', ph:'Portrait',           text:'Klassische Portraits im Studio oder on-location. Einzel-, Gruppen- und Tieraufnahmen — mit Zeit für das richtige Bild, natürlichem Licht und ohne Eile. Für Redaktionen, persönliche Marken oder einfach für sich selbst.',                     test:'https://image.pollinations.ai/prompt/editorial-black-and-white-portrait-woman-studio-window-light/1200/1600?nologo=true&seed=22', fb:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&sat=-100' },
    { id:'v5w3', n:'4', title:'Baby & Kinder',  meta:'2024', ph:'Baby / Kinder',      text:'Neugeborenen-, Baby- und Kinderaufnahmen in geduldiger, vertrauter Atmosphäre. Wir nehmen uns Zeit — für Pausen, fürs Füttern, für Neugier. Herausgekommen ist am Ende immer ein Bild, das über Jahre bleibt.',                          test:'https://image.pollinations.ai/prompt/tender-black-and-white-baby-portrait-soft-natural-light/1200/1600?nologo=true&seed=33', fb:'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&sat=-100' },
    { id:'v5w4', n:'5', title:'Beauty',         meta:'2024', ph:'Beauty',             text:'Beautyaufnahmen mit Fokus auf Licht, Textur und Charakter. Reduzierte Sets, präzise Ausleuchtung, ehrliche Bearbeitung — für persönliche Portfolios, ein Geschenk an sich selbst oder ein kleines Editorial.',                                test:'https://image.pollinations.ai/prompt/beauty-portrait-black-and-white-close-up-studio-light/1200/1600?nologo=true&seed=44', fb:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&sat=-100' },
    { id:'v5w5', n:'6', title:'Schwangerschaft',meta:'2024', ph:'Schwangerschaft',    text:'Aufnahmen, die diese besondere Zeit festhalten — allein, zu zweit oder mit der ganzen Familie. Auf Wunsch als Serie über mehrere Termine, damit sich die Veränderung im Bild wiederfindet und nicht in einer einzigen Sitzung endet.',   test:'https://image.pollinations.ai/prompt/black-and-white-maternity-portrait-silhouette-studio/1200/1600?nologo=true&seed=55', fb:'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&sat=-100' },
    { id:'v5w6', n:'7', title:'Konzept',        meta:'2023', ph:'Konzept-Fotografie', text:'Mein Herzensprojekt neben der Auftragsarbeit. Aufwendig inszenierte Bilder­welten, die ihre eigene Geschichte erzählen — mit gebauten Sets, langer Vorplanung und Zusammenarbeit mit Stylistinnen und Set-Designern.',                     test:'https://image.pollinations.ai/prompt/surreal-cinematic-conceptual-portrait-black-and-white-dramatic/1200/1600?nologo=true&seed=66', fb:'https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=1200&sat=-100' },
  ];

  const services = [
    { n:'1', title:'Hochzeit',            desc:'Ganztägige Begleitung und Portraitsitzungen für Paare — im Studio oder an Ihrem Wunschort.', tag:'Anfrage' },
    { n:'2', title:'Portrait',            desc:'Klassische Portraits — Einzel-, Gruppen- und Tieraufnahmen. Zeit für die richtige Aufnahme.', tag:'Studio' },
    { n:'3', title:'Baby & Kinder',       desc:'Neugeborenen-, Baby- und Kinderaufnahmen. Behutsam, geduldig, in vertrauter Atmosphäre.',   tag:'Studio' },
    { n:'4', title:'Schwangerschaft',     desc:'Aufnahmen, die diese besondere Zeit festhalten — auf Wunsch als Serie über mehrere Termine.', tag:'Studio' },
    { n:'5', title:'Beauty',              desc:'Beautyaufnahmen mit Fokus auf Licht und Charakter — für Portfolios oder als Geschenk.',      tag:'Studio' },
    { n:'6', title:'Akt',                 desc:'Aktaufnahmen in geschützter, professioneller Atmosphäre. Nach ausführlichem Vorgespräch.',   tag:'Diskret' },
    { n:'7', title:'Geschäftskunden',     desc:'Business-Portraits, Team­aufnahmen und Reportagen für Unternehmen aus der Region.',          tag:'Business' },
    { n:'8', title:'Bewerbung & Passbild',desc:'Bewerbungsserien und biometrische Passbilder — mit Zeit für das richtige Bild.',            tag:'Express' },
  ];

  const plate = document.querySelector('.pin-plate');
  const slides = document.querySelector('.pin-slides');
  document.querySelector('.pin-total').textContent = '/ 0' + works.length;
  works.forEach((w, i) => {
    const layer = document.createElement('div');
    layer.className = 'layer' + (i === 0 ? ' active' : '');
    layer.innerHTML = `<div class="sweep"></div><img class="drop" data-id="${w.id}" data-placeholder="${w.ph}" data-test="${w.test}" data-fb="${w.fb}" alt="">`;
    plate.appendChild(layer);

    const slide = document.createElement('div');
    slide.className = 'pin-slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <div class="s-line caps">Plate 0${w.n} · ${w.meta}</div>
      <h3 class="s-line"><em>${w.title}</em></h3>
      <p class="s-line">${w.text}</p>`;
    slides.appendChild(slide);
  });

  const servicesList = document.querySelector('.services-list');
  services.forEach(s => {
    const row = document.createElement('div');
    row.className = 's-row';
    row.innerHTML = `
      <span class="caps">0${s.n}</span>
      <span class="title">${s.title}</span>
      <span class="desc">${s.desc}</span>
      <span class="caps tag">${s.tag} →</span>`;
    servicesList.appendChild(row);
  });

  // Image drop slots (persist via localStorage as data-URL)
  document.querySelectorAll('img.drop').forEach(img => {
    const plate = img.closest('.plate');
    const id = img.dataset.id;
    const ph = document.createElement('div');
    ph.className = 'ph';
    ph.textContent = img.dataset.placeholder || 'Bild hier ablegen';
    plate.appendChild(ph);

    const saved = localStorage.getItem('img:' + id);
    if (saved) { img.src = saved; plate.classList.add('filled'); }
    else if (img.dataset.test) {
      img.addEventListener('error', function onErr(){
        img.removeEventListener('error', onErr);
        if (img.dataset.fb) img.src = img.dataset.fb;
      });
      img.src = img.dataset.test;
      plate.classList.add('filled');
    }

    plate.addEventListener('dragover', e => { e.preventDefault(); plate.classList.add('dragover'); });
    plate.addEventListener('dragleave', () => plate.classList.remove('dragover'));
    plate.addEventListener('drop', e => {
      e.preventDefault();
      plate.classList.remove('dragover');
      const file = e.dataTransfer.files && e.dataTransfer.files[0];
      if (!file || !file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = () => {
        img.src = reader.result;
        plate.classList.add('filled');
        try { localStorage.setItem('img:' + id, reader.result); } catch (_) {}
      };
      reader.readAsDataURL(file);
    });
  });

  // GSAP
  function init() {
    if (!window.gsap || !window.ScrollTrigger) return setTimeout(init, 60);
    const gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);

    gsap.set('.rev > span', { yPercent: 105, y: 0 });
    gsap.set('.fade', { opacity: 0, y: 20 });
    gsap.set('.plate .cover', { scaleY: 1, transformOrigin: 'bottom' });

    // Hero
    gsap.to('#top .rev > span', {
      yPercent: 0, y: 0, duration: 1.4, ease: 'expo.out', stagger: 0.08, delay: 0.3
    });

    document.querySelectorAll('.rev').forEach(rev => {
      if (rev.closest('#top')) return;
      const span = rev.querySelector('span');
      gsap.to(span, {
        yPercent: 0, y: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: rev, start: 'top 90%' }
      });
    });

    document.querySelectorAll('.fade').forEach(el => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });

    document.querySelectorAll('.plate').forEach(pl => {
      if (pl.classList.contains('pin-plate')) return;
      const cover = pl.querySelector('.cover');
      const img = pl.querySelector('img');
      if (cover) gsap.to(cover, {
        scaleY: 0, duration: 1.6, ease: 'expo.inOut',
        scrollTrigger: { trigger: pl, start: 'top 85%' }
      });
      if (img) gsap.fromTo(img, { yPercent: -8 }, {
        yPercent: 8, ease: 'none',
        scrollTrigger: { trigger: pl, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
      });
    });

    const feature = document.querySelector('.feature-plate .cover');
    if (feature) gsap.to(feature, { scaleY: 0, duration: 1.8, ease: 'expo.inOut', delay: 0.5 });

    // Pinned work series — plates + text cross-fade in place
    const stage = document.querySelector('.pin-stage');
    const wrap = document.querySelector('.pin-wrap');
    const layers = stage.querySelectorAll('.pin-plate .layer');
    const slideEls = stage.querySelectorAll('.pin-slide');
    const bar = stage.querySelector('.pin-progress-bar');
    const currentEl = stage.querySelector('.pin-current');
    const count = layers.length;
    if (count > 0) {
      wrap.style.height = '';

      let active = 0;
      const dist = () => window.innerHeight * count * 1.8;

      layers.forEach((l, i) => {
        const sweep = l.querySelector('.sweep');
        if (sweep) sweep.style.transform = i === 0 ? 'scaleY(0)' : 'scaleY(1)';
      });

      const set = (i) => {
        i = Math.max(0, Math.min(count - 1, i));
        if (i === active) return;
        const prev = active;
        layers[i].classList.add('active');
        slideEls[i].classList.add('active');
        layers[prev].classList.remove('active');
        slideEls[prev].classList.remove('active');
        gsap.fromTo(layers[i].querySelector('.sweep'),
          { scaleY: 1, transformOrigin: 'bottom' },
          { scaleY: 0, duration: 1.6, ease: 'power3.inOut', overwrite: true });
        gsap.set(layers[prev].querySelector('.sweep'), { scaleY: 0 });
        active = i;
        currentEl.textContent = '0' + (i + 1);
      };

      window.ScrollTrigger.create({
        trigger: wrap,
        start: 'top top',
        end: () => '+=' + dist(),
        pin: stage,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          bar.style.width = (p * 100) + '%';
          const idx = Math.min(count - 1, Math.floor(p * count));
          set(idx);
        },
        invalidateOnRefresh: true,
      });

      window.addEventListener('resize', () => window.ScrollTrigger.refresh());
    }

    document.querySelectorAll('.s-row').forEach(row => {
      row.addEventListener('mouseenter', () => gsap.to(row, { paddingLeft: 32, duration: 0.4, ease: 'power2.out' }));
      row.addEventListener('mouseleave', () => gsap.to(row, { paddingLeft: 0, duration: 0.4, ease: 'power2.out' }));
    });

    const track = document.querySelector('.marquee');
    if (track) {
      const distance = track.scrollWidth / 2;
      if (distance > 0) gsap.to(track, { x: -distance, duration: 50, ease: 'none', repeat: -1 });
    }
  }
  init();
})();
