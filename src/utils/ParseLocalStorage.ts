export function parseJsonFromLocalStorage(key: string, defaultValue: any) {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
    }
  }
  return defaultValue;
}
