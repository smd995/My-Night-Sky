export const getEnv = (key: string): string | undefined => {
  if (typeof import.meta !== "undefined" && import.meta.env) {
    return import.meta.env[key as string];
  }

  if (typeof process !== "undefined" && process.env) {
    return process.env[key];
  }

  return undefined;
};
