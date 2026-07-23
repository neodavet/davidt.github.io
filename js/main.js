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

// Portfolio loading functionality
let currentPage = 1;
const itemsPerPage = 6;

function createPortfolioItem(item) {
    return `
        <div class="portfolio-item">
            ${item.image ? `<img src="${item.image}" alt="${item.title}" loading="lazy" width="800" height="420">` : ''}
            <div class="portfolio-item-content">
                <h3><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h3>
                <p>${item.description}</p>
                <div class="technologies">
                    ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
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
    
    // Add new items with animation
    const newItems = tempContainer.children;
    Array.from(newItems).forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        portfolioGrid.appendChild(item);
        
        // Trigger animation after a small delay
        setTimeout(() => {
            item.style.transition = 'opacity 1s ease, transform 1s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 * index); // 200ms delay between items
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

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll-based animations
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = '#fff';
    }
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

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initHeroSlider();
    loadPortfolioItems();
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