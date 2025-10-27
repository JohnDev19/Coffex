# Coffex - Premium Coffee Website Template

A fully responsive website template designed for coffee shops, cafes, and premium beverage businesses. Features an elegant design with a distinctive diamond-shaped theme and smooth animations throughout.

## Template Features

### Design Highlights
- **Premium Aesthetic**: Elegant gold and dark color scheme with custom typography
- **Diamond Theme**: Unique diamond-shaped visual elements throughout the design
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Scroll-triggered animations using AOS (Animate On Scroll) library
- **Modern Layout**: Clean, organized sections with professional spacing

### Included Sections

1. **Hero Section**
   - Full-screen carousel with multiple background images
   - Animated headline and call-to-action
   - Smooth auto-rotating backgrounds

2. **Featured Products**
   - Grid layout showcasing coffee selections
   - Diamond-shaped product cards with hover effects
   - Price tags and detailed descriptions

3. **Services Section**
   - Three-column service display
   - Custom icons with hover animations
   - Subtle chain pattern background for texture

4. **Menu Section**
   - Dual-column menu layout
   - High-quality product images
   - Detailed pricing and descriptions
   - Elegant diamond divider between columns

5. **About Section**
   - Story section with company history
   - Circular rotating badge with "Since 2010" text
   - Decorative coffee sack image (desktop only)
   - Textured chain pattern background

6. **Blog/Stories Section**
   - Article cards with images
   - Date, category tags, and excerpts
   - Read more links with hover effects

7. **Contact Section**
   - Contact form with validation-ready inputs
   - Location and contact information
   - Social media links
   - Decorative background elements

8. **Footer**
   - Multi-column layout with links
   - Newsletter subscription area
   - Social media integration
   - Copyright information

## How to Use

### Quick Start
1. Open `index.html` in your web browser to preview the template
2. Customize the content by editing the HTML files
3. Modify colors and styling in `styles.css`
4. Update images in the `assets/images/` folder with your own

### Customization Guide

#### Changing Colors
The template uses CSS custom properties for easy color customization. Edit these variables in `styles.css`:

```css
:root {
    --primary: #0a0a0a;       /* Dark background */
    --secondary: #1a1a1a;     /* Secondary dark */
    --accent: #E4C590;        /* Gold/tan accent color */
    --text-light: #ffffff;    /* Light text */
    --text-muted: #999999;    /* Muted text */
}
```

#### Updating Content
- **Company Name**: Search for "Coffex" in `index.html` and replace with your brand name
- **Contact Info**: Update phone, email, and address in the top info bar and contact section
- **Menu Items**: Edit the menu section with your products and prices
- **About Story**: Replace the about section text with your company's story
- **Social Media**: Update social media links in the footer

#### Replacing Images
All images are located in `assets/images/`. Replace them with your own:
- **Logo**: `logo.png` (recommended size: 100x100px)
- **Hero Backgrounds**: `hero-bg1.jpg` to `hero-bg4.jpg` (1920x1080px recommended)
- **Product Images**: Update coffee images in the featured and menu sections
- **About Image**: `about.jpg` (800x600px recommended)

#### Modifying Typography
The template uses Google Fonts:
- **Headlines**: Marcellus (serif)
- **Decorative Text**: Forum (serif)
- **Body Text**: System fonts

To change fonts, update the Google Fonts link in `index.html` and modify font-family properties in `styles.css`.

### Form Integration
The contact form is ready for integration with your backend or form service:
- Add your form action URL to the `<form>` tag
- Integrate with services like Formspree, Netlify Forms, or your custom backend
- Form fields include: name, email, phone, and message

### Navigation
The template includes smooth scrolling navigation:
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with slide-in panel
- All links use anchor tags for smooth scrolling to sections

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints: 768px (tablet), 1024px (desktop), 1280px (large desktop)

## File Structure

```
coffex-template/
├── index.html                 # Main HTML file
├── styles.css                 # Main stylesheet
├── script.js                  # JavaScript for interactions
├── logo.png                   # Company logo
├── assets/
│   └── images/               # All image assets
│       ├── hero-bg1-4.jpg    # Hero backgrounds
│       ├── coffee-sack.png   # Decorative element (overlaps menu/about)
│       ├── pattern-bg.png    # Background pattern for services/about
│       └── [product images]  # Coffee and menu images
└── README.md                 # This file
```

## Design Elements

### Decorative Features
- **Coffee Sack Overlay**: Positioned between menu and about sections (desktop only)
- **Coffee Pattern Background**: Background pattern in services and about sections
- **Diamond Shapes**: Consistent diamond motif throughout the site
- **Animated Elements**: Scroll-triggered fade and slide animations

### Responsive Behavior
- **Mobile (< 768px)**: Single column layout, hamburger menu, simplified spacing
- **Tablet (768px - 1023px)**: Two-column grids, optimized spacing
- **Desktop (≥ 1024px)**: Full multi-column layouts, all decorative elements visible
- **Large Desktop (≥ 1280px)**: Maximum width containers, larger decorative elements

## Credits

### External Libraries
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - v2.3.1
- [Font Awesome](https://fontawesome.com/) - v6.4.0
- [Google Fonts](https://fonts.google.com/) - Forum & Marcellus typefaces

---

**Template Version**: 1.0  
**Last Updated**: October 28, 2025  
**License**: Free to use for personal and commercial projects. [MIT](MIT)
