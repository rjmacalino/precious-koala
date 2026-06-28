'use client';

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row max-w-[540px] mx-auto rounded-[2rem] overflow-hidden border-2 border-line shadow-[0_4px_20px_rgba(100,70,20,0.09)]"
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email address here..."
        className="newsletter-input flex-1 py-[0.95rem] px-6 border-none outline-none text-[0.95rem] font-[inherit] text-ink bg-white placeholder:text-[#bbb]"
      />
      <button
        type="submit"
        className="py-[0.95rem] px-7 bg-orange text-white border-none font-extrabold text-[0.85rem] tracking-[0.07em] cursor-pointer transition-colors duration-200 flex-none hover:bg-orange-dark rounded-b-[2rem] sm:rounded-b-none"
      >
        SUBSCRIBE
      </button>
    </form>
  );
}
