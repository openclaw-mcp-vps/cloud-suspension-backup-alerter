export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Cloud Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Backup Alerts When Cloud Providers{" "}
          <span className="text-[#58a6ff]">Suspend Your Account</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Multi-cloud monitoring that detects account suspensions across AWS, GCP, Azure and more — then alerts you via email, SMS, and Slack through channels that work independently of your suspended cloud.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Start Monitoring — $19/month
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Instant Alerts</h3>
            <p className="text-sm text-[#8b949e]">Get notified within minutes of any suspension event via email, SMS, or Slack.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">☁️</div>
            <h3 className="font-semibold text-white mb-1">Multi-Cloud</h3>
            <p className="text-sm text-[#8b949e]">Monitors AWS, GCP, Azure, DigitalOcean, and more from a single dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="font-semibold text-white mb-1">Recovery Guides</h3>
            <p className="text-sm text-[#8b949e]">Step-by-step recovery playbooks tailored to each provider's reinstatement process.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Up to 10 cloud accounts monitored",
              "Email + SMS + Slack alerts",
              "5-minute polling interval",
              "Provider-specific recovery guides",
              "Independent alert infrastructure",
              "7-day free trial"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it work if my cloud is suspended?</h3>
            <p className="text-sm text-[#8b949e]">Our monitoring infrastructure runs on completely separate cloud providers. Alerts are sent through independent channels so you're notified even when your primary cloud is down or suspended.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which cloud providers do you monitor?</h3>
            <p className="text-sm text-[#8b949e]">We currently support AWS, Google Cloud, Microsoft Azure, DigitalOcean, Linode, and Vultr. More providers are added regularly based on customer demand.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my cloud credentials data secure?</h3>
            <p className="text-sm text-[#8b949e]">We use read-only API keys with minimal permissions — only enough to check account status. Keys are encrypted at rest and never stored in plaintext.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} CloudGuard Alerter. All rights reserved.
      </footer>
    </main>
  );
}
