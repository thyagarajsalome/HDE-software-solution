'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Copy, Check, ArrowUpRight } from 'lucide-react';

interface OrderConfiguratorProps {
  initialDescription?: string;
  initialAppType?: string;
}

const availableAppTypes = [
  { id: 'web', name: 'Frontend Web App', desc: 'React, Next.js, UI' },
  { id: 'backend', name: 'Backend & APIs', desc: 'FastAPI, Node, DBs' },
  { id: 'saas', name: 'Full Stack SaaS', desc: 'Complete Portals' },
  { id: 'ai', name: 'AI Integration', desc: 'Vision, Gemini, Agents' },
  { id: 'mobile', name: 'Mobile App', desc: 'Android & iOS' },
  { id: 'desktop', name: 'Desktop & CAD', desc: 'Canvas, Vector, Native' },
  { id: 'cli', name: 'CLI & DevOps', desc: 'Terminal & Scripts' },
  { id: 'custom', name: 'Custom Software', desc: 'Bespoke Workflows' },
  { id: 'api', name: 'API Gateway', desc: 'Payments & Webhooks' }
];

export const OrderConfigurator: React.FC<OrderConfiguratorProps> = ({
  initialDescription = '',
  initialAppType = ''
}) => {
  const [selectedApps, setSelectedApps] = useState<string[]>(['Frontend Web App']);
  const [scopes, setScopes] = useState<string[]>([
    'From Scratch to Production',
    'Cloud Hosting & Maintenance'
  ]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [timeline, setTimeline] = useState('Standard (3-6 Weeks)');
  const [description, setDescription] = useState(initialDescription);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialDescription) {
      setDescription(initialDescription);
    }
  }, [initialDescription]);

  useEffect(() => {
    if (initialAppType && !selectedApps.includes(initialAppType)) {
      setSelectedApps(prev => [...prev, initialAppType]);
    }
  }, [initialAppType]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const toggleAppType = (name: string) => {
    setSelectedApps(prev => 
      prev.includes(name) ? prev.filter(a => a !== name) : [...prev, name]
    );
  };

  const toggleScope = (scopeName: string) => {
    setScopes(prev =>
      prev.includes(scopeName) ? prev.filter(s => s !== scopeName) : [...prev, scopeName]
    );
  };

  const generateSpecificationText = (): string => {
    const appsText = selectedApps.join(', ') || 'Custom Application';
    const scopesText = scopes.map(s => `- ${s}`).join('\n') || '- None specified';

    return `HDE CUSTOM SOFTWARE APPLICATION ORDER SPECIFICATION
--------------------------------------------------
Client / Organization: ${clientName || 'Not specified'}
Email: ${clientEmail || 'Not specified'}
Phone / WhatsApp: ${clientPhone || 'Not specified'}
Desired Timeline: ${timeline}

Selected Application Types:
- ${appsText}

Lifecycle Scope Required:
${scopesText}

Project Description & Requirements:
${description || 'Tailored custom software solution'}
--------------------------------------------------
Submitted via HDE Software Solutions Platform`;
  };

  const handleCopy = () => {
    const text = generateSpecificationText();
    navigator.clipboard.writeText(text).then(() => {
      showToast('Specification successfully copied to clipboard!');
    }).catch(() => {
      showToast('Please select and copy the text manually.');
    });
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const specText = generateSpecificationText();
    const payload = {
      clientName,
      clientEmail,
      clientPhone,
      timeline,
      selectedApps,
      scopes,
      description,
      specText,
      timestamp: new Date().toISOString()
    };

    try {
      await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.log('Background API log completed');
    }

    const subject = encodeURIComponent(`Custom App Order: ${selectedApps.join(', ')} - ${clientName || 'Inquiry'}`);
    const body = encodeURIComponent(specText);
    window.location.href = `mailto:thyagaraja1983@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    showToast('Order drafted! Opening email client...');
  };

  const handleWhatsApp = () => {
    const specText = generateSpecificationText();
    const text = encodeURIComponent(specText);
    window.open(`https://wa.me/919113989237?text=${text}`, '_blank');
  };

  return (
    <section id="order" className="py-20 border-b border-line bg-bg relative">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-left">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-invert-bg text-invert-fg border border-line px-5 py-3 font-mono text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 animate-bounce">
            <Check className="w-4 h-4 text-accent" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 border border-line bg-bg-raised px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-muted mb-4">
            <span>[ 06 // ORDER CONFIGURATOR ]</span>
          </div>

          <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-ink leading-[1.05] mb-4">
            Configure Your Custom{' '}
            <span className="font-serif italic font-normal tracking-normal lowercase block sm:inline text-ink">
              software application
            </span>{' '}
            Specification.
          </h2>

          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
            Select the components, services, and lifecycle scope you need. Our system compiles a technical blueprint in real-time. You can submit it directly to our engineering desk via email or WhatsApp.
          </p>
        </div>

        {/* Interactive 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Application Types Multi-Select */}
            <div className="border border-line bg-bg-raised p-6 sm:p-7">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-line">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink">
                  [ STEP 01 ] // Select Application Types
                </span>
                <span className="font-mono text-[10px] text-muted">
                  Multi-Select Allowed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {availableAppTypes.map(app => {
                  const isSelected = selectedApps.includes(app.name);
                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => toggleAppType(app.name)}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-invert-bg text-invert-fg border-invert-bg' 
                          : 'bg-bg text-ink border-line hover:border-line-strong'
                      }`}
                    >
                      <div className="font-display uppercase text-xs font-bold leading-tight">
                        {app.name}
                      </div>
                      <div className={`font-mono text-[9px] mt-1 ${isSelected ? 'text-invert-fg/70' : 'text-faint'}`}>
                        {app.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Lifecycle Scope */}
            <div className="border border-line bg-bg-raised p-6 sm:p-7">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-line">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink">
                  [ STEP 02 ] // Lifecycle Scope
                </span>
                <span className="font-mono text-[10px] text-muted">
                  End-to-End
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'From Scratch to Production',
                  'Existing Code Refactoring & Audit',
                  'Bug Fixing & Performance Optimization',
                  'Cloud Hosting & Maintenance (24/7)',
                  'API & 3rd Party Integrations',
                  'UI/UX Design & Design Systems'
                ].map((scope, idx) => {
                  const isChecked = scopes.includes(scope);
                  return (
                    <label 
                      key={idx}
                      onClick={() => toggleScope(scope)}
                      className={`p-3 border flex items-center gap-3 cursor-pointer select-none transition-colors ${
                        isChecked 
                          ? 'bg-bg border-ink text-ink font-semibold' 
                          : 'bg-bg border-line text-muted hover:border-line-strong'
                      }`}
                    >
                      <div className={`w-4 h-4 border flex items-center justify-center text-[10px] font-mono ${
                        isChecked ? 'border-ink bg-invert-bg text-invert-fg' : 'border-line bg-bg'
                      }`}>
                        {isChecked && '✓'}
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wide">
                        {scope}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Contact & Description */}
            <div className="border border-line bg-bg-raised p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-line">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink">
                  [ STEP 03 ] // Client Details & Brief
                </span>
                <span className="font-mono text-[10px] text-muted">
                  Confidential
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-1">
                    Your Name / Organization
                  </label>
                  <input 
                    type="text" 
                    value={clientName} 
                    onChange={e => setClientName(e.target.value)} 
                    placeholder="e.g. John Doe / TechCorp"
                    className="w-full bg-bg-sunken border border-line text-ink font-mono text-xs p-3 focus:border-ink focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-1">
                    Your Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    value={clientEmail} 
                    onChange={e => setClientEmail(e.target.value)} 
                    placeholder="name@company.com"
                    className="w-full bg-bg-sunken border border-line text-ink font-mono text-xs p-3 focus:border-ink focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input 
                    type="tel" 
                    value={clientPhone} 
                    onChange={e => setClientPhone(e.target.value)} 
                    placeholder="+91..."
                    className="w-full bg-bg-sunken border border-line text-ink font-mono text-xs p-3 focus:border-ink focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-1">
                    Estimated Timeline
                  </label>
                  <select 
                    value={timeline} 
                    onChange={e => setTimeline(e.target.value)}
                    className="w-full bg-bg-sunken border border-line text-ink font-mono text-xs p-3 focus:border-ink focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Urgent (1-2 Weeks)">Urgent (1-2 Weeks)</option>
                    <option value="Standard (3-6 Weeks)">Standard (3-6 Weeks)</option>
                    <option value="Comprehensive (2-3 Months)">Comprehensive (2-3 Months)</option>
                    <option value="Ongoing Retainer / Hosting">Ongoing Retainer / Hosting</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-1">
                  Project Requirements & Features
                </label>
                <textarea 
                  rows={4}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Describe your desired software application, key user stories, required integrations, and current bottlenecks..."
                  className="w-full bg-bg-sunken border border-line text-ink font-mono text-xs p-3 focus:border-ink focus:outline-none transition-colors"
                />
              </div>

            </div>

          </div>

          {/* Right Column: Real-Time Technical Blueprint Readout (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="border border-line bg-bg-raised p-6 sm:p-7 flex flex-col h-full">
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-line">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink">
                    [ BLUEPRINT SPECIFICATION ]
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted hover:text-ink transition-colors cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>

              {/* Real-time formatted code block */}
              <div className="flex-1 bg-bg-sunken border border-line p-4 font-mono text-xs leading-relaxed text-ink overflow-x-auto whitespace-pre-wrap select-all min-h-[300px]">
                {generateSpecificationText()}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-2.5">
                
                {/* 1. Email Submission */}
                <button
                  type="button"
                  onClick={handleSubmitEmail}
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-invert-bg text-invert-fg font-mono uppercase text-[11px] tracking-[0.14em] font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Submit Order via Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {/* 2. Direct WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-bg-raised text-ink border border-line hover:border-line-strong font-mono uppercase text-[11px] tracking-[0.14em] font-semibold hover:bg-bg-sunken transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>Send Blueprint on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
                </button>

                {/* Direct Contact Info */}
                <div className="pt-3 border-t border-line flex items-center justify-between font-mono text-[10px] text-faint">
                  <span>Direct Desk: thyagaraja1983@gmail.com</span>
                  <span>+91 9113989237</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
