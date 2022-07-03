// import createMenu, { trace } from '~/functions/createMenu.js'
import useAuthStore from "@/pinia/auth";
import useApplicationStore from "@/pinia/application";

const routeOption = (route, key, value) => {
  return route.matched.some((m) => {
    if (process.client) {
      // Client
      return Object.values(m.components).some(
        (component) => component.options && component.options[key] === value
      );
    } else {
      // SSR
      return Object.values(m.components).some((component) =>
        Object.values(component._Ctor).some(
          (ctor) => ctor.options && ctor.options[key] === value
        )
      );
    }
  });
};

export default function (context) {
  const { route } = context;
  if (routeOption(route, "init", true)) {
    return;
  }

  const { redirect } = context;
  const applicationStore = useApplicationStore();

  if (applicationStore.isReady !== true) {
    applicationStore.redirect = route.path;
    return redirect("/init");
  }

  if (routeOption(route, "auth", false)) {
    return;
  }

  const authStore = useAuthStore();
  if (authStore.loggedIn !== true) {
    applicationStore.redirect = route.path;
    return redirect("/account/signin");
  }

  // const { path } = route
  // const menu = createMenu()
  // const result = trace(menu, path)
  // console.log(result)
}
