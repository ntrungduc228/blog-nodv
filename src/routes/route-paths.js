import { lazy } from "react";
const BookmarkPage = lazy(() => import("../pages/bookmark"));
const HomePage = lazy(() => import("../pages/home/HomePage"));
const NotificationsPage = lazy(() => import("../pages/notifications"));
const StoriesPage = lazy(() => import("../pages/stories/StoriesPage"));
const PostPage = lazy(() => import("../pages/post/PostPage"));
const WritePage = lazy(() => import("../pages/write/WritePage"));
const SettingPage = lazy(() => import("../pages/setting/SettingPage"));

const routes = {
  home: "/",
  post: "/post/:id",
  notifications: "/notifications",
  bookmark: "/bookmark",
  stories: "/stories",
  write: "/write",
  setting: "/setting/*",
};

export const routesWithComponents = [
  {
    path: routes.home,
    component: HomePage,
  },
  {
    path: routes.notifications,
    component: NotificationsPage,
  },
  {
    path: routes.bookmark,
    component: BookmarkPage,
  },
  {
    path: routes.stories,
    component: StoriesPage,
  },
  {
    path: routes.write,
    component: WritePage,
  },
  {
    path: routes.post,
    component: PostPage,
  },
  {
    path: routes.setting,
    component: SettingPage,
  },
];

export default routes;
