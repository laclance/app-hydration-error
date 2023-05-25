export function getInitializer<T>(name: string, initialState: T) {
  return (initialValue = initialState): T =>
    JSON.parse(
      typeof window !== "undefined"
        ? localStorage.getItem(name) || "null"
        : "null"
    ) || initialValue;
}

export function storeState<T>(name: string, state: T): void {
  if (typeof window !== "undefined")
    localStorage.setItem(name, JSON.stringify(state));
}
