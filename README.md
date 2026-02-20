# Shibu - Developer Portfolio

A sleek, highly interactive, and dark-themed terminal-aesthetic portfolio built by a developer, for developers. 

This project fuses brutalist UI design with modern web technologies, showcasing a unique "command-line" inspired approach to presenting professional work, skills, and contact systems.

## 🚀 Built With

*   **Next.js (App Router):** The core React framework powering the server-side rendering and routing.
*   **React:** For UI state, hooks, and scalable component architecture.
*   **Tailwind CSS:** For the incredibly granular, utility-first custom styling.
*   **Framer Motion:** Powering the highly complex, physics-based springs and micro-animations throughout the UI.
*   **Spotify Web API:** To pull a live stream of the developer's actively playing track (or seamlessly fallback to their last played song when offline).
*   **Google Apps Script (GAS):** Serves as an invisible backend pipeline to route securely-submitted terminal form data directly into a private Google Sheet.

## ✨ Key Features & Aesthetics

*   **Brutalist Terminal Design System:** Everything feels raw, intentionally unpolished, and intensely technical. It uses sharp `#111` boxes, thin `neutral-800` borders, monospace tracking, and `< >` command brackets.
*   **Live Spotify Dashboard:** Features a custom-built, Next.js integrated Spotify widget that scans the live API to display an active EQ matching the currently playing song in the hero section.
*   **Interactive CRT Scanlines:** The `Pfp` and `Spotify` modules include interactive overlays that simulate scanning lasers, glitch borders, and a classic scan-line matrix overlay over images.
*   **3D Aceternity Skill Grid:** Features complex floating "3D" cards mapping core tech skills and frameworks via floating physics.
*   **Animated "Trusted By" Tooltips:** An array of founder and developer profile images configured with spring-loaded physical bounds and custom emerald popups on hover.
*   **Encrypted Payload forms:** The contact module is designed to look like a payload execution terminal, logging out a fake "Transmission Successful" shell line when data is securely sent utilizing a background Google Apps hook.

## 🛠️ Local Development Server setup

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have Node.js (v18+) and npm installed locally.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  Configure your local `.env.local` to securely power the live-streaming Spotify widget:
    ```env
    # SPOTIFY TOKENS
    SPOTIFY_CLIENT_ID=your_client_id
    SPOTIFY_CLIENT_SECRET=your_client_secret
    SPOTIFY_REFRESH_TOKEN=your_refresh_token
    ```
    *If you don't supply these, the component will gracefully fallback to "Currently Offline" terminal logs instead of failing the build.*

4.  Start the development server:
    ```bash
    npm run dev
    ```

5.  Open `http://localhost:3000` to view the matrix.

## 📁 Repository Structure

```
├── public/                 # Static assets (favicons, svgs, local profile images)
├── src/
│   ├── app/                # Next.js App Router (pages and global layouts)
│   │   ├── api/            # Serverless API routes (Spotify handoffs)
│   │   ├── globals.css     # Tailwind derivatives & root animation keyframes
│   ├── components/         # Reusable UI architecture (Forms, Spotify Player)
│   │   ├── ui/             # Granular visual modules (Animated Tooltips, 3D Cards)
│   ├── lib/                # Backend API logic, token retrievals, and utilities
```

## 📜 Deployment

The architecture relies exclusively on modern edge computing infrastructure. It is heavily optimized for zero-config deployments to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) out of the box due to the Next.js foundation. 

*Design & Developed by Shibu © 2026. All rights reserved.*
