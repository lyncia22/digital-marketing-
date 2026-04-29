
"use client"

import { useState } from 'react'
import { generateCaseStudyNarrative, type GenerateCaseStudyNarrativeOutput } from '@/ai/flows/generate-case-study-narrative'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Loader2, Sparkles, Copy, Check, Save } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function NewCaseStudy() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<GenerateCaseStudyNarrativeOutput | null>(null)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    projectTitle: '',
    clientName: '',
    projectGoals: '',
    methodologies: '',
    keyPerformanceIndicators: '',
    achievedResults: '',
    targetAudience: '',
    uniqueSellingPoints: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const output = await generateCaseStudyNarrative(formData)
      setResult(output)
      toast({
        title: "Narrative Generated",
        description: "AI has successfully crafted your case study.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "There was an error generating the narrative. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (result) {
      const text = `${result.narrative}\n\nKey Achievements:\n${result.summaryBulletPoints.map(p => `- ${p}`).join('\n')}`
      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast({
        title: "Copied!",
        description: "Case study copied to clipboard.",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Side */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 border-accent text-accent px-4 py-1">AI Case Study Builder</Badge>
              <h1 className="text-4xl font-headline mb-4">Transform Results into Narratives</h1>
              <p className="text-muted-foreground text-lg">
                Input your project data and let our AI create a professional case study narrative for your portfolio.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="bg-card border-white/10">
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Project Title</label>
                      <Input 
                        placeholder="e.g., E-commerce Growth 2024" 
                        value={formData.projectTitle}
                        onChange={(e) => setFormData({...formData, projectTitle: e.target.value})}
                        required 
                        className="bg-background border-white/10" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Client Name (Optional)</label>
                      <Input 
                        placeholder="e.g., Global Retailer" 
                        value={formData.clientName}
                        onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                        className="bg-background border-white/10" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Goals</label>
                    <Textarea 
                      placeholder="What were you trying to achieve?" 
                      value={formData.projectGoals}
                      onChange={(e) => setFormData({...formData, projectGoals: e.target.value})}
                      required 
                      className="bg-background border-white/10 min-h-[100px]" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Methodologies</label>
                    <Input 
                      placeholder="e.g., SEO Audit, A/B Testing, PPC" 
                      value={formData.methodologies}
                      onChange={(e) => setFormData({...formData, methodologies: e.target.value})}
                      required 
                      className="bg-background border-white/10" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Key KPIs</label>
                      <Input 
                        placeholder="e.g., ROAS, CVR, Organic Clicks" 
                        value={formData.keyPerformanceIndicators}
                        onChange={(e) => setFormData({...formData, keyPerformanceIndicators: e.target.value})}
                        required 
                        className="bg-background border-white/10" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Achieved Results</label>
                      <Input 
                        placeholder="e.g., 300% Revenue Increase" 
                        value={formData.achievedResults}
                        onChange={(e) => setFormData({...formData, achievedResults: e.target.value})}
                        required 
                        className="bg-background border-white/10" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Target Audience (Optional)</label>
                    <Input 
                      placeholder="e.g., Startup Founders, CMOs" 
                      value={formData.targetAudience}
                      onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                      className="bg-background border-white/10" 
                    />
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" size="lg" className="w-full gap-2 text-lg h-14" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating Narrative...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-accent" />
                    Generate Case Study
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Result Side */}
          <div className="relative min-h-[500px]">
            {!result && !loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/10 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-muted-foreground/30" />
                </div>
                <h3 className="text-xl font-headline mb-2 text-muted-foreground">Ready to Build</h3>
                <p className="text-muted-foreground max-w-xs">
                  Fill out the form and generate your professional narrative here.
                </p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-card/20 backdrop-blur-sm rounded-2xl z-20">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-lg font-medium text-primary animate-pulse">AI is crafting your story...</p>
              </div>
            )}

            {result && (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <Card className="bg-card border-primary/20 overflow-hidden">
                  <CardHeader className="bg-primary/5 flex flex-row items-center justify-between space-y-0">
                    <div>
                      <CardTitle className="font-headline">Generated Narrative</CardTitle>
                      <CardDescription>Optimized for professional portfolios</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                      {copied ? <Check className="w-5 h-5 text-accent" /> : <Copy className="w-5 h-5" />}
                    </Button>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap">
                        {result.narrative}
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-white/5">
                      <h4 className="font-headline text-accent mb-4 uppercase tracking-wider text-sm">Key Achievements</h4>
                      <ul className="space-y-3">
                        {result.summaryBulletPoints.map((point, idx) => (
                          <li key={idx} className="flex gap-3 text-muted-foreground">
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                              <Check className="w-3 h-3 text-accent" />
                            </div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex gap-4">
                  <Button className="flex-1 h-12 gap-2">
                    <Save className="w-4 h-4" />
                    Save to Portfolio
                  </Button>
                  <Button variant="outline" className="flex-1 h-12" onClick={() => setResult(null)}>
                    Start Over
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
