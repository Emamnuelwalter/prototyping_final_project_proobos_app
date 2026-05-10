import { redirect } from "@sveltejs/kit";

export function load({ cookies }) {
  const userId = cookies.get("userId");

  if (userId) {
    throw redirect(303, "/offers");
  }
}
