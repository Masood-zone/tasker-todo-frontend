import { completed, star, sun } from "../../assets";

export const authLinks = [
  {
    title: "Sign Up",
    path: "/signup",
  },
  {
    title: "Login",
    path: "/login",
  },
];

export const taskLinks = [
  {
    title: "My Day",
    path: "/",
    icon: sun,
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: star,
  },
  {
    title: "Completed",
    path: "/complete",
    icon: completed,
  },
];
