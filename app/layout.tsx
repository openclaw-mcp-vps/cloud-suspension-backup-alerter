import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudGuard Alerter — Backup Alerts When Cloud Providers Suspend Accounts",
  description: "Multi-cloud monitoring that alerts when any provider suspends your account and guides recovery. Never be caught off guard again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9b974573-90a7-43d8-a872-58c66cd08636"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
