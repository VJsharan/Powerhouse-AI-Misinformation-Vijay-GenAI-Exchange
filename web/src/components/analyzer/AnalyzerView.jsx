import { useContentAnalysis } from "@/hooks/useContentAnalysis";
import { HeroSection } from "@/components/analyzer/HeroSection";
import { InputSection } from "@/components/analyzer/InputSection";
import { ErrorDisplay } from "@/components/analyzer/ErrorDisplay";
import { AnalysisResult } from "@/components/analyzer/AnalysisResult";
import { EducationSection } from "@/components/analyzer/EducationSection";

export function AnalyzerView({ isDark }) {
  const {
    inputText,
    setInputText,
    isAnalyzing,
    analysisResult,
    showResult,
    error,
    analyzeContent,
    resetAnalysis,
  } = useContentAnalysis();

  return (
    <>
      <HeroSection isDark={isDark} />
      <InputSection
        inputText={inputText}
        setInputText={setInputText}
        isAnalyzing={isAnalyzing}
        analyzeContent={analyzeContent}
        resetAnalysis={resetAnalysis}
        isDark={isDark}
      />
      <ErrorDisplay error={error} isDark={isDark} />
      <AnalysisResult result={analysisResult} showResult={showResult} isDark={isDark} />
      <EducationSection isDark={isDark} />
    </>
  );
}
