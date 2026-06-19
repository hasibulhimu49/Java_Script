# JavaScript Mastery Roadmap 🚀

A **16‑week, project‑driven journey** from zero to production‑ready full‑stack JavaScript engineer.

---

## How to Use

1. **One milestone ≈ 1 week** (7‑10 hrs).
2. Skim the **resources**, then build the **mini‑project** before checking the box.
3. Push code & notes to GitHub for a public learning log.

Legend ⬜ Not started ▣ In progress ✅ Done

---

## 0 Environment & Tooling (Day 0‑1)

* ⬜ Install Node.js 20+ & npm/yarn/pnpm
* ⬜ VS Code + Extensions (ESLint, Prettier, Live Server)
* ⬜ Enable Chrome DevTools
* ⬜ Run **Hello World** in console & browser

Mini‑project Static HTML page that prints „Hello, Enigma!“ using an external JS file.

---

## 1 JS Fundamentals (Week 1)

* ⬜ Variables (`var`, `let`, `const`)
* ⬜ Primitive & reference types
* ⬜ Type conversion & coercion
* ⬜ Operators (arith, logical, comparison, bitwise)
* ⬜ Expressions vs statements
* ⬜ Control flow: `if`, `switch`, loops (`for`, `while`, `for…of`)

Mini‑project CLI **unit converter** (°C⇄°F, km⇄mi) using Node.

Resources MDN JavaScript Guide §1‑3 • „JavaScript .info“ chapters 1‑2

---

## 2 Functions & Scope (Week 2)

* ⬜ Function decl. vs expr.
* ⬜ Arrow functions
* ⬜ Default & rest params (`...args`)
* ⬜ Higher‑order & callback functions
* ⬜ Hoisting, lexical scope & closures
* ⬜ IIFE patterns

Mini‑project **Stopwatch** web app with start/stop/reset (closure for elapsed time).

---

## 3 Objects & OOP (Week 3)

* ⬜ Object literals, property descriptors, `this`
* ⬜ Factory vs constructor functions
* ⬜ Prototype chain & inheritance
* ⬜ ES6 classes, getters/setters, static props

Mini‑project Browser **Kanban board** (drag cards between lists) built with vanilla JS OOP.

---

## 4 Data Structures (Week 4)

* ⬜ Arrays & methods (`map`, `filter`, `reduce`, `sort`)
* ⬜ Sets & Maps (+ Weak\*)
* ⬜ String APIs & regex basics
* ⬜ Date & Math utilities

Mini‑project CSV‑to‑JSON **parser** that summarizes data stats.

---

## 5 DOM & Browser APIs (Week 5)

* ⬜ DOM selection & traversal (`querySelector`, `parentNode`)
* ⬜ Creating, cloning & removing nodes
* ⬜ Events (bubbling / capturing, delegation)
* ⬜ Storage: `localStorage`, `sessionStorage`, cookies
* ⬜ Fetch API + basic CORS

Mini‑project **Todo SPA** persisting state in `localStorage`.

---

## 6 Asynchronous JavaScript (Week 6)

* ⬜ Event loop, call stack, Web APIs
* ⬜ Callbacks & *callback hell*
* ⬜ Promises (`then`, `catch`, `finally`)
* ⬜ `async`·`await` + error handling
* ⬜ `Promise.all`, `race`, `allSettled`

Mini‑project Weather **dashboard** fetching data concurrently from two APIs.

---

## 7 Modules & Modern ES (Week 7)

* ⬜ ES6 modules (`import`, `export`)
* ⬜ CommonJS (`require`, `module.exports`)
* ⬜ Bundlers (Vite, Webpack basics)
* ⬜ Modern syntax: destructuring, template literals, spread/rest
* ⬜ Web Components: custom elements, Shadow DOM

Mini‑project Reusable **modal dialog** as a web component published on npm.

---

## 8 Frameworks & Ecosystem (Weeks 8‑10)

### 8.1 React Fundamentals

* ⬜ JSX, components, props, state, hooks (`useState`, `useEffect`)
* ⬜ React Router & Context API

Mini‑project Single‑page **recipe app** with search & favorites.

### 8.2 Backend with Node & Express

* ⬜ Routing, middleware, controllers
* ⬜ RESTful patterns & validation

Mini‑project Express **API** serving recipe data (+ MongoDB Atlas).

---

## 9 State & Data Management (Week 11)

* ⬜ Redux Toolkit basics
* ⬜ React Query or SWR for server state
* ⬜ WebSockets & Socket.io for realtime

Mini‑project **Chat room** with live messages.

---

## 10 Testing & Debugging (Week 12)

* ⬜ Debugging with DevTools & VS Code breakpoints
* ⬜ Unit tests with Jest
* ⬜ Component tests with React Testing Library
* ⬜ API tests with Supertest / Postman

Mini‑project Add CI badge running Jest on GitHub Actions.

---

## 11 Performance & Memory (Week 13)

* ⬜ Paint & reflow, Lighthouse audits
* ⬜ Debounce & throttle
* ⬜ Lazy loading & code splitting (React lazy/Suspense)
* ⬜ Garbage collection & memory leaks

Mini‑project Optimize the recipe app → reduce bundle ≤ 150 kB.

---

## 12 Advanced Patterns (Week 14)

* ⬜ Functional programming (pure functions, currying, composition)
* ⬜ Design patterns (singleton, factory, observer)
* ⬜ TypeScript essentials (types, interfaces, generics)

Mini‑project Refactor chat server to TypeScript + Observer pattern.

---

## 13 Security & Best Practices (Week 15)

* ⬜ OWASP Top 10: XSS, CSRF, SQL/NoSQL injection
* ⬜ Helmet, rate limiting, CORS headers
* ⬜ Linting & formatting (ESLint, Prettier)
* ⬜ SOLID & DRY principles

Mini‑project Add auth (JWT) & security middleware to the Express API.

---

## 14 DevOps & Cloud (Week 16)

* ⬜ Dockerize full‑stack app
* ⬜ Deploy on AWS Lambda (Serverless) or Render/Netlify
* ⬜ CI/CD pipeline with GitHub Actions
* ⬜ Kubernetes intro (pods, deployments, services)

Mini‑project Automated CI → CD pipeline shipping Docker image to cloud.

---

### 🎓 Capstone Project (Weeks 17‑18)

Build a **Progressive Web App** that lets users track fitness activities offline & syncs when online:

1. React frontend with service workers & IndexedDB.
2. Node/Express API with MongoDB & JWT auth.
3. Docker‑compose & GitHub Actions deployment.

---

## Additional Resources

* **MDN JavaScript Guide** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* **JavaScript .info** [https://javascript.info](https://javascript.info)
* **Eloquent JavaScript** (free book)
* **You Don’t Know JS Yet** (Kyle Simpson)
* **Frontend Masters** & **FreeCodeCamp** courses

