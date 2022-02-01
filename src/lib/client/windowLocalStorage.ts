export function getStorageItem<T>(key: string, initialValue: T) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    // error handle
    return initialValue;
  }
}

export function setStorageItem<T>(key: string, value: T) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // error handle
  }
}

export function removeStorageItem(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    // error handle
  }
}
