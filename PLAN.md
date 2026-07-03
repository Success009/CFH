# Project Plan: Chitwan Fish House (CFH) Web Application

This document outlines the strategic roadmap, design principles, and technical blueprint for the official Chitwan Fish House (चितवन फिस हाउस) web application.

---

## 1. Brand Profile & Core Positioning

Based on the company's official profile, Chitwan Fish House (CFH) is a pioneer in Nepal's aquaculture market, established on **Shrawan 28, 2072 BS (August 13, 2015 AD)**.

### Core Pillars of the CFH Brand:
*   **The Pioneer of Quality**: CFH was co-founded by local fish farmers including Ambika Prasad Adhikari (then Central General Secretary of the Nepal Fish Entrepreneurs Association) and Nunulal Raj Tamang. It is the second systematic live and fresh fish retail and processing venture in Nepal.
*   **A Healthy Alternative**: Established specifically to replace imported, chemically adulterated (preservative-treated) fish with fresh, locally harvested, and hygienic fish.
*   **resilience & Adaptability**: Survived the severe economic setbacks of the COVID-19 pandemic and expanded from a simple live-fish shop into a high-standard fish processing center.
*   **Chitwan's Conscious Community**: Located in Bharatpur-10 (Hakimchok / Rijal Chowk), a region growing as a "Medical City" with a highly aware, health-conscious populace that prefers quality over cheap, unhealthy food.

---

## 2. Target Audience & Business Goals

### A. B2C (Direct Consumers & Families)
*   **Persona**: Health-conscious residents of Bharatpur/Chitwan, families seeking high-quality white meat, and seafood lovers.
*   **Goal**: Educate them on the health benefits of local, chemical-free fish and make it effortless to browse and order fresh fish for daily meals.

### B. B2B (Hotels, Restaurants, & Caterers)
*   **Persona**: Chefs, restaurateurs, and hospitality procurement managers who require a consistent, hygienic, and high-volume supply of premium processed fish.
*   **Goal**: Present CFH as a reliable, certified, and premium local supply chain partner. Show quality standards (vacuum packing, bone extraction) and formal registration details to build collaborative trust.

---

## 3. Site Architecture & Layout Blueprint

Since the client desires a highly impressive, modern application that requires **zero ongoing maintenance overhead** (avoiding backend complexities for now), we will build a **highly interactive, static Single Page Application (SPA)** with a **dynamic JSON-driven catalog and update system**. 

### Section 1: Hero Segment (First Impression)
*   **Visual**: A stunning, full-bleed hero with fresh, clean water animations or video-style backgrounds showcasing local Nepalese fisheries.
*   **Headline**: "Chitwan's Pioneer in Safe, Chemical-Free, & Local Fish" (नेपालकै पहिलो व्यवस्थित र स्वस्थकर जिउँदो माछा र प्रशोधन केन्द्र).
*   **CTA Buttons**: `Explore Products` and `Instant Order via WhatsApp`.

### Section 2: Interactive Product Catalog (The Fish House Market)
A modern, filterable product grid showcasing the 7 core offerings from the profile:
1.  **Live Carp & Pangasius** (जिउँदो कार्प तथा पंगास जातका माछा): Species guide (Rahu, Naini, Bhakur, Pangas) with live tank details.
2.  **Vacuum-Packed Ready Fish (Frozen)** (भ्याकुम प्याकिङ तयारी माछा): Hygienically cleaned, cut, and sealed.
3.  **Boneless Fillets** (बोनलेस - काँडा निकालिएको मासु मात्र): Perfectly trimmed, kid-friendly fish meat.
4.  **Vacuum-Packed Chhadi Fish** (भ्याकुम प्याकिङ गरिएको छडी माछा): Small tender delicacies.
5.  **Fish Sukuti** (माछाको सुकुटी): Gourmet, traditional sun-dehydrated dried fish.
6.  **Fish Back & Head** (माछाको ढाड टाउको): Rich in nutrition, excellent for traditional fish soups.
7.  **Fish MoMo** (माछाको म:म:): Delectable local favorite reimagined with premium processed fish.

*   *Interactive Feature*: Clicking on a product opens a beautiful details card with **nutrition facts, preparation/cooking tips, and a "Direct to WhatsApp Order" button** pre-filled with the product name.

### Section 3: "Our Story" & Resilience (About Us)
*   Narrates the inspiring story of CFH's founding in 2072 BS, its role in replacing chemically preserved imported fish, and its survival through COVID-19.
*   Highlights their core registration credentials (Bharatpur Metro Reg: 10/224, Cottage & Small Industries Reg: 1662/071/072) to establish absolute authority and trust.

### Section 4: "Why Local?" Interactive Health Dashboard
*   **Visual Comparison Slider**: Red Meat vs. White Fish Meat (focusing on protein, omega-3, digestion, and heart health).
*   **Interactive Guide**: "Unmasking Imported Fish" — showing why choosing local, live-tank fish from CFH avoids harmful preservatives like formaldehyde.

### Section 5: B2B Partnership & Collaboration Portal
*   A dedicated, professional section for restaurants, hotels, and retail outlets.
*   Formally displays B2B services: bulk supply, customized processing (specific cuts/de-boning), and temperature-controlled storage.
*   Features an interactive **"Request Partnership / Bulk Quote"** tool that formats an inquiry email or WhatsApp message directly.

### Section 6: Dynamic Updates & Photo Gallery (Future-Proofed)
*   A stunning masonry photo gallery showcasing the neat, hygienic facilities, live fish tanks, and products.
*   The gallery and updates are loaded dynamically from a lightweight JSON configuration file.
*   *Future Integration*: When the client is ready to add Firebase, this JSON dataset can be directly bound to a Firebase Firestore collection with **zero changes to the frontend rendering logic**.

### Section 7: Contact, Location, & Live Support
*   Interactive Map marker highlighting **Rijal Chowk, Hakimchok, Bharatpur-10** (near Bharatpur Airport south boundary).
*   Business hours, direct call buttons, and responsive quick-contact forms.

---

## 4. Technical Stack & Implementation

To deliver a high-end experience without database maintenance cost:
*   **Frontend**: React.js (Vite) with **Tailwind CSS** for responsive styling, and **Framer Motion** for elegant animations.
*   **State & Catalog**: Managed locally via structured JSON files.
*   **Interactivity**: Complete custom filtering, tabbed views, health comparisons, and responsive drawers.
*   **E-Commerce Capability**: A **WhatsApp Order Routing Engine** that translates user cart additions into immediate, structured WhatsApp order texts. This provides instant sales channels with **zero database cost or maintenance**.
*   **Deployment**: Can be hosted 100% free on GitHub Pages, Vercel, or Netlify, giving the client a lightning-fast, secure website with zero hosting bills.

---

## 5. Next Steps

1.  **Project Initialization**: Set up a clean React + Tailwind project in `projects/CFH`.
2.  **Asset Structuring**: Create JSON data assets for products, cooking tips, and gallery cards.
3.  **UI Implementation**: Build the responsive sections, prioritizing the beautiful catalog, interactive health guide, and B2B portal.
4.  **WhatsApp Engine Integration**: Create a smooth ordering checkout flow that formats WhatsApp messages.
5.  **Mock Admin Portal**: Set up a prototype dashboard demonstrating how the client will update pictures once Firebase is integrated.
