import { Bounce, toast } from "react-toastify";

export const SuccessToast = (info: string) =>
  toast.success(info, {
    position: "top-center",
    transition: Bounce,
    draggablePercent: 80,
    draggable: true,
  });

export const ErrorToast = (info: string) =>
  toast.error(info, {
    position: "top-center",
    transition: Bounce,
    draggablePercent: 80,
    draggable: true,
  });
