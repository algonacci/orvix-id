import { Check, Sparkles } from "lucide-react";
import { deploymentWorkflow, lifecycleFlow } from "@/data/siteContent";

const terminalLines = [
  <><span className="text-primary">$</span> orvix assess business-production</>,
  <><Check size={14} /> Architecture and access validated <small>ready</small></>,
  <><Check size={14} /> Deploying monitoring and backup <small>100%</small></>,
  <><Sparkles size={14} /> Workload healthy at <b>app.orvix.id</b></>,
];

const WorkflowSection = () => (
  <section id="workflow" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-eyebrow text-text-muted">Operational Lifecycle</span>
        <h2 className="section-title mt-4">Dari assessment sampai terkelola.</h2>
        <p className="section-copy mx-auto mt-4 max-w-2xl">
          Alur implementasi dibuat jelas agar setiap keputusan arsitektur, deployment, dan
          maintenance dapat ditelusuri.
        </p>
      </div>

      <div className="workflow-track mt-16 grid gap-8 md:grid-cols-5 md:gap-0">
        {deploymentWorkflow.map((item, index) => {
          const lifecycleItem = lifecycleFlow[Math.min(index, lifecycleFlow.length - 1)];
          const Icon = lifecycleItem.icon;
          return (
            <div key={item.step} className="relative text-center md:px-4">
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-[#0d1727] text-primary shadow-[0_0_28px_rgba(34,211,238,0.12)]">
                <Icon size={20} />
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-[12rem] text-xs leading-6 text-text-muted">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-20 grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="deployment-terminal">
          <div className="deployment-window-bar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>deployment - zsh</span>
            <span />
          </div>
          <div className="space-y-0 p-6 font-mono text-xs sm:p-8">
            {terminalLines.map((line, index) => (
              <div key={index} className="terminal-line flex min-h-16 items-center gap-2 border-b border-dashed border-white/10 text-text-secondary last:border-0">
                {line}
              </div>
            ))}
            <span className="terminal-cursor mt-4 inline-block h-4 w-2 bg-primary" />
          </div>
        </div>

        <div className="deployment-window p-5 sm:p-6">
          <span className="section-eyebrow text-text-muted">Managed operations</span>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">Satu pandangan untuk workload penting.</h3>
          <p className="mt-4 text-sm leading-7 text-text-secondary">
            Deployment, monitoring, backup, security, dan kapasitas dikelola sebagai satu alur,
            bukan pekerjaan terpisah yang sulit dilacak.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {lifecycleFlow.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <Icon size={17} className="text-primary" />
                  <p className="mt-3 text-sm font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-[11px] leading-5 text-text-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WorkflowSection;
