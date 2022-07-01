import createMenu, { trace } from "~/functions/createMenu.js";
export default function ({ route }) {
  const { path } = route;
  const menu = createMenu();
  const result = trace(menu, path);
  console.log(result);
}
