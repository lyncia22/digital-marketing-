
import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const SERVICES = [
  {
    title: 'Performance Marketing',
    description: 'Data-driven paid social and search campaigns focused on high-intent conversion and ROI optimization.',
    features: ['Channel Strategy', 'Creative Direction', 'Bid Management', 'Attribution Modeling']
  },
  {
    title: 'Growth Strategy',
    description: 'Holistic business growth consulting that aligns product, marketing, and sales for sustainable scale.',
    features: ['Funnel Audit', 'Retention Strategy', 'Viral Loops', 'Revenue Operations']
  },
  {
    title: 'Organic Search (SEO)',
    description: 'Comprehensive SEO strategies that improve visibility, build authority, and drive long-term organic traffic.',
    features: ['Technical Audits', 'Keyword Research', 'Authority Building', 'Local Optimization']
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline mb-4">How I Can Help</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized solutions designed to solve complex marketing challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <Card key={idx} className="bg-background border-white/5 relative group hover:border-primary/40 transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-headline mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
