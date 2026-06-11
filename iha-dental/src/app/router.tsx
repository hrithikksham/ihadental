import {
  RootRoute,
  Route,
  Router,
} from "@tanstack/react-router";

import RootLayout from "./root-layout";

import HomePage from "../routes/index";
import AboutPage from "../routes/about";
import ServicesPage from "../routes/services";
import ServiceDetailPage from "../routes/services/$slug";
import DoctorsPage from "../routes/doctors";
import GalleryPage from "../routes/gallery";
import ContactPage from "../routes/contact";

const rootRoute = new RootRoute({
  component: RootLayout,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const servicesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const serviceDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services/$slug",
  component: ServiceDetailPage,
});

const doctorsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/doctors",
  component: DoctorsPage,
});

const galleryRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  serviceDetailRoute,
  doctorsRoute,
  galleryRoute,
  contactRoute,
]);

export const router = new Router({
  routeTree,
});