import { CommunityBenefitIcon } from "@/app/_components/home-icons";
import { communityBenefits } from "@/app/_data/home-content";

export function CommunityBenefits() {
  return (
    <section className="section-shell mt-12">
      <div className="grid gap-6 sm:grid-cols-3">
        {communityBenefits.map((benefit) => (
          <div
            key={benefit.title}
            className="premium-card flex items-start gap-4 overflow-hidden rounded-[28px] border border-[#1d4ed8]/10 bg-white p-6"
          >
            <span className="shrink-0 rounded-2xl bg-[#e8f0fe] p-3 text-[#1d4ed8]">
              <CommunityBenefitIcon icon={benefit.icon} />
            </span>
            <div>
              <h4 className="text-sm font-bold text-[#0f2240]">{benefit.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-[#475569]">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}