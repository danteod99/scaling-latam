import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Lock, RefreshCw, Users, Globe, Smartphone, DollarSign, Zap, Calendar } from "lucide-react";

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
  timeline: string;
}

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState<QuizSubmission[]>([]);
  const [loading, setLoading] = useState(false);

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", value: submissions.length, icon: Users, color: "text-primary" },
            { label: "Quieren Ahora", value: submissions.filter((s) => s.timeline === "now").length, icon: Zap, color: "text-green-400" },
            { label: "Esta Semana", value: submissions.filter((s) => s.timeline === "week").length, icon: Calendar, color: "text-yellow-400" },
            { label: "Hoy", value: submissions.filter((s) => new Date(s.created_at).toDateString() === new Date().toDateString()).length, icon: Globe, color: "text-cyan" },
          ].map((stat, i) => (
            <div key={i} className="glass-card-3d rounded-xl p-4 border border-primary/20">
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20">
            <RefreshCw className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Cargando...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Aun no hay respuestas del quiz</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-wide">Fecha</th>
                  <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-wide">Nombre</th>
                  <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-wide">Telefono</th>
                  <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-wide">Plataforma</th>
                  <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-wide">Dispositivos</th>
                  <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-wide">Meta Ingresos</th>
                  <th className="text-left py-3 px-4 text-xs text-muted-foreground uppercase tracking-wide">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id} className="border-b border-muted/20 hover:bg-muted/10 transition-colors">
                    <td className="py-3 px-4 text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(sub.created_at).toLocaleDateString("es-PE", { day: "2-digit", month: "short", year: "numeric" })}
                      <br />
                      <span className="text-xs">{new Date(sub.created_at).toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" })}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm font-bold text-white">{sub.name || "—"}</span>
                    </td>
                    <td className="py-3 px-4">
                      <a href={`https://wa.me/${sub.phone?.replace(/[^0-9+]/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan hover:underline">
                        {sub.phone || "—"}
                      </a>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm font-medium text-white">{sub.platform}</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-white">{sub.devices_qty}</td>
                    <td className="py-3 px-4">
                      <span className="text-sm font-medium text-green-400">{sub.income_goal}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded-full border ${getTimelineBadge(sub.timeline)}`}>
                        {timelineLabel(sub.timeline)}
                      </span>
                    </td>
                  </tr>
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
