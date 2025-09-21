import {
  CheckCircle,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";

export function AnalysisResult({ result, isDark, showResult }) {
    if (!showResult || !result) return null;

    const { verdict, confidence, explanation, positive_indicators, red_flags, recommendations, sources_to_check } = result;

    return (
        <div
            className={`rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-lg border transition-all duration-500 transform ${
                showResult
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } ${
                isDark
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-white/70 border-gray-200/50"
            }`}
        >
            {/* Verdict */}
            <div
                className={`text-center p-6 rounded-xl mb-6 ${
                verdict === "credible"
                    ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20"
                    : verdict === "questionable"
                    ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20"
                    : "bg-gradient-to-r from-red-500/20 to-orange-500/20"
                }`}
            >
                <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    verdict === "credible"
                    ? "bg-green-500"
                    : verdict === "questionable"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                }`}
                >
                {verdict === "credible" ? (
                    <CheckCircle className="w-8 h-8 text-white" />
                ) : (
                    <AlertTriangle className="w-8 h-8 text-white" />
                )}
                </div>
                <h3
                className={`text-2xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                }`}
                >
                {verdict === "credible"
                    ? "Likely Credible"
                    : verdict === "questionable"
                    ? "Requires Verification"
                    : "Potential Misinformation"}
                </h3>
                <p
                className={`text-lg ${
                    isDark ? "text-gray-300" : "text-gray-600"
                }`}
                >
                Confidence: {Math.round(confidence)}%
                </p>
            </div>

            {/* Explanation */}
            {explanation && <div className="mb-6">
                <h4
                className={`text-lg font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                }`}
                >
                Analysis Explanation
                </h4>
                <p
                className={`text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                }`}
                >
                {explanation}
                </p>
            </div>}

            {/* Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Positive Indicators */}
                {positive_indicators?.length > 0 && (
                <div>
                    <h4
                    className={`text-lg font-semibold mb-3 flex items-center ${
                        isDark ? "text-white" : "text-gray-900"
                    }`}
                    >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Positive Indicators
                    </h4>
                    <div className="space-y-2">
                    {positive_indicators.map(
                        (indicator, index) => (
                        <div
                            key={index}
                            className="px-3 py-2 rounded-lg bg-green-100 text-green-800 text-sm"
                        >
                            {indicator}
                        </div>
                        ),
                    )}
                    </div>
                </div>
                )}

                {/* Red Flags */}
                {red_flags?.length > 0 && (
                <div>
                    <h4
                    className={`text-lg font-semibold mb-3 flex items-center ${
                        isDark ? "text-white" : "text-gray-900"
                    }`}
                    >
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    Red Flags
                    </h4>
                    <div className="space-y-2">
                    {red_flags.map((flag, index) => (
                        <div
                        key={index}
                        className="px-3 py-2 rounded-lg bg-red-100 text-red-800 text-sm"
                        >
                        {flag}
                        </div>
                    ))}
                    </div>
                </div>
                )}
            </div>

            {/* Recommendations */}
            {recommendations?.length > 0 && (
                <div className="mb-6">
                <h4
                    className={`text-lg font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                    }`}
                >
                    Recommendations
                </h4>
                <ul
                    className={`space-y-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    {recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {rec}
                    </li>
                    ))}
                </ul>
                </div>
            )}

            {/* Sources to Check */}
            {sources_to_check?.length > 0 && (
                <div>
                <h4
                    className={`text-lg font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                    }`}
                >
                    Suggested Sources for Verification
                </h4>
                <div className="flex flex-wrap gap-2">
                    {sources_to_check.map((source, index) => (
                    <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                        isDark
                            ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                            : "bg-blue-100 text-blue-800 border border-blue-200"
                        }`}
                    >
                        {source}
                        <ExternalLink className="w-3 h-3 ml-1" />
                    </span>
                    ))}
                </div>
                </div>
            )}
        </div>
    );
}
