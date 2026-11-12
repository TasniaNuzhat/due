"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface FooterProps { className?: string; }
export default function Footer({ className }: FooterProps) {
  return <div className={cn("section-host", className)}><footer className="new-footer">
<div className="new-footer-inner">
<div className="new-footer-brand"><span aria-hidden="true" className="new-footer-logo">{"✧"}</span><p>{"Prepare with clarity."}<br/>{"Move forward with confidence."}</p></div>
<div><h3>{"Explore"}</h3><a href="#about">{"About"}</a><a href="#curriculum">{"Curriculum"}</a><a href="#outcomes">{"Outcome"}</a><a href="#program-details">{"Program"}</a><a href="#faq">{"FAQ"}</a></div>
<div className="new-footer-contact"><h3>{"Contact us"}</h3><p>{"USA"}</p><a href="mailto:duebootcamp@gmail.com">{"duebootcamp@gmail.com"}</a></div><div className="new-footer-social"><h3>{"Follow"}</h3><div className="social-icons"><span aria-label="Instagram" className="social-icon" title="Instagram"><svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24" width="22"><rect height="20" rx="5" width="20" x="2" y="2"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="18" cy="6" fill="currentColor" r="1" stroke="none"></circle></svg></span><span aria-label="LinkedIn" className="social-icon" title="LinkedIn"><svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24" width="22"><rect height="20" rx="2" width="20" x="2" y="2"></rect><path d="M7 10v8M7 7v.1M11 18v-8h4v1.5c.7-1.2 4-1.7 4 2V18"></path></svg></span><span aria-label="Facebook" className="social-icon" title="Facebook"><svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24" width="22"><path d="M15 21v-8h3l.5-4H15V7c0-1 .3-1.5 1.7-1.5H19V2.3A22 22 0 0 0 16 2c-3.5 0-5 2-5 5v2H8v4h3v8"></path></svg></span></div></div></div>
<div className="new-footer-bottom">{"© 2026 Due Diligence Prep Bootcamp. All rights reserved."}</div>
</footer></div>;
}
