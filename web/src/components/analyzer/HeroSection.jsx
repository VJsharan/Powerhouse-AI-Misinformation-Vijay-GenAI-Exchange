export function HeroSection({ isDark }) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Combat{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Misinformation
        </span>
      </h2>
      <p
        className={`text-lg md:text-xl max-w-2xl mx-auto ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Verify news, headlines, and social media posts with AI-powered
        fact-checking. Protect yourself and others from false
        information.
      </p>
    </div>
  );
}
