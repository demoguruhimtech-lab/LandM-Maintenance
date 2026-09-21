import { Phone } from 'lucide-react';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${PHONE}`}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-2.5 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold px-6 py-3.5 rounded-full shadow-2xl shadow-blue-900/40 transition-all"
      aria-label={`Call ${PHONE_DISPLAY}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
      </span>
      <Phone className="w-4 h-4" />
      <span className="text-sm">CALL NOW — {PHONE_DISPLAY}</span>
    </a>
  );
}
