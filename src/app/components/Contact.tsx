"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:hemant.manglani01@gmail.com',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hemant-manglani-114593176',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/hemant-manglani',
    color: 'from-gray-600 to-gray-800',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', country: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
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
          subject: 'Contact Form Submission – Satish Chemicals',
          message: `<html>
            <head><title>New message from ${formData.name}</title></head>
            <body>
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Number:</strong> ${formData.number}</p>
              <p><strong>Country:</strong> ${formData.country}</p>
              <p><strong>Message:</strong></p>
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
        setErrorMessage(data.message || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred while sending the email.');
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight md:leading-snug mb-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400">Let's discuss your next project</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                  required
                />
              </div>

              {status === 'success' && (
                <div className="p-3 rounded-md bg-green-500/10 border border-green-500/20 flex items-center gap-2 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
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
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                ) : (
                  <Send className="mr-2 w-4 h-4" />
                )}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{link.label}</p>
                        <p className="text-sm text-gray-400">{link.href.replace('https://', '').replace('mailto:', '')}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-md border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-2 text-white">Available for freelance</h3>
              <p className="text-gray-400">
                I'm currently available for freelance work and new opportunities. Feel free to reach out!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
