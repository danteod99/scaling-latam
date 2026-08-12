import { createClient } from "@supabase/supabase-js";

// Proyecto dedicado de scalinglatam (aquí viven los leads del quiz).
// OJO: es plan gratuito — Supabase lo PAUSA tras ~1 semana sin actividad
// y el sitio deja de guardar/mostrar leads (ya pasó 2 veces). Si el admin
// muestra "Error cargando los leads", restaurarlo desde el dashboard:
// https://supabase.com/dashboard/project/ltdgrmihtgkqzpumtrsh
const supabaseUrl = "https://ltdgrmihtgkqzpumtrsh.supabase.co";
const supabaseAnonKey = "sb_publishable_YQWinQQXJ-V-92rkjqQ4Ow_dywDgGhG";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
