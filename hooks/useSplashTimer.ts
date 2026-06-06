import { useEffect } from 'react';

export const useSplashTimer = (
    callback: () => void,
    delay = 3000
) => {
    useEffect(() => {
        const timer = setTimeout(callback, delay);

        return () => clearTimeout(timer);
    }, [callback, delay]);
};