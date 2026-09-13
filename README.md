# DevStack Builder

A modern and responsive web application for exploring development technologies and building a personalized technology stack.

Users can browse available technologies, select one technology from each category, manage their selected stack, and get instant feedback through toast notifications.

## 🚀 Live Demo

[Visit the Live Website](https://silver-capybara-67135d.netlify.app/)

## ✨ Features

- 🧩 **Build Your Tech Stack**  
  Select technologies and create your own personalized development stack.

- 🚫 **One Technology Per Category**  
  Users can select only one technology from each category to keep the stack organized.

- 📋 **Stack Management**  
  View selected technologies, remove individual items, or remove the entire stack.

- 🔔 **Toast Notifications**  
  Get instant feedback when adding, removing, or selecting an already-used category.

- 📱 **Responsive Design**  
  Fully responsive interface for desktop, tablet, and mobile devices.

- 🍔 **Mobile Navigation**  
  Mobile-friendly hamburger menu with responsive navigation.

- ⏳ **Loading State**  
  Displays a loading state while technology data is being fetched.

- 📄 **JSON-Based Technology Data**  
  Technology information is loaded from a JSON file instead of being hardcoded inside components.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- React Icons
- JSON
- Git & GitHub

## ⚛️ React Concepts Used

This project helped me practice:

- Components
- Props
- State
- `useState`
- `use()`
- `Suspense`
- Conditional Rendering
- `.map()`
- Unique `key` props
- Parent-to-child data passing
- Child-to-parent communication
- Event handling
- TypeScript interfaces and types

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Banner.tsx
│   ├── Footer.tsx
│   ├── Nav.tsx
│   └── Technology/
│       ├── Technology.tsx
│       ├── TechnologyCard.tsx
│       └── YourStuck.tsx
├── type/
│   └── type.ts
├── App.tsx
└── index.css

public/
└── data.json
