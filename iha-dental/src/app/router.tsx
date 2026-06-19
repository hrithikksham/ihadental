import {
  RootRoute,
  Route,
  Router,
} from "@tanstack/react-router";

import RootLayout from "./root-layout";
import HomePage from "../pages";

const rootRoute = new RootRoute({
  component: RootLayout,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
]);

export const router = new Router({
  routeTree,
});