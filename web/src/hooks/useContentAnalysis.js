import { useState } from "react";

export function useContentAnalysis() {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(null);

  const analyzeContent = async () => {
    if (!inputText.trim()) return;

    setIsAnalyzing(true);
    setShowResult(false);
    setError(null);

    try {
      const response = await fetch("/api/analyze-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: inputText.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Analysis failed: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Analysis failed");
      }

      setAnalysisResult(data.analysis);
      setShowResult(true);
    } catch (err) {
      console.error("Analysis error:", err);
      setError(err.message || "Failed to analyze content. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setInputText("");
    setAnalysisResult(null);
    setShowResult(false);
    setError(null);
  };

  return {
    inputText,
    setInputText,
    isAnalyzing,
    analysisResult,
    showResult,
    error,
    analyzeContent,
    resetAnalysis,
  };
}
