import React from "react";

type CollapsibleSectionProps = {
  title: string;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function CollapsibleSection({
  title,
  badge,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  return (
    <details
      className="group border border-slate-800 bg-slate-950/40"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4">
        <span className="text-sm font-semibold text-white">{title}</span>
        <div className="flex items-center gap-3">
          {badge && (
            <span className="rounded-full bg-violet-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-400">
              {badge}
            </span>
          )}
          <span className="text-xl font-light text-violet-400 transition-transform duration-200 group-open:rotate-45">
            +
          </span>
        </div>
      </summary>

      <div className="border-t border-slate-800 px-5 py-4 text-sm leading-7 text-slate-300">
        {children}
      </div>
    </details>
  );
}