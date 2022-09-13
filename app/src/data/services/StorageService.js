export const StorageService = {
    set(key, value) {
        if (typeof value !== "string") {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    },
    get(key, defaultValue) {
        const value = localStorage.getItem(key) || defaultValue;
        try {
            return JSON.parse(value);
        } catch (error) {
            return value;
        }
    },
};
