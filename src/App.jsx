import { useState, useEffect } from 'react'

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  // Famous Items Data
  const famousItems = [
    {
      id: 1,
      tag: "House Special",
      emoji: "🏺🥪✨",
      image: "/grill_sandwich.jpg",
      title: "Paneer Matka Grill Sandwich",
      description: "A rich, layered sandwich grilled with loaded paneer, fresh chopped vegetables, custom Jalaram chutneys, and baked in our signature Matka style.",
      price: "₹160"
    },
    {
      id: 2,
      tag: "Most Popular",
      emoji: "🥪🌀",
      image: "/rimzim_sandwich.jpg",
      title: "Rimzim Sandwich",
      description: "Our legendary house-special loaded Rimzim sandwich, packed with extra butter, cheese, potatoes, and our special spicy green herb sauce.",
      price: "₹160"
    },
    {
      id: 3,
      tag: "Mega Feast",
      emoji: "🥪🧀🔥",
      image: "/jalaram_sandwich.jpg",
      title: "Golmal Sandwich",
      description: "The ultimate three-layer grilled creation loaded with shredded cheese, Jalaram masala spices, potatoes, onion, and capsicum.",
      price: "₹320"
    }
  ];

  // Menu Items Data
  const menuItems = [
    // Sandwich
    { id: 101, name: "Bread Butter", category: "Sandwich", price: "₹30", emoji: "🍞" },
    { id: 102, name: "Bread Butter Jam", category: "Sandwich", price: "₹40", emoji: "🍞🍓" },
    { id: 103, name: "Veg. Sandwich Sadi", category: "Sandwich", price: "₹40", emoji: "🥪" },
    { id: 104, name: "Bread Butter Bataka Sandwich", category: "Sandwich", price: "₹40", emoji: "🥪🥔" },
    { id: 105, name: "Jain Sadi Sandwich", category: "Sandwich", price: "₹40", emoji: "🥪" },
    { id: 106, name: "Cheese Aloo Chart", category: "Sandwich", price: "₹60", emoji: "🧀🥔" },
    { id: 107, name: "Veg. Mayonnaise Sadi Sandwich", category: "Sandwich", price: "₹50", emoji: "🥪" },
    { id: 108, name: "Veg Dubble Dekkar Sadi Sandwich", category: "Sandwich", price: "₹60", emoji: "🥪" },
    { id: 109, name: "Bataka Cheese Sandwich", category: "Sandwich", price: "₹70", emoji: "🥪🥔" },
    { id: 110, name: "Veg. Cheese Sandwich", category: "Sandwich", price: "₹70", emoji: "🥪🧀" },
    { id: 111, name: "Bread Butter Cheese Sandwich", category: "Sandwich", price: "₹60", emoji: "🍞🧀" },
    { id: 112, name: "Jam Cheese Sandwich", category: "Sandwich", price: "₹70", emoji: "🍞🍓" },
    { id: 113, name: "Veg Mayonnise Cheese Sandwich", category: "Sandwich", price: "₹80", emoji: "🥪🧀" },
    { id: 114, name: "Veg Dubble Dekkar Cheese Sandwich", category: "Sandwich", price: "₹90", emoji: "🥪🧀" },
    
    // Toast Sandwich
    { id: 201, name: "Bread Butter Toast", category: "Toast Sandwich", price: "₹40", emoji: "🍞🔥" },
    { id: 202, name: "Veg Toast Sandwich", category: "Toast Sandwich", price: "₹50", emoji: "🥪🔥" },
    { id: 203, name: "Masala Toast Sandwich", category: "Toast Sandwich", price: "₹50", emoji: "🥪🌶️" },
    { id: 204, name: "Pizza Toast Sandwich", category: "Toast Sandwich", price: "₹50", emoji: "🍕🍞" },
    { id: 205, name: "Veg Cheese Sandwich", category: "Toast Sandwich", price: "₹80", emoji: "🥪🧀" },
    { id: 206, name: "Masala Cheese Toast Sandwich", category: "Toast Sandwich", price: "₹80", emoji: "🥪🌶️" },
    { id: 207, name: "Cheese Chilly Toast Sandwich", category: "Toast Sandwich", price: "₹80", emoji: "🥪🌶️🧀" },
    { id: 208, name: "Only Cheese Toast Sandwich", category: "Toast Sandwich", price: "₹70", emoji: "🧀🔥" },
    { id: 209, name: "Open Chese Toast Sandwich", category: "Toast Sandwich", price: "₹90", emoji: "🥪🧀" },
    { id: 210, name: "Club Sandwich", category: "Toast Sandwich", price: "₹100", emoji: "🥪✨" },
    { id: 211, name: "Tandoor Club Sandwich", category: "Toast Sandwich", price: "₹120", emoji: "🥪🔥" },
    { id: 212, name: "Pizza Cheese Toast Sandwich", category: "Toast Sandwich", price: "₹80", emoji: "🍕🍞🧀" },
    { id: 213, name: "Waffer Toast", category: "Toast Sandwich", price: "₹100", emoji: "🥪🍟" },
    { id: 214, name: "Paneer Cheese Hevan", category: "Toast Sandwich", price: "₹140", emoji: "🥪🧀" },

    // Grill Sandwich
    { id: 301, name: "Veg Cheese Grill Sandwich", category: "Grill Sandwich", price: "₹110", emoji: "🥪🔥" },
    { id: 302, name: "Veg Cheese Jain Grill Sandwich", category: "Grill Sandwich", price: "₹110", emoji: "🥪🥦" },
    { id: 303, name: "Veg Garlic Cheese Grill Sandwich", category: "Grill Sandwich", price: "₹140", emoji: "🥪🧄" },
    { id: 304, name: "Only Cheese Grill Sandwich", category: "Grill Sandwich", price: "₹110", emoji: "🧀🥪" },
    { id: 305, name: "Juice Grill Sandwich", category: "Grill Sandwich", price: "₹110", emoji: "🥪🥤" },
    { id: 306, name: "Paneer Cheese Grill", category: "Grill Sandwich", price: "₹140", emoji: "🥪🧀" },
    { id: 307, name: "Schezwan Grill Sandwich", category: "Grill Sandwich", price: "₹140", emoji: "🥪🌶️" },
    { id: 308, name: "Mayones Veg Cheese Sandwich", category: "Grill Sandwich", price: "₹120", emoji: "🥪🥗" },
    { id: 309, name: "Matka Grill Sandwich", category: "Grill Sandwich", price: "₹140", emoji: "🏺🥪" },
    { id: 310, name: "Paneer Matka Grill Sandwich", category: "Grill Sandwich", price: "₹160", emoji: "🏺🥪🧀" },

    // Rimzim
    { id: 401, name: "Rimzim", category: "Rimzim", price: "₹160", emoji: "🥪🌀" },
    { id: 402, name: "Paneer Rimzim", category: "Rimzim", price: "₹190", emoji: "🥪🧀" },
    { id: 403, name: "Herapheri", category: "Rimzim", price: "₹160", emoji: "🥪🎭" },
    { id: 404, name: "Golmal", category: "Rimzim", price: "₹320", emoji: "🥪🌀🧀" },
    { id: 405, name: "Basket Pizza", category: "Rimzim", price: "₹160", emoji: "🧺🍕" },
    { id: 406, name: "Casata Roll", category: "Rimzim", price: "₹150", emoji: "🌀🍞" },
    { id: 407, name: "Cheese Anguri", category: "Rimzim", price: "₹160", emoji: "🥪" },

    // Burger
    { id: 501, name: "Veg Cheese Burger", category: "Burger", price: "₹60", emoji: "🍔🧀" },
    { id: 502, name: "Mayones Cheese Burger", category: "Burger", price: "₹70", emoji: "🍔🥗" },
    { id: 503, name: "Schezwan Veg Cheese Burger", category: "Burger", price: "₹70", emoji: "🍔🌶️" },
    { id: 504, name: "Paneer Cheese Burger", category: "Burger", price: "₹90", emoji: "🍔🧀" },

    // Pizza
    { id: 601, name: "Veg Regular Cheese Pizza", category: "Pizza", price: "₹110", emoji: "🍕" },
    { id: 602, name: "Veg Mayones Cheese Pizza", category: "Pizza", price: "₹120", emoji: "🍕🥗" },
    { id: 603, name: "Veg Staffed Cheese Pizza", category: "Pizza", price: "₹140", emoji: "🍕🧀" },
    { id: 604, name: "Only Cheese Pizza", category: "Pizza", price: "₹110", emoji: "🍕🧀" },
    { id: 605, name: "Veg Corn Pizza", category: "Pizza", price: "₹140", emoji: "🍕🌽" },
    { id: 606, name: "Garlic Cheese Pizza", category: "Pizza", price: "₹140", emoji: "🍕🧄" },
    { id: 607, name: "Schezwan Cheese Pizza", category: "Pizza", price: "₹140", emoji: "🍕🌶️" },
    { id: 608, name: "Italiyan Cheese Pizza", category: "Pizza", price: "₹140", emoji: "🍕🍅" },
    { id: 609, name: "Veg Mayones Paneer Pizza", category: "Pizza", price: "₹150", emoji: "🍕🥗🧀" },
    { id: 610, name: "Veg Paneer Corn Pizza", category: "Pizza", price: "₹160", emoji: "🍕🧀🌽" },

    // Garlic Bread
    { id: 701, name: "Cheese Garlic Bread", category: "Garlic Bread", price: "₹90", emoji: "🥖🧄🧀" },
    { id: 702, name: "Schezwan Garlic Bread", category: "Garlic Bread", price: "₹100", emoji: "🥖🌶️" },
    { id: 703, name: "Veg Garlic Bread", category: "Garlic Bread", price: "₹100", emoji: "🥖🥦" },
    { id: 704, name: "Onion Cheese Garlic Bread", category: "Garlic Bread", price: "₹100", emoji: "🥖🧅" },
    { id: 705, name: "Corn Garlic Bread", category: "Garlic Bread", price: "₹100", emoji: "🥖🌽" },
    { id: 706, name: "Matka Garlic Bread", category: "Garlic Bread", price: "₹90", emoji: "🏺🥖" },
    { id: 707, name: "Stick Garlic Bread", category: "Garlic Bread", price: "₹130", emoji: "🥖" },
    { id: 708, name: "Paneer Stick Garlic Bread", category: "Garlic Bread", price: "₹150", emoji: "🥖" },
    // Footlong
    { id: 801, name: "Cheese Footlong", category: "Footlong", price: "₹140", emoji: "🌭🧀" },
    { id: 802, name: "Cheese Paneer Footlong", category: "Footlong", price: "₹170", emoji: "🌭🧀" },
    { id: 803, name: "Cheese Mayones Footlong", category: "Footlong", price: "₹150", emoji: "🌭🥗" },
    { id: 804, name: "Tandoor Kulch", category: "Footlong", price: "₹140", emoji: "🫓🔥" }
  ];

  // Filtering Logic
  const filteredMenuItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const categories = ['All', 'Sandwich', 'Toast Sandwich', 'Grill Sandwich', 'Rimzim', 'Burger', 'Pizza', 'Garlic Bread', 'Footlong'];

  // Smooth scroll helper
  const handleScroll = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div>
      {/* Navigation Header */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">
            <img src="/jalaram_logo.png" alt="Jalaram Sandwich Logo" className="logo-img" />
            <span>Jalaram Sandwich</span>
          </a>
          
          <ul className="nav-links">
            <li><a href="#" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
            <li><a href="#famous" onClick={(e) => handleScroll(e, 'famous')}>Famous</a></li>
            <li><a href="#menu" onClick={(e) => handleScroll(e, 'menu')}>Menu</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
          </ul>

          <a href="#menu" className="nav-cta" onClick={(e) => handleScroll(e, 'menu')}>
            Order Now
          </a>

          <button 
            className="mobile-nav-toggle" 
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu-links">
            <li><a href="#" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
            <li><a href="#famous" onClick={(e) => handleScroll(e, 'famous')}>Famous</a></li>
            <li><a href="#menu" onClick={(e) => handleScroll(e, 'menu')}>Menu</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
          </ul>
          <a href="#menu" className="nav-cta" style={{ display: 'block', textAlign: 'center' }} onClick={(e) => handleScroll(e, 'menu')}>
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🥪</span> Famous Jalaram Sandwich
            </div>
            <h1 className="hero-title">
              The Famous <span className="highlight-red">RimZim</span> Sandwich <span className="highlight-yellow">in Surat</span>
            </h1>
            <p className="hero-description">
              A massive, street-style specialty heavily loaded with veggies, multiple layers of chutneys, mayonnaise, and an intense amount of grated cheese!
            </p>
            <div className="hero-ctas">
              <a href="#menu" className="btn btn-primary" onClick={(e) => handleScroll(e, 'menu')}>View Menu</a>
              <a href="#famous" className="btn btn-secondary" onClick={(e) => handleScroll(e, 'famous')}>Famous Items</a>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img 
                src="/rimzim_sandwich.jpg" 
                alt="Famous Jalaram RimZim Sandwich loaded with cheese" 
                className="hero-image" 
              />
              <div className="hero-image-badge">
                <span>EXTRA</span>
                <span>CHEESE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Items Section */}
      <section id="famous" className="promotions-section">
        <div className="container">
          <h2 className="section-title">Our Famous <span className="highlight-red">Items</span></h2>
          <p className="section-subtitle">Our signature, most-loved dishes crafted with fresh ingredients and secret spices. Taste the legend!</p>
          
          <div className="deals-grid">
            {famousItems.map(item => (
              <div className="deal-card" key={item.id}>
                <span className="deal-tag">{item.tag}</span>
                <div className="deal-image-wrapper">
                  <img src={item.image} alt={item.title} className="deal-img" />
                </div>
                <h3 className="deal-title">{item.title}</h3>
                <p className="deal-desc">{item.description}</p>
                <div className="deal-footer">
                  <div className="deal-price">
                    <span className="price-label">Price</span>
                    <span className="price-value">{item.price}</span>
                  </div>
                  <a href="#menu" className="deal-btn" onClick={(e) => handleScroll(e, 'menu')}>View in Menu</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Display Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <h2 className="section-title">Explore Our <span className="highlight-yellow">Menu</span></h2>
          <p className="section-subtitle">Freshly prepared, fast, and packed with flavor. Choose your favorites from our selection.</p>
          
          {/* Category Tabs */}
          <div className="menu-filter-container">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grouped by Category */}
          <div className="menu-categories-list">
            {categories
              .filter(cat => cat !== 'All' && (activeCategory === 'All' || activeCategory === cat))
              .map(cat => {
                const catItems = menuItems.filter(item => item.category === cat);
                let catImage = "/jalaram_sandwich.jpg";
                if (cat === "Toast Sandwich") catImage = "/toast_sandwich.jpg";
                else if (cat === "Grill Sandwich") catImage = "/grill_sandwich.jpg";
                else if (cat === "Rimzim") catImage = "/rimzim_sandwich.jpg";
                else if (cat === "Burger") catImage = "/veggie_burger.jpg";
                else if (cat === "Pizza") catImage = "/cheese_pizza.jpg";
                else if (cat === "Garlic Bread") catImage = "/garlic_bread.jpg";
                else if (cat === "Footlong") catImage = "/cheese_footlong.jpg";

                return (
                  <div key={cat} className="menu-category-block" style={{
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--border-radius-md)',
                    padding: '32px',
                    marginBottom: '32px',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {/* Category Header with Single Real Image */}
                    <div className="menu-category-header" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      marginBottom: '24px',
                      borderBottom: '3px solid var(--color-secondary)',
                      paddingBottom: '16px'
                    }}>
                      <img src={catImage} alt={cat} className="menu-category-img" style={{
                        width: '64px',
                        height: '64px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '2px solid var(--color-primary)',
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'var(--transition)'
                      }} />
                      <h3 style={{ fontSize: '1.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>{cat}</h3>
                    </div>

                    {/* Dotted Text List in Responsive Grid (2 columns on desktop) */}
                    <div className="menu-items-text-grid">
                      {catItems.map(item => (
                        <div key={item.id} className="menu-text-item">
                          <span className="menu-item-name">{item.name}</span>
                          <span className="menu-item-dots"></span>
                          <span className="menu-item-price-val">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Extras Badge Info */}
          <div className="menu-extras-container" style={{
            marginTop: '40px',
            padding: '24px',
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--border-radius-md)',
            border: '2px dashed var(--color-primary)',
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🧈</span> Extra Butter: <span className="highlight-yellow">₹10</span>
            </div>
            <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🧀</span> Extra Cheese: <span className="highlight-yellow">₹30</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section / About */}
      <footer id="about" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3 className="logo footer-logo">
                <img src="/jalaram_logo.png" alt="Jalaram Sandwich Logo" className="logo-img" />
                <span>Jalaram Sandwich</span>
              </h3>
              <p>Serving delicious, loaded street-style sandwiches, grill toasts, pizzas, and garlic bread. Stuffed with extra butter and fresh ingredients, cooked to perfection!</p>
            </div>
            
            <div>
              <h4 className="footer-title">Opening Hours</h4>
              <ul className="footer-hours">
                <li>
                  <span>Monday - Sunday</span>
                  <span>10:00 AM - 11:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Contact & Location</h4>
              <ul className="footer-contact">
                <li>
                  <span>Address</span>
                  <span>
                    <a 
                      href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwj4sO_isdmVAxUAAAAAHQAAAAAQCg..i&pvq=Cg0vZy8xMWR4cWZjcjduIhQKDnNhbmR3aWNoIHN1cmF0EAIYAw&lqi=ChVyaW16aW0gc2FuZHdpY2ggc3VyYXRI9LnX5vKsgIAIWiMQARACGAEYAiIVcmltemltIHNhbmR3aWNoIHN1cmF0KgIIA5IBCnJlc3RhdXJhbnS6AQoKCHNhbmR3aWNo&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be04e423bb348cd:0xcccab25da46f05e1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-link"
                    >
                      5Rmh+Cx3, Udhana Darwaja, Aman Nagar, Surat, Gujarat 395008 📍 (Click for Map)
                    </a>
                  </span>
                </li>
                <li>
                  <span>Phone</span>
                  <span>
                    <a href="tel:+919898108003" className="location-link">
                      +91 9898108003 (Hirenbhai)
                    </a>
                  </span>
                </li>
                <li>
                  <span>Email</span>
                  <span>
                    <a href="mailto:hello@jalaramsandwich.com" className="location-link">
                      hello@jalaramsandwich.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Jalaram Sandwich. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
