import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mlijhhzjathoqnuexhqu.supabase.co";
const supabaseAnonKey = "sb_publishable_SNvrL14yP7ZDzEsKQpVN_A_rPWHjzR6";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
