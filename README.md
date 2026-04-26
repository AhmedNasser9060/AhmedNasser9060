# Ahmed Nasser Eldin - Portfolio Website

A modern, professional portfolio website showcasing AI Engineering expertise, built with static web technologies and optimized for GitHub Pages deployment.

## 🚀 Features

- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Modern Design**: Clean, minimalist UI inspired by top tech company portfolios
- **SEO Optimized**: Complete meta tags and Open Graph tags for social sharing
- **Fast Loading**: Static site with minimal dependencies
- **Accessible**: Semantic HTML and proper focus states
- **Smooth Animations**: Subtle, professional animations throughout

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with Tailwind CSS (CDN)
- **JavaScript**: Vanilla JS for interactivity
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub (e.g., `portfolio` or `ahmednasser-portfolio`)

2. **Upload files** to the repository:
   - Click "Add file" → "Upload files"
   - Drag and drop `index.html`, `styles.css`, and `script.js`
   - Commit the changes

3. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Under "Source", select **main branch** (or your default branch)
   - Select **/ (root)** folder
   - Click **Save**

4. **Access your site**:
   - Your portfolio will be available at: `https://[username].github.io/[repository-name]`
   - It may take a few minutes to go live

### Method 2: Using Git Command Line

1. **Initialize Git repository** (if not already):
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Commit files**:
   ```bash
   git commit -m "Initial portfolio commit"
   ```

4. **Add remote repository**:
   ```bash
   git remote add origin https://github.com/[username]/[repository-name].git
   ```

5. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

6. **Enable GitHub Pages** (follow steps 3-4 from Method 1)

## 🔧 Customization

### Update Personal Information

Edit `index.html` to update:
- Name, title, location (Hero section)
- About section content
- Skills, experience, projects
- Education details
- Contact information

### Change Color Scheme

The site uses Tailwind CSS with a blue/purple gradient theme. To customize:
- Edit the gradient classes in the Hero section
- Modify color classes throughout the HTML
- Update `styles.css` for custom color overrides

### Add/Remove Sections

All sections are clearly marked in `index.html`. Simply:
- Add new sections following the existing structure
- Update navigation links in the `<nav>` element
- Add corresponding IDs for smooth scrolling

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Optimization

The site includes:
- Meta description and keywords
- Open Graph tags for social media sharing
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (when added)

## 📝 Notes

- **Contact Form**: Currently uses `mailto:` links (frontend only). For backend functionality, consider services like:
  - Formspree
  - EmailJS
  - Netlify Forms
  - Custom backend API

- **Analytics**: To add Google Analytics or similar:
  - Add tracking script in `<head>` section of `index.html`

- **Custom Domain**: To use a custom domain:
  1. Add a `CNAME` file with your domain name
  2. Configure DNS settings as per GitHub Pages documentation

## 📄 License

This portfolio is personal and proprietary. All rights reserved.

## 👤 Author

**Ahmed Nasser Eldin**
- Email: ahmednasser9060@gmail.com
- GitHub: [@AhmedNasser9060](https://github.com/AhmedNasser9060)
- LinkedIn: [ahmad-nasser-eldin](https://linkedin.com/in/ahmad-nasser-eldin/)

---

Built with ❤️ for showcasing AI Engineering expertise.
