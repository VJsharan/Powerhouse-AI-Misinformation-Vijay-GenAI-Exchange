import { RoadmapHeader } from "@/components/roadmap/RoadmapHeader";
import { DevelopmentPhases } from "@/components/roadmap/DevelopmentPhases";
import { StrategySection } from "@/components/roadmap/StrategySection";
import { SuccessMetrics } from "@/components/roadmap/SuccessMetrics";

const executionPlan = {
  phases: [
    {
      title: "Phase 1: MVP Development",
      duration: "2-3 months",
      status: "in-progress",
      features: [
        "AI-powered content analysis (✓ Implemented)",
        "User-friendly web interface (✓ Implemented)",
        "Basic fact-checking capabilities (✓ Implemented)",
        "Educational resources section (✓ Implemented)",
        "Dark mode support (✓ Implemented)",
      ],
    },
    {
      title: "Phase 2: Enhanced Analysis",
      duration: "3-4 months",
      status: "planned",
      features: [
        "Real-time source verification",
        "Image and video fact-checking",
        "Social media integration",
        "Confidence scoring improvements",
        "Historical claim tracking",
      ],
    },
    {
      title: "Phase 3: Community & Scale",
      duration: "4-6 months",
      status: "planned",
      features: [
        "User accounts and history",
        "Community reporting system",
        "API for third-party integration",
        "Mobile app development",
        "Enterprise dashboard",
      ],
    },
    {
      title: "Phase 4: Advanced Features",
      duration: "6+ months",
      status: "future",
      features: [
        "Multi-language support",
        "Advanced AI model training",
        "Browser extension",
        "Real-time monitoring",
        "Academic research partnerships",
      ],
    },
  ],
  marketStrategy: {
    target: "Journalists, educators, researchers, and concerned citizens",
    pricing: "Freemium model with premium features for professionals",
    distribution: "Web platform, API, browser extension, mobile apps",
  },
  technicalStack: {
    frontend: "React, Next.js, Tailwind CSS",
    backend: "Node.js, PostgreSQL",
    ai: "OpenAI GPT-4, custom fact-checking models",
    infrastructure: "Cloud hosting, CDN, API management",
  },
};

export function RoadmapView({ isDark }) {
  return (
    <div className="space-y-8">
      <RoadmapHeader isDark={isDark} />
      <DevelopmentPhases phases={executionPlan.phases} isDark={isDark} />
      <StrategySection
        marketStrategy={executionPlan.marketStrategy}
        technicalStack={executionPlan.technicalStack}
        isDark={isDark}
      />
      <SuccessMetrics isDark={isDark} />
    </div>
  );
}
