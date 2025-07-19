# Weather App CI/CD Pipeline

This repository uses GitHub Actions to automate building, testing, and deploying the Weather App.

## Workflows

### 1. Docker Build & Publish
- **File:** `.github/workflows/docker-publish.yml`
- **Purpose:** Builds and pushes a Docker image to GitHub Container Registry on every push to `main`.

### 2. Integration Tests
- **File:** `.github/workflows/integration-test.yml`
- **Purpose:** Runs integration tests using the published Docker image on every push.

### 3. Deploy to GitHub Pages
- **File:** `.github/workflows/deploy.yml`
- **Purpose:** Deploys the Weather App to GitHub Pages on every push to `main` or when triggered manually.

## Deployment Workflow Details

- **Node.js Setup:** Uses Node.js v18.
- **Secrets:** Requires `OPENWEATHER_API_KEY` to be set in repository secrets.
- **Build Steps:**
  - Installs dependencies.
  - Injects API key into the app.
  - Copies files to the `dist` directory.
- **Deployment:** Publishes the `dist` directory to GitHub Pages using [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages).

## How to Use

1. **Set Secrets:**
   - Go to your repository Settings > Secrets and add `OPENWEATHER_API_KEY`.

2. **Push to Main:**
   - Any push to the `main` branch will trigger the deployment workflow.

3. **Manual Deploy:**
   - Go to the Actions tab and trigger the "Deploy Weather App to GitHub Pages" workflow manually.

## Folder Structure

```
ICA1-CICD/
├── .github/
│   └── workflows/
│       ├── docker-publish.yml
│       ├── integration-test.yml
│       └── deploy.yml
├── public/
│   └── index.html
├── src/
│   └── weather.js
├── Dockerfile
└── ...
```

## License

This project is licensed under the MIT License.