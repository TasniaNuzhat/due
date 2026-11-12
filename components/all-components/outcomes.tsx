"use client";
import React from "react";
import { cn } from "@/lib/utils";
import photo1 from "@/assets/images/photo-01.webp";
import photo4 from "@/assets/images/photo-04.webp";
import photo5 from "@/assets/images/photo-05.webp";
import photo6 from "@/assets/images/photo-06.webp";
interface OutcomesProps { className?: string; }
export default function Outcomes({ className }: OutcomesProps) {
  return <div className={cn("section-host", className)}><section className="oc-section" id="outcomes"><div className="oc-wrap"><div className="oc-header"><div><span className="section-eyebrow unified-eyebrow">{"OUTCOMES"}</span><h2>{"What You’ll "}<br/><em>{"Walk Away With."}</em></h2></div><p>{"Practical preparation you can put to work before your next investor conversation, with clearer records and answers."}</p></div><div className="oc-grid"><article className="oc-card"><img alt="An organized data room" loading="lazy" src={photo1.src}/><div className="oc-photo-overlay"></div><h3>{"An organized data room"}</h3><p>{"Know what belongs in your data room and how to keep it ready for review."}</p></article><article className="oc-card"><img alt="Clear financial records" loading="lazy" src={photo4.src}/><div className="oc-photo-overlay"></div><h3>{"Clear financial records"}</h3><p>{"Present the numbers that matter, with the context investors need."}</p></article><article className="oc-card"><img alt="Stronger legal readiness" loading="lazy" src={photo5.src}/><div className="oc-photo-overlay"></div><h3>{"Stronger legal readiness"}</h3><p>{"Identify documentation gaps and prepare essential company records."}</p></article><article className="oc-card"><img alt="Confident investor answers" loading="lazy" src={photo6.src}/><div className="oc-photo-overlay"></div><h3>{"Confident investor answers"}</h3><p>{"Respond to detailed questions with evidence, clarity, and confidence."}</p></article></div></div></section></div>;
}
