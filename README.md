

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

To develop on this project, many things are to be known:
- This app will be running locally
- The local app does not contains any content.
- All Content are provided by Prismic

So the process to develop is to:
1. Login into prismic
2. Start dev server
3. Start watcher on prismic to sync changes

### Login to prismic

Run this command and log into prismic
```bash
npx prismic@latest login
```

### Start dev server

Start the development server on `http://localhost:3000`:
```bash
npm run dev
```

### Start prismic watcher

```bash
npx prismic@latest sync --watch
```