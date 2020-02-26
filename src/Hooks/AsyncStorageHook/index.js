import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const useAsyncStorage = (key, initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then(result => {
        if (result) {
          setValue(JSON.parse(result));
        }
      })
      .catch(() => setError(true));
  }, []);

  const setStorageValue = prop => {
    AsyncStorage.setItem(key, JSON.stringify(prop))
      .then(() => setValue(prop))
      .catch(() => setError(true));
  };

  return [value, setStorageValue, hasError];
};

export default useAsyncStorage;
