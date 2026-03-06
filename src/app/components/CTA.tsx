"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Calendar, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export function CTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', number: '', country: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', number: '', country: '', message: '' });
        setErrorMessage('');
      }, 300);
    }
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'Schedule a Call Request - Portfolio',
          message: `<html>
            <head><title>New call request from ${formData.name}</title></head>
            <body>
              <h2>New Call Request</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Number:</strong> ${formData.number}</p>
              <p><strong>Country:</strong> ${formData.country}</p>
              <p><strong>Meeting Details/Message:</strong></p>
              <p>${formData.message.replace(/\n/g, '<br/>')}</p>
            </body>
          </html>`
        }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        setStatus('success');
        setFormData({ name: '', email: '', number: '', country: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send request.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred while submitting.');
    }
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight md:leading-snug mb-6 px-4 py-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Build Your Next Great Product
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss how I can help you build scalable web applications and Agentic AI solutions.
          </p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg"
            >
              <Rocket className="mr-2 w-5 h-5" />
              Hire Me
            </Button>

            <Dialog open={isOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-500/50 hover:bg-cyan-500/10 text-white px-8 py-6 text-lg"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule a Call
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-[#0a0a1a] border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold leading-snug text-transparent px-2 py-1 bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Schedule a Call</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Fill out the form below to request a meeting. I'll get back to you to confirm the time.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleScheduleSubmit} className="space-y-4 mt-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      placeholder="Your Number"
                      value={formData.number}
                      onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      required
                    />
                    <Input
                      type="text"
                      placeholder="Your Country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="What would you like to discuss?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                      required
                    />
                  </div>

                  {status === 'success' && (
                    <div className="p-3 rounded-md bg-green-500/10 border border-green-500/20 flex items-center gap-2 text-green-400">
                      <CheckCircle2 className="w-5 h-5" />
                      <p className="text-sm">Request sent! I'll be in touch soon.</p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-400">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    ) : (
                      <Calendar className="mr-2 w-4 h-4" />
                    )}
                    {status === 'loading' ? 'Sending Request...' : 'Send Request'}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
