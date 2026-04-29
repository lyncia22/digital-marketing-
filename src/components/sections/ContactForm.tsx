
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="bg-card border-white/10 max-w-lg mx-auto py-12 text-center">
        <CardContent className="flex flex-col items-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-headline mb-4">Message Sent!</h3>
          <p className="text-muted-foreground mb-8">
            Thank you for reaching out, Lyncia. I'll get back to you within 24-48 hours.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Send another message</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline mb-6">Let's Build Something Together</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you have a specific project in mind or just want to explore how digital marketing can transform your business, I'm always open to new conversations.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:chigurilyncia@gmail.com" className="font-semibold hover:text-primary transition-colors">chigurilyncia@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Socials</p>
                  <a href="https://www.linkedin.com/in/lyncia-chiguri" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accent transition-colors">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-card border-white/10">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input placeholder="John Doe" required className="bg-background border-white/10 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="john@example.com" required className="bg-background border-white/10 focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project Inquiry" required className="bg-background border-white/10 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Tell me about your goals..." required className="bg-background border-white/10 focus:border-primary min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full h-12 gap-2 text-lg">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
