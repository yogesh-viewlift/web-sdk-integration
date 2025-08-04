# Viewlift Web SDK Quickstart

Welcome to the **Viewlift Web SDK Quickstart** repository! This project provides a fully functional React application designed to demonstrate the seamless integration of Viewlift's **Player**, **Auth**, and **Analytics** Web SDKs. Crafted for developers, this quickstart enables rapid adoption of Viewlift’s powerful SDKs by offering preconfigured, production-ready code that can be easily copied and pasted into your own React projects. The application showcases a practical implementation with a home page, a not-found page, and reusable components, providing a real-world example of how to leverage Viewlift’s SDKs for media playback, user authentication, and analytics tracking.

## Table of Contents
- [Purpose](#purpose)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Quickstart Code Snippets](#quickstart-code-snippets)
- [Support](#support)

## Purpose
The Viewlift Web SDK Quickstart serves as a comprehensive reference for developers looking to integrate Viewlift’s Web SDKs into their React applications. The included React app demonstrates key functionalities:
- **User Authentication**: Securely authenticate users using the Viewlift Auth SDK, enabling access to protected content and personalized experiences.
- **Media Playback**: Stream high-quality video content with the Viewlift Player SDK, offering a customizable and responsive player interface.
- **Analytics Tracking**: Monitor user interactions and engagement metrics with the Viewlift Analytics SDK, providing insights into content consumption and user behavior.

This repository is designed for **plug-and-play** use, allowing developers to quickly copy and paste code snippets and configurations into their projects. The application includes a sample home page with a content tray, a not-found page for handling invalid routes, and a dedicated `VlPlayer` component for SDK integration, making it easy to adapt to your own use cases. For detailed code examples, see [quickstart.md](./quickstart.md).

## Repository Structure
The repository is structured to provide a clear and organized React application, with all necessary files and configurations for integrating Viewlift’s SDKs. Below is the folder structure:

```
web-sdk-quickstart/
├── react-app/
│   ├── src/
│   │   ├── App.jsx                    # Main app component with client-side routing
│   │   ├── index.jsx                  # Entry point for the React application
│   │   ├── styles/
│   │   │   └── main.css               # Global CSS styles
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── index.js           # Home page component with content tray
│   │   │   │   └── style.scss         # SCSS styles for the home page
│   │   │   ├── Not found/
│   │   │   │   ├── index.js           # 404 page component for invalid routes
│   │   │   │   └── style.scss         # SCSS styles for the not-found page
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   │   ├── index.js           # Header component for navigation
│   │   │   │   └── style.scss         # SCSS styles for the header
│   │   │   ├── Tray/
│   │   │   │   ├── index.js           # Tray component for displaying content
│   │   │   │   ├── style.scss         # SCSS styles for the tray
│   │   │   │   └── traydata/         # Sample data for the content tray
│   │   │   ├── VlPlayer/
│   │   │   │   ├── index.js           # Player component with SDK integration
│   │   │   │   ├── style.scss         # SCSS styles for the player
│   │   │   │   └── config.js         # Configuration for Player and Auth SDKs
│   ├── package.json                   # Dependencies and build scripts
│   ├── .gitignore                    # Git ignore file for the React app
├── quickstart.md                      # Code snippets for SDK integration
├── README.md                          # This file
├── .gitignore                         # Root git ignore file
```

The `react-app` directory contains a complete React application with client-side routing (via `react-router-dom`), styled with SCSS, and configured to demonstrate Viewlift SDK integration. The `VlPlayer` component, located in `src/components/VlPlayer/`, is the core of the SDK integration, using `config.js` for Player and Auth settings.

## Prerequisites
To run the quickstart application, ensure you have the following installed and configured:
- **Node.js** (version 16 or higher) and **npm** (or **Yarn**) for managing dependencies and running the application.
- **Viewlift API Keys**: Obtain your API keys from the [Viewlift Dashboard](https://dashboard.viewlift.com) to configure the SDKs for authentication, media playback, and analytics.
- A modern web browser (e.g., Chrome, Firefox, Edge) for testing the application.
- (Optional) A code editor like Visual Studio Code for editing configuration files and exploring the codebase.

Ensure you have a stable internet connection to fetch the Viewlift SDKs (e.g., via npm or CDN) and access the Viewlift API endpoints.

## Getting Started
Follow these steps to set up and run the React quickstart application locally:

1. **Clone the Repository**:
   Clone the `web-sdk-quickstart` repository from GitHub and navigate to the `react-app` directory:
   ```bash
   git clone https://github.com/[YourOrg]/web-sdk-quickstart.git
   cd web-sdk-quickstart/react-app
   ```

2. **Install Dependencies**:
   Install the required npm packages, including the Viewlift SDK and other dependencies (e.g., react-router-dom, sass):
   ```bash
   npm install
   ```
3. Configure Viewlift SDKs:
   Update the SDK configuration file at react-app/src/components/VlPlayer/config.js with your Viewlift API keys. The file should look like this:
   ```javascript
   export const sdkConfig = {
      apiKey: 'YOUR_API_KEY',
      authEndpoint: 'https://api.viewlift.com/auth',
      defaultVideoId: 'sample-video-123',
      trackingId: 'analytics-123',
   };
   ```
   Replace 'YOUR_API_KEY' with your actual API key from the Viewlift Dashboard. Ensure the authEndpoint and other settings match your Viewlift account configuration.

4. Start the Development Server: Launch the React development server to run the application locally:
   ```bash
   npm start
   ```
   This will start the app at http://localhost:3000. Open this URL in your browser to view the application.

5. Explore the Application:

    Home Page (/): 
    - Displays a content tray (via the Tray component) with sample data, showcasing how to present Viewlift content.
    - Plus, the features the VlPlayer component, which integrates the Viewlift Player, Auth, and Analytics SDKs for media playback and tracking.
    Not Found Page (/*): 
    - Handles invalid routes, demonstrating robust routing with react-router-dom.

6. Customize for Your Project:

   - Copy the VlPlayer component and its config.js file to your own React project.
   - Use the snippets in quickstart.md to integrate the SDKs into your application.
   - Adjust the Tray component’s data (in react-app/src/components/Tray/traydata/) to match your content.

## Quickstart Code Snippets
For minimal, production-ready code snippets to integrate Viewlift’s Player, Auth, and Analytics SDKs, refer to [quickstart](https://github.com/yogesh-viewlift/web-sdk-quickstart/tree/main/react-app#quickstart-code-snippets). This guide provides ready-to-use examples for quick integration.



## Support
For assistance, contact support@viewlift.com or open an issue on the GitHub repository. For detailed SDK documentation, visit [docs.viewlift.com](https://developer.viewlift.com/docs/web-tve-authentication#/).

