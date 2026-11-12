"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

interface FaqProps { className?: string; }
export default function Faq({ className }: FaqProps) {
  useEffect(() => {
document.querySelectorAll<HTMLDetailsElement>('.new-faq details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll<HTMLDetailsElement>('.new-faq details').forEach(other=>{if(other!==d)other.open=false})}));
  }, []);

  return <div className={cn("section-host", className)}><section aria-labelledby="faq-title" className="new-faq" id="faq">
<div className="new-faq-inner">
<div className="new-faq-left">
<span className="new-eyebrow">{"FREQUENTLY ASKED QUESTIONS"}</span>
<h2 id="faq-title">{"Good questions."}<br/><span>{"Straight answers."}</span></h2>
<p>{"Still have a question? "}<a href="#apply">{"Explore the application details"}</a></p>
</div>
<div className="new-faq-right">
<details><summary>{"Who is this bootcamp designed for?"}<span className="faq-plus"></span></summary><p>{"Founders and teams preparing their financial, legal, and operational records for investor review or due diligence."}</p></details>
<details><summary>{"Do I need to be fundraising already?"}<span className="faq-plus"></span></summary><p>{"No. The bootcamp is designed to help you prepare before investor questions arrive, whether you are actively fundraising or planning ahead."}</p></details>
<details><summary>{"What will I work on during the bootcamp?"}<span className="faq-plus"></span></summary><p>{"You will focus on financial readiness, legal and compliance records, data room organization, and clear responses to investor questions."}</p></details>
<details><summary>{"Will I need to share confidential company documents?"}<span className="faq-plus"></span></summary><p>{"Use the preparation exercises to organize your own records. Do not upload or disclose sensitive company information unless the program's privacy terms explicitly allow it."}</p></details>
<details><summary>{"Is this suitable for a first-time founder?"}<span className="faq-plus"></span></summary><p>{"Yes. The curriculum is structured around practical preparation and does not assume you have completed an investor due diligence process before."}</p></details>
<details><summary>{"How do I apply?"}<span className="faq-plus"></span></summary><p>{"Use the Apply Now button to reach the application section. Program timing and participation details should be confirmed before submission."}</p></details>
</div>
</div>
</section></div>;
}
