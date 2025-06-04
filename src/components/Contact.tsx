import React, { useState, useCallback, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateForm = useCallback((): boolean => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Preencha todos os campos obrigatórios');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Por favor, insira um e-mail válido');
      return false;
    }
    return true;
  }, [formData]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Mensagem enviada com sucesso! Nossa equipe entrará em contato em até 24h.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ContactInfoCard = ({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href?: string }) => (
    <motion.a 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      href={href} 
      className="block bg-white rounded-xl p-5 lg:p-6 shadow-card hover:shadow-hover transition-transform duration-300 hover:-translate-y-1"
      aria-label={`${title}: ${value}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-950 text-base lg:text-lg">{title}</h4>
          <p className="text-gray-600 text-sm lg:text-base mt-1">{value}</p>
        </div>
      </div>
    </motion.a>
  );

  return (
    <section id="contact" className="section-padding bg-gray-50" aria-labelledby="contact-heading">
      <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            📞 Entre em Contato
          </div>
          <h2 id="contact-heading" className="text-3xl lg:text-4xl font-bold text-gray-950 mb-6">
            Vamos Transformar Sua
            <span className="block mt-2 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
              Ideia em Realidade
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pronto para iniciar seu próximo projeto? Solicite uma consultoria gratuita e descubra 
            como podemos impulsionar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-950 mb-8">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required aria-required="true"
                    className="input" placeholder="Nome completo" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                    className="input" placeholder="(11) 99999-9999" pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}" title="Formato: (11) 99999-9999" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required aria-required="true"
                  className="input" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem *</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required aria-required="true"
                  className="input resize-none" placeholder="Descreva seu projeto e objetivos..."></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 disabled:opacity-70 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <ContactInfoCard icon={<Mail className="w-6 h-6 text-primary" />} title="E-mail" value="contato@techflow.dev" href="mailto:contato@techflow.dev" />
              <ContactInfoCard icon={<Phone className="w-6 h-6 text-primary" />} title="Telefone" value="(11) 3000-0000" href="tel:+551130000000" />
              <ContactInfoCard icon={<MapPin className="w-6 h-6 text-primary" />} title="Localização" value="São Paulo, SP - Brasil" />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
              <h4 className="font-semibold text-gray-950 mb-5 text-lg">Por que escolher nossa solução?</h4>
              <div className="space-y-3.5">
                {[ 'Consultoria estratégica gratuita', 'Metodologia ágil comprovada', 'Suporte técnico dedicado', 'Garantia de qualidade assegurada', 'Soluções personalizadas escaláveis' ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Localização (módulo separado para reutilização futura) */}
            {/*
            <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
              <h4 className="font-semibold text-gray-950 mb-4">Nossa Localização</h4>
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex flex-col items-center justify-center text-center">
                <MapPin className="w-10 h-10 text-primary mb-3" />
                <p className="text-gray-700 font-medium">São Paulo, SP</p>
                <p className="text-gray-500 text-sm">Av. Paulista, 1000 • 10º Andar</p>
                <button onClick={() => toast.info('Integração com Google Maps ativada')} className="mt-4 text-sm text-primary font-medium hover:underline">
                  Ver no mapa
                </button>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
