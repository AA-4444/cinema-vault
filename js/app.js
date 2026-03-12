/* ============================================================
   CinemaVault — SPA Router & App Logic
   ============================================================ */

// ---- SVG Icons ----
const ICONS = {
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  film: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="2" y1="17" x2="7" y2="17"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  chevronUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
};

// ---- Router ----
const routes = {
  '/': renderHome,
  '/movies': renderMovies,
  '/movies/genre/:slug': renderGenre,
  '/movies/year/:year': renderYear,
  '/movies/:slug': renderMovieDetail,
  '/search': renderSearch,
  '/faq': renderFAQ,
  '/privacy': renderPrivacy,
  '/contacts': renderContacts,
};

function navigate(path, pushState = true) {
  if (pushState) history.pushState({}, '', path);
  renderPage(path);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
}

function matchRoute(path) {
  for (const pattern in routes) {
    const params = matchPath(pattern, path);
    if (params !== null) return { handler: routes[pattern], params };
  }
  return null;
}

function matchPath(pattern, path) {
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = path.split('/').filter(Boolean);
  if (patternParts.length !== pathParts.length) return null;
  const params = {};
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
    } else if (patternParts[i] !== pathParts[i]) {
      return null;
    }
  }
  return params;
}

function renderPage(path) {
  // Strip query string for route matching
  const [pathname] = path.split('?');
  const match = matchRoute(pathname);
  const main = document.getElementById('main-content');
  if (match) {
    main.innerHTML = match.handler(match.params);
  } else {
    main.innerHTML = render404();
  }
  updateActiveNav(pathname);
  initPageInteractions();
}

window.addEventListener('popstate', () => renderPage(location.pathname + location.search));

// ---- Header Builder ----
function buildHeader() {
  const genreLinks = GENRES.slice(0, 12).map(g =>
    `<a href="/movies/genre/${GENRE_SLUGS[g]}" class="dropdown-link" onclick="nav(event,this.href)">${g}</a>`
  ).join('');
  const genreLinks2 = GENRES.slice(12).map(g =>
    `<a href="/movies/genre/${GENRE_SLUGS[g]}" class="dropdown-link" onclick="nav(event,this.href)">${g}</a>`
  ).join('');
  const yearLinks = YEARS.map(y =>
    `<a href="/movies/year/${y}" class="year-link" onclick="nav(event,this.href)">${y}</a>`
  ).join('');

  return `
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="logo" onclick="nav(event,'/')">
        <div class="logo-icon">CV</div>
        <div class="logo-text">Cinema<span>Vault</span></div>
      </a>
      <nav class="main-nav">
        <a href="/" class="nav-link" onclick="nav(event,'/')">${ICONS.home} Головна</a>
        <div class="nav-item">
          <a href="/movies" class="nav-link" onclick="nav(event,'/movies')">${ICONS.film} Фільми ${ICONS.chevronDown}</a>
          <div class="dropdown">
            <div class="dropdown-section">
              <div class="dropdown-label">Жанри</div>
              <div class="dropdown-grid">${genreLinks}${genreLinks2}</div>
            </div>
            <div class="dropdown-divider"></div>
            <a href="/movies" class="dropdown-link" onclick="nav(event,'/movies')">→ Всі фільми</a>
          </div>
        </div>
        <div class="nav-item">
          <a href="#" class="nav-link">${ICONS.clock} За часом ${ICONS.chevronDown}</a>
          <div class="dropdown dropdown-years">
            <div class="dropdown-section">
              <div class="dropdown-label">Рік виходу</div>
              <div class="years-grid">${yearLinks}</div>
            </div>
          </div>
        </div>
      </nav>
      <div class="header-search">
        <input type="text" class="search-input" id="header-search-input" placeholder="Пошук фільмів..." autocomplete="off">
        <button class="search-btn" id="header-search-btn" aria-label="Пошук">${ICONS.search}</button>
      </div>
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Меню">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <div class="mobile-nav" id="mobile-nav">
    <div class="mobile-search">
      <input type="text" id="mobile-search-input" placeholder="Пошук фільмів...">
      <button onclick="doMobileSearch()">Знайти</button>
    </div>
    <div class="mobile-nav-section">
      <div class="mobile-nav-title">Навігація</div>
      <div class="mobile-nav-links">
<a href="/" class="mobile-nav-link" onclick="nav(event,'/')">
Головна
</a>

<a href="/movies" class="mobile-nav-link" onclick="nav(event,'/movies')">
Всі фільми
</a>
        <a href="/faq" class="mobile-nav-link" onclick="nav(event,'/faq')">FAQ</a>
        <a href="/contacts" class="mobile-nav-link" onclick="nav(event,'/contacts')">Контакти</a>
      </div>
    </div>
    <div class="mobile-nav-section">
      <div class="mobile-nav-title">Жанри</div>
      <div class="mobile-nav-links">
        ${GENRES.map(g => `<a href="/movies/genre/${GENRE_SLUGS[g]}" class="mobile-nav-link" onclick="nav(event,this.href)">${g}</a>`).join('')}
      </div>
    </div>
    <div class="mobile-nav-section">
      <div class="mobile-nav-title">За роком</div>
      <div class="mobile-nav-links">
        ${YEARS.map(y => `<a href="/movies/year/${y}" class="mobile-nav-link" onclick="nav(event,this.href)">${y}</a>`).join('')}
      </div>
    </div>
  </div>`;
}

function buildFooter() {
  const genreLinks = GENRES.slice(0, 8).map(g =>
    `<a href="/movies/genre/${GENRE_SLUGS[g]}" class="footer-link" onclick="nav(event,this.href)">${g}</a>`
  ).join('');
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-icon">CV</div>
            <div class="logo-text">Cinema<span style="color:var(--accent)">Vault</span></div>
          </div>
          <p class="footer-desc">Онлайн-кінотеатр з великою колекцією фільмів. Дивіться улюблені фільми в хорошій якості безкоштовно.</p>
        </div>
        <div>
          <div class="footer-col-title">Жанри</div>
          <div class="footer-links">${genreLinks}</div>
        </div>
        <div>
          <div class="footer-col-title">Навігація</div>
          <div class="footer-links">
            <a href="/" class="footer-link" onclick="nav(event,'/')">Головна</a>
            <a href="/movies" class="footer-link" onclick="nav(event,'/movies')">Всі фільми</a>
            <a href="/faq" class="footer-link" onclick="nav(event,'/faq')">Питання та відповіді</a>
            <a href="/privacy" class="footer-link" onclick="nav(event,'/privacy')">Політика конфіденційності</a>
            <a href="/contacts" class="footer-link" onclick="nav(event,'/contacts')">Контакти</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">За роком</div>
          <div class="footer-links">
            ${[2022,2021,2020,2019,2018,2017,2016,2015,2014,2013].map(y =>
              `<a href="/movies/year/${y}" class="footer-link" onclick="nav(event,this.href)">${y}</a>`
            ).join('')}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© ${new Date().getFullYear()} CinemaVault. Всі права захищені.</div>
        <div class="footer-bottom-links">
          <a href="/privacy" class="footer-bottom-link" onclick="nav(event,'/privacy')">Конфіденційність</a>
          <a href="/faq" class="footer-bottom-link" onclick="nav(event,'/faq')">FAQ</a>
          <a href="/contacts" class="footer-bottom-link" onclick="nav(event,'/contacts')">Контакти</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// ---- Movie Card Component ----
// Cards use flex column layout — title never truncates, genres wrap, footer sticks to bottom
function renderMovieCard(movie) {
  const genreBadges = movie.genres.map(g =>
    `<span class="card-genre">${g}</span>`
  ).join('');
  return `
  <article class="movie-card" onclick="nav(event,'/movies/${movie.slug}')">
    <div class="card-poster">
      <img src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22300%22><rect width=%22200%22 height=%22300%22 fill=%22%2316161f%22/><text x=%22100%22 y=%22150%22 text-anchor=%22middle%22 fill=%22%235a5a70%22 font-size=%2214%22>Немає постера</text></svg>'">
      <div class="card-rating">${ICONS.star} ${movie.rating}</div>
      <div class="card-age">${movie.age}</div>
      <div class="card-overlay">
        <div class="card-play-btn">${ICONS.play} Дивитися</div>
      </div>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="card-year">${movie.year}</span>
        ${genreBadges}
      </div>
      <h3 class="card-title">${movie.title}</h3>
      <div class="card-footer">
        <div class="card-views">${ICONS.eye} ${movie.views.toLocaleString()}</div>
        <span class="card-watch-link">Дивитися →</span>
      </div>
    </div>
  </article>`;
}

// ---- Sidebar ----
function renderSidebar(activeGenre = '') {
  const links = GENRES.map(g => {
    const slug = GENRE_SLUGS[g];
    const isActive = slug === activeGenre;
    return `<a href="/movies/genre/${slug}" class="sidebar-genre-link ${isActive ? 'active' : ''}" onclick="nav(event,this.href)">
      ${g} <span class="genre-arrow">›</span>
    </a>`;
  }).join('');
  return `
  <aside class="sidebar">
    <div class="sidebar-widget">
      <div class="sidebar-widget-title">Популярні категорії</div>
      <div class="sidebar-genre-list">${links}</div>
    </div>
    <div class="sidebar-widget">
      <div class="sidebar-widget-title">За роком</div>
      <div class="sidebar-genre-list">
        ${YEARS.slice(0, 10).map(y =>
          `<a href="/movies/year/${y}" class="sidebar-genre-link" onclick="nav(event,this.href)">${y} <span class="genre-arrow">›</span></a>`
        ).join('')}
      </div>
    </div>
  </aside>`;
}

// ---- Pages ----

function renderHome() {
  const newMovies = [...MOVIES].sort((a, b) => b.year - a.year).slice(0, 25);
  const hero = MOVIES[0];

  return `

  <div class="home-hero">

    <iframe
      src="https://www.youtube.com/embed/${hero.youtube}?autoplay=1&mute=1&controls=0&loop=1&playlist=${hero.youtube}&modestbranding=1&showinfo=0"
      allow="autoplay; encrypted-media"
    ></iframe>

    <div class="home-hero-overlay"></div>

    <div class="home-hero-content">

      <h1 class="home-hero-title">
        ${hero.title}
      </h1>

      <p class="home-hero-desc">
        ${hero.description}
      </p>

      <button 
        class="hero-watch-btn"
        onclick="nav(event,'/movies/${hero.slug}')"
      >
        ${ICONS.play} Дивитися
      </button>

    </div>

  </div>


  <div class="page-container">

    <div class="content-with-sidebar">

      ${renderSidebar()}

      <main>

        <div class="section-header">
          <h2 class="section-title">Нові фільми</h2>

          <a 
            href="/movies" 
            class="section-link" 
            onclick="nav(event,'/movies')"
          >
            Всі фільми ${ICONS.arrowRight}
          </a>

        </div>

        <div class="movies-grid">
          ${newMovies.map(renderMovieCard).join('')}
        </div>

      </main>

    </div>

  </div>
  `;
}

function renderMovies(params) {
  return `
  <div class="page-container">
    <div class="breadcrumb">
      <a href="/" onclick="nav(event,'/')">Головна</a>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-current">Фільми</span>
    </div>
    <div class="page-title-section">
      <h1 class="page-title">Всі <span>фільми</span></h1>
      <p class="page-subtitle">${MOVIES.length} фільмів у каталозі</p>
    </div>
    <div class="content-with-sidebar">
      ${renderSidebar()}
      <main>
        <div class="movies-grid">
          ${MOVIES.map(renderMovieCard).join('')}
        </div>
      </main>
    </div>
  </div>`;
}

function renderGenre(params) {
  const slug = params.slug;
  const genreName = Object.keys(GENRE_SLUGS).find(k => GENRE_SLUGS[k] === slug) || slug;
  const movies = getMoviesByGenre(slug);
  return `
  <div class="page-container">
    <div class="breadcrumb">
      <a href="/" onclick="nav(event,'/')">Головна</a>
      <span class="breadcrumb-sep">›</span>
      <a href="/movies" onclick="nav(event,'/movies')">Фільми</a>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-current">${genreName}</span>
    </div>
    <div class="page-title-section">
      <h1 class="page-title"><span>${genreName}</span></h1>
      <p class="page-subtitle">${movies.length} фільм${movies.length === 1 ? '' : 'ів'} у жанрі</p>
    </div>
    <div class="content-with-sidebar">
      ${renderSidebar(slug)}
      <main>
        ${movies.length > 0
          ? `<div class="movies-grid">${movies.map(renderMovieCard).join('')}</div>`
          : `<div class="no-results"><div class="no-results-icon">🎬</div><h3>Фільмів не знайдено</h3><p>Спробуйте інший жанр</p></div>`
        }
      </main>
    </div>
  </div>`;
}

function renderYear(params) {
  const year = params.year;
  const movies = getMoviesByYear(year);
  return `
  <div class="page-container">
    <div class="breadcrumb">
      <a href="/" onclick="nav(event,'/')">Головна</a>
      <span class="breadcrumb-sep">›</span>
      <a href="/movies" onclick="nav(event,'/movies')">Фільми</a>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-current">${year}</span>
    </div>
    <div class="page-title-section">
      <h1 class="page-title">Фільми <span>${year}</span> року</h1>
      <p class="page-subtitle">${movies.length} фільм${movies.length === 1 ? '' : 'ів'}</p>
    </div>
    <div class="content-with-sidebar">
      ${renderSidebar()}
      <main>
        ${movies.length > 0
          ? `<div class="movies-grid">${movies.map(renderMovieCard).join('')}</div>`
          : `<div class="no-results"><div class="no-results-icon">📅</div><h3>Фільмів за ${year} рік не знайдено</h3></div>`
        }
      </main>
    </div>
  </div>`;
}

function renderMovieDetail(params) {
  const movie = getMovieBySlug(params.slug);
  if (!movie) return render404();
  const related = getRelatedMovies(movie, 5);
  const genreBadges = movie.genres.map(g =>
    `<span class="badge badge-genre">${g}</span>`
  ).join('');
  const countryBadges = movie.countries.map(c =>
    `<span class="badge badge-country">${ICONS.globe} ${c}</span>`
  ).join('');
  const tagLinks = movie.tags.map(t =>
    `<span class="tag">${t}</span>`
  ).join('');
  return `
  <div class="page-container">
    <div class="breadcrumb">
      <a href="/" onclick="nav(event,'/')">Головна</a>
      <span class="breadcrumb-sep">›</span>
      <a href="/movies" onclick="nav(event,'/movies')">Фільми</a>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-current">${movie.title}</span>
    </div>
    <div class="movie-detail">
      <div class="movie-detail-hero">
        <div class="movie-poster-wrap">
          <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22420%22><rect width=%22280%22 height=%22420%22 fill=%22%2316161f%22/><text x=%22140%22 y=%22210%22 text-anchor=%22middle%22 fill=%22%235a5a70%22 font-size=%2216%22>Немає постера</text></svg>'">
        </div>
        <div class="movie-info">
          <h1 class="movie-title-main">${movie.title} <span class="text-muted" style="font-weight:400;font-size:0.7em">(${movie.year})</span></h1>
          <div class="movie-badges">
            <span class="badge badge-year">${movie.year}</span>
            ${genreBadges}
            <span class="badge badge-age">${movie.age}</span>
            ${countryBadges}
          </div>
          <div class="movie-meta-grid">
            <div class="meta-item">
              <div class="meta-label">Рейтинг</div>
              <div class="meta-value rating-value">${ICONS.star} ${movie.rating}</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Тривалість</div>
              <div class="meta-value">${movie.duration} хв</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Переглядів</div>
              <div class="meta-value">${movie.views.toLocaleString()}</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Вікові обмеження</div>
              <div class="meta-value">${movie.age}</div>
            </div>
          </div>
          <p class="movie-description">${movie.description}</p>
          ${tagLinks.length > 0 ? `<div class="movie-tags">${tagLinks}</div>` : ''}
          <a href="#player" class="watch-btn" onclick="scrollToPlayer(event)">${ICONS.play} Дивитися зараз</a>
        </div>
      </div>
      
     <div class="video-section" id="player">
  <div class="video-section-title">Відеоплеєр</div>

  <div class="video-player-wrap">
    <iframe
      src="https://www.youtube.com/embed/${movie.youtube}"
      allowfullscreen
      allow="autoplay; encrypted-media"
    ></iframe>
  </div>

</div>
      
      ${related.length > 0 ? `
      <div class="related-section">
        <div class="section-header">
          <h2 class="section-title">Вам також може сподобатися</h2>
          <a href="/movies" class="section-link" onclick="nav(event,'/movies')">Всі фільми ${ICONS.arrowRight}</a>
        </div>
        <div class="movies-grid">
          ${related.map(renderMovieCard).join('')}
        </div>
      </div>` : ''}
    </div>
  </div>`;
}

function renderSearch(params) {
  const urlParams = new URLSearchParams(location.search);
  const query = urlParams.get('q') || '';
  const results = query ? searchMovies(query) : [];
  return `
  <div class="page-container">
    <div class="search-page">
      <div class="page-title-section">
        <h1 class="page-title">Пошук</h1>
      </div>
      <div class="search-form-large">
        <input type="text" id="search-page-input" value="${escapeHtml(query)}" placeholder="Введіть назву фільму, жанр...">
        <button onclick="doSearch()">Знайти</button>
      </div>
      ${query ? `<div class="search-results-count">
        Знайдено: <span>${results.length}</span> результат${results.length === 1 ? '' : results.length < 5 ? 'и' : 'ів'} за запитом "<span>${escapeHtml(query)}</span>"
      </div>` : ''}
      ${query && results.length === 0 ? `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>Нічого не знайдено</h3>
          <p>Спробуйте інший запит або перегляньте <a href="/movies" onclick="nav(event,'/movies')" style="color:var(--accent)">всі фільми</a></p>
        </div>` : ''}
      ${results.length > 0 ? `<div class="movies-grid">${results.map(renderMovieCard).join('')}</div>` : ''}
      ${!query ? `
        <div class="section-header" style="margin-top:40px">
          <h2 class="section-title">Популярні фільми</h2>
        </div>
        <div class="movies-grid">
          ${MOVIES.slice(0, 12).map(renderMovieCard).join('')}
        </div>` : ''}
    </div>
  </div>`;
}

function renderFAQ() {
  const faqs = [
    { q: "Як дивитися фільми?", a: "Знайдіть фільм у каталозі, перейдіть на його сторінку та натисніть кнопку 'Дивитися зараз'. Відеоплеєр завантажиться автоматично." },
    { q: "Чи потрібна реєстрація?", a: "Ні, реєстрація не потрібна. Всі фільми доступні безкоштовно без створення облікового запису." },
    { q: "Яка якість відео?", a: "Більшість фільмів доступні у якості HD (720p) та Full HD (1080p). Якість залежить від конкретного фільму та вашого інтернет-з'єднання." },
    { q: "Чи можна дивитися на мобільному?", a: "Так, сайт повністю адаптований для мобільних пристроїв. Ви можете дивитися фільми на смартфоні або планшеті." },
    { q: "Як знайти фільм за жанром?", a: "Використовуйте меню 'Фільми' у шапці сайту або бокову панель категорій. Ви також можете скористатися пошуком." },
    { q: "Що робити якщо фільм не відтворюється?", a: "Спробуйте оновити сторінку або очистити кеш браузера. Якщо проблема залишається, зверніться до нас через форму зворотного зв'язку." },
    { q: "Як знайти фільм за роком виходу?", a: "У меню 'За часом' виберіть потрібний рік. Також можна скористатися пошуком, вказавши рік у запиті." },
    { q: "Чи є субтитри?", a: "Наявність субтитрів залежить від конкретного фільму. Інформація про субтитри вказана на сторінці фільму." },
  ];
  return `
  <div class="page-container">
    <div class="static-page">
      <h1>Питання та відповіді</h1>
      ${faqs.map((f, i) => `
        <div class="faq-item" id="faq-${i}">
          <div class="faq-question" onclick="toggleFAQ(${i})">
            ${f.q}
            ${ICONS.chevronDown}
          </div>
          <div class="faq-answer">${f.a}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderPrivacy() {
  return `
  <div class="page-container">
    <div class="static-page">
      <h1>Політика конфіденційності</h1>
      <p>Ця Політика конфіденційності описує, як CinemaVault збирає, використовує та захищає вашу особисту інформацію.</p>
      <h2>Збір інформації</h2>
      <p>Ми збираємо мінімальну кількість інформації, необхідну для роботи сайту. Це включає технічні дані про ваш браузер та пристрій, які автоматично передаються при відвідуванні будь-якого веб-сайту.</p>
      <h2>Використання cookies</h2>
      <p>Наш сайт використовує cookies для покращення роботи сервісу. Cookies — це невеликі текстові файли, які зберігаються у вашому браузері. Ви можете відключити cookies у налаштуваннях браузера, але це може вплинути на функціональність сайту.</p>
      <h2>Захист даних</h2>
      <p>Ми вживаємо всіх необхідних технічних та організаційних заходів для захисту вашої інформації від несанкціонованого доступу, зміни, розкриття або знищення.</p>
      <h2>Треті сторони</h2>
      <p>Ми не продаємо, не обмінюємо та не передаємо вашу особисту інформацію третім сторонам без вашої згоди, за винятком випадків, передбачених законодавством.</p>
      <h2>Зміни до політики</h2>
      <p>Ми залишаємо за собою право вносити зміни до цієї Політики конфіденційності. Будь-які зміни будуть опубліковані на цій сторінці.</p>
      <h2>Контакти</h2>
      <p>Якщо у вас є питання щодо цієї Політики конфіденційності, зверніться до нас через <a href="/contacts" onclick="nav(event,'/contacts')" style="color:var(--accent)">форму зворотного зв'язку</a>.</p>
    </div>
  </div>`;
}

function renderContacts() {
  return `
  <div class="page-container">
    <div class="static-page">
      <h1>Контакти</h1>
      <p>Якщо у вас є питання, пропозиції або ви хочете повідомити про проблему — зв'яжіться з нами.</p>
      <h2>Зворотний зв'язок</h2>
      <form id="contact-form" onsubmit="submitContact(event)" style="display:flex;flex-direction:column;gap:16px;max-width:480px;margin-top:16px">
        <div>
          <label style="display:block;font-size:13px;color:var(--text-muted);margin-bottom:6px">Ваше ім'я</label>
          <input type="text" required placeholder="Ім'я" style="width:100%;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-md);padding:12px 16px;font-size:14px;color:var(--text-primary);outline:none">
        </div>
        <div>
          <label style="display:block;font-size:13px;color:var(--text-muted);margin-bottom:6px">Email</label>
          <input type="email" required placeholder="email@example.com" style="width:100%;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-md);padding:12px 16px;font-size:14px;color:var(--text-primary);outline:none">
        </div>
        <div>
          <label style="display:block;font-size:13px;color:var(--text-muted);margin-bottom:6px">Повідомлення</label>
          <textarea required placeholder="Ваше повідомлення..." rows="5" style="width:100%;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-md);padding:12px 16px;font-size:14px;color:var(--text-primary);outline:none;resize:vertical"></textarea>
        </div>
        <button type="submit" style="background:var(--accent);color:#000;border-radius:var(--radius-md);padding:13px 24px;font-weight:700;font-size:15px;align-self:flex-start;transition:background 0.2s">Надіслати</button>
      </form>
    </div>
  </div>`;
}

function render404() {
  return `
  <div class="page-container">
    <div style="text-align:center;padding:100px 20px">
      <div style="font-size:80px;margin-bottom:16px">🎬</div>
      <h1 style="font-size:48px;font-weight:800;color:var(--accent);margin-bottom:12px">404</h1>
      <p style="font-size:18px;color:var(--text-secondary);margin-bottom:32px">Сторінку не знайдено</p>
      <a href="/" onclick="nav(event,'/')" style="display:inline-flex;align-items:center;gap:8px;background:var(--accent);color:#000;padding:13px 24px;border-radius:var(--radius-md);font-weight:700">← На головну</a>
    </div>
  </div>`;
}

// ---- Interactions ----
function initPageInteractions() {
  // Header search
  const searchInput = document.getElementById('header-search-input');
  const searchBtn = document.getElementById('header-search-btn');
  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') doHeaderSearch();
    });
  }
  if (searchBtn) searchBtn.addEventListener('click', doHeaderSearch);

  // Mobile menu
  const mobileBtn = document.getElementById('mobile-menu-btn');
  if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileMenu);

  // Search page input
  const searchPageInput = document.getElementById('search-page-input');
  if (searchPageInput) {
    searchPageInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') doSearch();
    });
  }
}

function doHeaderSearch() {
  const input = document.getElementById('header-search-input');
  if (input && input.value.trim()) {
    navigate('/search?q=' + encodeURIComponent(input.value.trim()));
  }
}

function doSearch() {
  const input = document.getElementById('search-page-input');
  if (input && input.value.trim()) {
    navigate('/search?q=' + encodeURIComponent(input.value.trim()));
  }
}

function doMobileSearch() {
  const input = document.getElementById('mobile-search-input');
  if (input && input.value.trim()) {
    navigate('/search?q=' + encodeURIComponent(input.value.trim()));
  }
}

function toggleMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (btn && nav) {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  }
}

function closeMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (btn && nav) {
    btn.classList.remove('open');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function toggleFAQ(index) {
  const item = document.getElementById('faq-' + index);
  if (item) item.classList.toggle('open');
}

function loadPlayer(url) {
  const placeholder = document.getElementById('video-placeholder');
  const wrap = placeholder?.parentElement;
  if (wrap) {
    wrap.innerHTML = `<iframe src="${url}?autoplay=1" allowfullscreen allow="autoplay; encrypted-media"></iframe>`;
  }
}

function scrollToPlayer(e) {
  e.preventDefault();
  const player = document.getElementById('player');
  if (player) player.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function submitContact(e) {
  e.preventDefault();
  showToast('Повідомлення надіслано! Ми відповімо найближчим часом.');
  e.target.reset();
}

function showToast(msg) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function updateActiveNav(path) {
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === path || (href === '/' && path === '/')) {
      link.classList.add('active');
    }
  });
}

function nav(event, path) {
  event.preventDefault();
  navigate(path);
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = buildHeader() + '<div id="main-content"></div>' + buildFooter();
  renderPage(location.pathname + location.search);
});
