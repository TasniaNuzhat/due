"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Hero from "@/components/all-components/hero";
import About from "@/components/all-components/about";
import WhoItsFor from "@/components/all-components/who-its-for";
import Curriculum from "@/components/all-components/curriculum";
import Outcomes from "@/components/all-components/outcomes";
import ProgramDetails from "@/components/all-components/program-details";
import Faq from "@/components/all-components/faq";
import FinalCta from "@/components/all-components/final-cta";
import Footer from "@/components/all-components/footer";
interface DueDiligenceBootcampProps { className?: string; }
export default function DueDiligenceBootcamp({ className }: DueDiligenceBootcampProps) {
 return <main className={cn("due-diligence-page", className)}>
  <Hero />
  <About />
  <WhoItsFor />
  <Curriculum />
  <Outcomes />
  <ProgramDetails />
  <Faq />
  <FinalCta />
  <Footer />
 </main>;
}
