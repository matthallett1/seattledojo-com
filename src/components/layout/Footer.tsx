export function Footer() {
  return (
    <footer className="bg-primary text-[#FAF6F1]/60 border-t border-[#FAF6F1]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-display text-xl text-[#FAF6F1] mb-2">Seattle Dojo</h4>
          <p className="text-sm leading-relaxed">
            North America&apos;s first judo dojo. Training in the gentle way since the early 1900s.
          </p>
        </div>
        <div>
          <h5 className="text-xs font-semibold tracking-wider uppercase text-accent mb-4">About</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-[#FAF6F1] transition-colors">Our History</a></li>
            <li><a href="/instructors" className="hover:text-[#FAF6F1] transition-colors">Instructors</a></li>
            <li><a href="/what-is-judo" className="hover:text-[#FAF6F1] transition-colors">What is Judo?</a></li>
            <li><a href="/for-kids" className="hover:text-[#FAF6F1] transition-colors">Judo for Kids</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-semibold tracking-wider uppercase text-accent mb-4">Join</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/membership" className="hover:text-[#FAF6F1] transition-colors">Membership</a></li>
            <li><a href="/getting-started" className="hover:text-[#FAF6F1] transition-colors">Getting Started</a></li>
            <li><a href="/schedule" className="hover:text-[#FAF6F1] transition-colors">Schedule</a></li>
            <li><a href="/contact" className="hover:text-[#FAF6F1] transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-semibold tracking-wider uppercase text-accent mb-4">Community</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/news" className="hover:text-[#FAF6F1] transition-colors">News</a></li>
            <li><a href="/tournament" className="hover:text-[#FAF6F1] transition-colors">Annual Tournament</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
