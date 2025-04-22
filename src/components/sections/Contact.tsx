import React, { useState, useRef } from 'react';
import { Send, Mail, Linkedin, Github, Loader } from 'lucide-react';
import type { FormValues, FormStatus } from '../../types';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };
  
  const validateForm = (): boolean => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      setFormStatus({
        success: false,
        message: 'Please fill in all fields'
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      setFormStatus({
        success: false,
        message: 'Please enter a valid email address'
      });
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setFormStatus(null);
    
    try {
      // Replace these values with your actual EmailJS credentials
      // In production, these should be environment variables
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';
      
      // In a real implementation, use:
      // await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
      
      // For demo purposes, simulate a successful API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      setFormValues({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section bg-dark-800 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-10 glitch text-neon-green" 
          data-text="Let's Connect"
        >
          Let's Connect
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-6 bg-dark-900/70 backdrop-blur-sm rounded-lg border border-neon-green/20">
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities? Send me a message and I'll get back to you as soon as possible.
            </p>
            
            <div className="flex flex-col space-y-6">
              <a 
                href="mailto:aaaayush676@gmail.com" 
                className="flex items-center text-neon-green hover:text-neon-pink transition-colors"
              >
                <Mail className="mr-3" size={20} />
                <span>aaaayush676@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/aryannchaudhary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-neon-green hover:text-neon-pink transition-colors"
              >
                <Linkedin className="mr-3" size={20} />
                <span>linkedin.com/in/aryannchaudhary</span>
              </a>
              
              <a 
                href="https://github.com/wth-aryan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-neon-green hover:text-neon-pink transition-colors"
              >
                <Github className="mr-3" size={20} />
                <span>github.com/wth-aryan</span>
              </a>
            </div>
          </div>
          
          <div className="p-6 bg-dark-900/70 backdrop-blur-sm rounded-lg border border-neon-green/20">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-700 focus:border-neon-green focus:ring-1 focus:ring-neon-green rounded-md text-white outline-none transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-700 focus:border-neon-green focus:ring-1 focus:ring-neon-green rounded-md text-white outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-700 focus:border-neon-green focus:ring-1 focus:ring-neon-green rounded-md text-white outline-none transition resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>
              
              {formStatus && (
                <div className={`p-3 rounded ${formStatus.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-neon-green text-black font-orbitron font-medium rounded hover:bg-neon-pink transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={18} className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;