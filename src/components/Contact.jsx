import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, MessageSquare, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: string }
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      // Using Web3Forms free API to send direct email to maheshborde4@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Free key from web3forms.com (or mailto fallback below)
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact Message from ${formData.name}`,
          to_email: personal.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage({
          type: 'success',
          text: `Message sent successfully! Mahesh will receive your message at ${personal.email}.`
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback to mailto if API key is not configured yet
        const mailtoUrl = `mailto:${personal.email}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
        window.location.href = mailtoUrl;

        setStatusMessage({
          type: 'success',
          text: `Mail app launched! Opening email client to send message to ${personal.email}.`
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      // Direct mailto fallback on error
      const mailtoUrl = `mailto:${personal.email}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
      window.location.href = mailtoUrl;

      setStatusMessage({
        type: 'success',
        text: `Mail client launched to send your message directly to ${personal.email}.`
      });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <span className="gradient-text-orange">Something Intelligent</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ff6b00] to-[#ff9100] rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Email Card */}
            <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/15 border border-[#ff6b00]/30 flex items-center justify-center text-[#ff6b00]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider">Email Address</h4>
                  <p className="text-base font-bold text-white tracking-tight mt-0.5">{personal.email}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Copied Email!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#ff6b00]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="py-2.5 px-4 rounded-xl bg-[#ff6b00] hover:bg-[#d35400] text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Mail App</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ff9100]/15 border border-[#ff9100]/30 flex items-center justify-center text-[#ff9100] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider">Hometown & State</h4>
                  <p className="text-base font-bold text-white mt-1">Shivrai, Taluka Vaijapur</p>
                  <p className="text-xs text-white/70 mt-0.5">District Chhatrapati Sambhajinagar, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Social Accounts */}
            <div className="glass-card p-6 rounded-3xl">
              <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider mb-4">Connect Socially</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all"
                >
                  <Linkedin className="w-5 h-5 text-[#ff6b00]" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all"
                >
                  <Github className="w-5 h-5 text-[#ff9100]" />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-[#ff6b00] font-mono text-xs">
                  <MessageSquare className="w-4 h-4" />
                  <span>DIRECT INBOX FORM</span>
                </div>
                <span className="text-[11px] font-mono text-white/40">Direct to {personal.email}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Direct Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-white/70 mb-1.5">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#ff6b00] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-white/70 mb-1.5">Your Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#ff6b00] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-white/70 mb-1.5">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Mahesh, I'd like to talk about an AI/ML or Full-Stack Web opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#ff6b00] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-semibold text-sm text-white glowing-btn-orange flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message Now'}</span>
                </button>
              </form>

              {statusMessage && (
                <div className="mt-4 p-3 rounded-xl bg-[#ff6b00]/20 border border-[#ff6b00]/40 text-[#ff6b00] text-xs font-mono flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
