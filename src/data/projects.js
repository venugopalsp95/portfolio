import dashboardImg from "../assets/projects/dashboard.png";
import ecommerceImg from "../assets/projects/home.png";
import whiteboardImg from "../assets/projects/whiteboard.png";

export default [
  {
    id: 1,
    title: "React E-Commerce Website",
    shortDescription:
      "A modern e-commerce web application built with React, featuring product browsing, detailed product views, cart management, and order placement using global state management",
    description:
      "A fully functional e-commerce application developed using React that enables users to browse products, view detailed product information, manage a shooping cart, and place orders. The application uses React Context API for global cart state management, ensuring consistent and predictable updates across components. Dynamic routing is implement with React Router to provide seamless navigation between product listing and product detail pages. The project follows clean component architecture and scalable frontend development best practices",
    features: [
      "Display product listing with detailed information",
      "Dynamic product detail pages using route parameters",
      "Add products to shopping cart",
      "Increase and decrease product quantities",
      "Remove products from cart",
      "Automatic cart total calculation",
      "Order confirmation flow",
      "Global cart state management",
    ],
    techStack: [
      "React",
      "JavaScript(ES6+)",
      "React Router DOM",
      "Context API",
      "CSS",
      "DummyJSON API",
    ],
    githubLink: "https://github.com/venugopalsp95/ecommerce",
    liveLink: "https://venugopalsp95.github.io/ecommerce/",
    image: ecommerceImg,
  },
  {
    id: 2,
    title: "Bug Tracker Dashboard",
    shortDescription:
      "A responsive React-based Bug Tracker Dashboard with role-based access control, CRUD operations, analytics charts, and localStorage-powered data persistence",
    description:
      "The Bug Tracker Dashboard is a frontend-only web application built using React and JavaScript, designed to simulate a real-world issue tracking system. It supports multiple user roles (Admin, Developer, QA) with controlled permissions, allowing users to create, manage, and track bugs efficiently. The application includes user management, bug assignment, dashboard analytics, reports using Chart.Js pagination, search, and responsive UI, making it suitabe for learning enterprice-level frontend architecture. All data is stored in localStorage, allowing the app to function without a backend while still demonstrating realistic workflows.",
    features: [
      "Login & logout with role-based access (Admin, Developer, QA)",
      "Create, edit, delete and assign bugs with status, severity, and created date",
      "User management for Admin: add, edit, delete, role assignment",
      "Bug dashboard showing recent bugs and quick overview",
      "Analytics charts with Chart.js",
      "Search and pagination for bugs and users",
    ],
    techStack: [
      "React",
      "JavaScript(ES6+)",
      "React Router DOM",
      "Context API",
      "CSS",
      "Chart.js",
    ],
    githubLink: "https://github.com/venugopalsp95/bugtracker",
    liveLink: "https://venugopalsp95.github.io/bugtracker/",
    image: dashboardImg,
  },
  {
    id: 3,
    title: "Collaborative Whiteboard",
    shortDescription:
      "A real-time collaborative whiteboard built using React that allows users to create, edit, drog, and manage sticky notes with live synchronization across browser tabs - all without a backend",
    description:
      "The Collaborative WhiteBoard is a frontend-focused project designed to demonstrate real-world React skills such as state management, drag-and-drop interactions, controlled components, and real-time synchronization. The application allows users to add, edit, delete, and reposition sticky notes freely on a full-screen whiteboard. Changes are instantly synchronized across multiple open tabs using the BroadcastChannel API, simulating multi-user collaboration without relying on a backend or WebSockets. All board data is persisted using localStorage to ensure continuity across page reloads.",
    features: [
      "Create sticky notes with custom text",
      "Edit note content inline, delete notes",
      "Drag and drop notes freely on the board",
      "Notes constrained within viewport (vw / vh)",
      "Unique pastel color for each note",
      "Real-time synchronization across browser tabs",
      "Persistent board state using localStorage",
      "Responsive, full-screen whiteboard layout",
      "Clean and modular React architecture",
    ],
    techStack: [
      "React (JavaScript)",
      "Custom Hooks",
      "localStorage",
      "BroadcastChannel API",
      "CSS",
      "React query",
    ],
    githubLink: "https://github.com/venugopalsp95/whiteboard",
    liveLink: "https://venugopalsp95.github.io/whiteboard/",
    image: whiteboardImg,
  },
];
