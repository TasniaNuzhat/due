"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProgramDetailsProps { className?: string; }
export default function ProgramDetails({ className }: ProgramDetailsProps) {
  useEffect(() => {

(function(){
const section=document.getElementById('program-details');
if(!section)return;
const track=section.querySelector<HTMLElement>('.pd-track'),progress=section.querySelector<HTMLElement>('.pd-progress span');
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
let ticking=false;
function update(){
  ticking=false;
  if(reduced.matches)return;
  if(!section||!track)return;
  const rect=section.getBoundingClientRect();
  const distance=Math.max(1,section.offsetHeight-window.innerHeight);
  const p=Math.max(0,Math.min(1,-rect.top/distance));
  const available=Math.max(0,track.scrollWidth-window.innerWidth);
  track.style.transform='translate3d('+(-p*available)+'px,0,0)';
  if(progress)progress.style.width=(p*100)+'%';
}
function request(){if(!ticking){ticking=true;requestAnimationFrame(update)}}
window.addEventListener('scroll',request,{passive:true});
window.addEventListener('resize',request,{passive:true});
request();
})();

  }, []);

  return <div className={cn("section-host", className)}><section aria-labelledby="pd-heading" className="pd-section" id="program-details">
<div className="pd-sticky">
<div className="pd-top">
<div>
<p className="pd-eyebrow section-eyebrow unified-eyebrow">{"PROGRAM DETAILS"}</p>
<h2 id="pd-heading">{"Prepare for "}<br/><em>{"what comes next."}</em></h2>
</div>
<p className="pd-intro">{"A practical approach to getting organized, identifying gaps, and preparing your business for investor scrutiny."}</p>
</div>
<div className="pd-viewport">
<div className="pd-track">
<article className="pd-card pd-card-a" tabIndex="0">
<span className="pd-card-label">{"PROGRAM FORMAT"}</span>
<div className="pd-card-main"><span className="pd-card-mark">{"01"}</span><h3>{"Practical"}<br/>{"Preparation"}</h3></div>
<p>{"Understand key diligence areas"}<br/>{"through practical preparation."}</p>
</article>
<article className="pd-card pd-card-b" tabIndex="0">
<span className="pd-card-label">{"LEARNING APPROACH"}</span>
<div className="pd-card-main"><span className="pd-card-mark">{"02"}</span><h3>{"Learn and"}<br/>{"Apply"}</h3></div>
<p>{"Apply essential concepts"}<br/>{"through guided exercises."}</p>
</article>
<article className="pd-card pd-card-c" tabIndex="0">
<span className="pd-card-label">{"PREPARATION MATERIALS"}</span>
<div className="pd-card-main"><span className="pd-card-mark">{"03"}</span><h3>{"Know What"}<br/>{"to Prepare"}</h3></div>
<p>{"Identify the records you need"}<br/>{"and prepare supporting evidence."}</p>
</article>
<article className="pd-card pd-card-d" tabIndex="0">
<span className="pd-card-label">{"APPLICATION PROCESS"}</span>
<div className="pd-card-main"><span className="pd-card-mark">{"04"}</span><h3>{"Prepare With"}<br/>{"Confidence"}</h3></div>
<p>{"Build clarity and confidence"}<br/>{"before your investor review."}</p>
</article>
</div>
</div>
</div>
</section></div>;
}
