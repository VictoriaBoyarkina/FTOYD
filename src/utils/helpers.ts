const isObject = (data: unknown): data is Record<string, any> => {
  return typeof data === "object" && data !== null && !Array.isArray(data);
};

const createTranformer = (fallback: any = "") => {
  const toString = (data: unknown) => {
    if (typeof data === "string" || typeof data === "number") {
      return String(data);
    }

    return fallback;
  };

  const toNumber = (data: unknown) => {
    if (
      typeof data === "number" ||
      (typeof data === "string" && typeof Number(data) === "number")
    ) {
      return Number(data);
    }

    return fallback;
  };

  return { toString, toNumber };
};

export { isObject, createTranformer };
