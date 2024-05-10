import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";

export const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          lazy={async () => {
            const { default: Home } = await import("./home");
            return { Component: Home };
          }}
        />
        <Route
          path="/tasks"
          lazy={async () => {
            const { default: Tasks } = await import("./tasks");
            return { Component: Tasks };
          }}
        />
        <Route
          path="/complete"
          lazy={async () => {
            const { default: CompletedTasks } = await import("./completed");
            return { Component: CompletedTasks };
          }}
        />
        <Route
          path="*"
          lazy={async () => {
            const { default: NotFound } = await import("./not-found");
            return { Component: NotFound };
          }}
        />
      </Route>
      <Route
        path="/login"
        lazy={async () => {
          const { default: Login } = await import("./login");
          return { Component: Login };
        }}
      />
      <Route
        path="/signup"
        lazy={async () => {
          const { default: Signup } = await import("./signup");
          return { Component: Signup };
        }}
      />
    </>
  )
);
