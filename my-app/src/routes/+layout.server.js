export function load({ cookies }) {
  return {
    hasUser: cookies.get("userId") ? true : false,
  };
}
