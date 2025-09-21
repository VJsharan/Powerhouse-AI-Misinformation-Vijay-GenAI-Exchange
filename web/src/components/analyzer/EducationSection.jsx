import {
  Eye,
  Search,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react";

const educationTips = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Check the Source",
    description:
      "Verify if the information comes from a reputable, established news organization or credible institution.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Cross-Reference Facts",
    description:
      "Look for the same information from multiple independent sources before believing or sharing.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Examine the Language",
    description:
      "Be wary of sensational headlines, emotional language, or content designed to provoke strong reactions.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Consider the Motivation",
    description:
      "Ask yourself: Who benefits from this information? What might be the agenda behind sharing it?",
    color: "from-orange-400 to-orange-600",
  },
];

export function EducationSection({ isDark }) {
  return (
    <div className="mb-8">
      <div className="text-center mb-8">
        <h3
          className={`text-2xl md:text-3xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Learn to Spot Misinformation
        </h3>
        <p
          className={`text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Develop critical thinking skills to identify false information
          and protect yourself online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationTips.map((tip, index) => (
          <div
            key={index}
            className={`group rounded-xl p-6 backdrop-blur-lg border transition-all duration-300 hover:scale-105 cursor-pointer ${
              isDark
                ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70"
                : "bg-white/70 border-gray-200/50 hover:bg-white/90"
            }`}
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${tip.color} mb-4`}
            >
              <div className="text-white">{tip.icon}</div>
            </div>
            <h4
              className={`text-lg font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {tip.title}
            </h4>
            <p
              className={`text-base ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {tip.description}
            </p>
            <div
              className={`flex items-center mt-3 text-sm font-medium transition-colors ${
                isDark ? "text-blue-400" : "text-blue-600"
              } group-hover:text-blue-500`}
            >
              Learn more
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
