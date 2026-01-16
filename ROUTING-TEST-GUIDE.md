# 🧪 ROUTING TEST GUIDE - QUICK REFERENCE

**Purpose:** Quick testing checklist for routing verification  
**Status:** ✅ Ready to test

---

## 🚀 LOCAL TESTING

### **Start Development Server**
```bash
npm run dev
# or
pnpm dev
```

---

## ✅ NAVIGATION TESTING CHECKLIST

### **Desktop Navigation Bar**
Test clicking each link:

**Services Dropdown:**
- [ ] Cloud Practice
- [ ] Digital & Product Engineering
- [ ] Big Data
- [ ] App Modernization
- [ ] Security
- [ ] Database Management
- [ ] ERP & Testing

**Products Dropdown:**
- [ ] Agent Studio
- [ ] Atlas API Manager
- [ ] Ottohm Video
- [ ] ITSM Ticketing
- [ ] AI Ops Platform
- [ ] Smart Contracts

**AI Dropdown:**
- [ ] AI (main page)
- [ ] BFSI Agents
- [ ] Brand Management Agents

**Who We Are Dropdown:**
- [ ] Our Team
- [ ] About Us
- [ ] Partners
- [ ] Careers
- [ ] News & Updates

**Other:**
- [ ] Case Studies (nav link)
- [ ] Logo (home)

---

### **Mobile Navigation (Hamburger Menu)**
Open mobile menu and test:
- [ ] Services dropdown expands
- [ ] Products dropdown expands
- [ ] AI dropdown expands
- [ ] Who We Are dropdown expands
- [ ] All sub-links work
- [ ] Case Studies works
- [ ] Logo returns home

---

### **Footer Links**
Test footer navigation:
- [ ] Services links work
- [ ] Products links work
- [ ] Who We Are links work
- [ ] Case Studies works

---

## 🔗 DIRECT URL TESTING

### **Copy/Paste These URLs Into Browser:**

**Local Development (http://localhost:5173):**
```
http://localhost:5173/
http://localhost:5173/services/cloud-practice
http://localhost:5173/services/digital-engineering
http://localhost:5173/services/big-data
http://localhost:5173/services/app-modernization
http://localhost:5173/services/security
http://localhost:5173/services/database-management
http://localhost:5173/services/erp-testing
http://localhost:5173/products/agent-studio
http://localhost:5173/products/atlas-api-manager
http://localhost:5173/products/ottohm-video
http://localhost:5173/products/itsm-ticketing
http://localhost:5173/products/ai-ops
http://localhost:5173/products/smart-contracts
http://localhost:5173/ai
http://localhost:5173/ai/bfsi-agents
http://localhost:5173/ai/brand-management
http://localhost:5173/who-we-are/our-team
http://localhost:5173/who-we-are/about-us
http://localhost:5173/who-we-are/partners
http://localhost:5173/who-we-are/careers
http://localhost:5173/who-we-are/news-updates
http://localhost:5173/case-studies
```

**After Production Deployment:**
Replace `http://localhost:5173` with your domain (e.g., `https://yourdomain.com`)

---

## 🔄 BROWSER BEHAVIOR TESTING

### **Test on Each Page:**
1. **Navigate to page** (via link or URL)
2. **Check URL bar** - Does it show correct path?
3. **Press browser Back button** - Does it go to previous page?
4. **Press browser Forward button** - Does it return?
5. **Press F5 or Ctrl+R (Refresh)** - Does page load correctly?
6. **Bookmark the page** - Does bookmark work later?

### **Test This Flow:**
```
Home → Services → Cloud Practice → Back → Forward → Refresh
       ↓
       Products → Agent Studio → Refresh → Home (logo) → Back
                  ↓
                  AI → BFSI Agents → Refresh → Case Studies
```

**Expected Results:**
- ✅ URL updates on each navigation
- ✅ Back/Forward buttons work correctly
- ✅ Refresh doesn't break or redirect to home
- ✅ Bookmarks load correct page

---

## 🌐 BROWSER COMPATIBILITY

### **Test in Multiple Browsers:**
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers (Chrome/Safari on phone)

### **Check:**
- [ ] Navigation works in all browsers
- [ ] URLs update correctly
- [ ] Back/Forward work
- [ ] Refresh works
- [ ] No console errors

---

## 📱 MOBILE DEVICE TESTING

### **Test on Actual Mobile Device:**
1. **Open site on phone/tablet**
2. **Test hamburger menu navigation**
3. **Test direct URL access**
4. **Test browser back/forward**
5. **Test page refresh**
6. **Share a link** - does it work when clicked?

---

## 🚨 ERROR CHECKING

### **Open Browser Console (F12)**

**Check for Errors:**
- [ ] No 404 errors
- [ ] No routing errors
- [ ] No component import errors
- [ ] No navigation warnings

**Watch for:**
- ❌ `Cannot read property of undefined`
- ❌ `Module not found`
- ❌ `Failed to load resource: 404`
- ❌ `Navigation blocked`

**Expected:**
- ✅ No errors in console
- ✅ Clean routing logs only

---

## 🎯 SPECIFIC SCENARIOS

### **Scenario 1: Deep Link from Email/Slack**
1. Send yourself a link: `http://localhost:5173/services/cloud-practice`
2. Click link in email/Slack
3. **Expected:** Page loads directly, not redirected to home

### **Scenario 2: Bookmark and Return**
1. Navigate to any service page
2. Bookmark it (Ctrl+D)
3. Close browser
4. Reopen browser and click bookmark
5. **Expected:** Returns to exact same page

### **Scenario 3: Share Link**
1. Navigate to any product page
2. Copy URL from address bar
3. Open incognito/private window
4. Paste URL and press Enter
5. **Expected:** Page loads correctly

### **Scenario 4: Browser Navigation**
1. Click through: Home → Services → Products → AI → Case Studies
2. Press Back button 4 times
3. **Expected:** Returns through all pages in reverse order
4. Press Forward button 4 times
5. **Expected:** Moves forward through all pages again

### **Scenario 5: Refresh at Any Point**
1. Navigate to any deep page (e.g., `/ai/bfsi-agents`)
2. Press F5 or Refresh button
3. **Expected:** Page reloads correctly, stays on same URL

---

## 📊 POST-DEPLOYMENT VERIFICATION

### **After Deploying to Vercel/Netlify/Render:**

1. **Test All Direct URLs** (replace with your domain)
   ```
   https://yourdomain.com/services/cloud-practice
   https://yourdomain.com/products/agent-studio
   https://yourdomain.com/ai/bfsi-agents
   https://yourdomain.com/who-we-are/our-team
   https://yourdomain.com/case-studies
   ```

2. **Test 404 Handling**
   ```
   https://yourdomain.com/not-a-real-page
   ```
   **Expected:** Redirects to home page

3. **Test SEO Crawling**
   - Visit: `https://www.google.com/search?q=site:yourdomain.com`
   - **Expected:** Google can index individual pages

4. **Test Social Sharing**
   - Share link on Twitter/LinkedIn/Slack
   - Click the shared link
   - **Expected:** Direct link works, no redirect

---

## ✅ SUCCESS CRITERIA

### **All Tests Pass When:**
- ✅ Every navigation link works
- ✅ Direct URLs load correct pages
- ✅ Browser back/forward buttons work
- ✅ Page refresh doesn't break navigation
- ✅ URLs update in address bar
- ✅ Bookmarks work
- ✅ Shared links work
- ✅ Console shows no errors
- ✅ Mobile navigation works
- ✅ All browsers work correctly

---

## 🐛 COMMON ISSUES & FIXES

### **Issue: Direct URL returns 404**
**Cause:** SPA rewrite not configured  
**Fix:** Verify `/public/_redirects` or `/vercel.json` exists

### **Issue: Refresh redirects to home**
**Cause:** Missing fallback route  
**Fix:** Check hosting platform SPA configuration

### **Issue: Component not found**
**Cause:** Import path incorrect  
**Fix:** Verify imports in App.tsx use `/src/pages/*`

### **Issue: Navigation doesn't update URL**
**Cause:** Using window.location instead of navigate()  
**Fix:** Use navigationHelper functions

### **Issue: Console shows routing errors**
**Cause:** Missing route or incorrect path  
**Fix:** Check App.tsx routes match navigation paths

---

## 📝 TESTING NOTES

### **Expected Behavior:**
- Navigation is **instant** (no page reload)
- URLs **update** on every navigation
- Browser **back/forward** work like multi-page site
- **Refresh** loads correct page (no redirect)
- **Direct URLs** work without going through home first

### **NOT Expected:**
- ❌ Page reloads on navigation (should be instant)
- ❌ URL stays at `/` when navigating
- ❌ Refresh sends you back to home
- ❌ Direct URLs show 404
- ❌ Browser back button doesn't work

---

## 🎉 READY TO TEST

**Start testing now:**
```bash
npm run dev
```

**Then work through this checklist systematically.**

Good luck! 🚀
