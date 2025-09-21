"use client";

import { useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnalyzerView } from "@/components/analyzer/AnalyzerView";
import { RoadmapView } from "@/components/roadmap/RoadmapView";

export default function TrustCheckApp() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState("analyzer");

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      <Header
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "analyzer" ? (
          <AnalyzerView isDark={isDark} />
        ) : (
          <RoadmapView isDark={isDark} />
        )}
        <Footer isDark={isDark} />
      </main>
    </div>
  );
}
