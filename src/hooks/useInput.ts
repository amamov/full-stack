import { useState, useCallback, Dispatch, SetStateAction } from "react";

export default function useInput<T>(
  initialValue: T,
): [
  T,
  (
    event?: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void,
  Dispatch<SetStateAction<T>>,
] {
  const [value, setValue] = useState<typeof initialValue>(initialValue);
  const handleChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);
  return [value, handleChange, setValue];
}
