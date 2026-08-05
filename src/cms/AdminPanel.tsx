import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCMS } from './CMSContext';
import { CMSData } from './types';
import LiquidEther from '../components/LiquidEther';

const convertDriveLink = (url: string) => {
  if (!url) return url;
  const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return url;
};

type Tab = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'contact' | 'footer' | 'seo';

const TAB_META: { id: Tab; label: string; icon: string }[] = [
  { id: 'hero',       label: 'Hero',                icon: '' },
  { id: 'about',      label: 'About',               icon: '' },
  { id: 'skills',     label: 'Skills',              icon: '' },
  { id: 'projects',   label: 'Projects',            icon: '' },
  { id: 'experience', label: 'Experience',          icon: '' },
  { id: 'contact',    label: 'Contact',             icon: '' },
  { id: 'footer',     label: 'Footer & Nav',        icon: '' },
  { id: 'seo',        label: 'SEO / Meta',          icon: '' },
];

/* ─── Shared input styles (forced dark theme) ───────────────── */
const inputCls =
  'w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all duration-200 ' +
  'bg-white/5 border border-white/10 ' +
  'text-white placeholder-white/30 ' +
  'focus:border-white/40 focus:bg-white/10 ' +
  'backdrop-blur-sm';

const labelCls = 'block text-xs font-semibold uppercase tracking-widest mb-1.5 text-white/50';

const Field: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
  rows?: number;
  placeholder?: string;
}> = ({ label, value, onChange, textarea = false, rows = 3, placeholder }) => (
  <div className="mb-5">
    <label className={labelCls}>{label}</label>
    {textarea ? (
      <textarea
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={inputCls + ' resize-none leading-relaxed'}
      />
    ) : (
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={inputCls}
      />
    )}
  </div>
);

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 mt-8 first:mt-0 pb-2 border-b border-white/10">
    {children}
  </h3>
);

const Pill: React.FC<{ children: React.ReactNode; onClick: () => void; variant?: 'danger' | 'subtle' | 'primary' }> = ({
  children, onClick, variant = 'subtle',
}) => {
  const base = 'text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer border ';
  const variants = {
    danger:  base + 'border-red-400/30 text-red-400 hover:bg-red-400/10',
    subtle:  base + 'border-white/10 text-white/60 hover:bg-white/10',
    primary: base + 'border-white/20 bg-white/10 text-white hover:bg-white/20',
  };
  return <button onClick={onClick} className={variants[variant]}>{children}</button>;
};

/* ─── Login Screen (Strictly Darkmode) ────────────────────────── */
const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [pw, setPw] = useState('');
  const [shake, setShake] = useState(false);
  const liquidColors = ['#000000', '#ffffff', '#ffffff', '#e8e8e8', '#d0d0d0', '#aaaaaa'];
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const attempt = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === 'REDACTED') {
      sessionStorage.setItem('cms-authed', 'true');
      onLogin();
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPw('');
    }
  };

  return (
    <div className="dark min-h-screen relative flex items-center justify-center bg-black text-white">
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        {!isMobile && (
          <LiquidEther
            mouseForce={20} cursorSize={80} isViscous={false}
            colors={liquidColors} autoDemo autoSpeed={0.4}
            autoIntensity={3.5}
            isBounce={false} resolution={0.5}
          />
        )}
      </div>
      <div className="relative z-10 w-full max-w-sm px-4">
        <form onSubmit={attempt}
          className={`glass-card p-8 text-white transition-transform ${shake ? 'animate-bounce' : ''}`}
        >
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">⚙️</div>
            <h1 className="text-2xl font-bold tracking-tight">Portfolio CMS</h1>
            <p className="text-sm text-white/50 mt-1">Enter your password to continue</p>
          </div>
          <input
            type="password"
            value={pw}
            autoFocus
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
            className={inputCls + ' mb-4 text-center tracking-widest'}
          />
          <button type="submit"
            className="w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 glass-btn text-white"
          >
            Enter CMS →
          </button>
        </form>
      </div>
    </div>
  );
};

/* ─── Main Admin Panel (Strictly Darkmode) ────────────────────── */
export const AdminPanel: React.FC = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('cms-authed') === 'true');
  const { cmsData, updateCMS } = useCMS();
  const [local, setLocal] = useState<CMSData>(cmsData);
  const [tab, setTab] = useState<Tab>('hero');
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'info' } | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setLocal(cmsData); }, [cmsData]);

  // Strictly Dark Mode Liquid Palette
  const liquidColors = ['#000000', '#ffffff', '#ffffff', '#e8e8e8', '#d0d0d0', '#aaaaaa'];
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const showToast = (msg: string, type: 'success' | 'info' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  const save = () => { updateCMS(local); showToast('Changes saved!'); };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(local, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'portfolio-cms.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url); showToast('Exported portfolio-cms.json', 'info');
  };

  const importJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string);
        setLocal((prev) => ({ ...prev, ...data }));
        showToast('Imported! Click Save to apply.', 'info');
      } catch { showToast('Invalid JSON file', 'info'); }
    };
    reader.readAsText(file);
  };

  /* helpers */
  const upSection = <K extends keyof CMSData>(section: K, field: keyof CMSData[K], val: CMSData[K][keyof CMSData[K]]) =>
    setLocal((p) => ({ ...p, [section]: { ...(p[section] as object), [field]: val } }));

  const field = (section: keyof CMSData, key: string, label: string, textarea = false, rows = 3) => (
    <Field
      key={key} label={label}
      value={(local[section] as unknown as Record<string, string>)[key] ?? ''}
      onChange={(v) => upSection(section as any, key as any, v)}
      textarea={textarea} rows={rows}
    />
  );

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  const currentTab = TAB_META.find((t) => t.id === tab)!;

  return (
    <div className="dark min-h-screen relative text-white bg-black">
      {/* Background - Always Dark Mode */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        {!isMobile && (
          <LiquidEther
            mouseForce={15} cursorSize={80} isViscous={false}
            colors={liquidColors} autoDemo autoSpeed={0.3}
            autoIntensity={2.5}
            isBounce={false} resolution={0.5}
          />
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full text-sm font-semibold shadow-2xl glass-card transition-all duration-300 ${
          toast.type === 'success' ? 'text-green-400' : 'text-white'
        }`}>
          {toast.type === 'success' ? '✓ ' : 'ℹ '}{toast.msg}
        </div>
      )}

      {/* Layout */}
      <div className="relative z-10 flex h-screen overflow-hidden">

        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed md:relative top-0 left-0 h-full z-40 md:z-auto
          w-72 sm:w-64 shrink-0 flex flex-col py-6 px-3
          bg-black/95 backdrop-blur-2xl border-r border-white/10
          transition-transform duration-300 shadow-2xl
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          {/* Logo */}
          <div className="px-3 mb-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5">Portfolio</p>
            <h1 className="text-xl font-bold tracking-tight">CMS Studio</h1>
          </div>

          {/* Nav */}
          <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
            {TAB_META.map(({ id, label, icon }) => (
              <button key={id} onClick={() => { setTab(id); setSidebarOpen(false); }}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 text-left ${
                  tab === id
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-base">{icon}</span>
                <span>{label}</span>
                {tab === id && <span className="ml-auto w-1 h-4 rounded-full bg-white opacity-60" />}
              </button>
            ))}
          </nav>

          {/* Sidebar footer */}
          <div className="pt-4 border-t border-white/10 px-3 flex flex-col gap-2">
            <button onClick={exportJSON}
              className="text-xs text-white/50 hover:text-white flex items-center gap-2 transition-colors py-1"
            >
              <span>↓</span> Export JSON
            </button>
            <button onClick={() => fileInputRef.current?.click()}
              className="text-xs text-white/50 hover:text-white flex items-center gap-2 transition-colors py-1"
            >
              <span>↑</span> Import JSON
            </button>
            <input type="file" accept=".json" ref={fileInputRef} className="hidden" onChange={importJSON} />
            <button onClick={() => navigate('/')}
              className="text-xs text-white/50 hover:text-white flex items-center gap-2 transition-colors py-1"
            >
              <span>←</span> Back to site
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Top bar */}
          <header className="shrink-0 h-14 flex items-center justify-between px-6 glass-card rounded-none border-b border-white/10">
            <div className="flex items-center gap-3">
              <button className="md:hidden p-1.5 rounded-lg glass-btn" onClick={() => setSidebarOpen(true)}>
                ☰
              </button>
              <span className="text-base">{currentTab.icon}</span>
              <h2 className="text-sm font-semibold">{currentTab.label}</h2>
            </div>
            <button onClick={save}
              className="glass-btn px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span className="text-green-400">●</span> Save
            </button>
          </header>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            <div className="max-w-2xl mx-auto">

              {/* ── HERO ── */}
              {tab === 'hero' && (
                <div className="glass-card p-4 sm:p-6">
                  {field('hero', 'name', 'Full Name')}
                  {field('hero', 'title', 'Job Title / Heading')}
                  {field('hero', 'subtitle', 'Subtitle / Description', true, 3)}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {field('hero', 'ctaText', 'CTA Button Text')}
                    {field('hero', 'ctaTarget', 'CTA Scroll Target ID')}
                  </div>
                  {field('hero', 'resumeUrl', 'Resume URL (Optional)')}
                </div>
              )}

              {/* ── ABOUT ── */}
              {tab === 'about' && (
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    {field('about', 'bio1', 'Bio Paragraph 1', true, 4)}
                    {field('about', 'bio2', 'Bio Paragraph 2', true, 3)}
                    <SectionHeading>FOSSGCEE Card</SectionHeading>
                    {field('about', 'fossgceeTitle', 'Title')}
                    {field('about', 'fossgceeDescription', 'Description', true, 4)}
                    {field('about', 'fossgceeLink', 'Link URL')}
                    <SectionHeading>Systems Focus Card</SectionHeading>
                    {field('about', 'systemsFocusTitle', 'Title')}
                    {field('about', 'systemsFocusDescription', 'Description', true, 3)}
                    <SectionHeading>Goal Statement</SectionHeading>
                    {field('about', 'goal', 'Goal', true, 2)}
                  </div>

                  {/* Dynamic Custom Sections in About */}
                  <div className="glass-card p-6">
                    <SectionHeading>Custom About Sections</SectionHeading>
                    <div className="space-y-4 mb-4">
                      {(local.about.customSections || []).map((sec, i) => (
                        <div key={sec.id} className="p-4 border border-white/10 rounded-lg bg-white/5 space-y-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold uppercase text-white/50">Custom Section {i + 1}</span>
                            <button
                              onClick={() => {
                                const newSecs = (local.about.customSections || []).filter((_, idx) => idx !== i);
                                setLocal((p) => ({ ...p, about: { ...p.about, customSections: newSecs } }));
                              }}
                              className="text-xs text-red-400 hover:text-red-300"
                            >
                              ✕ Remove
                            </button>
                          </div>
                          <Field
                            label="Section Title"
                            value={sec.title}
                            onChange={(v) => {
                              const newSecs = (local.about.customSections || []).map((s, idx) => idx === i ? { ...s, title: v } : s);
                              setLocal((p) => ({ ...p, about: { ...p.about, customSections: newSecs } }));
                            }}
                          />
                          <Field
                            label="Description"
                            value={sec.description}
                            textarea
                            rows={3}
                            onChange={(v) => {
                              const newSecs = (local.about.customSections || []).map((s, idx) => idx === i ? { ...s, description: v } : s);
                              setLocal((p) => ({ ...p, about: { ...p.about, customSections: newSecs } }));
                            }}
                          />
                          <Field
                            label="Link URL (Optional)"
                            value={sec.link || ''}
                            placeholder="https://..."
                            onChange={(v) => {
                              const newSecs = (local.about.customSections || []).map((s, idx) => idx === i ? { ...s, link: v } : s);
                              setLocal((p) => ({ ...p, about: { ...p.about, customSections: newSecs } }));
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        const newSecs = [...(local.about.customSections || []), { id: `sec-${Date.now()}`, title: 'New Section', description: '', link: '' }];
                        setLocal((p) => ({ ...p, about: { ...p.about, customSections: newSecs } }));
                      }}
                      className="w-full py-3 rounded-lg border border-dashed border-white/20 text-xs font-semibold text-white/60 hover:text-white transition-colors"
                    >
                      + Add Custom Section to About
                    </button>
                  </div>
                </div>
              )}

              {/* ── CONTACT ── */}
              {tab === 'contact' && (
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    {field('contact', 'email', 'Email Address')}
                    <Field
                      label="Email QR Code Image/Data URL (Optional)"
                      value={local.contact.emailQrCode || ''}
                      placeholder="Leave blank to auto-generate QR code"
                      onChange={(v) => upSection('contact', 'emailQrCode', v)}
                    />

                    <SectionHeading>Discord</SectionHeading>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {field('contact', 'discordHandle', 'Handle (e.g. .abhrams)')}
                      {field('contact', 'discordUrl', 'Profile URL')}
                    </div>
                    <Field
                      label="Discord QR Code Image/Data URL (Optional)"
                      value={local.contact.discordQrCode || ''}
                      placeholder="Leave blank to auto-generate QR code"
                      onChange={(v) => upSection('contact', 'discordQrCode', v)}
                    />

                    <SectionHeading>WhatsApp</SectionHeading>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {field('contact', 'whatsappNumber', 'Number (no +, e.g. 916379478168)')}
                      {field('contact', 'whatsappDisplay', 'Display Text (e.g. +91 63794 78168)')}
                    </div>
                    <Field
                      label="WhatsApp QR Code Image/Data URL (Optional)"
                      value={local.contact.whatsappQrCode || ''}
                      placeholder="Leave blank to auto-generate QR code"
                      onChange={(v) => upSection('contact', 'whatsappQrCode', v)}
                    />

                    <SectionHeading>LinkedIn</SectionHeading>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {field('contact', 'linkedinHandle', 'Handle')}
                      {field('contact', 'linkedinUrl', 'Profile URL')}
                    </div>
                    <Field
                      label="LinkedIn QR Code Image/Data URL (Optional)"
                      value={local.contact.linkedinQrCode || ''}
                      placeholder="Leave blank to auto-generate QR code"
                      onChange={(v) => upSection('contact', 'linkedinQrCode', v)}
                    />
                  </div>

                  {/* Dynamic Custom Contact Items */}
                  <div className="glass-card p-6">
                    <SectionHeading>Custom Contact Methods & QR Codes</SectionHeading>
                    <div className="space-y-4 mb-4">
                      {(local.contact.customContacts || []).map((c, i) => (
                        <div key={c.id} className="p-4 border border-white/10 rounded-lg bg-white/5 space-y-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold uppercase text-white/50">Contact Item {i + 1}</span>
                            <button
                              onClick={() => {
                                const newContacts = (local.contact.customContacts || []).filter((_, idx) => idx !== i);
                                setLocal((p) => ({ ...p, contact: { ...p.contact, customContacts: newContacts } }));
                              }}
                              className="text-xs text-red-400 hover:text-red-300"
                            >
                              ✕ Remove
                            </button>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Field
                              label="Title (e.g. Telegram, Matrix)"
                              value={c.title}
                              onChange={(v) => {
                                const newC = (local.contact.customContacts || []).map((item, idx) => idx === i ? { ...item, title: v } : item);
                                setLocal((p) => ({ ...p, contact: { ...p.contact, customContacts: newC } }));
                              }}
                            />
                            <Field
                              label="Display Value / Username"
                              value={c.value}
                              onChange={(v) => {
                                const newC = (local.contact.customContacts || []).map((item, idx) => idx === i ? { ...item, value: v } : item);
                                setLocal((p) => ({ ...p, contact: { ...p.contact, customContacts: newC } }));
                              }}
                            />
                          </div>
                          <Field
                            label="Target URL (Optional)"
                            value={c.url || ''}
                            placeholder="https://..."
                            onChange={(v) => {
                              const newC = (local.contact.customContacts || []).map((item, idx) => idx === i ? { ...item, url: v } : item);
                              setLocal((p) => ({ ...p, contact: { ...p.contact, customContacts: newC } }));
                            }}
                          />
                          <Field
                            label="Custom QR Code Image URL (Optional)"
                            value={c.qrCodeUrl || ''}
                            placeholder="Leave blank to auto-generate QR code from URL"
                            onChange={(v) => {
                              const newC = (local.contact.customContacts || []).map((item, idx) => idx === i ? { ...item, qrCodeUrl: v } : item);
                              setLocal((p) => ({ ...p, contact: { ...p.contact, customContacts: newC } }));
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        const newC = [...(local.contact.customContacts || []), { id: `contact-${Date.now()}`, title: 'Telegram', value: '@username', url: '' }];
                        setLocal((p) => ({ ...p, contact: { ...p.contact, customContacts: newC } }));
                      }}
                      className="w-full py-3 rounded-lg border border-dashed border-white/20 text-xs font-semibold text-white/60 hover:text-white transition-colors"
                    >
                      + Add Custom Contact Method
                    </button>
                  </div>
                </div>
              )}

              {/* ── SEO ── */}
              {tab === 'seo' && (
                <div className="glass-card p-6">
                  {field('meta', 'siteTitle', 'Browser Tab Title')}
                  {field('meta', 'metaDescription', 'Meta Description', true, 3)}
                  {field('meta', 'keywords', 'Keywords (comma separated)', true, 2)}
                </div>
              )}

              {/* ── FOOTER & NAV ── */}
              {tab === 'footer' && (
                <div className="space-y-4">
                  <div className="glass-card p-6">
                    <SectionHeading>Footer</SectionHeading>
                    {field('footer', 'ownerName', 'Owner Name')}
                    <label className={labelCls}>Social Links</label>
                    <div className="space-y-2 mb-3">
                      {local.footer.socialLinks.map((link, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <input value={link.label} placeholder="Label"
                            onChange={(e) => {
                              const arr = local.footer.socialLinks.map((l, idx) => idx === i ? { ...l, label: e.target.value } : l);
                              upSection('footer', 'socialLinks', arr);
                            }}
                            className={inputCls + ' w-28 shrink-0'}
                          />
                          <input value={link.url} placeholder="URL"
                            onChange={(e) => {
                              const arr = local.footer.socialLinks.map((l, idx) => idx === i ? { ...l, url: e.target.value } : l);
                              upSection('footer', 'socialLinks', arr);
                            }}
                            className={inputCls}
                          />
                          <Pill variant="danger" onClick={() => upSection('footer', 'socialLinks', local.footer.socialLinks.filter((_, idx) => idx !== i))}>✕</Pill>
                        </div>
                      ))}
                    </div>
                    <Pill variant="subtle" onClick={() => upSection('footer', 'socialLinks', [...local.footer.socialLinks, { label: '', url: '' }])}>+ Add Link</Pill>
                  </div>

                  <div className="glass-card p-6">
                    <SectionHeading>Navigation</SectionHeading>
                    <div className="space-y-2 mb-3">
                      {local.navLinks.map((link, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <input value={link.name} placeholder="Label"
                            onChange={(e) => {
                              const arr = local.navLinks.map((l, idx) => idx === i ? { ...l, name: e.target.value } : l);
                              setLocal((p) => ({ ...p, navLinks: arr }));
                            }}
                            className={inputCls + ' w-28 shrink-0'}
                          />
                          <input value={link.to} placeholder="Section ID"
                            onChange={(e) => {
                              const arr = local.navLinks.map((l, idx) => idx === i ? { ...l, to: e.target.value } : l);
                              setLocal((p) => ({ ...p, navLinks: arr }));
                            }}
                            className={inputCls}
                          />
                          <Pill variant="danger" onClick={() => setLocal((p) => ({ ...p, navLinks: p.navLinks.filter((_, idx) => idx !== i) }))}>✕</Pill>
                        </div>
                      ))}
                    </div>
                    <Pill variant="subtle" onClick={() => setLocal((p) => ({ ...p, navLinks: [...p.navLinks, { name: '', to: '' }] }))}>+ Add Link</Pill>
                  </div>
                </div>
              )}

              {/* ── SKILLS ── */}
              {tab === 'skills' && (
                <div className="space-y-4">
                  {local.skillCategories.map((cat, ci) => (
                    <div key={cat.id} className="glass-card p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <input value={cat.title}
                          onChange={(e) => {
                            const arr = local.skillCategories.map((c, idx) => idx === ci ? { ...c, title: e.target.value } : c);
                            setLocal((p) => ({ ...p, skillCategories: arr }));
                          }}
                          className={inputCls + ' text-sm font-semibold flex-1'}
                          placeholder="Category name"
                        />
                        <Pill variant="subtle" onClick={() => {
                          if (ci > 0) {
                            const arr = [...local.skillCategories];
                            [arr[ci - 1], arr[ci]] = [arr[ci], arr[ci - 1]];
                            setLocal((p) => ({ ...p, skillCategories: arr }));
                          }
                        }}>↑</Pill>
                        <Pill variant="subtle" onClick={() => {
                          if (ci < local.skillCategories.length - 1) {
                            const arr = [...local.skillCategories];
                            [arr[ci + 1], arr[ci]] = [arr[ci], arr[ci + 1]];
                            setLocal((p) => ({ ...p, skillCategories: arr }));
                          }
                        }}>↓</Pill>
                        <Pill variant="danger" onClick={() => setLocal((p) => ({ ...p, skillCategories: p.skillCategories.filter((_, i) => i !== ci) }))}>✕</Pill>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((sk, si) => (
                          <div key={si} className="flex items-center gap-1 glass-tag px-2 py-1 rounded-full">
                            <input value={sk.name}
                              onChange={(e) => {
                                const arr = local.skillCategories.map((c, idx) =>
                                  idx === ci ? { ...c, skills: c.skills.map((s, sidx) => sidx === si ? { name: e.target.value } : s) } : c
                                );
                                setLocal((p) => ({ ...p, skillCategories: arr }));
                              }}
                              className="bg-transparent outline-none text-xs w-24 text-white"
                            />
                            <button onClick={() => {
                              const arr = local.skillCategories.map((c, idx) =>
                                idx === ci ? { ...c, skills: c.skills.filter((_, sidx) => sidx !== si) } : c
                              );
                              setLocal((p) => ({ ...p, skillCategories: arr }));
                            }} className="text-red-400 hover:text-red-300 ml-0.5 text-xs leading-none">✕</button>
                          </div>
                        ))}
                        <button onClick={() => {
                          const arr = local.skillCategories.map((c, idx) =>
                            idx === ci ? { ...c, skills: [...c.skills, { name: 'New Skill' }] } : c
                          );
                          setLocal((p) => ({ ...p, skillCategories: arr }));
                        }} className="text-xs text-white/40 hover:text-white px-2 py-1 border border-dashed border-white/20 rounded-full transition-colors">
                          + skill
                        </button>
                      </div>
                    </div>
                  ))}
                  <button onClick={() => setLocal((p) => ({ ...p, skillCategories: [...p.skillCategories, { id: `cat-${Date.now()}`, title: 'New Category', skills: [] }] }))}
                    className="w-full glass-card p-4 text-sm font-medium text-white/50 hover:text-white text-center transition-colors border-dashed"
                  >
                    + Add Category
                  </button>
                </div>
              )}

              {/* ── EXPERIENCE ── */}
              {tab === 'experience' && (
                <div className="space-y-4">
                  <SectionHeading>Experience</SectionHeading>
                  {local.experience.map((exp, i) => (
                    <div key={exp.id} className="glass-card p-5">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-white/40">Entry {i + 1}</span>
                        <Pill variant="danger" onClick={() => setLocal((p) => ({ ...p, experience: p.experience.filter((_, idx) => idx !== i) }))}>✕ Remove</Pill>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        <Field label="Date" value={exp.date} onChange={(v) => setLocal((p) => ({ ...p, experience: p.experience.map((e, idx) => idx === i ? { ...e, date: v } : e) }))} />
                        <Field label="Job Title" value={exp.title} onChange={(v) => setLocal((p) => ({ ...p, experience: p.experience.map((e, idx) => idx === i ? { ...e, title: v } : e) }))} />
                      </div>
                      <Field label="Company" value={exp.company} onChange={(v) => setLocal((p) => ({ ...p, experience: p.experience.map((e, idx) => idx === i ? { ...e, company: v } : e) }))} />
                      <Field label="Description" value={exp.description} textarea rows={3} onChange={(v) => setLocal((p) => ({ ...p, experience: p.experience.map((e, idx) => idx === i ? { ...e, description: v } : e) }))} />
                    </div>
                  ))}
                  <button onClick={() => setLocal((p) => ({ ...p, experience: [...p.experience, { id: `exp-${Date.now()}`, date: '', title: '', company: '', description: '' }] }))}
                    className="w-full glass-card p-4 text-sm font-medium text-white/50 hover:text-white text-center transition-colors border-dashed"
                  >+ Add Experience</button>

                  <SectionHeading>Education</SectionHeading>
                  {local.education.map((edu, i) => (
                    <div key={edu.id} className="glass-card p-5">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-white/40">Entry {i + 1}</span>
                        <Pill variant="danger" onClick={() => setLocal((p) => ({ ...p, education: p.education.filter((_, idx) => idx !== i) }))}>✕ Remove</Pill>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        <Field label="Date" value={edu.date} onChange={(v) => setLocal((p) => ({ ...p, education: p.education.map((e, idx) => idx === i ? { ...e, date: v } : e) }))} />
                        <Field label="Degree Title" value={edu.title} onChange={(v) => setLocal((p) => ({ ...p, education: p.education.map((e, idx) => idx === i ? { ...e, title: v } : e) }))} />
                      </div>
                      <Field label="Institution" value={edu.institution} onChange={(v) => setLocal((p) => ({ ...p, education: p.education.map((e, idx) => idx === i ? { ...e, institution: v } : e) }))} />
                      <Field label="Description" value={edu.description} textarea rows={3} onChange={(v) => setLocal((p) => ({ ...p, education: p.education.map((e, idx) => idx === i ? { ...e, description: v } : e) }))} />
                    </div>
                  ))}
                  <button onClick={() => setLocal((p) => ({ ...p, education: [...p.education, { id: `edu-${Date.now()}`, date: '', title: '', institution: '', description: '' }] }))}
                    className="w-full glass-card p-4 text-sm font-medium text-white/50 hover:text-white text-center transition-colors border-dashed"
                  >+ Add Education</button>
                </div>
              )}

              {/* ── PROJECTS ── */}
              {tab === 'projects' && (
                <div className="space-y-4">
                  {local.projects.map((proj, i) => (
                    <details key={proj.id} className="glass-card group">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <div className="flex items-center gap-3 min-w-0">
                          {proj.thumbnail && (proj.thumbnail.startsWith('http') || proj.thumbnail.startsWith('data:')) && (
                            <img src={proj.thumbnail} alt="" className="w-10 h-10 rounded-md object-cover shrink-0 opacity-80" />
                          )}
                          <div className="min-w-0">
                            <p className="text-sm font-semibold truncate">{proj.title || 'Untitled Project'}</p>
                            <p className="text-xs text-white/40">{proj.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          <button onClick={() => setLocal((p) => ({ ...p, projects: p.projects.filter((_, idx) => idx !== i) }))} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-red-400/30 text-red-400 hover:bg-red-400/10 transition-all duration-200 cursor-pointer">✕</button>
                          <span className="text-white/30 text-sm group-open:rotate-180 transition-transform">▾</span>
                        </div>
                      </summary>
                      <div className="px-5 pb-5 border-t border-white/10 pt-4 space-y-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <Field label="Title" value={proj.title} onChange={(v) => setLocal((p) => ({ ...p, projects: p.projects.map((pr, idx) => idx === i ? { ...pr, title: v } : pr) }))} />
                          <Field label="Category" value={proj.category} onChange={(v) => setLocal((p) => ({ ...p, projects: p.projects.map((pr, idx) => idx === i ? { ...pr, category: v } : pr) }))} />
                        </div>
                        <Field label="Description" value={proj.description} textarea rows={3} onChange={(v) => setLocal((p) => ({ ...p, projects: p.projects.map((pr, idx) => idx === i ? { ...pr, description: v } : pr) }))} />
                        <Field label="Technologies (comma separated)" value={proj.technologies.join(', ')}
                          onChange={(v) => setLocal((p) => ({ ...p, projects: p.projects.map((pr, idx) => idx === i ? { ...pr, technologies: v.split(',').map(s => s.trim()).filter(Boolean) } : pr) }))}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <Field label="Live Demo URL" value={proj.liveDemo} onChange={(v) => setLocal((p) => ({ ...p, projects: p.projects.map((pr, idx) => idx === i ? { ...pr, liveDemo: v } : pr) }))} />
                          <Field label="GitHub URL" value={proj.githubRepo} onChange={(v) => setLocal((p) => ({ ...p, projects: p.projects.map((pr, idx) => idx === i ? { ...pr, githubRepo: v } : pr) }))} />
                        </div>
                        <Field label="Thumbnail URL" value={proj.thumbnail} placeholder="https://..." onChange={(v) => setLocal((p) => ({ ...p, projects: p.projects.map((pr, idx) => idx === i ? { ...pr, thumbnail: convertDriveLink(v) } : pr) }))} />
                        {proj.thumbnail && (proj.thumbnail.startsWith('http') || proj.thumbnail.startsWith('data:')) && (
                          <img src={proj.thumbnail} alt="preview" className="h-20 rounded-lg object-cover opacity-80 mt-1" />
                        )}
                      </div>
                    </details>
                  ))}
                  <button onClick={() => setLocal((p) => ({ ...p, projects: [...p.projects, { id: `proj-${Date.now()}`, title: 'New Project', description: '', category: 'General', technologies: [], thumbnail: '', liveDemo: '#', githubRepo: '#' }] }))}
                    className="w-full glass-card p-4 text-sm font-medium text-white/50 hover:text-white text-center transition-colors border-dashed"
                  >+ Add Project</button>
                </div>
              )}

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
