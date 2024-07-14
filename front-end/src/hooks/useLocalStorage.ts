import { useState } from 'react';

function getJSONFromLocalStorage<T>(key: string, initialValue: T) {
  const localStorageValue = localStorage.getItem(key);
  if (localStorageValue === null || localStorageValue === undefined) {
    return initialValue;
  }
  try {
    return JSON.parse(localStorageValue);
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
    return initialValue;
  }
}
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getJSONFromLocalStorage(key, initialValue)
  );
  const setCartProducts = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(localStorageValue) : value;
      setLocalStorageValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };
  return [localStorageValue, setCartProducts];
}
//Dopytać Kamila o ten kod.
