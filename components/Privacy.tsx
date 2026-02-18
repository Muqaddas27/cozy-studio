
import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="animate-reveal bg-gradient-to-b from-white via-champagne/20 to-white min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sage/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="text-sage" size={32} />
            <span className="text-[11px] uppercase tracking-[0.8em] font-black text-sage">Legal</span>
          </div>
          <h1 className="text-7xl md:text-[100px] font-bold serif text-charcoal leading-[0.8] mb-12">
            Privacy <br /> <span className="italic font-light opacity-80 text-sage">Policy.</span>
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Last Updated: February 18, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <PolicySection 
            icon={<Lock size={32} />}
            title="Information We Collect"
            content={
              <>
                <p className="mb-4">At Cozy Living Studio, we collect information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Project details and design preferences</li>
                  <li>Communication history and correspondence</li>
                  <li>Payment and billing information</li>
                </ul>
              </>
            }
          />

          <PolicySection 
            icon={<Eye size={32} />}
            title="How We Use Your Information"
            content={
              <>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our design services</li>
                  <li>Process your inquiries and communicate with you</li>
                  <li>Send you relevant project updates and newsletters (with your consent)</li>
                  <li>Analyze and enhance our service offerings</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </>
            }
          />

          <PolicySection 
            icon={<Shield size={32} />}
            title="Data Protection"
            content={
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption for data transmission and storage.
              </p>
            }
          />

          <PolicySection 
            icon={<FileText size={32} />}
            title="Information Sharing"
            content={
              <>
                <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional partners (architects, contractors) with your consent</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </>
            }
          />

          <div className="border-t-2 border-sage/20 pt-12">
            <h3 className="text-3xl font-bold serif text-charcoal mb-6">Your Rights</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-4">
              You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights or for any privacy-related questions, please contact us at:
            </p>
            <a href="mailto:privacy@cozyliving.com" className="text-sage font-bold text-xl hover:text-charcoal transition-colors">
              privacy@cozyliving.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#F9F7F5] to-white p-12 border-l-4 border-sage">
            <p className="text-gray-600 font-light leading-relaxed italic">
              "We are committed to protecting your privacy and maintaining the trust you place in us. This policy may be updated periodically to reflect changes in our practices or legal requirements. We will notify you of any significant changes."
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

const PolicySection = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => (
  <div className="group">
    <div className="flex items-center gap-4 mb-6">
      <div className="text-sage opacity-60 group-hover:opacity-100 transition-opacity">{icon}</div>
      <h2 className="text-4xl font-bold serif text-charcoal">{title}</h2>
    </div>
    <div className="text-lg text-gray-600 font-light leading-relaxed pl-14">
      {content}
    </div>
  </div>
);

export default Privacy;
