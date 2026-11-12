"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import photo1 from "@/assets/images/photo-01.webp";
import photo4 from "@/assets/images/photo-04.webp";
import photo5 from "@/assets/images/photo-05.webp";
import photo6 from "@/assets/images/photo-06.webp";
interface WhoItsForProps { className?: string; }
export default function WhoItsFor({ className }: WhoItsForProps) {
  useEffect(() => {

(()=>{
const src=document.querySelector<HTMLImageElement>('.photo-stack img');const dest=document.querySelector<HTMLImageElement>('#who-shared');const who=document.querySelector<HTMLElement>('.who');const overlay=document.querySelector<HTMLElement>('.shared-flight');const image=document.querySelector<HTMLImageElement>('#flight-image');if(!src||!dest||!who||!overlay||!image)return;
let scheduled=false;const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function update(){scheduled=false;if(!src||!dest||!who||!overlay||!image)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced){overlay.style.display='none';src.classList.remove('flight-hidden');dest.classList.remove('flight-hidden');return;}
const r=who.getBoundingClientRect();const vh=innerHeight;
// The transition begins as the Who section approaches the bottom of the viewport,
// and finishes once the four-card grid is comfortably in view.
const start=vh*.92,end=vh*.14;let t=clamp((start-r.top)/(start-end),0,1);t=t*t*(3-2*t);
const active=t>.001&&t<.999;
src.classList.toggle('flight-hidden',active);dest.classList.toggle('flight-hidden',active);
if(!active){overlay.style.display='none';return;}
const a=src.getBoundingClientRect(),b=dest.getBoundingClientRect();
// Source can be outside viewport while scrolling; rect remains valid.
const x=a.left+(b.left-a.left)*t,y=a.top+(b.top-a.top)*t;
const w=a.width+(b.width-a.width)*t,h=a.height+(b.height-a.height)*t;
overlay.style.display='block';overlay.style.width=w+'px';overlay.style.height=h+'px';overlay.style.transform=`translate3d(${x}px,${y}px,0)`;
image.style.objectFit='contain';
}
function request(){if(!scheduled){scheduled=true;requestAnimationFrame(update)}}
addEventListener('scroll',request,{passive:true});addEventListener('resize',request);addEventListener('load',request);request();
})();

  }, []);

  return <div className={cn("section-host", className)}><section className="who" id="who-its-for"><div className="who-heading"><div><span className="who-kicker unified-eyebrow">{"WHO IT'S FOR"}</span><h2>{"Built for founders"}<br/>{"getting "}<em>{"investor-ready."}</em></h2></div><p>{"For founders preparing for investor review, this is where scattered records become a clear, actionable plan."}</p></div><div className="who-grid"><article className="who-card who-first"><div className="who-photo"><img alt="Business professionals reviewing documents together" id="who-shared" src={photo1.src}/></div><div className="who-card-copy"><span>{"FOUNDERS"}</span><h3>{"Founders preparing to raise"}</h3><p>{"Get your documentation in order before investors begin asking questions."}</p></div></article><article className="who-card"><div className="who-photo"><img alt="Team reviewing financial charts around a table" id="who-new-1" src={photo4.src}/></div><div className="who-card-copy"><span>{"OPERATORS"}</span><h3>{"Teams organizing the details"}</h3><p>{"Bring financial, legal and operational records into one clear process."}</p></div></article><article className="who-card"><div className="who-photo"><img alt="Colleagues working together at a laptop in a meeting room" id="who-new-2" src={photo5.src}/></div><div className="who-card-copy"><span>{"LEADERS"}</span><h3>{"Leaders facing their first review"}</h3><p>{"Know what to prepare and how to respond with confidence."}</p></div></article><article className="who-card"><div className="who-photo"><img alt="Professionals examining large planning documents together" id="who-new-3" src={photo6.src}/></div><div className="who-card-copy"><span>{"GROWTH TEAMS"}</span><h3>{"Growing teams, clearer decisions"}</h3><p>{"Identify gaps early and build a stronger foundation for diligence."}</p></div></article></div></section><div aria-hidden="true" className="shared-flight"><img alt="" id="flight-image" src={photo1.src}/></div></div>;
}
