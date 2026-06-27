'use client';

export default function NewsletterForm() {
  return (
    <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
      <input type="email" placeholder="Enter your email address here..." className="newsletter-input" />
      <button type="submit" className="newsletter-btn">SUBSCRIBE</button>
    </form>
  );
}
