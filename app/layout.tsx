import "./globals.css";
import type { Metadata } from "next";
export const metadata:Metadata={title:"Due Diligence Prep Bootcamp",description:"Prepare with clarity."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
