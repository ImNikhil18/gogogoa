# Goa Adventure Website

A stunning, animated website showcasing our Goa trip memories. Built with React, Vite, Framer Motion, and Tailwind CSS for optimal performance and beautiful animations.

## Features

- ✨ Smooth, cinematic animations and transitions
- 🖼️ Image carousels with autoplay and navigation
- 🎯 Parallax scrolling effects
- 📱 Fully responsive design
- ⚡ Lightning-fast loading with lazy loading and code splitting
- 🎨 Goa-inspired vibrant color scheme
- 📄 Easy content management via JSON

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Slick** - Carousel component
- **Tailwind CSS** - Utility-first CSS framework
- **React Intersection Observer** - Scroll-based animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── LoadingScreen.jsx    # Animated loading screen
│   ├── Navbar.jsx           # Navigation bar
│   ├── Hero.jsx             # Hero section with image slider
│   ├── Section.jsx          # Reusable content section
│   ├── ImageCarousel.jsx    # Image carousel component
│   ├── Footer.jsx           # Footer with team info
│   ├── ParallaxSection.jsx  # Parallax wrapper
│   └── ImagePreloader.jsx   # Image preloading utility
├── data/
│   └── sections.json        # Content configuration
├── styles/
│   └── globals.css          # Global styles (via Tailwind)
├── App.jsx                  # Main app component
└── main.jsx                 # Entry point
```

## Adding New Sections

The website uses a JSON-based content system. To add a new section:

1. Open `src/data/sections.json`
2. Add a new object to the `sections` array:

```json
{
  "id": "new-section",
  "title": "Section Title",
  "description": "Section description text...",
  "images": [
    "https://images.unsplash.com/photo-xxx?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-yyy?w=800&h=600&fit=crop"
  ],
  "layout": "carousel",
  "animation": "fade-up"
}
```

3. Save the file - the website will automatically update!

## Adding Your Own Images

### Option 1: Use Local Images

1. Create a folder in `public/assets/images/` (e.g., `beaches/`)
2. Add your images to that folder
3. Update `sections.json` to reference them:

```json
"images": [
  "/assets/images/beaches/my-photo.jpg",
  "/assets/images/beaches/another-photo.jpg"
]
```

### Option 2: Use External URLs

Simply add image URLs to the `images` array in `sections.json`:

```json
"images": [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg"
]
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'goa-orange': '#FF6B35',  // Change this
  'goa-blue': '#004E89',    // Change this
  // ... other colors
}
```

### Fonts

Edit `src/index.css` to change fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Animations

Animations are powered by Framer Motion. Edit the components to customize:
- `Hero.jsx` - Hero section animations
- `Section.jsx` - Section scroll animations
- `ImageCarousel.jsx` - Carousel transitions

## Performance

The website is optimized for performance:

- ✅ Lazy loading for all components
- ✅ Image lazy loading
- ✅ Code splitting with manual chunks
- ✅ Preloading critical images
- ✅ Optimized bundle size
- ✅ 60fps smooth animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Team Members

This website was created by:
- Parlapalli Vishnu Vardhan
- Parlapalli Sravan Kumar
- Parlapalli Charan
- Parlapalli Pawan Nikhil

## License

Personal project - All rights reserved.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Built with ❤️ for our Goa adventure