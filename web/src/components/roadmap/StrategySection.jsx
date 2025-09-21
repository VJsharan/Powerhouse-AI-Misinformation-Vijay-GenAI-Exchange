import { Target, Code } from "lucide-react";

export function StrategySection({ marketStrategy, technicalStack, isDark }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Market Strategy */}
            <div
            className={`rounded-2xl p-6 backdrop-blur-lg border ${
                isDark
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-white/70 border-gray-200/50"
            }`}
            >
            <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-blue-500 mr-3" />
                <h3
                className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                }`}
                >
                Market Strategy
                </h3>
            </div>
            <div className="space-y-4">
                <div>
                <h4
                    className={`font-semibold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    Target Audience
                </h4>
                <p
                    className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    {marketStrategy.target}
                </p>
                </div>
                <div>
                <h4
                    className={`font-semibold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    Pricing Model
                </h4>
                <p
                    className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    {marketStrategy.pricing}
                </p>
                </div>
                <div>
                <h4
                    className={`font-semibold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    Distribution
                </h4>
                <p
                    className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    {marketStrategy.distribution}
                </p>
                </div>
            </div>
            </div>

            {/* Technical Stack */}
            <div
            className={`rounded-2xl p-6 backdrop-blur-lg border ${
                isDark
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-white/70 border-gray-200/50"
            }`}
            >
            <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-purple-500 mr-3" />
                <h3
                className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                }`}
                >
                Technical Stack
                </h3>
            </div>
            <div className="space-y-4">
                <div>
                <h4
                    className={`font-semibold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    Frontend
                </h4>
                <p
                    className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    {technicalStack.frontend}
                </p>
                </div>
                <div>
                <h4
                    className={`font-semibold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    Backend
                </h4>
                <p
                    className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    {technicalStack.backend}
                </p>
                </div>
                <div>
                <h4
                    className={`font-semibold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    AI & ML
                </h4>
                <p
                    className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    {technicalStack.ai}
                </p>
                </div>
                <div>
                <h4
                    className={`font-semibold mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    Infrastructure
                </h4>
                <p
                    className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    {technicalStack.infrastructure}
                </p>
                </div>
            </div>
            </div>
        </div>
    );
}
