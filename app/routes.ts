import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    layout('layouts/auth-layout.tsx', [
        route('login',"routes/auth/login-page.tsx"),
        route('register', "routes/auth/register-page.tsx")
    ])
] satisfies RouteConfig;
