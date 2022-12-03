import { add, format } from "date-fns";
import { ja } from "date-fns/locale";

export const formatDate = (date: number | Date, _format = "yyyy-MM-dd") =>
  format(date, _format);

export const addTime = (date: Date, duration: Duration) => add(date, duration);

export const getDate = (date: Date | number) =>
  format(date, "yyyy年MM月dd日(E)", { locale: ja });

export const getTime = (date: Date | number) =>
  format(date, "H:mm", { locale: ja });

export const isDaytime = (() => {
  const h = new Date().getHours();
  return h >= 6 && h < 18;
})();

export const timeZone = (() => {
  const h = new Date().getHours();

  if (h >= 0 && h < 6) {
    return "late night";
  } else if (h >= 6 && h < 11) {
    return "morning";
  } else if (h >= 11 && h < 18) {
    return "daytime";
  } else if (h >= 18 && h < 24) {
    return "night";
  } else {
    return "any";
  }
})();
