const channels = [
  { icon: '@', label: 'Email', href: 'mailto:minhngtr.b1e@gmail.com' },
  { icon: 'GH', label: 'GitHub', href: 'https://github.com/m1nhb1ee' },
  { icon: 'IN', label: 'LinkedIn', href: 'https://www.linkedin.com/in/minhb1e/' },
];

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-label">VIII.Contact / Conversation · 008 / 008</div>
      <div className="section-title" style={{ marginInline: 'auto' }}>
        Let’s build something useful and visually intentional.
      </div>
      <div className="contact-links">
        {channels.map(channel => (
          <a
            key={channel.label}
            href={channel.href}
            className="contact-link magnetic"
            target={channel.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            <div className="contact-icon">{channel.icon}</div>
            <span className="contact-label">{channel.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
