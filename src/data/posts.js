export const posts = [
  {
    id: 1,
    title: "Getting Started with React and Vite",
    excerpt:
      "A quick tour of setting up a modern React project with Vite for lightning-fast dev builds.",
    body: "Vite's dev server uses native ES modules, so changes show up almost instantly instead of waiting for a full bundle rebuild. Scaffolding a new app is as simple as `npm create vite@latest`, picking the React template, and running `npm install`. From there, `npm run dev` gets you a hot-reloading dev server in seconds.",
    category: "React",
    date: "Jul 2, 2026",
  },
  {
    id: 2,
    title: "Styling with Tailwind CSS",
    excerpt:
      "Why utility-first CSS speeds up UI development and how to structure your classes.",
    body: "Instead of hopping between a stylesheet and your markup, Tailwind lets you build UI directly with utility classes. It keeps styles co-located with the component that uses them, and the generated CSS stays small because unused classes are purged at build time.",
    category: "CSS",
    date: "Jun 18, 2026",
  },
  {
    id: 3,
    title: "Component Design Patterns",
    excerpt:
      "Practical patterns for building reusable, maintainable React components.",
    body: "Favor small, focused components that do one thing well. Lift state up only as far as it needs to go, pass data down through props, and reach for composition (children, render props) before reaching for a new abstraction layer.",
    category: "React",
    date: "Jun 5, 2026",
  },
  {
    id: 4,
    title: "Client-Side Routing with React Router",
    excerpt:
      "Add multi-page navigation to a single-page app, including a custom 404 page.",
    body: "React Router matches the current URL against a list of routes and renders the corresponding component, all without a full page reload. A catch-all `*` route is the standard way to render a friendly 404 page for unmatched URLs.",
    category: "React",
    date: "May 22, 2026",
  },
  {
    id: 5,
    title: "A Practical Guide to Flexbox and Grid",
    excerpt: "When to reach for flexbox vs. grid, with real layout examples.",
    body: "Flexbox shines for one-dimensional layouts — a row of nav links, a card's internal content. Grid is built for two-dimensional layouts, like a gallery or a page shell with header, sidebar, and footer regions.",
    category: "CSS",
    date: "May 10, 2026",
  },
  {
    id: 6,
    title: "Writing Accessible React Components",
    excerpt:
      "Small changes to markup and ARIA attributes that make a big accessibility difference.",
    body: "Use semantic HTML elements before reaching for ARIA roles, make sure every interactive element is reachable by keyboard, and always give form inputs an associated label. These small habits cover most of the ground for an accessible UI.",
    category: "Accessibility",
    date: "Apr 28, 2026",
  },
];
