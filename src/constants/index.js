import {
  mobile,
  backend,
  creator,
  web,
  meta,
  starbucks,
  tesla,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
];

const experiences = [
  {
    title: "Sign Up for Free:",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
     "Create a free account to access a wide range of coding challenges."
    ],
  },
  {
    title: "Choose a Challenge:",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Pick from beginner to expert-level challenges across various topics like algorithms, data structures, AI, and more."
    ],
  },
  {
    title: "Solve & Improve:",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Submit your solutions, get instant feedback, and see how you stack up against others."
    ],
  },
];

const testimonials = [
];

const projects = [
];

export { services, technologies, experiences, testimonials, projects };