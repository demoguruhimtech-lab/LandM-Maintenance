import { Phone } from 'lucide-react';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

interface CallCTAProps {
  heading?: string;
  subtext?: string;
  dark?: boolean;
}

export default function CallCTA({
  heading = 'Request a Service Connection Today',
  subtext = 'Available providers are standing by. Find a local independent residential service professional now.',
  dark = false,
}: CallCTAProps) {
  return (
    <section className={`py-16 ${dark ? 'bg-blue-900' : 'bg-blue-700'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">{subtext}</p>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-3 bg-white hover:bg-blue-50 text-blue-800 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <Phone className="w-6 h-6" />
          CALL NOW — {PHONE_DISPLAY}
        </a>
        <p className="text-blue-200 text-sm mt-4">Free service to connect with independent local providers</p>
      </div>
    </section>
  );
}
