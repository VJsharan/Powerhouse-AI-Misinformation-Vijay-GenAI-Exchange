import { AlertCircle } from "lucide-react";

export function ErrorDisplay({ error, isDark }) {
  if (!error) return null;

  return (
    <div
      className={`rounded-2xl p-6 mb-8 backdrop-blur-lg border transition-all duration-300 ${
        isDark
          ? "bg-red-900/20 border-red-700/50"
          : "bg-red-50/70 border-red-200/50"
      }`}
    >
      <div className="flex items-center space-x-3">
        <AlertCircle className="w-6 h-6 text-red-500" />
        <div>
          <h3
            className={`font-semibold ${isDark ? "text-red-400" : "text-red-700"}`}
          >
            Analysis Failed
          </h3>
          <p
            className={`text-sm ${isDark ? "text-red-300" : "text-red-600"}`}
          >
            {error}
          </p>
        </div>
      </div>
    </div>
  );
}
