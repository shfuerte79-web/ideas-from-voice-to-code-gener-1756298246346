import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Driven API Builder",
    "one_liner": "Create robust APIs simply by describing them with your voice.",
    "why_now": "Increased demand for rapid prototyping and microservices architecture.",
    "novel_mechanism": "Using natural language processing to interpret API specifications from voice.",
    "ai_stack": [
      "GPT-4",
      "RAG",
      "Speech"
    ],
    "edge_use_cases": [
      "Rapid API generation for startups",
      "Quick prototyping for hackathons"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice input for endpoint specifications",
        "Generated API documentation",
        "Integration with popular databases"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "OpenAI API",
        "Vercel"
      ],
      "data_bootstrap": [
        "Public API specifications",
        "Developer survey data"
      ],
      "risk": [
        "Misinterpretation of voice commands",
        "Limited adoption by traditional developers"
      ],
      "mitigation": [
        "Implement confirmation prompts",
        "Showcase easy integration to gain trust"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live demonstration of voice-to-API in action",
        "Testimonials from early adopters"
      ],
      "channels": [
        "ProductHunt",
        "Dev.to",
        "Discord communities"
      ],
      "pricing": {
        "free": "Basic features for solo developers",
        "pro": "$19/month for small teams",
        "business": "$99/month for larger teams with advanced features"
      }
    },
    "moat": [
      "User-generated API templates",
      "Community support for voice commands",
      "Integration with existing development tools"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "This approach simplifies API creation in a novel way, targeting a growing market of developers looking for efficiency."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}