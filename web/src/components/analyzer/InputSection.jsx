import { Sparkles, RotateCcw } from "lucide-react";

export function InputSection({
  inputText,
  setInputText,
  isAnalyzing,
  analyzeContent,
  resetAnalysis,
  isDark,
}) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-lg border transition-all duration-300 ${
        isDark
          ? "bg-gray-800/50 border-gray-700/50"
          : "bg-white/70 border-gray-200/50"
      }`}
    >
      <div className="mb-4">
        <label
          className={`block text-sm font-medium mb-2 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Enter content to analyze
        </label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste a headline, news article, social media post, or any content you want to fact-check..."
          className={`w-full h-32 p-4 rounded-xl border transition-all duration-300 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            isDark
              ? "bg-gray-900/50 border-gray-600 text-white placeholder-gray-400"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
          }`}
          disabled={isAnalyzing}
          maxLength={2000}
        />
        <div
          className={`text-right text-sm mt-2 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {inputText.length}/2000
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={analyzeContent}
          disabled={!inputText.trim() || isAnalyzing}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-medium transition-all duration-300 transform ${
            !inputText.trim() || isAnalyzing
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 active:scale-95"
          }`}
        >
          {isAnalyzing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Analyze Content</span>
            </>
          )}
        </button>

        {inputText && (
          <button
            onClick={resetAnalysis}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              isDark
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
