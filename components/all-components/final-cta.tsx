"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface FinalCtaProps { className?: string; }
export default function FinalCta({ className }: FinalCtaProps) {
  return <div className={cn("section-host", className)}><section aria-labelledby="cta-title" className="new-cta" id="apply">
<div className="new-cta-inner">
<div className="new-cta-copy">
<span className="new-cta-eyebrow">{"YOUR NEXT STEP"}</span>
<h2 id="cta-title">{"Be ready before"}<br/>{"the questions begin."}</h2>
<p>{"Turn scattered records into a clear plan and approach your next investor conversation with confidence."}</p>
</div>
<div className="new-cta-panel">
<div className="new-cta-panel-inner">
<span>{"THE DUE DILIGENCE PREP BOOTCAMP"}</span>
<h3>{"Start with clarity."}</h3>
<p>{"Financial readiness · Legal and compliance · Data room preparation · Investor Q&A"}</p>
<span className="new-cta-button" role="status">{"Application details coming soon"}</span>
<small>{"Application dates and registration details to be announced."}</small>
</div>
</div>
</div>
</section></div>;
}
