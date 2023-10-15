export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const setIntoLocalStorage = (key: string, value: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, value);
};

export const setAppointmentIntoLocalStorage = (key: string, value: any[]) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getAppointmentFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};
