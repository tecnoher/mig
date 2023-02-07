import { Home } from "../Home";

const MainAppRoutes = [
  { path: '/home', component: Home },
  { path: '/home/:id', component: Home }
]

export default MainAppRoutes