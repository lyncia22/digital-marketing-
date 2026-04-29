
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Target } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const PROJECTS = [
  {
    id: 'ecommerce-growth',
    title: 'E-commerce Growth Engine',
    description: 'Scaled a direct-to-consumer brand by 300% in 6 months through precision-targeted performance marketing.',
    tags: ['Paid Ads', 'CRO', 'Growth'],
    kpi: '+300% Revenue',
    image: PlaceHolderImages.find(img => img.id === 'case-study-1')?.imageUrl || '',
    longDescription: 'This project involved a complete overhaul of the client\'s acquisition funnel. We implemented high-intent search campaigns and retargeting loops that significantly lowered the CAC while scaling volume.',
    results: ['300% Revenue increase', '45% reduction in CAC', '2.4x higher conversion rate']
  },
  {
    id: 'saas-revamp',
    title: 'Global SaaS Brand Revamp',
    description: 'Comprehensive digital strategy focused on organic visibility and content authority for an enterprise solution.',
    tags: ['SEO', 'Content Strategy'],
    kpi: '+150% Organic Traffic',
    image: PlaceHolderImages.find(img => img.id === 'case-study-2')?.imageUrl || '',
    longDescription: 'By focusing on semantic SEO and technical site architecture, we positioned the client as a thought leader in their space, resulting in a massive surge of high-quality organic leads.',
    results: ['150% growth in organic traffic', 'Top 3 rankings for 50+ high-volume keywords', '20% increase in demo bookings']
  },
  {
    id: 'lead-gen-automation',
    title: 'Precision Lead Generation',
    description: 'B2B campaign that lowered CPL by 45% while increasing qualified lead volume through automation.',
    tags: ['Lead Gen', 'Automation'],
    kpi: '-45% CPL',
    image: PlaceHolderImages.find(img => img.id === 'case-study-3')?.imageUrl || '',
    longDescription: 'We built an automated lead scoring and nurturing system that allowed the sales team to focus only on the most qualified prospects, drastically improving efficiency.',
    results: ['45% reduction in CPL', '60% increase in MQL-to-SQL conversion', 'Automated 70% of initial outreach']
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">Case Studies</Badge>
          <h2 className="text-4xl md:text-5xl font-headline mb-4">Results-Driven Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I don't just run campaigns; I solve business problems with strategic digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="group overflow-hidden bg-card border-white/5 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint="case study"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px] font-medium tracking-wider uppercase bg-primary/10 text-primary border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2 mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 py-4 border-y border-white/5">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold">{project.kpi}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/portfolio/${project.id}`} className="w-full">
                  <Button variant="ghost" className="w-full justify-between hover:bg-primary/10 hover:text-primary group/btn">
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
