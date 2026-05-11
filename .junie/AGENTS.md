# Syriaplast Website – Project Overview

## About the Project

This is the official website for **Syriaplast (سوريا بلاست)**, a Syrian plastic manufacturing company based in **Hasyia Industrial City, Homs, Syria**. The company specializes in infrastructure products including HDPE water pipes, corrugated sewer pipes, plastic inspection chambers, and multi-layer water tanks. The website is bilingual (Arabic primary, with English support) and targets government, municipal, and private sector infrastructure projects.

## Tech Stack

- **HTML5** – Static multi-page website
- **CSS** – Custom styles in `css/style.css`
- **JavaScript** – Located in `js/`
- **Webpack** – Bundler configured via `webpack.common.js`, `webpack.config.dev.js`, `webpack.config.prod.js`
- **Node.js / npm** – Dependency management via `package.json`

## Project Structure

```
syriaplast-website/
├── index.html              # Home page
├── about.html              # About Us page
├── services.html           # Services page
├── blog.html               # Blog listing page
├── article-1.html          # Blog article pages
├── article-2.html
├── article-3.html
├── article-4.html
├── contact.html            # Contact page
├── 404.html                # Error page
├── css/
│   └── style.css           # Main stylesheet
├── js/                     # JavaScript files
├── img/                    # Images and media assets
├── webpack.common.js       # Shared Webpack config
├── webpack.config.dev.js   # Development Webpack config
├── webpack.config.prod.js  # Production Webpack config
├── package.json            # npm dependencies and scripts
├── site.webmanifest        # PWA manifest
├── robots.txt              # SEO robots file
├── syriaplast_website_content.md  # Full Arabic website copy/content
└── website_articles.md     # Blog article content
```

## Key Pages & Content

| Page | Description |
|------|-------------|
| `index.html` | Hero section, product capabilities, why Syriaplast, CTA |
| `services.html` | HDPE pipes, sewer pipes, inspection chambers, water tanks, PPR/PVC systems |
| `about.html` | Company history (founded 2016), vision, values, 150+ staff |
| `blog.html` | Technical articles on plastic manufacturing |
| `contact.html` | Location (Hasyia Industrial City), email, phone |

## Company Info

- **Founded:** 2016
- **Location:** Hasyia Industrial City, Homs, Syria
- **Email:** info@syria-plast.com
- **Phone:** +963937775511
- **Products:** HDPE pipes (32–800mm), corrugated sewer pipes (up to 1200mm), plastic inspection chambers, 4-layer water tanks, PPR & PVC systems, PVC industrial panels

## Development Notes

- Run `npm install` to install dependencies.
- Use Webpack scripts defined in `package.json` for building (dev/prod).
- All website copy and SEO content is documented in `syriaplast_website_content.md`.
- Blog article content is in `website_articles.md`.
- The site uses a PWA manifest (`site.webmanifest`) and includes favicon assets in multiple formats.
