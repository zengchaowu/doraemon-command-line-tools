import Vue from "vue";
import InfiniteScroll from "@doraemon-design/list/lib/infinite";

InfiniteScroll.install = function (Vue) {
  Vue.directive("InfiniteScroll", InfiniteScroll);
};

Vue.use(InfiniteScroll);
