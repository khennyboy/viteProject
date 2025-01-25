import supabase from "./supabase";

export async function getWishes() {
  let { data, error } = await supabase.from("birthdayWishes").select("*");
  if (error) {
    throw new Error(`${error.message}`);
  }
  return data;
}

export async function handleWishes(obj) {
    const { data, error } = await supabase.from("birthdayWishes").insert(obj);
    if (error) {
      throw new Error("Error sending wishes");
    }
    return data;
  }
  