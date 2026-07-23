// Sample portfolio data (in a real application, this would come from a backend)
const portfolioData = [
    {
        title: "Be Local - Local Business Platform",
        description: "Architected and built a complex multivendor WooCommerce platform integrating Klaviyo (CRM + email/SMS automation), Twilio via Zapier, Authorize.net payment processing, and Facebook Pixel. Managed the full project lifecycle across 3 years — from architecture decisions and requirements through deployment, optimization, and ongoing support. Stack: WooCommerce, WordPress, Klaviyo, Zapier, Twilio, Authorize.net, GA4, Google Ads, CI/CD, Git, BlogVault.",
        image: "images/projects/01-be-local-life.webp",
        technologies: ["WooCommerce", "WordPress", "Klaviyo", "Zapier", "Twilio", "Authorize.net", "GA4", "Google Ads", "CI/CD", "Git", "BlogVault"],
        link: "https://be-local.life/"
    },
    {
        title: "Aerofarms - Vertical Farming Corporate Website",
        description: "4-year engagement managing and developing a corporate WordPress site through two full redesigns. Sustained Lighthouse Desktop 98–100/100 for 2+ years, GTMetrix Grade A with LCP ≤445ms, TBT 0ms, CLS 0, and zero Core Web Vitals issues across 199 URLs for 12+ consecutive months (verified via Google Search Console). Lighthouse Accessibility 100/100 and On-Page SEO 100/100. Security headers rated A+. Stack: WordPress, Beaver Builder, WP Engine, MySQL, Wordfence, Google Search Console.",
        image: "images/projects/02-aerofarms.webp",
        technologies: ["WordPress", "Beaver Builder", "WP Engine", "MySQL", "WordPress Security", "Web Optimization", "Web Analytics"],
        link: "https://www.aerofarms.com/"
    },
    {
        title: "National Business Capital — Fintech Web Platform",
        description: "Contracted through Stateside to rebuild and enhance the web platform for National Business Capital, a U.S. fintech company with $3B+ in funded capital. Developed custom Gutenberg blocks from scratch enabling the editorial team to manage structured financial content independently. Built a custom multi-environment control plugin for Pantheon dev/staging/production pipelines. Implemented Git flow and performed strategic code refactoring ahead of platform launch. Result: platform launched on schedule, 9 production releases delivered, 60+ tasks completed.",
        image: "images/projects/03-nationalbusinesscapital.webp",
        technologies: ["WordPress", "Gutenberg", "Custom Blocks", "Pantheon", "PHP", "JavaScript", "Git", "CI/CD"],
        link: "https://www.nationalbusinesscapital.com/"
    },
    {
        title: "Phin - Social Good Platform",
        description: "Performance and architecture optimization for a React + Node.js + GraphQL + Contentful + MongoDB platform. The platform could not process more than ~100 concurrent users. After simplifying the architecture, optimizing React-side API calls, optimizing DB queries, and restructuring Contentful, the platform successfully processed 1,000+ concurrent users during a live campaign. Load testing via LoadNinja. Monitoring via Datadog and HoneyBadger.",
        image: "images/projects/04-phinforgood.webp",
        technologies: ["React", "Node.js", "GraphQL", "Contentful", "AWS", "MongoDB", "LoadNinja", "Honeybadger"],
        link: "https://www.phinforgood.com/"
    },
    {
        title: "Praeses - Custom Corporate Website",
        description: "A fully customized WordPress website featuring custom Gutenberg blocks and a bespoke theme. The site includes custom plugin development, comprehensive web optimization, and is hosted on GoDaddy with enhanced security measures.",
        image: "images/projects/05-praeses.webp",
        technologies: ["WordPress", "Custom Gutenberg Blocks", "Custom Theme", "ACF", "Custom Plugins", "Web Optimization", "GoDaddy"],
        link: "https://www.praeses.com/"
    },
    {
        title: "Modena Warehouse - Non-profit Community Organization",
        description: "A comprehensive WordPress website with custom theme development and Gutenberg integration. Features include Monday.com integration, Google Sheets automation, Givebutter donation system, and Klaviyo email marketing. Hosted on Siteground with MySQL database.",
        image: "images/projects/06-modenawarehouse.webp",
        technologies: ["WordPress", "Gutenberg", "Custom Theme", "Monday.com", "Google Sheet", "Givebutter", "Klaviyo", "Siteground", "MySQL"],
        link: "https://modenawarehouse.com/"
    },
    {
        title: "OHD Partners - Corporate Website",
        description: "A professional WordPress corporate website built with Elementor page builder, featuring comprehensive security measures and responsive design. The project included successful hack recovery, complete site migration, and extensive web optimization. The site is hosted on Siteground with MySQL database integration, ensuring robust performance and security.",
        image: "images/projects/07-ohdpartners.webp",
        technologies: ["WordPress", "Elementor", "MySQL", "Hack Recovery", "Site Migration", "WordPress Security", "Web Optimization", "Siteground"],
        link: "https://ohdpartners.com/"
    },
    {
        title: "FreeReferral — Headless WordPress + Sveltekit + Vercel Platform",
        description: "Maintenance and development of a decoupled architecture: WordPress as Headless CMS/Backend on SiteGround communicating with a React.js frontend hosted on Vercel via GraphQL API. Hardened WordPress Admin security against common attack vectors. Diagnosed and resolved a critical SiteGround firewall bug where unsigned API requests with variable IPs were being blocked — resolved by standardizing the request signature and routing API calls through a fixed IP via proxy, whitelisted at firewall level.",
        image: "images/projects/08-freereferral.webp",
        technologies: ["WordPress", "Headless CMS", "Sveltekit", "GraphQL", "Vercel", "SiteGround", "PHP"],
        link: "https://freereferral.com/"
    },
    {
        title: "Lukac's Pottery - Shopify Local Craft Store",
        description: "A fully customized Shopify e-commerce platform featuring a custom Liquid theme and real-time inventory management. The project included comprehensive site migration and optimization for a local craft store.",
        image: "images/projects/09-lukacspottery.webp",
        technologies: ["Shopify", "Liquid", "Custom Theme", "Site Migration"],
        link: "https://lukacspottery.com/"
    },
    {
        title: "IpsCuba - WorldWide News Agency Platform",
        description: "A robust WordPress news platform featuring a custom theme and MariaDB database integration. The site includes comprehensive security measures, web optimization, and is hosted on Netuy with advanced content management capabilities.",
        image: "images/projects/10-ipscuba-net.webp",
        technologies: ["WordPress", "Custom Theme", "MariaDB", "WordPress Security", "Web Optimization", "Netuy"],
        link: "https://www.ipscuba.net/"
    },
    {
        title: "Estudio Figueroa Vives - Art Studio",
        description: "A multilingual WordPress website built with WPBakery page builder, featuring comprehensive security measures and web optimization. The site is hosted on HostPapa with MySQL database support and includes advanced content management capabilities.",
        image: "images/projects/11-estudiofigueroavives.webp",
        technologies: ["WordPress", "WPBakery", "MySQL", "Multiple Languages", "WordPress Security", "Web Optimization", "Host Papa"],
        link: "https://estudiofigueroavives.com/en/home/"
    },
    {
        title: "Blue Ocean Tech - Corporate Website",
        description: "A custom WordPress corporate website featuring a bespoke theme and comprehensive security measures. The site is optimized for performance and hosted on Siteground with MySQL database integration.",
        image: "images/projects/12-blueoceantech.webp",
        technologies: ["WordPress", "Custom Theme", "ACF", "MySQL", "WordPress Security", "Web Optimization", "Siteground"],
        link: "https://blueoceantech.us/"
    },
    {
        title: "Dador Havana - Fashion Design Studio",
        description: "A custom WordPress e-commerce website featuring WooCommerce integration and a bespoke theme. The site includes comprehensive security measures, web optimization, and MySQL database integration for fashion design studio products.",
        image: "images/projects/13-dadorhavana.webp",
        technologies: ["WordPress", "WooCommerce", "Custom Theme", "MySQL", "WordPress Security", "Web Optimization"],
        link: "https://www.dadorhavana.com/"
    },
    {
        title: "Madu Tours - Travel Agency",
        description: "A multilingual WordPress website built with The 7 theme framework, featuring comprehensive content management capabilities. The site is optimized for performance and includes MySQL database integration for travel agency information.",
        image: "images/projects/14-madutours.webp",
        technologies: ["WordPress", "The 7", "MySQL", "Multiple Languages"],
        link: "https://madutours.com/"
    }
];

// Respect the user's reduced-motion system preference throughout the page
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Manual dark/light theme toggle. Persists an explicit override in localStorage;
// with no override the page follows the OS via prefers-color-scheme (see CSS).
(function initThemeToggle() {
    const root = document.documentElement;
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    function resolvedTheme() {
        return root.getAttribute('data-theme') || (systemDark.matches ? 'dark' : 'light');
    }

    function syncButton() {
        const isDark = resolvedTheme() === 'dark';
        const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.setAttribute('aria-label', label);
        toggle.setAttribute('title', label);
    }

    toggle.addEventListener('click', function () {
        const next = resolvedTheme() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        syncButton();
    });

    // With no explicit override, keep the button in step with live OS changes
    systemDark.addEventListener('change', function () {
        try { if (!localStorage.getItem('theme')) syncButton(); } catch (e) {}
    });

    syncButton();
})();

// Portfolio loading functionality
let currentPage = 1;
const itemsPerPage = 6;

function createPortfolioItem(item) {
    return `
        <article class="portfolio-item">
            ${item.image ? `<div class="portfolio-thumb"><img src="${item.image}" alt="${item.title}" loading="lazy" width="800" height="420"></div>` : ''}
            <div class="portfolio-item-content">
                <h3><a class="portfolio-link" href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}<svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg></a></h3>
                <p>${item.description}</p>
                <div class="technologies">
                    ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </article>
    `;
}

function loadPortfolioItems() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const itemsToShow = portfolioData.slice(startIndex, endIndex);

    // Create a temporary container for the new items
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = itemsToShow.map(createPortfolioItem).join('');
    
    // Clear existing content
    portfolioGrid.innerHTML = '';

    // Add new items with a staggered reveal (CSS handles the transition via .is-visible)
    const newItems = tempContainer.children;
    Array.from(newItems).forEach((item, index) => {
        portfolioGrid.appendChild(item);

        if (prefersReducedMotion) {
            item.classList.add('is-visible');
            return;
        }

        // Stagger the reveal of each card
        setTimeout(() => {
            item.classList.add('is-visible');
        }, 120 * index);
    });

    // Show/hide load more button
    const loadMoreBtn = document.getElementById('load-more');
    if (endIndex >= portfolioData.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }

    // Smooth scroll to the first new item when loading more
    if (currentPage > 1) {
        const firstNewItem = portfolioGrid.children[(currentPage - 1) * itemsPerPage];
        if (firstNewItem) {
            const headerOffset = 100; // Adjust based on your header height
            const elementPosition = firstNewItem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Wait for animations to start before scrolling
            setTimeout(() => {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100); // Small delay to ensure smooth transition
        }
    }
}

// Load more button click handler
document.getElementById('load-more').addEventListener('click', () => {
    currentPage++;
    loadPortfolioItems();
});

// Smooth scrolling for navigation links (offset by fixed header — see html scroll-padding-top for direct #hash URLs)
const headerEl = document.querySelector('header');
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        const top = target.getBoundingClientRect().top + window.scrollY - headerEl.offsetHeight;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

// Toggle a shadow on the header once the page is scrolled (theme-aware via CSS)
window.addEventListener('scroll', function() {
    headerEl.classList.toggle('scrolled', window.scrollY > 50);
});

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Preload images. Slide 1 already has its background-image inline (it is the
    // LCP element, preloaded in <head>); slides 2+ carry their URL in data-src so
    // they don't compete with the LCP image during the initial load.
    function preloadImages() {
        slides.forEach(slide => {
            const inlineBg = slide.style.backgroundImage;
            const imageUrl = inlineBg
                ? inlineBg.replace(/url\(['"](.+)['"]\)/, '$1')
                : slide.dataset.src;

            if (!imageUrl) return;

            const img = new Image();

            slide.classList.add('loading');

            img.onload = () => {
                if (!inlineBg) {
                    slide.style.backgroundImage = `url('${imageUrl}')`;
                }
                slide.classList.remove('loading');
            };

            img.onerror = () => {
                console.error(`Failed to load image: ${imageUrl}`);
                slide.classList.remove('loading');
            };

            img.src = imageUrl;
        });
    }

    // Set first slide as active
    slides[0].classList.add('active');

    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Update current slide index
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }

    // Preload images before starting the slider
    preloadImages();

    // Auto-rotate every 5s — but not for users who prefer reduced motion
    if (!prefersReducedMotion) {
        setInterval(nextSlide, 5000);
    }
}

// Animated count-up for the portfolio stat cards
function initStatCounters() {
    const counters = document.querySelectorAll('.stat-card h3[data-count]');
    if (!counters.length) return;

    const render = (el, value) => {
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const suffix = el.dataset.suffix || '';
        el.textContent = value.toFixed(decimals) + suffix;
    };

    // Reduced motion (or no IntersectionObserver): show final values immediately
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        counters.forEach(el => render(el, parseFloat(el.dataset.count)));
        return;
    }

    const animate = (el) => {
        const target = parseFloat(el.dataset.count);
        const duration = 1500;
        const start = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            render(el, target * eased);
            if (progress < 1) requestAnimationFrame(tick);
            else render(el, target);
        };

        requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(el => observer.observe(el));
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initHeroSlider();
    loadPortfolioItems();
    initStatCounters();
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    // Function to update active menu item
    function updateActiveMenuItem() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for header
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding link
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // Helper to sync the button's accessible expanded state
    function setMenuOpen(isOpen) {
        mobileMenuBtn.classList.toggle('active', isOpen);
        navContainer.classList.toggle('active', isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    // Toggle menu
    mobileMenuBtn.addEventListener('click', function() {
        setMenuOpen(!navContainer.classList.contains('active'));
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navContainer.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            setMenuOpen(false);
        }
    });

    // Close menu on Escape for keyboard users
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navContainer.classList.contains('active')) {
            setMenuOpen(false);
            mobileMenuBtn.focus();
        }
    });

    // Update active menu item on scroll
    window.addEventListener('scroll', updateActiveMenuItem);
    
    // Initial check for active section
    updateActiveMenuItem();
}); 