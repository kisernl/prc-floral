export const getImagePath = (path: string): string => {
    // In development, use the path as is
    if (import.meta.env.DEV) {
      return path;
    }
    // In production, prepend the base URL
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };