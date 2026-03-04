import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'minhngtr.b1e@gmail.com',
      href: 'mailto:minhngtr.b1e@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+84 969 062 173',
      href: 'tel:+84969062173',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hanoi, Vietnam',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/m1nhb1ee',
      color: 'hover:bg-gray-900 hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/minhb1e/',
      color: 'hover:bg-blue-600 hover:text-white',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Contact Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                  >
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Icon className="text-blue-500 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                      <div className="text-gray-900 font-medium">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">
              Connect with me
            </h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={28} />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-600 mt-6">
              Feel free to reach out through any of these platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
