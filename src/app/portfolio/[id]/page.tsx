
"use client"

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PROJECTS } from '@/components/sections/Portfolio'
import { ArrowLeft, CheckCircle2, Target, BarChart3, Rocket } from 'lucide-react'

export default function CaseStudyDetail() {
  const { id } = useParams()
  const router = useRouter()
  
  const project = PROJECTS.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-headline mb-4">Project Not Found</h1>
          <Button onClick={() => router.push('/')}>Return Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            className="mb-8 gap-2 hover:text-primary"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} className="bg-primary/10 text-primary border-none">{tag}</Badge>
                  ))}
                </div>
                <h1 className="text-5xl font-headline font-bold mb-6">{project.title}</h1>
                <p className="text-2xl text-accent font-medium mb-8">{project.kpi}</p>
                <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                  <p>{project.longDescription}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-card border border-white/5 space-y-3">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-headline">The Strategy</h3>
                  <p className="text-sm text-muted-foreground">Focus on data-backed precision targeting and automated nurturing loops.</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-white/5 space-y-3">
                  <Rocket className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-headline">The Impact</h3>
                  <p className="text-sm text-muted-foreground">Significant growth in high-intent leads and overall revenue conversion.</p>
                </div>
              </div>
            </div>

            {/* Right: Visuals & Results */}
            <div className="space-y-8">
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="bg-secondary/20 rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-headline mb-6 flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  Key Results
                </h3>
                <ul className="space-y-4">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-lg">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/5 text-center">
                <p className="text-muted-foreground mb-6">Want to see similar results for your business?</p>
                <Button size="lg" className="w-full h-14 text-lg" onClick={() => router.push('/#contact')}>
                  Discuss Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
