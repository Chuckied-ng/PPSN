import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Linkedin,
  Facebook,
  Twitter,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';

const officeLocations = [
  {
    city: 'Walvis Bay',
    country: 'Namibia',
    type: 'Head Office',
    address: 'Industrial Area, Port of Walvis Bay',
    phone: '+264 64 XXX XXX',
    email: 'info@ppsngroup.com',
    hours: 'Mon – Fri, 08:00 – 17:00',
  },
  {
    city: 'Windhoek',
    country: 'Namibia',
    type: 'Regional Office',
    address: 'Central Business District',
    phone: '+264 61 XXX XXX',
    email: 'windhoek@ppsngroup.com',
    hours: 'Mon – Fri, 08:00 – 17:00',
  },
];

const services = [
  'Drilling & Well Services',
  'Marine & Subsea',
  'Production Support',
  'Technical Services',
  'HSE Consulting',
  'Other',
];

export default function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: '-100px' });
  const infoInView = useInView(infoRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create email body
      const emailBody = `
New Contact Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Job Title: ${formData.jobTitle || 'Not provided'}
Service of Interest: ${formData.service || 'Not specified'}
Project Budget: ${formData.budget || 'Not specified'}

Message:
${formData.message}
      `.trim();

      // Create mailto link and trigger it
      const mailtoLink = `mailto:info@ppsngroup.com?subject=${encodeURIComponent(
        `New Enquiry from ${formData.firstName} ${formData.lastName}`
      )}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoLink;
      
      // Show success message after short delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your form. Please try again or contact us directly at info@ppsngroup.com');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F3EE] scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1C2833] overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4A6FA5]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 noise-texture opacity-[0.03]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link
              to="/"
              className="font-body text-sm text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-500" />
            <span className="font-body text-sm text-[#D4AF37]">Contact</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider mb-6 border border-white/10"
              >
                Contact Us
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
              >
                Let's Build{' '}
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0C674] bg-clip-text text-transparent">
                  Something Great
                </span>{' '}
                Together
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-lg text-gray-400 mb-10 max-w-lg leading-relaxed"
              >
                Whether you need drilling support, marine services, or a full energy partnership —
                we're ready to discuss your requirements and deliver world-class solutions.
              </motion.p>

              {/* Quick Contact Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  {
                    icon: Phone,
                    title: 'Call Us',
                    detail: '+264 64 XXX XXX',
                    sub: 'Mon – Fri, 08:00 – 17:00',
                  },
                  {
                    icon: Mail,
                    title: 'Email Us',
                    detail: 'info@ppsngroup.com',
                    sub: 'Response within 24hrs',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-[#D4AF37]/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="font-heading font-bold text-sm text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-[#E8E6E3] mb-0.5">{item.detail}</p>
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Oil rig at sunset"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-heading font-bold text-sm text-white">
                      Global Reach, Local Execution
                    </span>
                  </div>
                  <p className="font-body text-xs text-gray-300">
                    Indigenous Namibian energy services expertise.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form Column */}
            <div ref={formRef} className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 rounded-full font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider mb-4">
                  Send a Message
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A1628] mb-3">
                  Get in Touch
                </h2>
                <p className="font-body text-base text-[#4A6FA5] mb-10 max-w-lg">
                  Fill out the form below with your project details and our team will respond within
                  24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl border border-gray-200/60 p-12 text-center shadow-lg"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-9 h-9 text-green-600" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-[#0A1628] mb-3">
                      Thank You!
                    </h3>
                    <p className="font-body text-base text-[#4A6FA5] mb-6 max-w-md mx-auto">
                      Your message has been received. Our team will review your enquiry and get back
                      to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-[#0A1628] text-white rounded-full font-heading font-bold text-sm hover:bg-[#1C2833] transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl border border-gray-200/60 p-8 sm:p-10 shadow-lg space-y-6"
                  >
                    {/* Name Row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="w-full px-4 py-3.5 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                          className="w-full px-4 py-3.5 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Contact Row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3.5 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+264 XX XXX XXXX"
                          className="w-full px-4 py-3.5 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Company Row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full px-4 py-3.5 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          placeholder="Your Role"
                          className="w-full px-4 py-3.5 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Service & Budget */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300 appearance-none"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300 appearance-none"
                        >
                          <option value="">Select range</option>
                          <option value="<100k">Under $100,000</option>
                          <option value="100k-500k">$100,000 – $500,000</option>
                          <option value="500k-1m">$500,000 – $1,000,000</option>
                          <option value="1m+">$1,000,000+</option>
                          <option value="undisclosed">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        className="w-full px-4 py-3.5 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-[#0A1628] rounded-full font-heading font-bold text-base hover:bg-[#E5C158] hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:scale-105 active:scale-[0.98] transition-all duration-300 flex items-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#0A1628]/30 border-t-[#0A1628] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Info Sidebar */}
            <div ref={infoRef} className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8 lg:sticky lg:top-32"
              >
                {/* Office Locations */}
                <div>
                  <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 rounded-full font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider mb-4">
                    Our Offices
                  </span>
                  <div className="space-y-4">
                    {officeLocations.map((office) => (
                      <div
                        key={office.city}
                        className="bg-white rounded-2xl border border-gray-200/60 p-6 shadow-sm hover:shadow-md hover:border-[#D4AF37]/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-[#D4AF37]" />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-sm text-[#0A1628]">
                              {office.city}, {office.country}
                            </h4>
                            <span className="font-mono text-[10px] text-[#4A6FA5] uppercase tracking-wider">
                              {office.type}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2.5 pl-10">
                          <p className="font-body text-sm text-[#2C3E50]">{office.address}</p>
                          <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#4A6FA5]" />
                            <span className="font-body text-sm text-[#4A6FA5]">
                              {office.phone}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-[#4A6FA5]" />
                            <span className="font-body text-sm text-[#4A6FA5]">
                              {office.email}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-[#4A6FA5]" />
                            <span className="font-body text-sm text-[#4A6FA5]">
                              {office.hours}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
                      alt="Map view"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0A1628]/30 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-2 shadow-lg">
                        <MapPin className="w-4 h-4 text-[#D4AF37]" />
                        <span className="font-heading font-bold text-sm text-[#0A1628]">
                          Walvis Bay, Namibia
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-2xl border border-gray-200/60 p-6 shadow-sm">
                  <h4 className="font-heading font-bold text-sm text-[#0A1628] mb-4">
                    Connect With Us
                  </h4>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, label: 'LinkedIn', color: '#0077b5' },
                      { icon: Facebook, label: 'Facebook', color: '#1877f2' },
                      { icon: Twitter, label: 'Twitter', color: '#1da1f2' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-[#4A6FA5] hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
                      >
                        <social.icon className="w-4 h-4" />
                        <span className="font-body text-xs font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-br from-[#0A1628] to-[#1C2833] rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 noise-texture opacity-[0.03]" />
                  <div className="relative z-10">
                    <h4 className="font-heading font-bold text-sm text-white mb-2">
                      24/7 Emergency Support
                    </h4>
                    <p className="font-body text-xs text-gray-400 mb-4">
                      For urgent operational matters, our emergency team is available around the
                      clock.
                    </p>
                    <a
                      href="tel:+26464XXXXXX"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-[#0A1628] rounded-full font-heading font-bold text-xs hover:bg-[#E5C158] transition-all duration-300"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Emergency Line
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Quick Links Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 rounded-full font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider mb-4">
              How We Work
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A1628] mb-4">
              What Happens Next?
            </h2>
            <p className="font-body text-base text-[#4A6FA5] max-w-2xl mx-auto">
              After you submit your enquiry, here's what to expect from our team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'We Review',
                description:
                  'Our team reviews your enquiry and assigns the right specialist to your project.',
              },
              {
                step: '02',
                title: 'We Connect',
                description:
                  'A dedicated project manager reaches out within 24 hours to discuss your needs.',
              },
              {
                step: '03',
                title: 'We Propose',
                description:
                  'We prepare a detailed proposal tailored to your specific requirements and timeline.',
              },
              {
                step: '04',
                title: 'We Deliver',
                description:
                  'Once approved, we mobilize our team and execute with precision and reliability.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-[#F5F3EE] rounded-2xl p-8 group hover:bg-white hover:shadow-lg hover:border-[#D4AF37]/20 border border-transparent transition-all duration-300"
              >
                <span className="font-mono text-5xl font-bold text-[#D4AF37]/15 group-hover:text-[#D4AF37]/25 transition-colors duration-300">
                  {item.step}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#0A1628] mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-[#4A6FA5] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
