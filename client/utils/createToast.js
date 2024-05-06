import { toast } from "react-toastify";

export const createToast = (message, type = "error") => {
  toast[type](message);
};
