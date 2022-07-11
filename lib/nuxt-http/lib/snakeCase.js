import { snakeCase } from "snake-case";
export default (data) => {
  const result = {};
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const value = data[key];
      result[snakeCase(key)] = value;
    }
  }
  return result;
};
