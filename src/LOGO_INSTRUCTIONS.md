# How to Add Company Logos to the Technology Partners Section

## Overview
The Technology Partners scrolling banner is currently displaying company names as text. Follow these steps to add company logos.

## Step-by-Step Instructions

### 1. Prepare Your Logo Files
- Find and download logos for all 18 companies
- Upload them to your Figma project as images
- When you import from Figma, the logos will be available as `figma:asset/HASH.png` paths

### 2. Import the Logos at the Top of App.tsx
Locate the "LOGO IMPORTS" section near the top of `/App.tsx` (around lines 23-26).

Add your imports like this:
```typescript
// ========================================
// LOGO IMPORTS - Add your company logos here
// ========================================
import googleLogo from "figma:asset/YOUR_GOOGLE_LOGO_HASH.png";
import mntnLogo from "figma:asset/YOUR_MNTN_LOGO_HASH.png";
import liverampLogo from "figma:asset/YOUR_LIVERAMP_LOGO_HASH.png";
import smartadsLogo from "figma:asset/YOUR_SMARTADS_LOGO_HASH.png";
import mediamathLogo from "figma:asset/YOUR_MEDIAMATH_LOGO_HASH.png";
import spotxLogo from "figma:asset/YOUR_SPOTX_LOGO_HASH.png";
import adthorentLogo from "figma:asset/YOUR_ADTHORENT_LOGO_HASH.png";
import tradedeskLogo from "figma:asset/YOUR_TRADEDESK_LOGO_HASH.png";
import amazonLogo from "figma:asset/YOUR_AMAZON_LOGO_HASH.png";
import facebookLogo from "figma:asset/YOUR_FACEBOOK_LOGO_HASH.png";
import verizonLogo from "figma:asset/YOUR_VERIZON_LOGO_HASH.png";
import appnexusLogo from "figma:asset/YOUR_APPNEXUS_LOGO_HASH.png";
import adformLogo from "figma:asset/YOUR_ADFORM_LOGO_HASH.png";
import criteoLogo from "figma:asset/YOUR_CRITEO_LOGO_HASH.png";
import integraladsLogo from "figma:asset/YOUR_INTEGRALADS_LOGO_HASH.png";
import openxLogo from "figma:asset/YOUR_OPENX_LOGO_HASH.png";
import tubemogulLogo from "figma:asset/YOUR_TUBEMOGUL_LOGO_HASH.png";
import rocketfuelLogo from "figma:asset/YOUR_ROCKETFUEL_LOGO_HASH.png";
```

### 3. Add Logo Properties to Company Objects
Find the company arrays (around line 624 and line 647 - there are two sets for the seamless loop).

Add the `logo` property to each company object. For example:
```typescript
{ 
  name: "Google", 
  desc: "API update leveraging new IDspace enabling audience ce deliver to contunie", 
  domain: "google.com", 
  url: "https://about.google",
  logo: googleLogo  // Add this line
},
```

**IMPORTANT:** You need to add the logo property to BOTH sets of companies (the first set and the duplicate set) to maintain the seamless scrolling loop.

### 4. Enable Logo Display in CompanyCard Component
Find the `CompanyCard` component (around lines 29-66).

**Comment out** the TEXT-ONLY VERSION:
```typescript
{/* TEXT-ONLY VERSION (currently active): */}
{/* <h4 className="mb-0">{company.name}</h4> */}
```

**Uncomment** the LOGO VERSION:
```typescript
{/* LOGO VERSION (currently disabled - uncomment when logos are ready): */}
{company.logo ? (
  <a 
    href={company.url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block hover:opacity-80 transition-opacity"
  >
    <img 
      src={company.logo}
      alt={`${company.name} logo`}
      className="h-12 w-auto object-contain"
    />
  </a>
) : (
  <h4 className="mb-0">{company.name}</h4>
)}
```

### 5. Test Your Changes
- Make sure all logos display correctly
- Verify that clicking on a logo opens the company's about page
- Check that the scrolling animation works smoothly
- Ensure logos maintain their aspect ratio and are properly sized

## Company List (18 companies)
1. Google
2. MNTN
3. LiveRamp
4. SmartADs
5. MediaMath
6. SpotX
7. AdThorent
8. The Trade Desk
9. Amazon
10. Facebook
11. Verizon
12. AppNexus
13. Adform
14. Criteo
15. Integral Ad Science
16. OpenX
17. TubeMogul
18. RocketFuel

## Logo Specifications
- **Height:** 48px (h-12 Tailwind class)
- **Width:** Auto (maintains aspect ratio)
- **Format:** PNG recommended for transparency
- **Background:** Logos should work on both light and dark backgrounds

## Troubleshooting
- If a logo doesn't load, check that the import path is correct
- Make sure you've added the logo to both company arrays
- Verify the logo property name matches your import variable name
- Check browser console for any import errors
