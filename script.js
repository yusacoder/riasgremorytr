/**
 * Modern Linktree Profile Site Application Script
 * Vanilla JavaScript implementation with SPA routing, JSON data loader, accessibility, and theme support.
 */

document.addEventListener('DOMContentLoaded', () => {
  // SVG Icon Map for predefined social platforms and UI elements
  const SVG_ICONS = {
    instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
    youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
    github: '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>',
    twitter: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
    linkedin: '<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>',
    discord: '<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>',
    globe: '<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.04c.83 1.2 1.48 2.59 1.91 3.96h-3.82c.43-1.37 1.08-2.76 1.91-3.96zM4.26 14a7.82 7.82 0 0 1 0-4h3.38a16.5 16.5 0 0 0-.14 2c0 .68.05 1.35.14 2zm.81 2h2.95a15.65 15.65 0 0 0 1.38 3.56A8.03 8.03 0 0 1 5.07 16zm2.95-8H5.07a8.03 8.03 0 0 1 4.53-3.56A15.65 15.65 0 0 0 8.02 8zM12 19.96c-.83-1.2-1.48-2.59-1.91-3.96h3.82c-.43 1.37-1.08 2.76-1.91 3.96zM14.34 14h-4.68a14.5 14.5 0 0 1-.16-2c0-.68.05-1.35.16-2h4.68c.11.65.16 1.32.16 2s-.05 1.35-.16 2zm1.64 5.56A15.65 15.65 0 0 0 17.36 16h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.09-.65.14-1.32.14-2s-.05-1.35-.14-2h3.38a7.82 7.82 0 0 1 0 4z"/>',
    home: '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>',
    folder: '<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>',
    heart: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
    arrowRight: '<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>',
    sparkles: '<path d="M12 3l2.25 4.75L19 10l-4.75 2.25L12 17l-2.25-4.75L5 10l4.75-2.25L12 3zm6 11l1.12 2.38L21.5 17.5l-2.38 1.12L18 21l-1.12-2.38L14.5 17.5l2.38-1.12L18 14z"/>',
    sun: '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zM7.05 18.36l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.02-.39-1.41 0z"/>',
    moon: '<path d="M12.3 2a10 10 0 0 0 9.7 11.5 10 10 0 1 1-11.2-11.4c.5 0 1 .03 1.5.09z"/>'
  };

  // State
  let appData = null;
  let currentTheme = localStorage.getItem('site_theme') || 'dark';

  // DOM Elements
  const loadingScreen = document.getElementById('loading-screen');
  const errorView = document.getElementById('error-view');
  const mainContent = document.getElementById('main-content');
  const sidebarDrawer = document.getElementById('sidebar-drawer');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const btnOpenMenu = document.getElementById('btn-open-menu');
  const btnCloseMenu = document.getElementById('btn-close-menu');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const toastContainer = document.getElementById('toast-container');

  /**
   * Helper function to get SVG path or image element
   */
  function getIconHTML(iconName, customImage) {
    if (customImage && customImage.trim() !== '') {
      return `<img src="${escapeHTML(customImage)}" alt="" class="custom-icon-img">`;
    }
    const svgPath = SVG_ICONS[iconName?.toLowerCase()] || SVG_ICONS.globe;
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${svgPath}</svg>`;
  }

  /**
   * Sanitize text string for safe HTML rendering
   */
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Check if URL is valid and safe
   */
  function isValidURL(string) {
    if (!string || typeof string !== 'string' || string.trim() === '') return false;
    if (string.startsWith('#')) return true; // Internal hash router link
    try {
      const url = new URL(string);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
      return false;
    }
  }

  /**
   * Theme Manager
   */
  function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeIcon.innerHTML = currentTheme === 'light' ? SVG_ICONS.moon : SVG_ICONS.sun;
  }

  function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('site_theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeIcon.innerHTML = currentTheme === 'light' ? SVG_ICONS.moon : SVG_ICONS.sun;
    showToast(currentTheme === 'light' ? 'Açık tema aktif' : 'Koyu tema aktif');
  }

  /**
   * Toast Notifications
   */
  function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'toast-error' : ''}`;
    toast.innerHTML = `<span>${escapeHTML(message)}</span>`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  /**
   * Sidebar Mobile Drawer Control
   */
  function openMenu() {
    sidebarDrawer.classList.add('active');
    sidebarOverlay.classList.add('active');
    sidebarDrawer.setAttribute('aria-hidden', 'false');
    sidebarOverlay.setAttribute('aria-hidden', 'false');
    btnOpenMenu.setAttribute('aria-expanded', 'true');
    btnCloseMenu.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    sidebarDrawer.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    sidebarDrawer.setAttribute('aria-hidden', 'true');
    sidebarOverlay.setAttribute('aria-hidden', 'true');
    btnOpenMenu.setAttribute('aria-expanded', 'false');
    btnOpenMenu.focus();
    document.body.style.overflow = '';
  }

  /**
   * Render Profile Data
   */
  function renderProfile(profile) {
    if (!profile) return;

    const nameEl = document.getElementById('profile-name');
    const usernameEl = document.getElementById('profile-username');
    const bioEl = document.getElementById('profile-bio');
    const avatarEl = document.getElementById('profile-avatar');
    const verifiedEl = document.getElementById('verified-badge');

    if (nameEl) nameEl.textContent = profile.name || 'İsimsiz Kullanıcı';
    if (usernameEl) usernameEl.textContent = profile.username || '';
    if (bioEl) bioEl.textContent = profile.bio || '';

    if (avatarEl && profile.avatar) {
      avatarEl.src = profile.avatar;
      avatarEl.alt = `${profile.name || 'Profil'} Fotoğrafı`;
    }

    if (verifiedEl) {
      verifiedEl.style.display = profile.verified ? 'inline-flex' : 'none';
    }
  }

  /**
   * Render Links
   */
  function renderLinks(links) {
    const container = document.getElementById('links-container');
    if (!container) return;

    container.innerHTML = '';

    if (!Array.isArray(links) || links.length === 0) {
      container.innerHTML = '<p style="text-align:center; color:var(--text-muted); font-size:0.9rem;">Gösterilebilecek bağlantı bulunamadı.</p>';
      return;
    }

    links.forEach((link, index) => {
      const isURLValid = isValidURL(link.url);
      const card = document.createElement(isURLValid ? 'a' : 'div');

      card.className = `link-card ${!isURLValid ? 'disabled' : ''}`;
      card.style.animationDelay = `${index * 0.08}s`;

      if (isURLValid) {
        card.href = link.url;
        card.target = link.url.startsWith('#') ? '_self' : '_blank';
        if (!link.url.startsWith('#')) {
          card.rel = 'noopener noreferrer';
        }
        card.setAttribute('aria-label', `${link.title} - ${link.description || ''}`);
      } else {
        card.setAttribute('aria-disabled', 'true');
        card.setAttribute('title', 'Bu bağlantı henüz aktif değil');
      }

      const iconHTML = getIconHTML(link.icon, link.image);

      card.innerHTML = `
        <div class="link-card-left">
          <div class="link-icon-wrapper">
            ${iconHTML}
          </div>
          <div class="link-info">
            <span class="link-title">${escapeHTML(link.title)}</span>
            ${link.description ? `<span class="link-description">${escapeHTML(link.description)}</span>` : ''}
          </div>
        </div>
        <div class="link-arrow">
          <svg viewBox="0 0 24 24" aria-hidden="true">${SVG_ICONS.arrowRight}</svg>
        </div>
      `;

      // Copy url to clipboard on right click / holding for quick sharing option
      card.addEventListener('contextmenu', (e) => {
        if (isURLValid && !link.url.startsWith('#')) {
          e.preventDefault();
          navigator.clipboard.writeText(link.url).then(() => {
            showToast('Bağlantı adresi kopyalandı!');
          });
        }
      });

      container.appendChild(card);
    });
  }

  /**
   * Render Navigation Items in Drawer
   */
  function renderNavigation(navigation) {
    const navList = document.getElementById('drawer-nav-list');
    if (!navList || !Array.isArray(navigation)) return;

    navList.innerHTML = '';

    navigation.forEach((navItem) => {
      const a = document.createElement('a');
      a.className = 'nav-item';
      a.href = navItem.url || '#home';
      a.dataset.id = navItem.id || navItem.url.replace('#', '');

      const iconPath = SVG_ICONS[navItem.icon] || SVG_ICONS.globe;
      a.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">${iconPath}</svg>
        <span>${escapeHTML(navItem.title)}</span>
      `;

      a.addEventListener('click', (e) => {
        closeMenu();
        handleHashRouting(a.getAttribute('href'));
      });

      navList.appendChild(a);
    });
  }

  /**
   * Render Projects & Sponsors Placeholders
   */
  function renderPlaceholders() {
    if (!appData) return;

    // Render Projects
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid && Array.isArray(appData.projects) && appData.projects.length > 0) {
      projectsGrid.innerHTML = appData.projects.map(p => `
        <div class="project-card">
          ${p.badge ? `<span class="project-tag">${escapeHTML(p.badge)}</span>` : ''}
          <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:6px; color:var(--text-primary);">${escapeHTML(p.title)}</h3>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px;">${escapeHTML(p.description)}</p>
          ${p.tags ? `<div style="display:flex; gap:6px; flex-wrap:wrap; font-size:0.75rem; color:var(--text-muted);">${p.tags.map(t => `#${escapeHTML(t)}`).join(' ')}</div>` : ''}
        </div>
      `).join('');
    }

    // Render Sponsors
    const sponsorsGrid = document.getElementById('sponsors-grid');
    if (sponsorsGrid && Array.isArray(appData.sponsors) && appData.sponsors.length > 0) {
      sponsorsGrid.innerHTML = appData.sponsors.map(s => `
        <div class="sponsor-card">
          ${s.tier ? `<span class="project-tag">${escapeHTML(s.tier)}</span>` : ''}
          <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:6px; color:var(--text-primary);">${escapeHTML(s.name)}</h3>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px;">${escapeHTML(s.description)}</p>
          ${s.url ? `<a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer" style="color:var(--accent); font-weight:600; font-size:0.85rem; text-decoration:none;">Destek Ol →</a>` : ''}
        </div>
      `).join('');
    }
  }

  /**
   * Apply Settings from JSON
   */
  function applySettings(settings) {
    if (!settings) return;

    if (settings.siteTitle) {
      document.title = settings.siteTitle;
    }

    const headerBrand = document.getElementById('header-brand-name');
    const drawerBrand = document.getElementById('drawer-brand-name');
    const footerText = document.getElementById('footer-text');
    const drawerFooterText = document.getElementById('drawer-footer-text');

    if (headerBrand && appData.profile?.name) {
      headerBrand.textContent = appData.profile.name;
    }

    if (drawerBrand && appData.profile?.name) {
      drawerBrand.textContent = appData.profile.name;
    }

    if (settings.footerText) {
      if (footerText) footerText.textContent = settings.footerText;
      if (drawerFooterText) drawerFooterText.textContent = settings.footerText;
    }
  }

  /**
   * Hash Router for SPA views
   */
  function handleHashRouting(hashOverride) {
    const hash = hashOverride || window.location.hash || '#home';
    const targetId = hash.replace('#', '') || 'home';

    const views = document.querySelectorAll('.section-view');
    let viewFound = false;

    views.forEach(view => {
      if (view.id === `view-${targetId}`) {
        view.classList.add('active');
        viewFound = true;
      } else {
        view.classList.remove('active');
      }
    });

    if (!viewFound) {
      document.getElementById('view-home')?.classList.add('active');
    }

    // Update active state in nav drawer
    const navItems = document.querySelectorAll('.drawer-nav .nav-item');
    navItems.forEach(item => {
      const itemHash = item.getAttribute('href');
      if (itemHash === hash || (hash === '' && itemHash === '#home')) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Fetch data.json with fallback and loading screen handle
   */
  async function loadData() {
    try {
      const response = await fetch('data/data.json', { cache: 'no-cache' });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      appData = await response.json();

      // Render content
      renderProfile(appData.profile);
      renderLinks(appData.links);
      renderNavigation(appData.navigation);
      renderPlaceholders();
      applySettings(appData.settings);

      // Initialize route
      handleHashRouting();

      // Hide loading screen gracefully
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.classList.add('fade-out');
        }
      }, 300);

    } catch (err) {
      console.error('Error loading data.json:', err);

      if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
      }

      if (errorView) {
        errorView.style.display = 'block';
      }

      showToast('Profil verileri yüklenemedi. Lütfen data.json dosyasını kontrol edin.', true);
    }
  }

  // --- Event Listeners ---
  btnOpenMenu?.addEventListener('click', openMenu);
  btnCloseMenu?.addEventListener('click', closeMenu);
  sidebarOverlay?.addEventListener('click', closeMenu);
  themeToggleBtn?.addEventListener('click', toggleTheme);

  // Keyboard Navigation & ESC Key Close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebarDrawer?.classList.contains('active')) {
      closeMenu();
    }
  });

  // Handle SPA Hash Changes
  window.addEventListener('hashchange', () => {
    handleHashRouting();
  });

  // Initialize
  initTheme();
  loadData();
});
