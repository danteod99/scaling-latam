import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Lock, RefreshCw, Users, Globe, Zap, Calendar, Flame, Filter } from "lucide-react";

const ADMIN_PASSWORD = "scaling2026";

interface QuizSubmission {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  platform: string;
  devices_qty: string;
  reach: string;
  device_models: string[];
  content_type: string;
  automation_level: string;
  income_goal: string;
  budget: string;
  experience: string;
  country: string;
  source: string;
  timeline: string;
  score: number;
}

type ScoreFilter = "all" | "hot" | "warm" | "cold";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState<QuizSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [scoreFilter, setScoreFilter] = useState<ScoreFilter>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Contraseña incorrecta");
    }
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("quiz_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setSubmissions(data);
    if (error) console.error(error);
    setLoading(false);
  };

  useEffect(() => {
    if (authenticated) fetchSubmissions();
  }, [authenticated]);

  const timelineLabel = (t: string) => {
    const map: Record<string, string> = { now: "Ahora", week: "Esta semana", month: "Este mes", exploring: "Explorando" };
    return map[t] || t;
  };

  const getTimelineBadge = (t: string) => {
    const colors: Record<string, string> = {
      now: "bg-green-500/20 text-green-400 border-green-500/30",
      week: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      month: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      exploring: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    };
    return colors[t] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 40) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-500/20 border-green-500/30";
    if (score >= 40) return "bg-yellow-500/20 border-yellow-500/30";
    return "bg-red-500/20 border-red-500/30";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "CALIENTE";
    if (score >= 40) return "TIBIO";
    return "FRIO";
  };

  const getScoreCategory = (score: number): "hot" | "warm" | "cold" => {
    if (score >= 80) return "hot";
    if (score >= 40) return "warm";
    return "cold";
  };

  const filtered = scoreFilter === "all"
    ? submissions
    : submissions.filter((s) => getScoreCategory(s.score || 0) === scoreFilter);

  const hotCount = submissions.filter((s) => (s.score || 0) >= 80).length;
  const warmCount = submissions.filter((s) => (s.score || 0) >= 40 && (s.score || 0) < 80).length;
  const coldCount = submissions.filter((s) => (s.score || 0) < 40).length;

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <div className="glass-card-3d rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Lock className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1
              className="text-2xl font-bold text-center mb-2 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Admin Panel
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-6">Scaling LATAM</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/20 text-white placeholder:text-muted-foreground mb-4 focus:outline-none focus:border-cyan"
              autoFocus
            />
            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
            <Button type="submit" className="w-full py-3 bg-primary hover:bg-cyan font-bold uppercase tracking-wider">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1
              className="text-3xl md:text-4xl font-bold uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Leads del Quiz
            </h1>
            <p className="text-muted-foreground mt-1">{submissions.length} respuestas totales</p>
          </div>
          <Button onClick={fetchSubmissions} disabled={loading} variant="outline" className="border-primary/30 hover:bg-primary/10">
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Actualizar
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Total Leads", value: submissions.length, icon: Users, color: "text-primary" },
            { label: "Calientes (80+)", value: hotCount, icon: Flame, color: "text-green-400" },
            { label: "Tibios (40-79)", value: warmCount, icon: Zap, color: "text-yellow-400" },
            { label: "Frios (<40)", value: coldCount, icon: Globe, color: "text-red-400" },
            { label: "Hoy", value: submissions.filter((s) => new Date(s.created_at).toDateString() === new Date().toDateString()).length, icon: Calendar, color: "text-cyan" },
          ].map((stat, i) => (
            <div key={i} className="glass-card-3d rounded-xl p-4 border border-primary/20">
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground mr-2">Filtrar:</span>
          {([
            { key: "all" as ScoreFilter, label: "Todos", color: "border-primary/30 hover:bg-primary/10" },
            { key: "hot" as ScoreFilter, label: "Calientes", color: "border-green-500/30 hover:bg-green-500/10" },
            { key: "warm" as ScoreFilter, label: "Tibios", color: "border-yellow-500/30 hover:bg-yellow-500/10" },
            { key: "cold" as ScoreFilter, label: "Frios", color: "border-red-500/30 hover:bg-red-500/10" },
          ]).map((f) => (
            <button
              key={f.key}
              onClick={() => setScoreFilter(f.key)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${f.color} ${
                scoreFilter === f.key ? "bg-primary/20 text-white font-bold" : "text-muted-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20">
            <RefreshCw className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Cargando...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No hay leads con este filtro</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left py-3 px-3 text-xs text-muted-foreground uppercase tracking-wide">Score</th>
                  <th className="text-left py-3 px-3 text-xs text-muted-foreground uppercase tracking-wide">Fecha</th>
                  <th className="text-left py-3 px-3 text-xs text-muted-foreground uppercase tracking-wide">Nombre</th>
                  <th className="text-left py-3 px-3 text-xs text-muted-foreground uppercase tracking-wide">Telefono</th>
                  <th className="text-left py-3 px-3 text-xs text-muted-foreground uppercase tracking-wide">Pais</th>
                  <th className="text-left py-3 px-3 text-xs text-muted-foreground uppercase tracking-wide">Plataforma</th>
                  <th className="text-left py-3 px-3 text-xs text-muted-foreground uppercase tracking-wide">Presupuesto</th>
                  <th className="text-left py-3 px-3 text-xs text-muted-foreground uppercase tracking-wide">Meta</th>
                  <th className="text-left py-3 px-3 text-xs text-muted-foreground uppercase tracking-wide">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((sub) => (
                  <>
                    <tr
                      key={sub.id}
                      onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
                      className="border-b border-muted/20 hover:bg-muted/10 transition-colors cursor-pointer"
                    >
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-bold ${getScoreColor(sub.score || 0)}`}>{sub.score || 0}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded border font-bold ${getScoreBg(sub.score || 0)} ${getScoreColor(sub.score || 0)}`}>
                            {getScoreLabel(sub.score || 0)}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-sm text-muted-foreground whitespace-nowrap">
                        {new Date(sub.created_at).toLocaleDateString("es-PE", { day: "2-digit", month: "short" })}
                        <br />
                        <span className="text-xs">{new Date(sub.created_at).toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" })}</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-sm font-bold text-white">{sub.name || "—"}</span>
                      </td>
                      <td className="py-3 px-3">
                        <a
                          href={`https://wa.me/${sub.phone?.replace(/[^0-9+]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cyan hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {sub.phone || "—"}
                        </a>
                      </td>
                      <td className="py-3 px-3 text-sm text-muted-foreground">{sub.country || "—"}</td>
                      <td className="py-3 px-3">
                        <span className="text-sm font-medium text-white">{sub.platform}</span>
                      </td>
                      <td className="py-3 px-3 text-sm text-white">{sub.budget || "—"}</td>
                      <td className="py-3 px-3">
                        <span className="text-sm font-medium text-green-400">{sub.income_goal}</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getTimelineBadge(sub.timeline)}`}>
                          {timelineLabel(sub.timeline)}
                        </span>
                      </td>
                    </tr>
                    {expandedId === sub.id && (
                      <tr key={`${sub.id}-details`} className="border-b border-muted/20 bg-muted/5">
                        <td colSpan={9} className="py-4 px-6">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">Dispositivos</p>
                              <p className="text-white">{sub.devices_qty || "—"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">Modelos</p>
                              <p className="text-white">{sub.device_models?.join(", ") || "—"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">Alcance</p>
                              <p className="text-white">{sub.reach || "—"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">Contenido</p>
                              <p className="text-white">{sub.content_type || "—"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">Automatizacion</p>
                              <p className="text-white">{sub.automation_level || "—"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">Experiencia</p>
                              <p className="text-white">{sub.experience || "—"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">Fuente</p>
                              <p className="text-white">{sub.source || "—"}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">Meta ingresos</p>
                              <p className="text-green-400 font-medium">{sub.income_goal || "—"}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
