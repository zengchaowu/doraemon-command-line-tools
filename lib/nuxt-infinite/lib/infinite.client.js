import InfiniteScroll from '@doraemon-design/list/lib/infinite'

const install = function (Vue) {
  Vue.directive('InfiniteScroll', InfiniteScroll)
}

if (window.Vue) {
  window.infiniteScroll = InfiniteScroll
  Vue.use(install) // eslint-disable-line
}

InfiniteScroll.install = install
export default InfiniteScroll
