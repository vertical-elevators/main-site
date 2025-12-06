# Vertical Elevators - Next.js Website

<div align="center">

![Vertical Elevators](https://img.shields.io/badge/Vertical-Elevators-297074?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Google Sheets](https://img.shields.io/badge/Google-Sheets-34A853?style=for-the-badge&logo=google-sheets)

**A modern, high-performance elevator company website built with Next.js 15, featuring dynamic product catalogs, Google Sheets integration, and stunning animations.**

[🌐 Live Demo](https://verticalelevators.in) | [📖 Documentation](#table-of-contents) | [🐛 Report Bug](mailto:kaizen.official.hub@gmail.com)

</div>

---

## 📑 Table of Contents

- [🎯 Features](#-features)
- [🏗️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🔧 Configuration](#-configuration)
- [📝 Content Management](#-content-management)
- [🎨 Customization Guide](#-customization-guide)
- [🤖 AI Prompt for Editing](#-ai-prompt-for-editing)
- [📊 Google Sheets Integration](#-google-sheets-integration)
- [🚀 Deployment](#-deployment)
- [📧 Support](#-support)

---

## 🎯 Features

### ✨ Core Features
- 🎨 **Modern UI/UX** - Teal gradient theme with smooth animations
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Lightning Fast** - Next.js 15 with App Router
- 🎭 **Smooth Animations** - Framer Motion integration
- 📊 **Google Sheets Backend** - No database needed
- 🔍 **SEO Optimized** - Dynamic metadata & structured data

### 🛗 Product Features
- **8 Elevator Categories** - Machine Room, Hydraulic, Home, Hospital, etc.
- **Dynamic Product Pages** - JSON-based content management
- **Image Sliders** - Multi-image product galleries
- **Quote System** - Instant quote request forms

### 🔧 Accessories Section
- **7 Accessory Categories** - Motors, Drives, Panels, Cabins
- **Detailed Specifications** - Technical details for each item
- **Similar Architecture** - Mirrors product system

### 📮 Form Management
- **4 Form Types** - CTA, Contact, Product Quotes, Accessory Quotes
- **Google Sheets Storage** - Automatic data logging
- **Real-time Validation** - User-friendly error handling

---

## 🏗️ Tech Stack

### Frontend
```
Next.js 15.0           - React Framework (App Router)
React 18               - UI Library
Tailwind CSS           - Utility-first CSS
Framer Motion          - Animation Library
Tabler Icons React     - Icon Library
```

### Backend & APIs
```
Google Sheets API      - Form Data Storage
googleapis             - Google API Client
Next.js API Routes     - Server-side API handlers
```

### Development Tools
```
ESLint                 - Code Linting
PostCSS                - CSS Processing
```

---

## 📂 Project Structure

```
vertical/
│
├── 📁 app/                          # Next.js App Router
│   ├── 📄 layout.js                 # Root layout with metadata
│   ├── 📄 page.js                   # Homepage
│   ├── 📄 globals.css               # Global styles
│   │
│   ├── 📁 products/                 # Products Section
│   │   ├── 📄 categories.json       # ✏️ EDIT: Product categories data
│   │   ├── 📄 products.json         # ✏️ EDIT: All products data
│   │   ├── 📄 page.js               # Products listing page
│   │   └── 📁 [slug]/               # Dynamic product routes
│   │       ├── 📄 page.js           # Product category metadata
│   │       └── 📄 productCategoryClient.js  # Product category UI
│   │
│   ├── 📁 accessories/              # Accessories Section
│   │   ├── 📄 categories.json       # ✏️ EDIT: Accessory categories
│   │   ├── 📄 accessories.json      # ✏️ EDIT: All accessories data
│   │   ├── 📄 page.js               # Accessories listing
│   │   └── 📁 [slug]/               # Dynamic accessory routes
│   │
│   ├── 📁 contact/                  # Contact Page
│   │   ├── 📄 page.js               # Contact metadata
│   │   └── 📄 contactClient.js      # ✏️ EDIT: Contact form & info
│   │
│   ├── 📁 about/                    # About Page
│   ├── 📁 careers/                  # Careers Page
│   ├── 📁 privacy-policy/           # Privacy Policy
│   │
│   └── 📁 api/                      # API Routes
│       └── 📁 submit-form/
│           └── 📄 route.js          # ✏️ Google Sheets API handler
│
├── 📁 components/                   # Reusable Components
│   ├── 📁 layout/
│   │   ├── 📄 header.js             # ✏️ EDIT: Navigation & logo
│   │   ├── 📄 footer.js             # ✏️ EDIT: Footer links & info
│   │   ├── 📄 bgLayout.js           # Background wrapper (teal theme)
│   │   └── 📄 cool-header.js        # Animated header
│   │
│   ├── 📁 sections/                 # Homepage Sections
│   │   ├── 📄 services.js           # ✏️ EDIT: Products showcase
│   │   ├── 📄 offering.js           # ✏️ EDIT: Accessories showcase
│   │   ├── 📄 safety.js             # ✏️ EDIT: DDA certification & safety
│   │   ├── 📄 testimonials.js       # ✏️ EDIT: Customer testimonials
│   │   ├── 📄 clients.js            # ✏️ EDIT: Client logos
│   │   ├── 📄 faqs.js               # ✏️ EDIT: FAQ section
│   │   ├── 📄 form.js               # Homepage contact form
│   │   └── 📄 floatCta.js           # Floating CTA button
│   │
│   └── 📁 ui/                       # UI Components
│       └── 📄 hover-expand.js       # Desktop product slider
│
├── 📁 public/                       # Static Assets
│   ├── 📁 home/          
│       ├── 📁 images/               # ✏️ Homepage images
│       └── 📁 videos/               # ✏️ Homepage videos
│   ├── 📁 about/                    # ✏️ About images
│   ├── 📁 accessories/              # ✏️ Accessories images
│   ├── 📁 products/                 # ✏️ Product images
│   ├── 📁 careers/                  # ✏️ Careers images
│   ├── 📁 contact/                  # ✏️ Contact images
│   └── 📁 clients/                  # ✏️ Client logos
│   ├── 📄 icon.png                  # Icon of Site
│   └── 📄 logo.png                  # Logo of Site
│
├── 📁 lib/                          # Utilities
│   └── 📄 utils.js                  # Utility functions
│
├── 📄 .env                          # ✏️ Environment variables (Google Sheets)
├── 📄 next.config.mjs               # Next.js configuration
├── 📄 tailwind.config.js            # Tailwind configuration
├── 📄 package.json                  # Dependencies
└── 📄 README.md                     # This file!
```

### 🎯 Key Files to Edit

| File | Purpose | What to Edit |
|------|---------|--------------|
| `app/products/products.json` | Product data | Add/edit elevator models |
| `app/accessories/accessories.json` | Accessory data | Add/edit accessories |
| `components/sections/services.js` | Product showcase | Change product descriptions |
| `components/sections/testimonials.js` | Reviews | Add customer testimonials |
| `components/layout/footer.js` | Footer | Update contact info, links |
| `components/sections/safety.js` | Certifications | Manage certification badges |
| `.env` | Secrets | Google Sheets credentials |

---

## ⚙️ Installation & Setup

### Prerequisites
```bash
Node.js 18+ 
npm or yarn
Git
```

### Step 1: Clone Repository
```bash
git clone <repository-url>
cd vertical
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create `.env` file in root directory:

```env
# Google Sheets API Configuration
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account@project-id.iam.gserviceaccount.com"
GOOGLE_SHEETS_SPREADSHEET_ID="your-spreadsheet-id-here"
```

### Step 4: Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

### Step 5: Build for Production
```bash
npm run build
npm start
```

---

## 🔧 Configuration

### Google Sheets Setup (Form Backend)

#### 1. Create Google Cloud Project
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create new project: "Vertical Elevators"
- Enable **Google Sheets API** and **Google Drive API**

#### 2. Create Service Account
- Navigate to: IAM & Admin → Service Accounts
- Click "Create Service Account"
- Name: `sheets-form-handler`
- Role: **Editor**
- Create JSON key and download

#### 3. Create Google Sheet
- Create new Google Sheet
- Create 4 sheets (tabs):
  - `CTA Form`
  - `Contact Page`
  - `Product Page`
  - `Accessories Page`

#### 4. Share Sheet with Service Account
- Open your Google Sheet
- Click "Share"
- Add service account email from JSON file
- Grant **Editor** permissions

#### 5. Get Sheet ID
From URL: `https://docs.google.com/spreadsheets/d/`**`SHEET_ID`**`/edit`

#### 6. Update `.env`
- `GOOGLE_SHEETS_PRIVATE_KEY` - From JSON file
- `GOOGLE_SHEETS_CLIENT_EMAIL` - From JSON file
- `GOOGLE_SHEETS_SPREADSHEET_ID` - From Sheet URL

---

## 📝 Content Management

### Adding New Products

**File:** `app/products/products.json`

```json
{
  "slug": "machine-room-lifts",
  "model": "VML Series",
  "category": "machine-room-lifts",
  "type": "Traction Elevator",
  "tagline": "Traditional Reliability Meets Modern Technology",
  "description": "High-speed traction elevators...",
  "longDescription": "Detailed description here...",
  "images": [
    "/products/machine-room/image1.jpg",
    "/products/machine-room/image2.jpg"
  ],
  "specifications": {
    "capacity": "630-1600 Kg",
    "speed": "1.0-4.0 m/s",
    "floors": "Up to 40 floors"
  },
  "advantages": [
    "High speed and efficiency",
    "Suitable for high-rise buildings"
  ]
}
```

### Adding New Accessories

**File:** `app/accessories/accessories.json`

```json
{
  "slug": "vvvf-drive-basic",
  "model": "VVVF-2000",
  "category": "vvvf-drive",
  "type": "Variable Voltage Variable Frequency",
  "tagline": "Smooth and Energy Efficient",
  "description": "Advanced VVVF drive system...",
  "images": ["/services/vvvf.webp"],
  "specifications": {
    "power": "5.5-15 KW",
    "voltage": "380V AC",
    "frequency": "50/60 Hz"
  },
  "advantages": [
    "Energy efficient operation",
    "Smooth acceleration"
  ]
}
```

### Updating Homepage Sections

#### Services Section
**File:** `components/sections/services.js`

Edit the `images` array to modify products displayed on homepage.

#### Testimonials
**File:** `components/sections/testimonials.js`

```javascript
const testimonials = [
  {
    name: "Customer Name",
    company: "Company Name",
    role: "CEO",
    image: "/clients/photo.jpg",
    rating: 5,
    text: "Testimonial text here..."
  }
];
```

#### Client Logos
**File:** `components/sections/clients.js`

Add logos to `/public/clients/` folder and update component.

---

## 🎨 Customization Guide

### Color Theme

**Current Theme:** Teal Gradient

```css
/* Tailwind Colors Used */
Primary: #297074
Dark: #075056
Medium: #4A8E94
Light: #91C5C8
Background: #F0F4F5
```

**To Change Theme:**

1. Update `components/layout/bgLayout.js` - Background gradients
2. Update button colors in all components
3. Search & replace hex codes across components

### Fonts

**File:** `app/layout.js`

```javascript
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```

Change to any Google Font.

### Logo

**Files to Update:**
- `components/layout/header.js` - Main logo
- `components/layout/footer.js` - Footer logo
- `public/logo.png` - Logo image file

### Contact Information

**File:** `components/layout/footer.js`

```javascript
const contactInfo = {
  phone: "+91-XXXXXXXXXX",
  email: "info@verticalelevators.com",
  address: "Your Address Here"
};
```

---

## 🤖 AI Prompt for Editing

Copy and paste this prompt when asking AI to make changes:

```
I'm working on the Vertical Elevators Next.js website. Here's the context:

TECH STACK:
- Next.js 15 with App Router
- React 18, Tailwind CSS, Framer Motion
- Google Sheets API for form storage
- JSON-based content management

PROJECT STRUCTURE:
- Products: app/products/products.json & app/products/categories.json
- Accessories: app/accessories/accessories.json & app/accessories/categories.json
- Homepage sections: components/sections/
- Forms API: app/api/submit-form/route.js
- Layouts: components/layout/

COLOR THEME:
- Primary: #297074 (Teal)
- Dark: #075056
- Medium: #4A8E94
- Light: #91C5C8

FORMS INTEGRATION:
- All forms submit to /api/submit-form
- Data saved to Google Sheets (4 sheets: CTA Form, Contact Page, Product Page, Accessories Page)
- Environment variables in .env

TASK:
[Describe your specific task here]

Please:
1. Maintain the existing teal color theme
2. Follow the current component structure
3. Use Framer Motion for animations
4. Keep mobile responsiveness
5. Update JSON files for content changes
6. Test all changes before confirming
```

### Example AI Requests

**Add New Product:**
```
Using the AI prompt above, add a new product called "Capsule Elevator Premium" 
to the Capsule Lifts category. Model: VCE-P2000, capacity: 8-10 persons, 
speed: 1.0 m/s. Add 3 advantages and specifications.
```

**Change Color Theme:**
```
Using the AI prompt above, change the entire website theme from teal 
(#297074) to royal blue (#1E40AF). Update all gradients, buttons, and 
hover effects across all components.
```

**Add Testimonial:**
```
Using the AI prompt above, add a new testimonial from "John Smith, CEO of 
BuildRight Construction" with 5 stars saying "Best elevator service in Delhi!"
```

---

## 📊 Google Sheets Integration

### Form Data Structure

Each sheet contains these columns:

#### Product Page / Accessories Page
| Timestamp | Name | Email | Phone | Product/Accessory Name | Message |
|-----------|------|-------|-------|------------------------|---------|

#### Contact Page
| Timestamp | Name | Email | Phone | Subject | Message |
|-----------|------|-------|-------|---------|---------|

#### CTA Form
| Timestamp | Name | Email | Phone | Service | Message |
|-----------|------|-------|-------|---------|---------|

### Form Submission Flow

```
User fills form → Frontend validates → POST /api/submit-form 
→ Google Sheets API → Data saved to appropriate sheet 
→ Success response → Thank you modal
```

### Troubleshooting Forms

**Issue:** Forms not submitting
```bash
# Check API route
cat app/api/submit-form/route.js

# Verify environment variables
echo $GOOGLE_SHEETS_CLIENT_EMAIL

# Check Google Sheets sharing permissions
# Service account must have Editor access
```

**Issue:** Wrong sheet name
- Update `SHEET_NAMES` in `app/api/submit-form/route.js`
- Ensure sheet names match exactly (case-sensitive)

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Environment Variables:**
Add all `.env` variables in Vercel dashboard:
- Project Settings → Environment Variables
- Add: `GOOGLE_SHEETS_PRIVATE_KEY`, `GOOGLE_SHEETS_CLIENT_EMAIL`, `GOOGLE_SHEETS_SPREADSHEET_ID`

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy 'out' folder
```

#### AWS / DigitalOcean
```bash
# Build
npm run build

# Start with PM2
pm2 start npm --name "vertical" -- start
```

---

## 📧 Support

### Common Issues

**Q: Forms not working?**
- Check Google Sheets API credentials
- Verify service account has Editor access
- Check `.env` variables are set

**Q: Images not loading?**
- Ensure images are in `/public/` folder
- Use correct path: `/folder/image.webp`
- Check file extensions match code

**Q: Build errors?**
- Delete `.next` folder and rebuild
- Update dependencies: `npm update`
- Check Node.js version (18+)

**Q: Styling issues?**
- Run `npm run build` to check for errors
- Verify Tailwind classes are correct
- Check `tailwind.config.js` configuration

---


<div align="center">

### 🎉 You're All Set!

**Start developing with:**
```bash
npm run dev
```

**Need help?** Don't hesitate to reach out!

---

**Created with ❤️ by [Kaizen](mailto:kaizen.official.hub@gmail.com)**

*Building digital experiences that elevate your business*

[![Email](https://img.shields.io/badge/Email-kaizen.official.hub%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kaizen.official.hub@gmail.com)

</div>