export async function POST(request) {
  try {
    const { content } = await request.json();
    
    if (!content || !content.trim()) {
      return Response.json({ error: "Content is required" }, { status: 400 });
    }

    // Create structured analysis using ChatGPT
    const analysisResponse = await fetch('/integrations/chat-gpt/conversationgpt4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: `You are an expert fact-checker and misinformation analyst. Analyze the provided content for credibility, accuracy, and potential misinformation indicators. 

Your analysis should consider:
1. Source credibility and verification
2. Factual accuracy and evidence
3. Language patterns (emotional manipulation, sensationalism)
4. Logical consistency
5. Missing context or cherry-picked information
6. Potential bias or agenda

Provide a thorough, balanced analysis that helps users understand the reliability of the content.`
          },
          {
            role: "user",
            content: `Please analyze this content for potential misinformation: "${content}"`
          }
        ],
        json_schema: {
          name: "fact_check_analysis",
          schema: {
            type: "object",
            properties: {
              verdict: {
                type: "string",
                enum: ["credible", "questionable", "misinformation"]
              },
              confidence: {
                type: "number",
                description: "Confidence level from 0 to 100"
              },
              explanation: {
                type: "string",
                description: "Detailed explanation of the analysis"
              },
              red_flags: {
                type: "array",
                items: { type: "string" },
                description: "List of concerning indicators found"
              },
              positive_indicators: {
                type: "array",
                items: { type: "string" },
                description: "List of credibility indicators found"
              },
              recommendations: {
                type: "array",
                items: { type: "string" },
                description: "Recommendations for further verification"
              },
              sources_to_check: {
                type: "array",
                items: { type: "string" },
                description: "Suggested reliable sources to cross-reference"
              }
            },
            required: ["verdict", "confidence", "explanation", "red_flags", "positive_indicators", "recommendations", "sources_to_check"],
            additionalProperties: false
          }
        }
      })
    });

    if (!analysisResponse.ok) {
      throw new Error(`Analysis failed: ${analysisResponse.status}`);
    }

    const analysisData = await analysisResponse.json();
    const analysis = JSON.parse(analysisData.choices[0].message.content);

    return Response.json({
      success: true,
      analysis: analysis,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Analysis error:', error);
    return Response.json({ 
      error: "Failed to analyze content. Please try again." 
    }, { status: 500 });
  }
}