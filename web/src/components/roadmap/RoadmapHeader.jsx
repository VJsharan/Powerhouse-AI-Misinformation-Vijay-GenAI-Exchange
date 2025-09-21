export function RoadmapHeader({ isDark }) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Execution{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Roadmap
        </span>
      </h2>
      <p
        className={`text-lg md:text-xl max-w-2xl mx-auto ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        A comprehensive plan for developing TrustCheck into a full-scale
        misinformation detection platform.
      </p>
    </div>
  );
}
