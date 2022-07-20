import { trace } from "~/functions/createMenu.js";
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
    applicationStore.redirect = route;
    return redirect("/init");
  }

  const result = trace(applicationStore.menu, route.path);
  result.forEach(
    (item, index) => index < result.length - 1 && (item.isOpen = true)
  );
  applicationStore.routes = result;
}
