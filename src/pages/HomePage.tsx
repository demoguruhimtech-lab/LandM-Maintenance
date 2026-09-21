import { Link } from 'react-router-dom';
import {
  Phone, MapPin, CheckCircle, Star, Shield, Clock, Home,
  Droplets, Waves, Flame, Droplet, Wrench, Zap, Lightbulb,
  Wind, Settings, Square, Hammer, ChevronRight, ArrowRight
} from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import {
  PHONE, PHONE_DISPLAY, BUSINESS_NAME, CITY, STATE, SERVICE_AREAS, MAIN_SERVICES
} from '@/lib/constants';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Droplets, Waves, Flame, Droplet, Wrench, Zap, Lightbulb, Wind, Settings, Square, Hammer
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_NAME,
  description: 'Residential home repair and maintenance service connection in Grand Junction, CO.',
  telephone: PHONE,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Grand Junction',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  url: 'https://www.gjrepairpros.com',
  areaServed: SERVICE_AREAS.map((a) => ({ '@type': 'City', name: `${a.name}, CO` })),
  serviceType: 'Residential Home Repair and Maintenance',
};

const FAQS = [
  {
    q: 'What types of home repairs can I find service providers for?',
    a: 'You can connect with independent local providers for a wide range of residential repairs including plumbing, electrical, HVAC, drywall, carpentry, water heater service, drain cleaning, lighting, and general home maintenance.',
  },
  {
    q: 'Do you serve areas outside Grand Junction?',
    a: 'Yes, our service connection covers the greater Mesa County area including Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack, and Whitewater.',
  },
  {
    q: 'How quickly can I connect with a service provider?',
    a: 'Simply call the number above and you\'ll be connected with available independent local providers who can help with your residential repair needs.',
  },
  {
    q: 'Are the service providers licensed and insured?',
    a: 'All providers in our network are independent contractors. We strongly encourage homeowners to verify that any hired contractor holds the required license and insurance before work begins.',
  },
  {
    q: 'Is this a free service?',
    a: 'Yes, connecting with local providers through this site is completely free for homeowners. There is no charge to request a service connection.',
  },
  {
    q: 'Do you handle commercial or rental property repairs?',
    a: 'No. Our service is focused exclusively on residential homes. We connect homeowners in Grand Junction and surrounding areas with independent providers for personal residential repair needs.',
  },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title={`Grand Junction Home Repair & Maintenance | ${BUSINESS_NAME}`}
        description="Connect with independent local residential home repair providers in Grand Junction, CO. Plumbing, electrical, HVAC, and more. Call (970) 549-6785."
        canonical="/"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-blue-950">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12777517/pexels-photo-12777517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Grand Junction Colorado mountain landscape"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-700/30 border border-blue-500/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              Serving Grand Junction &amp; Mesa County, CO
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Grand Junction<br />
              <span className="text-blue-400">Residential Home</span><br />
              Repair &amp; Maintenance
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Connect with qualified independent local service providers for residential repairs and maintenance throughout Grand Junction and the surrounding Mesa County communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                CALL NOW — {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                Request a Connection
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-blue-200">
              {['Residential Only', 'All of Mesa County', 'Free Connection Service', 'Local Providers'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'Verified Independent Providers', sub: 'Local professionals' },
              { icon: Clock, label: 'Fast Response Connection', sub: 'Call to connect' },
              { icon: MapPin, label: 'Mesa County Coverage', sub: 'GJ & surrounding areas' },
              { icon: Home, label: 'Residential Only', sub: 'Homes & condos' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm leading-tight">{label}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Residential Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Home Repair Services in Grand Junction
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find available independent local providers for all your residential home repair and maintenance needs throughout Grand Junction, CO.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MAIN_SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <Link
                  key={service.slug}
                  to={`/${service.slug}-grand-junction`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-blue-700" />}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{service.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">{service.short}</p>
                  <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                    Find Providers <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Our Service</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Connecting Grand Junction Homeowners with Local Providers
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Finding a reliable home repair provider in Grand Junction shouldn't be stressful. Our free service helps Mesa County homeowners quickly connect with available independent local residential service professionals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you're dealing with a dripping faucet, a struggling water heater, electrical issues, or routine seasonal maintenance, we make it easy to find qualified providers in Grand Junction, Fruita, Palisade, and surrounding communities.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Residential home repairs of all types',
                  'Connect with local independent providers',
                  'Grand Junction & all of Mesa County',
                  'Free service — no cost to homeowners',
                  'Plumbing, electrical, HVAC & more',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4981803/pexels-photo-4981803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Home repair professional at work in Grand Junction"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-extrabold">Mesa County</p>
                <p className="text-blue-200 text-sm mt-1">Local Service Connection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallCTA />

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Home Repair Service Areas in Mesa County
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We connect homeowners throughout Grand Junction and the surrounding Mesa County communities with qualified independent residential service providers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                to={area.main ? `/residential-home-repair-grand-junction` : `/home-repair-${area.slug}`}
                className="group bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all"
              >
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-sm">{area.name}</p>
                <p className="text-xs text-gray-500">Mesa County, CO</p>
                {area.main && (
                  <span className="mt-1.5 inline-block text-xs bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">Main Area</span>
                )}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              View All Service Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-gray-900 hover:text-blue-700 transition-colors">
                  {q}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Find Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Grand Junction, Colorado Service Area
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 lg:h-auto min-h-[350px]">
              <iframe
                src="https://maps.google.com/maps?q=Grand+Junction,+CO&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Junction Colorado Map"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with a Local Provider</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our free service connects Grand Junction homeowners with available independent local residential service providers. Call the number below to get started.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Call or Text</p>
                    <a href={`tel:${PHONE}`} className="font-bold text-gray-900 hover:text-blue-700 transition-colors text-lg">{PHONE_DISPLAY}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Service Area</p>
                    <p className="font-semibold text-gray-900">Grand Junction, CO &amp; Mesa County</p>
                  </div>
                </div>
              </div>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                CALL NOW — {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Residential Home Repair in Grand Junction, Colorado
          </h2>
          <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
            <p>
              Grand Junction is the largest city in Mesa County and serves as the hub of the Western Slope of Colorado. With a mix of older homes, established neighborhoods, and newer residential developments, homeowners throughout the area regularly need reliable residential repair and maintenance services.
            </p>
            <p>
              From the established neighborhoods near downtown Grand Junction to the homes in surrounding communities like Fruita, Palisade, and Clifton, our service connection helps homeowners find independent local providers for a wide range of residential repairs. Whether you need a leaky faucet fixed, a water heater serviced, electrical troubleshooting, HVAC maintenance, or general home upkeep, local providers are available throughout Mesa County.
            </p>
            <p>
              Grand Junction's climate — with hot, dry summers and cold winters — means homes require regular attention to plumbing, HVAC systems, and weatherproofing. Calling a local independent provider through our free connection service is the fastest way to get qualified help for your residential home.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
