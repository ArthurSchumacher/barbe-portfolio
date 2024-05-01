export const paths = {
  about() {
    return "#about";
  },
  projects() {
    return "#projects";
  },
  work() {
    return "#work";
  },
  contact() {
    return "#contact";
  },
};

export const links = [
  { label: "About", path: paths.about() },
  { label: "Professional Projects", path: paths.projects() },
  { label: "Personal Work", path: paths.work() },
  { label: "Contact", path: paths.contact() },
];
