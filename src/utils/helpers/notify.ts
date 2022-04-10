import { toast, ToastOptions } from "react-toastify";

declare type Notify = "success" | "error" | "warn" | "info";

const DEFAULT_TOAST_CONFIG: ToastOptions = {
  position: toast.POSITION.TOP_RIGHT,
  theme: "colored",
  autoClose: 3000,
};

export const notify = (notifyType: Notify, msg: string) => {
  switch (notifyType) {
    case "success":
      return toast.success(msg, DEFAULT_TOAST_CONFIG);
    case "error":
      return toast.error(msg, DEFAULT_TOAST_CONFIG);
    case "info":
      return toast.info(msg, DEFAULT_TOAST_CONFIG);
    case "warn":
      return toast.warn(msg, DEFAULT_TOAST_CONFIG);
    default:
      return toast.info(msg, DEFAULT_TOAST_CONFIG);
  }
};
