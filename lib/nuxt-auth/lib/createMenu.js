export default () => [
  {
    title: "采购需求管理",
    children: [
      {
        title: "采购需求查询",
        path: "/requirement",
      },
    ],
  },
  {
    title: "管理基础数据",
    children: [
      {
        title: "品类物料库",
        children: [
          {
            title: "品类框架",
            path: "/info/material/category",
          },
        ],
      },
      {
        title: "模版库",
        path: "/info/template",
      },
    ],
  },
];

const find = (node, path, routes) => {
  if (node.path === path) {
    routes.unshift(node);
    return true;
  }
  if (node.children) {
    for (const child of node.children) {
      if (find(child, path, routes)) {
        routes.unshift(node);
        return true;
      }
    }
  } else {
    return false;
  }
};

export const trace = (node, path) => {
  const routes = [];
  find(node, path, routes);
  return routes;
};
