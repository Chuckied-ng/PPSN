import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
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
New Contact Form Submission from Modal

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Service of Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}
      `.trim();

      // Create mailto link and trigger it
      const mailtoLink = `mailto:info@ppsngroup.com?subject=${encodeURIComponent(
        `New Enquiry from ${formData.name}`
      )}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoLink;
      
      // Show success message and reset form
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', company: '', service: '', message: '' });
          onClose();
        }, 2500);
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your form. Please try again or contact us directly at info@ppsngroup.com');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0A1628]/70 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-[#2C3E50] transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Section */}
              <div className="relative px-8 pt-10 pb-6 bg-gradient-to-br from-[#0A1628] to-[#1C2833] rounded-t-3xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-[#4A6FA5]/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider mb-4 border border-white/10">
                    Get Started
                  </span>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                    Let's Power Your{' '}
                    <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0C674] bg-clip-text text-transparent">
                      Next Project
                    </span>
                  </h2>
                  <p className="font-body text-sm text-gray-400 max-w-md">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                {/* Quick Contact Info */}
                <div className="relative z-10 flex flex-wrap gap-4 mt-6">
                  {[
                    { icon: Phone, text: '+264 64 XXX XXX' },
                    { icon: Mail, text: 'info@ppsngroup.com' },
                    { icon: MapPin, text: 'Walvis Bay, Namibia' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#D4AF37]/20 rounded-md flex items-center justify-center">
                        <item.icon className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                      <span className="font-body text-xs text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Section */}
              <div className="px-8 py-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-[#0A1628] mb-2">
                      Message Sent!
                    </h3>
                    <p className="font-body text-sm text-[#4A6FA5]">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300"
                        />
                      </div>
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
                          className="w-full px-4 py-3 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300"
                        />
                      </div>
                    </div>

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
                          className="w-full px-4 py-3 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300 appearance-none"
                        >
                          <option value="">Select a service</option>
                          <option value="drilling">Drilling & Well Services</option>
                          <option value="marine">Marine & Subsea</option>
                          <option value="production">Production Support</option>
                          <option value="technical">Technical Services</option>
                          <option value="hse">HSE Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-heading font-bold text-xs text-[#0A1628] uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us about your project requirements..."
                        className="w-full px-4 py-3 bg-[#F5F3EE] border border-gray-200 rounded-xl font-body text-sm text-[#0A1628] placeholder:text-[#4A6FA5]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-[#0A1628] text-white rounded-xl font-heading font-bold text-sm hover:bg-[#1C2833] hover:shadow-lg hover:shadow-[#0A1628]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
