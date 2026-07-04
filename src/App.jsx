import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Menu, 
  X, 
  ShoppingCart, 
  ChevronRight, 
  Heart, 
  ShieldCheck, 
  Users, 
  Award, 
  TrendingUp, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Scale, 
  Coffee, 
  BookOpen, 
  Plus, 
  Trash2,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { content, galleryImages } from './data.js';

export default function App() {
  const [lang, setLang] = useState('ne'); // Default is Nepali
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([ ]); // Empty array with space to bypass rendering bug
  const [cartOpen, setCartOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState('outlet');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = content[lang];

  // Cart Handlers
  const toggleCart = () => setCartOpen(!cartOpen);
  
  const addToCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([ ]); // Empty array with space
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    
    let message = `${t.products.whatsappOrderText}\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
    });
    message += `\n-----------------------\n`;
    message += `*📍 ${t.contact.address}:* [कृपया आफ्नो डेलिभरी ठेगाना यहाँ लेख्नुहोस् / Please write your delivery address here]\n`;
    message += `*📞 ${t.contact.phone}:* [कृपया सम्पर्क नम्बर यहाँ लेख्नुहोस् / Please write your contact number here]\n\n`;
    message += `Thank you! (Sent via Chitwan Fish House Web Portal)`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/9779855062166?text=${encoded}`, '_blank');
  };

  const handleDirectWhatsAppChat = () => {
    let message = `नमस्ते चितवन फिस हाउस! म तपाईंको वेबसाइट हेर्दैछु र केहि बुझ्न चाहन्छु। / Hello Chitwan Fish House! I am browsing your website and have some queries.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/9779855062166?text=${encoded}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', phone: '', subject: '', message: '' });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 scroll-smooth selection:bg-sky-200 selection:text-sky-900">
      
      {/* HEADER CONTROLLER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
        
        {/* Top Info Bar */}
        <div className="bg-gradient-to-r from-sky-800 to-sky-950 text-white text-xs py-2 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
                <Phone size={12} className="text-sky-300" /> +९७७ ९८५५०६२१६६, ५६-५९०१४०
              </span>
              <span className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
                <MapPin size={12} className="text-sky-300" /> भरतपुर-१०, हाकिमचोक (रिजालचोक), चितवन
              </span>
              <span className="hidden md:flex items-center gap-1.5 text-sky-200">
                <Clock size={12} className="text-sky-300" /> बिहान ७:०० - बेलुका ८:००
              </span>
            </div>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-sky-900/55 p-0.5 rounded-md border border-sky-700/50">
              <button 
                onClick={() => setLang('ne')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all duration-200 ${lang === 'ne' ? 'bg-sky-500 text-white shadow-sm' : 'text-sky-200 hover:text-white hover:bg-sky-800/50'}`}
              >
                नेपाली
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all duration-200 ${lang === 'en' ? 'bg-sky-500 text-white shadow-sm' : 'text-sky-200 hover:text-white hover:bg-sky-800/50'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            
            {/* Brand Logo & Name */}
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src="/images/logo.png" 
                alt="Chitwan Fish House Logo" 
                className="w-12 h-12 object-contain rounded-full shadow-md border border-slate-200 p-0.5 group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-sky-900 tracking-tight leading-tight group-hover:text-sky-700 transition-colors font-nepali">
                  चितवन फिस हाउस
                </span>
                <span className="text-xxs tracking-widest text-slate-400 uppercase font-bold leading-none">
                  Chitwan Fish House
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all">{t.nav.home}</a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all">{t.nav.about}</a>
              <a href="#products" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all">{t.nav.products}</a>
              <a href="#why-local" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all">{t.nav.whyLocal}</a>
              <a href="#wholesale" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all">{t.nav.wholesale}</a>
              <a href="#gallery" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all">{t.nav.gallery}</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all">{t.nav.contact}</a>
            </nav>

            {/* Cart & Mobile Menu Buttons */}
            <div className="flex items-center gap-2">
              {/* Cart Button */}
              <button 
                onClick={toggleCart}
                className="relative p-2.5 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 transition-all duration-300"
                aria-label="Toggle Shopping List"
              >
                <ShoppingCart size={20} />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-white text-xxs font-bold animate-pulse">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Mobile Menu Icon */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-slate-100 lg:hidden text-slate-700 hover:bg-slate-200 transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-4 py-3 space-y-1 shadow-inner animate-fadeIn">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all"
            >
              {t.nav.home}
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all"
            >
              {t.nav.about}
            </a>
            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all"
            >
              {t.nav.products}
            </a>
            <a 
              href="#why-local" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all"
            >
              {t.nav.whyLocal}
            </a>
            <a 
              href="#wholesale" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all"
            >
              {t.nav.wholesale}
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all"
            >
              {t.nav.gallery}
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all"
            >
              {t.nav.contact}
            </a>
          </div>
        )}
      </header>

      {/* SHOPPING LIST SLIDE PANEL */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop with cursor-pointer for mobile Safari tap handling */}
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity cursor-pointer" onClick={toggleCart} />
          
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
            <div className="w-full sm:w-screen max-w-md bg-white shadow-2xl flex flex-col">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-sky-850 to-sky-900 text-white">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <ShoppingCart size={20} /> {t.cart.title}
                </h3>
                <button onClick={toggleCart} className="p-2 -mr-2 rounded-full hover:bg-white/10 text-white transition-all focus:outline-none" aria-label="Close cart">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12 px-4">
                    <ShoppingCart size={48} className="mx-auto text-slate-300 mb-4 animate-bounce" />
                    <p className="text-slate-500 font-medium">{t.cart.empty}</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4 p-3.5 rounded-xl border border-slate-100 bg-slate-50 hover:border-sky-200 transition-all group">
                      <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg shadow-sm group-hover:scale-102 transition-transform" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-800 truncate leading-snug">{item.name}</h4>
                        <p className="text-xs text-sky-600 font-semibold mt-1 flex items-center gap-1">
                          <CheckCircle2 size={12} /> {t.products.organicTag}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 self-center rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                  <div className="flex justify-between items-center text-sm font-semibold text-slate-600">
                    <span>{t.cart.totalItems}:</span>
                    <span className="text-slate-900 font-bold text-base">{cart.length}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={clearCart}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-red-500 border border-slate-200 hover:bg-red-50 transition-all"
                    >
                      सूची सफा गर्नुहोस
                    </button>
                    <button 
                      onClick={handleWhatsAppCheckout}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all"
                    >
                      <Phone size={14} /> {t.cart.checkout}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section id="home" className="relative bg-sky-950 overflow-hidden py-16 md:py-24 lg:py-32">
          {/* Decorative water ripple background */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Contents */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs sm:text-sm font-semibold tracking-wide">
                  <Award size={14} className="text-sky-400 animate-spin" /> {t.hero.tagline}
                </span>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-nepali">
                  {t.hero.title}
                </h1>
                
                <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                  {t.hero.subtitle}
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <a 
                    href="#products" 
                    className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    {t.hero.ctaProducts} <ChevronRight size={18} />
                  </a>
                  <button 
                    onClick={handleDirectWhatsAppChat}
                    className="px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <Phone size={18} /> {t.hero.ctaOrder}
                  </button>
                </div>

                {/* Quick stats / Features */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800 max-w-md mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <p className="text-xl sm:text-2xl font-bold text-sky-400">१०+ वर्ष</p>
                    <p className="text-xxs sm:text-xs text-slate-400 uppercase tracking-wider">{t.hero.experience}</p>
                  </div>
                  <div className="text-center lg:text-left border-x border-slate-800 px-4">
                    <p className="text-xl sm:text-2xl font-bold text-sky-400">१००%</p>
                    <p className="text-xxs sm:text-xs text-slate-400 uppercase tracking-wider">{t.hero.quality}</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-xl sm:text-2xl font-bold text-sky-400">प्रमाणित</p>
                    <p className="text-xxs sm:text-xs text-slate-400 uppercase tracking-wider">{t.hero.certified}</p>
                  </div>
                </div>
              </div>

              {/* Hero Image Side */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Outer circle glowing decoration */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-400 to-emerald-400 opacity-20 filter blur-xl animate-pulse" />
                  
                  {/* Hero banner card image */}
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                    <img 
                      src="/images/shop-front.png" 
                      alt="Chitwan Fish House Main banner" 
                      className="w-full h-72 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 text-white">
                      <p className="text-xs font-bold text-sky-300 uppercase tracking-widest">{t.about.stats.estLabel}: २०७२</p>
                      <h3 className="text-lg font-bold leading-tight mt-1 font-nepali">नेपालकै दोस्रो व्यवस्थित जिउँदो माछा पसल र प्रशोधन केन्द्र</h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full inline-block">
                {t.nav.about}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-nepali">
                {t.about.title}
              </h2>
              <div className="h-1 w-20 bg-sky-500 mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 font-light">
                {t.about.subtitle}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Story column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="prose prose-slate max-w-none space-y-5">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {t.about.introPara1}
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {t.about.introPara2}
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100/50 space-y-4">
                  <h3 className="text-lg font-bold text-sky-900 flex items-center gap-2 font-nepali">
                    <Users size={20} className="text-sky-600" /> {t.about.foundingTitle}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {t.about.foundingPara1}
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {t.about.foundingPara2}
                  </p>
                </div>
              </div>

              {/* Stats & Certification column */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Image of store setup */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-xl group">
                  <img 
                    src="/images/founder-nunulal.png" 
                    alt="Chitwan Fish House Shop operations" 
                    className="w-full h-64 object-cover group-hover:scale-102 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                    <p className="text-white text-sm font-bold flex items-center gap-1.5 font-nepali">
                      <ShieldCheck size={16} className="text-emerald-400" /> ग्राहकको सेवामा सधैं प्रतिबद्ध
                    </p>
                  </div>
                </div>

                {/* Micro Stats Card */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 text-center">
                    <p className="text-2xl font-bold text-sky-900">{t.about.stats.established}</p>
                    <p className="text-xxs text-slate-400 uppercase tracking-wider mt-1">{t.about.stats.estLabel}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 text-center">
                    <p className="text-2xl font-bold text-sky-900">{t.about.stats.founders}</p>
                    <p className="text-xxs text-slate-400 uppercase tracking-wider mt-1">{t.about.stats.foundersLabel}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 text-center">
                    <p className="text-lg font-bold text-sky-900">{t.about.stats.reg1}</p>
                    <p className="text-xxs text-slate-400 uppercase tracking-wider mt-1">{t.about.stats.reg1Label}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 text-center">
                    <p className="text-lg font-bold text-sky-900">{t.about.stats.reg2}</p>
                    <p className="text-xxs text-slate-400 uppercase tracking-wider mt-1">{t.about.stats.reg2Label}</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* PRODUCTS CATALOGUE */}
        <section id="products" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-100 px-3.5 py-1.5 rounded-full inline-block">
                {t.nav.products}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-nepali">
                {t.products.title}
              </h2>
              <div className="h-1 w-20 bg-sky-500 mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 font-light">
                {t.products.subtitle}
              </p>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.products.items.map(product => {
                const inCart = cart.some(item => item.id === product.id);
                return (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={product.img} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-all duration-500" 
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 text-xxs font-bold text-sky-900 bg-sky-100 border border-sky-300/30 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <Heart size={10} className="fill-sky-600 text-sky-600" /> {t.products.organicTag}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-700 transition-colors line-clamp-1 leading-snug font-nepali">
                          {product.name}
                        </h3>
                        <p className="text-slate-500 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                          {product.desc}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <button 
                          onClick={() => setSelectedProduct(product)}
                          className="px-3.5 py-2 rounded-xl text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200/50 flex items-center justify-center gap-1 transition-all"
                        >
                          <BookOpen size={13} /> {t.products.viewDetails}
                        </button>
                        
                        <button 
                          onClick={() => inCart ? removeFromCart(product.id) : addToCart(product)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                            inCart 
                              ? 'bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 border border-slate-200' 
                              : 'bg-sky-600 hover:bg-sky-500 text-white shadow-sky-600/10 hover:shadow-sky-600/20 hover:shadow-md'
                          }`}
                        >
                          {inCart ? (
                            <>
                              <Trash2 size={13} /> {t.products.removeFromCart}
                            </>
                          ) : (
                            <>
                              <Plus size={13} /> {t.products.addToCart}
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* DETAIL POPUP FOR INDIVIDUAL PRODUCT */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              
              {/* Blur backdrop with cursor-pointer for touch/Safari support */}
              <div 
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity cursor-pointer" 
                onClick={() => setSelectedProduct(null)} 
              />
              {/* Centered card alignment trick */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>

              {/* Product Modal */}
              <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-slate-100 animate-scaleUp">
                
                {/* Header Image */}
                <div className="relative h-64 sm:h-72">
                  <img 
                    src={selectedProduct.img} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex items-end p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-nepali">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/40 hover:bg-slate-950/60 text-white transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Contents */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Detailed paragraph */}
                  <div className="space-y-2">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {selectedProduct.longDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                    
                    {/* Benefits List */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 size={16} className="text-sky-600" /> {t.products.benefitsLabel}
                      </h4>
                      <ul className="space-y-2">
                        {selectedProduct.benefits.map((benefit, i) => (
                          <li key={i} className="text-xs sm:text-sm text-slate-500 flex items-start gap-2 leading-relaxed">
                            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nutrition facts */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                        <Scale size={14} className="text-sky-600" /> {t.products.nutritionLabel}
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                        <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
                          <span className="text-slate-400">प्रोटिन (Protein):</span>
                          <span className="font-bold text-slate-800">{selectedProduct.nutrition.protein}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
                          <span className="text-slate-400">फ्याट (Fat):</span>
                          <span className="font-bold text-slate-800">{selectedProduct.nutrition.fat}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
                          <span className="text-slate-400">ओमेगा-३:</span>
                          <span className="font-bold text-sky-700">{selectedProduct.nutrition.omega3}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
                          <span className="text-slate-400">क्यालोरी:</span>
                          <span className="font-bold text-slate-800">{selectedProduct.nutrition.calories}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Actions inside Modal */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                        setCartOpen(true);
                      }}
                      className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <Plus size={16} /> {t.products.addToCart}
                    </button>
                    <button 
                      onClick={() => {
                        let text = `म तपाईंको परिकार "${selectedProduct.name}" को बारेमा बुझ्न चाहन्छु।`;
                        window.open(`https://wa.me/9779855062166?text=${encodeURIComponent(text)}`, '_blank');
                      }}
                      className="py-3 px-4 rounded-xl font-bold text-xs bg-green-600 hover:bg-green-500 text-white flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <Phone size={16} /> {t.products.whatsappOrderText} (WhatsApp)
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* WHY LOCAL COMPARISON SECTION */}
        <section id="why-local" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full inline-block">
                {t.nav.whyLocal}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-nepali">
                {t.whyLocal.title}
              </h2>
              <div className="h-1 w-20 bg-sky-500 mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 font-light">
                {t.whyLocal.subtitle}
              </p>
            </div>

            {/* Comparison Column Blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
              {t.whyLocal.comparisons.map((comp, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all ${
                    comp.bad 
                      ? 'border-red-100 bg-red-50/20 shadow-sm shadow-red-50' 
                      : 'border-sky-100 bg-sky-50/20 shadow-sm shadow-sky-50'
                  }`}
                >
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 font-nepali ${comp.bad ? 'text-red-700' : 'text-sky-900'}`}>
                      {comp.bad ? <AlertTriangle size={20} className="text-red-500" /> : <CheckCircle2 size={20} className="text-sky-600" />}
                      {comp.title}
                    </h3>
                    
                    <ul className="mt-6 space-y-4">
                      {comp.points.map((pt, i) => (
                        <li key={i} className="flex gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed items-start">
                          <span className={`h-1.5 w-1.5 rounded-full mt-2 flex-shrink-0 ${comp.bad ? 'bg-red-400' : 'bg-sky-500'}`} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Nutrition meat comparisons calculator layout */}
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto space-y-6">
              <div className="text-center space-y-2 max-w-2xl mx-auto">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-nepali">
                  {t.whyLocal.calculator.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                  {t.whyLocal.calculator.desc}
                </p>
              </div>

              {/* Metrics block */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                
                {/* Metric 1 Card */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/50 space-y-3 shadow-xxs">
                  <span className="text-xxs font-bold text-slate-400 uppercase tracking-widest">{t.whyLocal.calculator.metric1}</span>
                  <div className="space-y-1.5">
                    <p className="text-xs text-red-600 font-bold flex items-center gap-1">
                      ❌ {t.whyLocal.calculator.redMeat}: {t.whyLocal.calculator.metric1ValRed}
                    </p>
                    <p className="text-xs text-green-700 font-bold flex items-center gap-1">
                      ✅ {t.whyLocal.calculator.fishMeat}: {t.whyLocal.calculator.metric1ValFish}
                    </p>
                  </div>
                </div>

                {/* Metric 2 Card */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/50 space-y-3 shadow-xxs">
                  <span className="text-xxs font-bold text-slate-400 uppercase tracking-widest">{t.whyLocal.calculator.metric2}</span>
                  <div className="space-y-1.5">
                    <p className="text-xs text-red-600 font-bold flex items-center gap-1">
                      ❌ {t.whyLocal.calculator.redMeat}: {t.whyLocal.calculator.metric2ValRed}
                    </p>
                    <p className="text-xs text-green-700 font-bold flex items-center gap-1">
                      ✅ {t.whyLocal.calculator.fishMeat}: {t.whyLocal.calculator.metric2ValFish}
                    </p>
                  </div>
                </div>

                {/* Metric 3 Card */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/50 space-y-3 shadow-xxs">
                  <span className="text-xxs font-bold text-slate-400 uppercase tracking-widest">{t.whyLocal.calculator.metric3}</span>
                  <div className="space-y-1.5">
                    <p className="text-xs text-red-600 font-bold flex items-center gap-1">
                      ❌ {t.whyLocal.calculator.redMeat}: {t.whyLocal.calculator.metric3ValRed}
                    </p>
                    <p className="text-xs text-green-700 font-bold flex items-center gap-1">
                      ✅ {t.whyLocal.calculator.fishMeat}: {t.whyLocal.calculator.metric3ValFish}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* WHOLESALE B2B SECTION */}
        <section id="wholesale" className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Text details */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs sm:text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-100 px-3.5 py-1.5 rounded-full inline-block">
                  {t.nav.wholesale}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-nepali">
                  {t.wholesale.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {t.wholesale.desc}
                </p>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
                    {t.wholesale.benefitsTitle}
                  </h3>
                  
                  {/* B2B Grid items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {t.wholesale.benefits.map((benefit, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white border border-slate-100 space-y-1">
                        <h4 className="text-sm font-bold text-sky-800 flex items-center gap-1.5 font-nepali">
                          <CheckCircle2 size={14} className="text-sky-500" /> {benefit.title}
                        </h4>
                        <p className="text-xxs sm:text-xs text-slate-500 leading-normal font-light">
                          {benefit.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => {
                      let text = `नमस्कार! हामी हाम्रो होटल/रेस्टुरेन्टको लागि चितवन फिस हाउससँग व्यावसायिक साझेदारी र थोक आपूर्तिको विषयमा छलफल गर्न चाहन्छौं।`;
                      window.open(`https://wa.me/9779855062166?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} /> {t.wholesale.b2bCta}
                  </button>
                </div>
              </div>

              {/* Right Column Processing & Certificate collage */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                  <img 
                    src="/images/frozen-fish-box.png" 
                    alt="CFH advanced fish processing unit" 
                    className="w-full h-80 object-cover" 
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 p-6 text-white">
                    <p className="text-xs text-sky-300 font-bold uppercase tracking-widest">Advanced Cold Chain Management</p>
                    <h4 className="text-base sm:text-lg font-bold leading-tight mt-1 font-nepali">अत्याधुनिक कोल्ड रुम र स्वच्छ कटिङ युनिट</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PHOTO GALLERY & CREDENTIALS SECTION */}
        <section id="gallery" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full inline-block">
                {t.nav.gallery}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-nepali">
                {t.gallery.title}
              </h2>
              <div className="h-1 w-20 bg-sky-500 mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 font-light">
                {t.gallery.subtitle}
              </p>
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex justify-center gap-4 mb-10">
              <button 
                onClick={() => setActiveGalleryTab('outlet')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                  activeGalleryTab === 'outlet' 
                    ? 'bg-sky-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.gallery.viewOutlets}
              </button>
              <button 
                onClick={() => setActiveGalleryTab('cert')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                  activeGalleryTab === 'cert' 
                    ? 'bg-sky-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.gallery.viewCertificates}
              </button>
            </div>

            {/* Gallery masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages
                .filter(img => img.type === activeGalleryTab)
                .map(img => (
                  <div 
                    key={img.id} 
                    onClick={() => setSelectedImage(img)}
                    className="relative group rounded-2xl overflow-hidden border border-slate-100 shadow-xxs hover:shadow-md hover:border-sky-300 cursor-zoom-in transition-all duration-300"
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt || img.title} 
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-104 transition-transform duration-500" 
                    />
                    
                    {/* Hover text mask */}
                    <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-xxs font-semibold tracking-wide leading-snug line-clamp-2">
                        {img.title || img.alt}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        </section>

        {/* IMAGE ZOOM LIGHTBOX */}
        {selectedImage && (
          <div className="fixed inset-0 z-55 overflow-hidden flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs transition-opacity cursor-pointer" 
              onClick={() => setSelectedImage(null)} 
            />
            
            <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl z-10 border border-slate-100 animate-scaleUp">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <span className="text-xs font-bold text-sky-800 flex items-center gap-1">
                  <FileText size={14} /> {selectedImage.title || t.gallery.certLabel}
                </span>
                <button onClick={() => setSelectedImage(null)} className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-all">
                  <X size={18} />
                </button>
              </div>
              <div className="p-2 sm:p-4 bg-slate-900/10 flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt || selectedImage.title} 
                  className="max-h-120 object-contain mx-auto" 
                />
              </div>
            </div>
          </div>
        )}

        {/* CONTACT SECTION & FORMS */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-100 px-3.5 py-1.5 rounded-full inline-block">
                {t.nav.contact}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-nepali">
                {t.contact.title}
              </h2>
              <div className="h-1 w-20 bg-sky-500 mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 font-light">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Split layout: Info cards vs inquiry form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Contact details */}
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  
                  {/* Address card */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xxs flex gap-4">
                    <div className="p-3.5 rounded-xl bg-sky-50 text-sky-600 h-11 w-11 flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.contact.address}</h4>
                      <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1 leading-relaxed font-nepali">
                        {t.contact.addressVal}
                      </p>
                    </div>
                  </div>

                  {/* Phone card */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xxs flex gap-4">
                    <div className="p-3.5 rounded-xl bg-sky-50 text-sky-600 h-11 w-11 flex items-center justify-center flex-shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.contact.phone}</h4>
                      <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1 leading-relaxed">
                        {t.contact.phoneVal}
                      </p>
                    </div>
                  </div>

                  {/* Operational timing card */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xxs flex gap-4">
                    <div className="p-3.5 rounded-xl bg-sky-50 text-sky-600 h-11 w-11 flex items-center justify-center flex-shrink-0">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.contact.hours}</h4>
                      <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1 leading-relaxed font-nepali">
                        {t.contact.hoursVal}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Direct WhatsApp Call to Action card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 space-y-4 shadow-xxs">
                  <p className="text-xs sm:text-sm text-green-800 leading-relaxed font-medium">
                    {t.contact.quickOrderDesc}
                  </p>
                  <button 
                    onClick={handleDirectWhatsAppChat}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-1.5 shadow-md shadow-green-600/10 hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300"
                  >
                    <Phone size={14} /> {t.contact.whatsappBtn}
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 font-nepali">
                    {t.contact.formTitle}
                  </h3>

                  {formSubmitted ? (
                    <div className="p-6 rounded-2xl bg-green-50 border border-green-100 text-center space-y-3">
                      <CheckCircle2 size={40} className="text-green-500 mx-auto animate-bounce" />
                      <p className="text-sm font-bold text-green-800 font-nepali">{t.contact.successMsg}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xxs font-bold text-slate-400 uppercase tracking-wider">{t.contact.formName}</label>
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleFormChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs sm:text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all outline-hidden bg-slate-50/50" 
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xxs font-bold text-slate-400 uppercase tracking-wider">{t.contact.formPhone}</label>
                          <input 
                            type="text" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs sm:text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all outline-hidden bg-slate-50/50" 
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xxs font-bold text-slate-400 uppercase tracking-wider">{t.contact.formSubject}</label>
                        <input 
                          type="text" 
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs sm:text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all outline-hidden bg-slate-50/50" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xxs font-bold text-slate-400 uppercase tracking-wider">{t.contact.formMessage}</label>
                        <textarea 
                          rows="4" 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs sm:text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all outline-hidden bg-slate-50/50 resize-none" 
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-500 text-white shadow-md shadow-sky-600/10 hover:shadow-lg hover:shadow-sky-600/20 transition-all"
                      >
                        {t.contact.formSubmit}
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800 font-nepali">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Col 1 Brand logo & summary */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src="/images/logo.png" alt="Chitwan Fish House Logo" className="w-10 h-10 object-contain rounded-full border border-slate-700 bg-white p-0.5" />
              <span className="text-lg font-bold text-white tracking-wide">चितवन फिस हाउस</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-light">
              हाकिमचोक, भरतपुर-१०, चितवन। नेपालकै पहिलो नमुना व्यवस्थित जिउँदो माछा पसल। स्वस्थ स्वदेशी माछाको स्थायी बजार सुनिश्चित गर्दै उपभोक्ताको स्वास्थ्यको पहरेदार।
            </p>
          </div>

          {/* Col 2 Quick Links */}
          <div className="md:col-span-3 text-center md:text-left space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-sky-400">द्रुत लिङ्कहरू</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li><a href="#home" className="hover:text-white transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">{t.nav.products}</a></li>
              <li><a href="#why-local" className="hover:text-white transition-colors">{t.nav.whyLocal}</a></li>
              <li><a href="#wholesale" className="hover:text-white transition-colors">{t.nav.wholesale}</a></li>
            </ul>
          </div>

          {/* Col 3 Timings info */}
          <div className="md:col-span-4 text-center md:text-left space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-sky-400">{t.contact.hours}</h4>
            <div className="text-xs sm:text-sm text-slate-300 space-y-2">
              <p className="font-semibold">{t.contact.hoursVal}</p>
              <p className="text-slate-400 text-xxs tracking-wider uppercase">Emergency Support Available</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-sky-300 hover:text-sky-200 cursor-pointer text-xs" onClick={handleDirectWhatsAppChat}>
                  <Phone size={14} /> ९८५५०६२१६६
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Chitwan Fish House. All Rights Reserved. Bharatpur-10, Chitwan, Nepal.</p>
          <p className="mt-1 text-slate-600">Registered with Bharatpur Metropolitan (10/224) and Department of Cottage & Small Industries (1662/071/072).</p>
        </div>
      </footer>

    </div>
  );
}
