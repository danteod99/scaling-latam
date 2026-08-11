import { createClient } from "@supabase/supabase-js";

// Proyecto compartido con farmmind/desktop apps. El proyecto dedicado
// anterior (ltdgrmih) fue eliminado por Supabase tras quedar pausado —
// no volver a apuntar ahí.
const supabaseUrl = "https://jlxaubqvgjahcsnotvih.supabase.co";
const supabaseAnonKey = "sb_publishable_ooYxQ-GHz2mayTFJPIswyA_EAyP_gRi";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
