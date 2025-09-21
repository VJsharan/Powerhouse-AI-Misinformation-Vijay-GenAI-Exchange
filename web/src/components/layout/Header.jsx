import { Shield, Sun, Moon } from "lucide-react";

export function Header({ isDark, toggleDarkMode, activeTab, onTabChange }) {
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${
        isDark
          ? "bg-gray-900/80 border-gray-700/50"
          : "bg-white/80 border-gray-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-xl ${
                isDark
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : "bg-gradient-to-r from-blue-500 to-indigo-600"
              }`}
            >
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1
              className={`text-xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              TrustCheck
            </h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center space-x-4">
            <div
              className={`flex rounded-lg p-1 ${
                isDark ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <button
                onClick={() => onTabChange("analyzer")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === "analyzer"
                    ? isDark
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 shadow-sm"
                    : isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Analyzer
              </button>
              <button
                onClick={() => onTabChange("roadmap")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === "roadmap"
                    ? isDark
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 shadow-sm"
                    : isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Roadmap
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
