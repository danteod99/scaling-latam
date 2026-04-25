import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ltdgrmihtgkqzpumtrsh.supabase.co";
const supabaseAnonKey = "sb_publishable_YQWinQQXJ-V-92rkjqQ4Ow_dywDgGhG";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
