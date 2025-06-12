import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
//   index("routes/home.tsx"),
//   route("hello", "routes/hello.tsx"),
  layout("./layout/BasicLayout.tsx", [
    index("./routes/home.tsx"),
    // route("register", "./auth/register.tsx"),
  ]),
] satisfies RouteConfig;
