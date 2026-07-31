import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { faqs, whatsappUrl } from "@/data/siteContent";

const FaqSection = () => (
  <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="max-w-lg">
        <span className="section-eyebrow text-text-muted">FAQ</span>
        <h2 className="section-title mt-4">Pertanyaan sebelum mulai.</h2>
        <p className="section-copy mt-4">
          Scope akhir mengikuti kondisi workload. Jika kebutuhan Anda belum tercakup, diskusikan
          langsung dengan tim Orvix.id.
        </p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Tanya melalui WhatsApp <ArrowRight size={15} />
        </a>
      </div>

      <Accordion.Root type="single" collapsible className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
        {faqs.map((item, index) => (
          <Accordion.Item key={item.question} value={`faq-${index}`} className="border-b border-white/10 last:border-0">
            <Accordion.Header>
              <Accordion.Trigger className="faq-trigger flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-medium text-foreground sm:px-6">
                {item.question}
                <ChevronDown size={17} className="shrink-0 text-text-muted transition-transform duration-200" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="faq-content overflow-hidden text-sm leading-7 text-text-secondary">
              <div className="px-5 pb-5 sm:px-6">{item.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  </section>
);

export default FaqSection;
