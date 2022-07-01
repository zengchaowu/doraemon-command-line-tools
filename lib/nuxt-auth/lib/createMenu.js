export default () => {
  return {
    isOpen: true,
    children: [
      {
        name: "首页",
        icon: "home",
        children: [
          {
            name: "首页",
            path: "/home",
          },
          {
            name: "采购会审",
            path: "/home/joint-hearing",
          },
          {
            name: "公告管理",
            path: "/home/notice-manage",
          },
        ],
      },
      {
        name: "采购需求管理",
        icon: "control",
        children: [
          {
            name: "采购需求查询",
            path: "/requirement",
          },
        ],
      },
      {
        name: "采购实施管理",
        icon: "dashboard",
        children: [
          {
            name: "需求公告发布",
            path: "/implement/requirement-post",
          },
          {
            name: "资格预审",
            path: "/implement/pre-hearing",
          },
          {
            name: "采购实施",
            path: "/implement/process",
          },
        ],
      },
      {
        name: "供应商管理",
        icon: "filter",
        children: [
          {
            name: "供应商查询",
            path: "/supplier",
          },
          {
            name: "供应商准入审核列表",
            path: "/supplier/audit",
          },
          {
            name: "供应商注册邀请",
            path: "/supplier/invite",
          },
        ],
      },
      {
        name: "价格管理",
        icon: "pay-circle",
        children: [
          {
            name: "价格查询",
            path: "/price",
          },
        ],
      },
      {
        name: "管理基础数据",
        icon: "save",
        children: [
          {
            name: "品类物料库",
            children: [
              {
                name: "品类框架",
                path: "/info/material/category",
              },
              {
                name: "物料管理",
                path: "/info/material",
              },
            ],
          },
          {
            name: "模版库",
            path: "/info/template",
          },
          {
            name: "专家库",
            path: "/info/proficient",
          },
        ],
      },
    ],
  };
};

const find = (node, path, routes) => {
  if (node.path === path) {
    routes.push({
      name: node.name,
      path: node.path,
    });
    return true;
  }
  if (node.children) {
    for (const child of node.children) {
      if (find(child, path, routes)) {
        routes.push({
          name: node.name,
          path: node.path,
        });
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
  routes.reverse();
  return routes;
};
