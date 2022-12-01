import { add, format } from "date-fns";

export const formatDate = (date: number | Date, _format = "yyyy-MM-dd") =>
  format(date, _format);

export const addDate = (date: Date, duration: Duration) => add(date, duration);
