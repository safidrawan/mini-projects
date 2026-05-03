const faqs = [
  {
    id: 1,
    question: "What is Tailwind CSS 4 and how is it different from v3?",
    answer: "Tailwind CSS 4 introduces a new engine (oxide) that’s faster and more reliable. It brings improved build performance, better support for modern CSS features, and reduced configuration boilerplate."
  },
  {
    id: 2,
    question: "Do I still need PostCSS and Autoprefixer with Tailwind CSS 4?",
    answer: "No. Tailwind 4 has built-in support for modern CSS and no longer requires PostCSS or Autoprefixer by default."
  },
  {
    id: 3,
    question: "How do I install Tailwind CSS 4 in a new project?",
    answer: "Run: `npm install tailwindcss@latest` and then `npx tailwindcss init` to generate the config file."
  },
  {
    id: 4,
    question: "Is Tailwind CSS 4 backward compatible with v3 projects?",
    answer: "Mostly yes, but some plugins and custom configurations may need updates since Tailwind 4 drops deprecated features from v3."
  },
  {
    id: 5,
    question: "Can I still use the JIT (Just-In-Time) compiler in Tailwind 4?",
    answer: "Yes, but you don’t need to enable it anymore — JIT is the default mode in Tailwind CSS 4."
  },
  {
    id: 6,
    question: "How does Tailwind 4 handle dark mode?",
    answer: "It still supports dark: variants. By default, it uses the class-based strategy, but you can switch to media-query mode in the config."
  },
  {
    id: 7,
    question: "Does Tailwind 4 support CSS nesting?",
    answer: "Yes. Tailwind 4 supports modern CSS nesting natively without requiring external plugins."
  },
  {
    id: 8,
    question: "What are the performance improvements in Tailwind CSS 4?",
    answer: "Tailwind 4 provides much faster builds with its Rust-based compiler, smaller bundle sizes through better tree-shaking, and zero-config production optimizations."
  },
  {
    id: 9,
    question: "Can I use Tailwind CSS 4 with React, Next.js, or Vue?",
    answer: "Yes, Tailwind 4 works seamlessly with modern frameworks like React, Next.js, Vue, and Nuxt. Official setup guides are available."
  },
  {
    id: 10,
    question: "Where can I find migration guides from Tailwind 3 to 4?",
    answer: "You can find the official migration guide with breaking changes and best practices on the Tailwind CSS documentation site."
  }
];

export default faqs;