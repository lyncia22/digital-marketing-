
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Code2, Megaphone, BarChart, Database, Search, Layout } from 'lucide-react'

const SKILL_GROUPS = [
  {
    title: 'Strategy & Execution',
    icon: Megaphone,
    skills: ['Performance Marketing', 'Growth Hacking', 'Campaign Orchestration', 'A/B Testing']
  },
  {
    title: 'Analytics & Insights',
    icon: BarChart,
    skills: ['Google Analytics 4', 'Looker Studio', 'Heatmapping', 'Conversion Tracking']
  },
  {
    title: 'Technical Skills',
    icon: Code2,
    skills: ['GTM', 'Basic HTML/CSS', 'SQL', 'Automation Tools']
  },
  {
    title: 'Search Optimization',
    icon: Search,
    skills: ['Technical SEO', 'Backlink Strategy', 'Semantic SEO', 'Local SEO']
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-4 border-accent text-accent px-4 py-1">Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-headline mb-6">Core Competencies & Toolset</h2>
            <p className="text-muted-foreground text-lg mb-8">
              A balanced blend of creative marketing intuition and rigorous technical precision. I leverage data to inform strategy and technology to scale results.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'HubSpot', 'Zapier', 'Python', 'SEMRush', 'Ahrefs'].map(tool => (
                <Badge key={tool} variant="secondary" className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_GROUPS.map((group, idx) => (
              <Card key={idx} className="bg-card border-white/5 overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <group.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-headline mb-4">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.skills.map(skill => (
                      <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
