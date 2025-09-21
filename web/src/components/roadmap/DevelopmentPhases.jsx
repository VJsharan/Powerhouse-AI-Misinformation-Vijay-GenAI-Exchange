import { CheckSquare } from "lucide-react";

export function DevelopmentPhases({ phases, isDark }) {
    return (
        <div
            className={`rounded-2xl p-6 md:p-8 backdrop-blur-lg border ${
                isDark
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-white/70 border-gray-200/50"
            }`}
        >
            <h3
            className={`text-2xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
            }`}
            >
            Development Phases
            </h3>

            <div className="space-y-6">
            {phases.map((phase, index) => (
                <div
                key={index}
                className={`border rounded-xl p-6 transition-all duration-300 ${
                    isDark
                    ? "border-gray-700 bg-gray-900/30"
                    : "border-gray-200 bg-gray-50/50"
                }`}
                >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        phase.status === "in-progress"
                            ? "bg-blue-500 text-white"
                            : phase.status === "planned"
                            ? "bg-yellow-500 text-white"
                            : "bg-gray-400 text-white"
                        }`}
                    >
                        {index + 1}
                    </div>
                    <h4
                        className={`text-xl font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        {phase.title}
                    </h4>
                    </div>
                    <div className="flex items-center space-x-2">
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                        phase.status === "in-progress"
                            ? "bg-blue-100 text-blue-800"
                            : phase.status === "planned"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                    >
                        {phase.status}
                    </span>
                    <span
                        className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                    >
                        {phase.duration}
                    </span>
                    </div>
                </div>

                <ul className="space-y-2">
                    {phase.features.map((feature, featureIndex) => (
                    <li
                        key={featureIndex}
                        className={`flex items-center text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        {feature.includes("✓") ? (
                        <CheckSquare className="w-4 h-4 text-green-500 mr-2" />
                        ) : (
                        <div className="w-4 h-4 border border-gray-400 rounded mr-2"></div>
                        )}
                        {feature}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
    );
}
