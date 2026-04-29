import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Portfolio } from '@/components/sections/Portfolio'
import { Skills } from '@/components/sections/Skills'
import { Services } from '@/components/sections/Services'
import { ContactForm } from '@/components/sections/ContactForm'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { ArrowRight, ChevronDown, CheckCircle } from 'lucide-react'

export default function Home() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic')?.imageUrl || ''

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 border-accent/50 text-accent bg-accent/5 px-4 py-1.5 animate-in fade-in slide-in-from-bottom-4">
              Strategic Digital Marketing Expertise
            </Badge>
            <h1 className="text-5xl md:text-8xl font-headline font-bold mb-8 leading-tight tracking-tight">
              Driving Growth Through <br/>
              <span className="text-primary italic">Digital Precision.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              I help innovative brands scale revenue and visibility using data-backed performance marketing and technical SEO strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="#portfolio">
                <Button size="lg" className="h-14 px-8 text-lg font-medium group">
                  View Case Studies
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium border-white/10 hover:bg-white/5">
                  Let's Talk
                </Button>
              </Link>
            </div>
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Logo Cloud */}
      <section className="py-12 border-y border-white/5 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['TechGrowth', 'MarketFlow', 'CloudScale', 'DataNexus', 'PulseMedia'].map(logo => (
              <span key={logo} className="text-2xl font-headline font-bold">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />
      
      <Skills />

      {/* About Section */}
      <section id="about" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden border-8 border-background shadow-2xl z-10">
                <Image
                  src={profileImg}
                  alt="Lyncia Chiguri"
                  fill
                  className="object-cover"
                  data-ai-hint="profile photo"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-2xl -z-0 opacity-20 blur-2xl" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 p-6 glass-card rounded-xl translate-x-12 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-accent w-5 h-5" />
                  <span className="font-bold">7+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" />
                  <span className="font-bold">50+ Projects Scaled</span>
                </div>
              </div>
            </div>
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">About Me</Badge>
              <h2 className="text-4xl md:text-5xl font-headline mb-6">Bridging the Gap Between Data and Creativity</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a senior digital marketer with a background in data science and communications. I believe that modern marketing isn't just about spending budget—it's about understanding human behavior and mapping it to technical systems.
                </p>
                <p>
                  My career philosophy is built on "Continuous Optimization." Whether it's a landing page conversion rate or a complex B2B lead funnel, I approach every challenge with a scientific mindset: Test, Measure, Learn, and Scale.
                </p>
                <p>
                  When I'm not auditing search consoles or managing ad accounts, I'm usually exploring the intersection of AI and creative marketing automation.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <blockquote className="italic text-foreground/80 border-l-4 border-primary pl-4 py-2">
                  "Marketing is no longer about the stuff you make, but about the stories you tell and the value you provide at every touchpoint."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <ContactForm />

      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl font-headline font-bold">
              <span className="text-primary italic">L</span>yncia Chiguri
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lyncia Chiguri. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
