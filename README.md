# Portfolio (2023)

An earlier version of my personal portfolio — a React single-page site with a custom cursor,
sectioned scroll layout and a data-driven project catalogue.

Superseded by [`portfolio-website`](https://github.com/Sammy-05/portfolio-website), which is the
current one. Kept here as the 2023 iteration.

## Sections

`Home` · `About` · `Education` · `Work` · `Projects` (with a `ProjectDesc` detail view) · `Footer`,
plus a custom animated `Cursor` component that follows pointer movement across the page.

## Stack

- **React 18** + React Router 6 (Create React App)
- **Font Awesome** for icons
- Project and experience content in `src/data/`

## Running it

The app lives one directory down:

```bash
cd portfolio-website
npm install
npm start       # http://localhost:3000
npm run build
```

## Structure

```
portfolio-website/src/
  components/       # one folder per section
  data/             # projects, education and work history
  assets/
    projectImages/  # project screenshots
```
