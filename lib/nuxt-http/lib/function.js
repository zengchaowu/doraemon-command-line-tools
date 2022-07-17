import useAuthStore from "@/pinia/auth";
import useApplicationStore from "@/pinia/application";

export default async function (payload, origin = false) {
  try {
    const result = await this.$axios({
      headers: payload.headers,
      method: payload.method ?? "POST",
      url: payload.path,
      data: payload.data,
    });
    const { code, data, msg, resultCode, resultMsg } = result?.data;
    if ([0, 1].includes(code ?? resultCode)) {
      if (origin !== false) {
        return result;
      } else {
        return data;
      }
    } else {
      this.$notify.error({ title: "请求出错", message: msg ?? resultMsg });
      if (resultCode === 1030102) {
        const authStore = useAuthStore();
        authStore.logout();
        this.$router.push("/");
      } else {
        throw new Error(msg ?? resultMsg);
      }
    }
    const store = useApplicationStore();
    store.isOffline = undefined;
  } catch (error) {
    const store = useApplicationStore();
    store.isOffline = true;
    return undefined;
  }
}
