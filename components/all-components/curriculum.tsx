"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import photo7 from "@/assets/images/photo-07.webp";
interface CurriculumProps { className?: string; }
export default function Curriculum({ className }: CurriculumProps) {
  useEffect(() => {

(()=>{const steps=[...document.querySelectorAll('.curr-step')];let ticking=false;function update(){ticking=false;const target=innerHeight*.52;let best=0,dist=Infinity;steps.forEach((el,i)=>{const r=el.getBoundingClientRect(),d=Math.abs((r.top+r.bottom)/2-target);if(d<dist){dist=d;best=i}});steps.forEach((el,i)=>el.classList.toggle('is-active',i===best))}function schedule(){if(!ticking){ticking=true;requestAnimationFrame(update)}}addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);schedule()})();

  }, []);

  return <div className={cn("section-host", className)}><section aria-label="Bootcamp curriculum" className="curriculum" id="curriculum">
<div className="curr-intro"><div><div className="curr-kicker section-eyebrow unified-eyebrow">{"THE CURRICULUM"}</div><h2>{"Preparation,"}<br/><em>{"step by step."}</em></h2></div><p>{"Four practical areas to organize your records, address gaps, and respond to investor questions with confidence."}</p></div>
<div className="curr-layout"><div className="curr-photo-wrap"><img alt="Team members discussing work around a conference table" src={photo7.src}/></div><div className="curr-timeline">
<article className="curr-step is-active"><span className="curr-dot"></span><h3>{"Financial Readiness"}</h3><div className="curr-desc"><p>{"Organize your financial statements, understand key metrics, and prepare clear explanations of your business performance."}</p></div></article>
<article className="curr-step"><span className="curr-dot"></span><h3>{"Legal & Compliance"}</h3><div className="curr-desc"><p>{"Review essential company records, contracts, ownership documentation, and potential compliance gaps before they become questions."}</p></div></article>
<article className="curr-step"><span className="curr-dot"></span><h3>{"Data Room Preparation"}</h3><div className="curr-desc"><p>{"Build an orderly, accessible collection of the documents investors commonly request, with a clear structure and ownership."}</p></div></article>
<article className="curr-step"><span className="curr-dot"></span><h3>{"Investor Q&A Practice"}</h3><div className="curr-desc"><p>{"Practice responding to detailed investor questions with concise answers, supporting evidence, and a clear next step."}</p></div></article>
</div></div>
</section></div>;
}
