"use client";

import { LimelightNav } from '@/components/ui/limelight-nav';
import type { NavItem } from '@/components/ui/limelight-nav';
import { HardHat, Users, Shield } from 'lucide-react';

const serviceTabs: NavItem[] = [
  {
    id: 'logistics',
    icon: <HardHat />,
    label: 'Logistics',
    onClick: () => document.getElementById('logistics')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'workforce',
    icon: <Users />,
    label: 'Workforce',
    onClick: () => document.getElementById('workforce')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'security',
    icon: <Shield />,
    label: 'Security',
    onClick: () => document.getElementById('security')?.scrollIntoView({ behavior: 'smooth' }),
  },
];

export function ServiceTabs() {
  return (
    <div className="sticky top-24 z-40 flex justify-center py-2 bg-charcoal-light/95 backdrop-blur-md border-y border-panel-border">
      <LimelightNav
        items={serviceTabs}
        defaultActiveIndex={0}
        className="bg-charcoal-medium border-panel-border"
        limelightClassName="bg-gold shadow-[0_50px_15px_rgba(212,175,55,0.4)]"
      />
    </div>
  );
}
