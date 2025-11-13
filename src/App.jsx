import React from 'react'
import Spline from '@splinetool/react-spline'

const colors = {
  bg: '#1B1B1F',
  bgAlt: '#222228',
  text: '#F4F2F0',
  orange: '#FF5A2C',
  yellow: '#FFD34A',
  lime: '#7CFF6B',
  cyan: '#13D0E3',
  pink: '#FF5FAE',
  purple: '#A46BFF',
}

function NeonWord({ color, children }) {
  return (
    <span
      className={`inline-block px-2 md:px-3 -mx-1 md:-mx-1.5 rounded-sm`}
      style={{ color }}
    >
      {children}
    </span>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[0.95] uppercase text-[var(--offwhite)]">
      {children}
    </h2>
  )
}

function SmallLabel({ children }) {
  return (
    <span className="text-[10px] md:text-xs tracking-[0.22em] uppercase text-white/60">{children}</span>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full text-[var(--offwhite)]" style={{ backgroundColor: colors.bg }}>
      {/* Sticky Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10" style={{ background: 'rgba(27,27,31,0.75)', backdropFilter: 'blur(8px)' }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-sm grid place-items-center text-xs font-black" style={{ backgroundColor: colors.orange, color: '#0f0f12' }}>FB</div>
            <span className="hidden sm:block text-xs tracking-[0.3em] text-white/60 uppercase">Design — Code — Systems</span>
          </div>
          <nav className="flex items-center gap-6 md:gap-10">
            {['About','Services','Work','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/80 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative">
        <div className="relative h-[72vh] md:h-[78vh] w-full">
          <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* gradient + noise overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1B1B1F] via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 50% 55%, rgba(27,27,31,0) 0%, rgba(27,27,31,0.35) 60%, rgba(27,27,31,0.9) 100%)' }} />
          {/* Headline */}
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-[1280px] px-4 md:px-8 pb-12 md:pb-16">
              <div className="max-w-5xl">
                <h1 className="font-black uppercase leading-[0.9] text-4xl sm:text-5xl md:text-7xl xl:text-8xl" style={{ fontFamily: 'Bebas Neue, var(--font-sans)', color: colors.text }}>
                  Hooked by <NeonWord color={colors.cyan}>Visuals</NeonWord>
                  <br />
                  Fascinated by <NeonWord color={colors.purple}>Technology</NeonWord>
                  <br />
                  Fuelled by <NeonWord color={colors.lime}>Craftsmanship</NeonWord> and
                  <br />
                  Meaningful <NeonWord color={colors.orange}>Aesthetics</NeonWord>.
                </h1>
                <p className="mt-4 md:mt-6 max-w-2xl text-sm md:text-base text-white/80">
                  Designer-engineer blending brand systems, web experiences, and digital products into bold, useful things. I build interfaces that feel alive and ship fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal tape strip */}
      <div className="relative select-none">
        <div className="absolute inset-0" aria-hidden />
        <div className="origin-left rotate-[-2.5deg] -mx-8 md:-mx-16">
          <div className="whitespace-nowrap overflow-hidden py-3 md:py-4" style={{ backgroundColor: colors.orange, color: '#0E0E11' }}>
            <div className="animate-[marquee_28s_linear_infinite] font-black uppercase tracking-[0.25em] text-[11px] md:text-sm" style={{ color: '#0E0E11' }}>
              <span className="mx-6">Brand Designer</span>•<span className="mx-6">Digital Artist</span>•<span className="mx-6">Tech Nerd</span>•<span className="mx-6">Rectangle Artist</span>•<span className="mx-6">Cable Tamer</span>•
              <span className="mx-6">Brand Designer</span>•<span className="mx-6">Digital Artist</span>•<span className="mx-6">Tech Nerd</span>•<span className="mx-6">Rectangle Artist</span>•<span className="mx-6">Cable Tamer</span>•
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <section id="about" className="relative py-16 md:py-24" style={{ backgroundColor: colors.bgAlt }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <SectionTitle>
                CRAFTING BRAND EXPERIENCES AT{' '}
                <span className="px-2" style={{ color: colors.yellow }}>NOVA LABS</span>
              </SectionTitle>
              <div className="mt-6 space-y-2">
                <SmallLabel>Previously</SmallLabel>
                <div className="text-white/80">
                  <div>Orbit Studio</div>
                  <div>Signal & Noise</div>
                  <div>Arcade & Sons</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: 'Figma', color: colors.cyan },
                  { label: 'Webflow', color: colors.purple },
                  { label: 'Framer', color: colors.pink },
                  { label: 'Notion', color: colors.lime },
                  { label: 'React', color: colors.yellow },
                ].map((b) => (
                  <span key={b.label} className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] border border-white/10" style={{ color: b.color, background: 'rgba(255,255,255,0.03)' }}>
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#1F1F23] border border-white/10 rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#2a2a2f] to-[#16161a] grid place-items-center text-white/70">🙂</div>
                  <div>
                    <div className="font-semibold">Hey, I’m Flux.</div>
                    <SmallLabel>Designer — Engineer — Night Owl</SmallLabel>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/80">
                  I obsess over the edge where brand voice meets product usability. I prototype in code, tune type until it sings, and love shipping tiny details that feel magical.
                </p>
                <a href="#contact" className="mt-5 inline-block text-sm font-semibold" style={{ color: colors.orange }}>
                  More about me →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Capabilities */}
      <section id="services" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8">
          <SectionTitle>
            Deep into <span style={{ color: colors.orange }}>Brand</span> Experience, <span style={{ color: colors.cyan }}>Web</span> Presence and <span style={{ color: colors.purple }}>Digital Products</span>
          </SectionTitle>
          <div className="mt-10 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Diagram */}
            <div className="relative h-64">
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative">
                  <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full opacity-80" style={{ backgroundColor: colors.orange }} />
                  <div className="absolute left-10 -top-4 h-40 w-40 rounded-full opacity-80 mix-blend-screen" style={{ backgroundColor: colors.cyan }} />
                  <div className="absolute left-4 top-6 h-40 w-40 rounded-full opacity-80 mix-blend-screen" style={{ backgroundColor: colors.purple }} />
                  <div className="relative h-40 w-64 bg-transparent" />
                  <div className="absolute -left-2 -top-9 text-[10px] uppercase tracking-[0.25em]" style={{ color: '#0f0f12', background: 'rgba(244,242,240,0.9)', padding: '4px 8px', borderRadius: 999 }}>Brand</div>
                  <div className="absolute left-24 -top-4 text-[10px] uppercase tracking-[0.25em]" style={{ color: '#0f0f12', background: 'rgba(244,242,240,0.9)', padding: '4px 8px', borderRadius: 999 }}>Web</div>
                  <div className="absolute left-10 top-16 text-[10px] uppercase tracking-[0.25em]" style={{ color: '#0f0f12', background: 'rgba(244,242,240,0.9)', padding: '4px 8px', borderRadius: 999 }}>Product</div>
                </div>
              </div>
            </div>
            {/* Services list */}
            <div className="grid gap-4">
              {[
                { title: 'Brand Systems & Identity', desc: 'Logos, type, color, motion language and design ops that scale.' },
                { title: 'Marketing Sites & Web Apps', desc: 'High-performance sites with delightful micro-interactions.' },
                { title: 'Design Engineering', desc: 'From Figma to React, bridging pixels and production code.' },
                { title: 'Product UX & Prototyping', desc: 'Rapid prototypes to test story, flow, and feel before build.' },
              ].map((s) => (
                <div key={s.title} className="p-5 md:p-6 rounded-lg border border-white/10 bg-[#1F1F23]/80">
                  <div className="font-semibold text-lg">{s.title}</div>
                  <p className="text-sm text-white/80 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-16 md:py-24" style={{ backgroundColor: colors.bgAlt }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-8">
          <SectionTitle>Selected Work</SectionTitle>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Neon Atlas', tag: 'WEB / BRAND', color: colors.orange },
              { name: 'Glass Circuit', tag: 'PRODUCT', color: colors.cyan },
              { name: 'Midnight Arcade', tag: 'EXPERIMENT', color: colors.pink },
              { name: 'Signal Bridge', tag: 'SYSTEM', color: colors.yellow },
              { name: 'Studio Nova', tag: 'IDENTITY', color: colors.purple },
              { name: 'Lumen OS', tag: 'UI / MOTION', color: colors.lime },
            ].map((p, i) => (
              <a key={i} href="#" className="group p-5 rounded-xl border border-white/10 bg-[#1F1F23]/80 hover:border-white/20 transition">
                <SmallLabel>{p.tag}</SmallLabel>
                <div className="mt-2 text-xl font-semibold">{p.name}</div>
                <div className="mt-4 h-24 rounded-lg" style={{ background: `linear-gradient(135deg, ${p.color}33, #2a2a30 60%)` }} />
                <div className="mt-3 text-xs text-white/60 group-hover:text-white/80">View case →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8">
          <SectionTitle>Kind Words</SectionTitle>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { quote: 'Sharp taste, sharp code. Turns vague vibes into shippable designs.', author: 'Mia — PM, Nova Labs', color: colors.yellow },
              { quote: 'The brand system still feels fresh a year later. Rock-solid delivery.', author: 'Jon — Founder, Orbit', color: colors.cyan },
              { quote: 'Details for days. Our product feels premium because of them.', author: 'Aria — Design Lead, Signal', color: colors.purple },
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/10 bg-[#1F1F23]/80">
                <div className="text-sm leading-relaxed">“{t.quote}”</div>
                <div className="mt-4 text-xs" style={{ color: t.color }}>{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.bgAlt }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-8">
          <SectionTitle>Most active on social</SectionTitle>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Dribbble', handle: '@flux', color: colors.pink },
              { name: 'X / Twitter', handle: '@flux', color: colors.yellow },
              { name: 'GitHub', handle: 'flux-dev', color: colors.lime },
              { name: 'LinkedIn', handle: '/in/flux', color: colors.cyan },
            ].map((s) => (
              <a key={s.name} href="#" className="p-5 rounded-lg border border-white/10 bg-[#1F1F23]/80 hover:border-white/20 transition">
                <div className="text-sm" style={{ color: s.color }}>{s.name}</div>
                <div className="text-xs text-white/70">{s.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 text-center">
          <SectionTitle>
            Let’s make something <span style={{ color: colors.orange }}>great</span>!
          </SectionTitle>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Available for select collaborations, product design sprints, and design systems work.
          </p>
          <a href="mailto:hello@flux.studio" className="inline-flex items-center justify-center mt-8 px-8 py-3 rounded-md font-semibold text-sm uppercase tracking-[0.25em]" style={{ backgroundColor: colors.orange, color: '#0F0F12' }}>
            Start a project
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10">
        <div className="py-10" style={{ backgroundColor: colors.orange, color: '#0F0F12' }}>
          <div className="mx-auto max-w-[1280px] px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm">
              © {new Date().getFullYear()} Flux — Built with love, type, and late-night synths.
            </div>
            <div className="flex items-center gap-6 text-xs uppercase tracking-[0.25em]">
              <a href="#about" className="hover:opacity-80">About</a>
              <a href="#services" className="hover:opacity-80">Services</a>
              <a href="#work" className="hover:opacity-80">Work</a>
              <a href="#contact" className="hover:opacity-80">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Keyframes */}
      <style>
        {`
          :root { --offwhite: ${colors.text}; }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  )
}
