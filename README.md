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

💡 React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax extension that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to read and allows us to describe the UI in a clear and structured way.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is data managed inside a component that can change over time.

For example, in this project the selected technologies are stored in component state:

const [addStuck, setAddStuck] = useState<TechnologyType[]>([]);

The state updates whenever a user adds or removes a technology.

3. What does the useState hook do, and where did you use it in this project?

useState allows a React component to store and update data.

In this project, it is used to manage:

Selected technologies
Mobile navigation menu state

Example:

const [addStuck, setAddStuck] = useState<TechnologyType[]>([]);

When a user selects a technology, the selected technology is added to the state.

4. What is the purpose of Suspense in React?

Suspense allows a component to display a fallback UI while something it depends on is not ready.

In this project, Suspense is used to show a loading message while the technology data is being loaded.

Example:

<Suspense fallback={<p>Loading....</p>}>
  <Technology technologyPromise={technologyPromise} />
</Suspense>
5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

A unique and stable key helps React efficiently determine which items have changed, been added, or removed.

Example:

technology.map((tech) => (
  <TechnologyCard
    key={tech.id}
    tech={tech}
  />
))

Here, tech.id provides a unique key for each technology.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

For example, the stack displays an empty message when no technology has been selected:

{selectedCount === 0 && (
  <div>
    <p>Your stack is empty.</p>
  </div>
)}

When technologies are selected, the selected technology list is displayed instead.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component through props.

For example:

<TechnologyCard
  tech={tech}
  addStuck={addStuck}
  setAddStuck={setAddStuck}
/>

The child component receives these values through its props.

A child can communicate back to the parent by using a function passed from the parent as a prop.

In this project, setAddStuck allows the technology card to update the selected technology state managed by the parent.

📱 Responsive Layout

The application is designed for:

🖥️ Desktop
💻 Tablet
📱 Mobile
Desktop
Full navigation menu
Three-column technology card layout
Stack sidebar
Tablet
Two-column technology card layout
Responsive stack section
Mobile
Hamburger navigation
One-column technology cards
Stack section below the technologies
Responsive footer
🔔 User Feedback

React Toastify is used to provide feedback for actions such as:

Adding a technology
Selecting a technology from an already-selected category
Removing a technology
Removing all technologies
📄 Data Source

Technology information is stored in:

public/data.json

Each technology contains information such as:

ID
Name
Category
Description
Icon
Rating
Difficulty
Badge

The application renders the technology cards dynamically from this JSON data.

👨‍💻 Author

M Yasin

GitHub: bdshroud

Built with ❤️ using React, TypeScript, Tailwind CSS, and Vite.


### একটা গুরুত্বপূর্ণ correction

তোমার বর্তমান README-তে `useEffect` দিয়ে JSON fetch করার example আছে, কিন্তু সেটা তোমার বর্তমান implementation-এর সাথে মেলে না। README-তে সেটা রাখলে reviewer code দেখে mismatch ধরতে পারে। GitHub-এর বর্তমান README-তে ওই `useEffect` explanation আছে। :contentReference[oaicite:1]{index=1}

উপরের version-এ তাই **`use()` + `Suspense`** অনুযায়ী Q&A করেছি।

আর বর্তমান README-র technology list-এ JavaScript আছে, কিন্তু তোমার actual source TypeScript—যেমন `TechnologyCard.tsx`-এ `TechnologyType` এবং TypeScript `Dispatch/SetStateAction` ব্যবহার করছ। :contentReference[oaicite:2]{index=2}

**README update করার পর:** commit করবে:

```bash
git add README.md
git commit -m "Update project README"
git push
