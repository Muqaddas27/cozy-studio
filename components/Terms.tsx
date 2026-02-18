
import React from 'react';
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="animate-reveal bg-gradient-to-b from-white via-champagne/20 to-white min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Scale className="text-sage" size={32} />
            <span className="text-[11px] uppercase tracking-[0.8em] font-black text-sage">Legal</span>
          </div>
          <h1 className="text-7xl md:text-[100px] font-bold serif text-charcoal leading-[0.8] mb-12">
            Terms of <br /> <span className="italic font-light opacity-80 text-sage">Service.</span>
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Last Updated: February 18, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <TermSection 
            icon={<FileText size={32} />}
            title="Acceptance of Terms"
            content={
              <p>
                By accessing and using the services of Cozy Living Studio, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and Cozy Living Studio.
              </p>
            }
          />

          <TermSection 
            icon={<CheckCircle size={32} />}
            title="Our Services"
            content={
              <>
                <p className="mb-4">Cozy Living Studio provides high-end interior design and architectural services, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full interior design and space planning</li>
                  <li>Bespoke furniture curation and custom pieces</li>
                  <li>Architectural consultation and renovation design</li>
                  <li>Material sourcing and project management</li>
                  <li>Post-completion support and styling services</li>
                </ul>
              </>
            }
          />

          <TermSection 
            icon={<Scale size={32} />}
            title="Client Responsibilities"
            content={
              <>
                <p className="mb-4">As a client, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information about your project</li>
                  <li>Respond to communications and requests in a timely manner</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Obtain necessary permissions and approvals for your property</li>
                  <li>Respect the intellectual property rights of our designs</li>
                </ul>
              </>
            }
          />

          <TermSection 
            icon={<AlertCircle size={32} />}
            title="Payment Terms"
            content={
              <>
                <p className="mb-4">
                  Project fees are determined based on scope, complexity, and timeline. Payment terms typically include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Initial deposit upon contract signing (typically 30-50%)</li>
                  <li>Progress payments at agreed milestones</li>
                  <li>Final payment upon project completion</li>
                  <li>Additional charges for scope changes or rush requests</li>
                </ul>
                <p className="mt-4">
                  Late payments may incur interest charges as specified in your contract. We reserve the right to pause work on projects with overdue payments.
                </p>
              </>
            }
          />

          <TermSection 
            icon={<FileText size={32} />}
            title="Intellectual Property"
            content={
              <p>
                All designs, plans, drawings, and creative work produced by Cozy Living Studio remain our intellectual property until full payment is received. Upon full payment, you receive a license to use the designs for the specific project. Designs may not be reproduced, modified, or used for other projects without our written permission.
              </p>
            }
          />

          <TermSection 
            icon={<AlertCircle size={32} />}
            title="Limitation of Liability"
            content={
              <p>
                While we strive for excellence in all our work, Cozy Living Studio shall not be liable for indirect, incidental, or consequential damages arising from our services. Our liability is limited to the fees paid for the specific project in question. We are not responsible for delays caused by third-party contractors, suppliers, or circumstances beyond our control.
              </p>
            }
          />

          <TermSection 
            icon={<Scale size={32} />}
            title="Dispute Resolution"
            content={
              <p>
                Any disputes arising from these terms or our services shall first be addressed through good-faith negotiation. If a resolution cannot be reached, disputes will be resolved through binding arbitration in accordance with the laws of the United Kingdom, in London.
              </p>
            }
          />

          <div className="border-t-2 border-sage/20 pt-12">
            <h3 className="text-3xl font-bold serif text-charcoal mb-6">Contact & Questions</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact our legal team:
            </p>
            <a href="mailto:legal@cozyliving.com" className="text-sage font-bold text-xl hover:text-charcoal transition-colors">
              legal@cozyliving.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#F9F7F5] to-white p-12 border-l-4 border-sage">
            <p className="text-gray-600 font-light leading-relaxed italic">
              "These terms are designed to ensure a clear, professional relationship and the best possible outcome for your project. We reserve the right to modify these terms with notice to existing clients. Continued use of our services constitutes acceptance of updated terms."
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

const TermSection = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => (
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

export default Terms;
