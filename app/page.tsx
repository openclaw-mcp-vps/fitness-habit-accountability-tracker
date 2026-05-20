export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Fitness Accountability
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Build Fitness Habits That{" "}
          <span className="text-[#58a6ff]">Actually Stick</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Track your workouts, share progress with accountability partners, get automated check-ins, and celebrate streak rewards — all in one place.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Start for $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔥</div>
            <h3 className="font-semibold text-white mb-1">Streak Rewards</h3>
            <p className="text-sm text-[#8b949e]">Stay motivated with milestone badges and streak tracking that celebrate consistency.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">👥</div>
            <h3 className="font-semibold text-white mb-1">Accountability Partners</h3>
            <p className="text-sm text-[#8b949e]">Invite friends, trainers, or coaches to follow your progress and keep you on track.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📲</div>
            <h3 className="font-semibold text-white mb-1">Automated Check-ins</h3>
            <p className="text-sm text-[#8b949e]">Receive email and SMS reminders so you never miss a workout or habit log.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$7</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited habit tracking",
              "Up to 5 accountability partners",
              "Automated email & SMS check-ins",
              "Streak rewards & badges",
              "Progress analytics dashboard",
              "Priority support"
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
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">How do accountability partners work?</h3>
            <p className="text-sm text-[#8b949e]">You invite partners via email. They get a read-only view of your habit streaks and can send you encouragement messages directly through the app.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">What kind of check-ins will I receive?</h3>
            <p className="text-sm text-[#8b949e]">You choose your schedule — daily, every other day, or weekly. Check-ins arrive via email or SMS and include a one-tap log button so it takes seconds.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your account settings. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} FitTrack. All rights reserved.
      </footer>
    </main>
  );
}
