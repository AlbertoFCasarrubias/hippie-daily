# Hippie Daily

A modern, responsive website inspired by Seedlip's clean design aesthetic. Built with Angular 15 and featuring a component-based architecture.

## 🌐 Live Demo

**Website:** [https://AlbertoFCasarrubias.github.io/hippie-daily/](https://AlbertoFCasarrubias.github.io/hippie-daily/)

## ✨ Features

- **Modern Design**: Clean, minimalist layout inspired by premium beverage brands
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Component Architecture**: Organized with Angular components for maintainability
- **Custom Typography**: Uses Puritan font for elegant typography
- **Smooth Interactions**: Hover effects and transitions throughout

## 🏗️ Project Structure

```
src/app/
├── components/          # Reusable components
│   └── header/         # Header component
├── pages/              # Page components
│   └── home/          # Home page component
├── app.component.*    # Root component
└── app.module.ts      # App module
```

## 🎨 Design Elements

- **Header**: Fixed navigation with logo, menu, country selector, and cart
- **Hero Section**: Large title with product showcase
- **Product Range**: Grid layout for product display
- **Newsletter**: Email signup with modern styling
- **Footer**: Clean footer with essential links

## 🚀 Development

### Prerequisites

- Node.js (v16 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Setup

```bash
# Clone the repository
git clone https://github.com/AlbertoFCasarrubias/hippie-daily.git

# Navigate to project directory
cd hippie-daily

# Install dependencies
npm install

# Start development server
ng serve
```

The app will be available at `http://localhost:4200`

## 📦 Build & Deploy

### Development Build

```bash
ng build
```

### Production Build

```bash
ng build --configuration production
```

### Deploy to GitHub Pages

```bash
# Make the deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

Or manually:

```bash
ng build --configuration production --base-href "https://AlbertoFCasarrubias.github.io/hippie-daily/"
npx angular-cli-ghpages --dir=dist/hippie-daily
```

## 🛠️ Technologies Used

- **Framework**: Angular 15
- **Styling**: SCSS
- **Typography**: Puritan font (Google Fonts)
- **Deployment**: GitHub Pages
- **Build Tool**: Angular CLI

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Future Enhancements

- [ ] Add routing for multiple pages
- [ ] Implement shopping cart functionality
- [ ] Add product detail pages
- [ ] Integrate with a headless CMS
- [ ] Add animations and micro-interactions

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ and Angular
