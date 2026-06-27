export default function DemoBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200 py-2 text-center text-xs text-amber-800">
      <strong>Demo store</strong> — no real payments. Use test card{' '}
      <span className="font-mono font-semibold">4242 4242 4242 4242</span>{' '}
      with any future date and CVC.
    </div>
  );
}
