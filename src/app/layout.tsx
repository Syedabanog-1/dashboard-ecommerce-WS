// src\app\layout.tsx
"use client"
import "./globals.css";
import { usePathname } from "next/navigation";
import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();

  const isHome = pathname.startsWith("/sign-in");
  const isStudio = pathname.startsWith("/studio");
  
  const studioAndSignIn = !isHome && !isStudio

  return (
    <ClerkProvider>
    <html lang="en">
      <body>
      <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        <div className="min-h-screen">
      {studioAndSignIn && <AdminHeader />}
          <div className="flex">
         
            {studioAndSignIn && <AdminSidebar />}
            <main className="flex-1 bg-muted/40">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}