-- Recrea la tabla del quiz de scalinglatam.site en el proyecto compartido
-- jlxaubqvgjahcsnotvih. La tabla original vivía en el proyecto dedicado
-- ltdgrmihtgkqzpumtrsh, que Supabase eliminó tras quedar pausado.
-- Columnas = payload del insert en src/pages/Quiz.tsx + campos de gestión
-- del panel admin (contacted*) usados en src/pages/Admin.tsx.

create table if not exists public.quiz_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  phone text,
  platform text,
  devices_qty text,
  reach text,
  device_models text[],
  content_type text,
  automation_level text,
  income_goal text,
  budget text,
  experience text,
  country text,
  source text,
  timeline text,
  score integer,
  selections jsonb,
  contacted boolean not null default false,
  contacted_at timestamptz,
  contact_notes text
);

alter table public.quiz_submissions enable row level security;

-- El sitio usa solo la anon key (sin auth de usuarios): el quiz público
-- inserta, y el panel admin (gate por contraseña en el cliente) lee y
-- marca contactados. Mismo modelo de acceso que tenía el proyecto original.
drop policy if exists "quiz_anon_insert" on public.quiz_submissions;
create policy "quiz_anon_insert" on public.quiz_submissions
  for insert to anon with check (true);

drop policy if exists "quiz_anon_select" on public.quiz_submissions;
create policy "quiz_anon_select" on public.quiz_submissions
  for select to anon using (true);

drop policy if exists "quiz_anon_update" on public.quiz_submissions;
create policy "quiz_anon_update" on public.quiz_submissions
  for update to anon using (true) with check (true);
