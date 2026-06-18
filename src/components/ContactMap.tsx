'use client';

import { Map, MapMarker, MarkerContent, MarkerPopup } from '@/components/ui/mapcn-marker-popup';
import { MapPin } from 'lucide-react';

export function ContactMap() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-panel-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="section-kicker">Find Us</p>
          <h2 className="section-title">
            Our <span className="text-gold">Location</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Based in Central London, serving projects across the United Kingdom.
          </p>
        </div>
        <div className="h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl border border-panel-border shadow-sm">
          <Map
            center={[-0.1276, 51.5074]}
            zoom={13}
            styles={{
              light: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
              dark: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
            }}
          >
            <MapMarker longitude={-0.1276} latitude={51.5074}>
              <MarkerContent>
                <div className="flex items-center justify-center size-10 rounded-full bg-gold border-2 border-white shadow-lg -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform">
                  <MapPin className="size-5 text-white" />
                </div>
              </MarkerContent>
              <MarkerPopup>
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Mikeberltin HQ</p>
                  <p className="text-muted-foreground text-xs">
                    Central London{<br />}
                    United Kingdom
                  </p>
                </div>
              </MarkerPopup>
            </MapMarker>
          </Map>
        </div>
      </div>
    </section>
  );
}
