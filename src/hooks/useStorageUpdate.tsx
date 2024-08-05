import { useEffect } from 'react';

const useStorageUpdate = (callback: () => void) => {
  useEffect(() => {
    window.addEventListener('storage-update', callback);
    callback();

    return () => {
      window.removeEventListener('storage-update', callback);
    };
  }, []);
};

export default useStorageUpdate;
