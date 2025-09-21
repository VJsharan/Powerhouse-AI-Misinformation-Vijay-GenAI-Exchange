import { TrendingUp } from "lucide-react";

export function SuccessMetrics({ isDark }) {
    return (
        <div
            className={`rounded-2xl p-6 md:p-8 backdrop-blur-lg border ${
            isDark
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-white/70 border-gray-200/50"
            }`}
        >
            <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
            <h3
                className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
                }`}
            >
                Success Metrics
            </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
                <div
                className={`text-3xl font-bold mb-2 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                }`}
                >
                95%+
                </div>
                <p
                className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                }`}
                >
                Accuracy Rate Target
                </p>
            </div>
            <div className="text-center">
                <div
                className={`text-3xl font-bold mb-2 ${
                    isDark ? "text-green-400" : "text-green-600"
                }`}
                >
                100K+
                </div>
                <p
                className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                }`}
                >
                Monthly Active Users
                </p>
            </div>
            <div
                className={`text-3xl font-bold mb-2 ${
                isDark ? "text-purple-400" : "text-purple-600"
                }`}
            >
                <div className="text-center">
                <div>1M+</div>
                <p
                    className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    Content Pieces Analyzed
                </p>
                </div>
            </div>
            </div>
        </div>
    );
}
