/* Branded SVG icons for City Power Electrical Services */
/* All icons use currentColor so they inherit the parent's color */

import { CSSProperties } from "react";

interface IconProps {
  size?: number;
  style?: CSSProperties;
  className?: string;
}

const d = { size: 28 } satisfies Partial<IconProps>;

function I({ size = d.size, style, className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
      {children}
    </svg>
  );
}

/* ── Residential ── */

export function LightbulbIcon(p: IconProps) {
  return <I {...p}><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></I>;
}

export function PanelIcon(p: IconProps) {
  return <I {...p}><rect x="3" y="2" width="18" height="20" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="12" y1="2" x2="12" y2="22" /><circle cx="8" cy="6" r="1" fill="currentColor" stroke="none" /><circle cx="16" cy="6" r="1" fill="currentColor" stroke="none" /><circle cx="8" cy="16" r="1" fill="currentColor" stroke="none" /><circle cx="16" cy="16" r="1" fill="currentColor" stroke="none" /></I>;
}

export function WiringIcon(p: IconProps) {
  return <I {...p}><path d="M4 20h4l2-6h4l2 6h4" /><path d="M6 8V4h4v4" /><path d="M14 8V4h4v4" /><path d="M8 8v4h8V8" /></I>;
}

export function OutletIcon(p: IconProps) {
  return <I {...p}><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" /><path d="M10 15h4" /></I>;
}

export function BasementIcon(p: IconProps) {
  return <I {...p}><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><rect x="9" y="13" width="6" height="8" rx="1" /><line x1="12" y1="3" x2="12" y2="7" /><circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none" /></I>;
}

export function SmokeDetectorIcon(p: IconProps) {
  return <I {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M9 2c0 1.5 1.5 3 3 3s3-1.5 3-3" /><path d="M8 1c0 2 2 4 4 4s4-2 4-4" /></I>;
}

/* ── Commercial ── */

export function OfficeIcon(p: IconProps) {
  return <I {...p}><rect x="4" y="2" width="16" height="20" rx="1" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" /><line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" /><line x1="9" y1="14" x2="9" y2="14.01" /><line x1="15" y1="14" x2="15" y2="14.01" /><rect x="9" y="18" width="6" height="4" /></I>;
}

export function RestaurantIcon(p: IconProps) {
  return <I {...p}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></I>;
}

export function WarehouseIcon(p: IconProps) {
  return <I {...p}><path d="M2 20h20" /><path d="M4 20V8l8-5 8 5v12" /><rect x="8" y="14" width="3" height="6" /><rect x="13" y="14" width="3" height="6" /><path d="M9 10h6" /></I>;
}

export function RetailIcon(p: IconProps) {
  return <I {...p}><path d="M2 3h20l-2 7H4L2 3z" /><path d="M4 10v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10" /><line x1="12" y1="10" x2="12" y2="21" /><path d="M8 15h2" /><path d="M14 15h2" /></I>;
}

export function FireAlarmIcon(p: IconProps) {
  return <I {...p}><path d="M12 12c2-2.96 0-7-1-8 0 3.04-4 6.5-4 8a5 5 0 0 0 10 0c0-1.5-2-4.5-4-6-1 2-1 4-1 6z" /><path d="M12 22v-2" /></I>;
}

/* ── Specialty ── */

export function EvChargerIcon(p: IconProps) {
  return <I {...p}><rect x="5" y="4" width="14" height="12" rx="2" /><path d="M9 16v4h6v-4" /><path d="M13 8l-3 4h4l-3 4" /></I>;
}

export function PoolIcon(p: IconProps) {
  return <I {...p}><path d="M2 16c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1" /><path d="M2 20c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1" /><path d="M8 4v8" /><path d="M16 4v8" /><circle cx="8" cy="4" r="1" fill="currentColor" stroke="none" /><circle cx="16" cy="4" r="1" fill="currentColor" stroke="none" /></I>;
}

export function GeneratorIcon(p: IconProps) {
  return <I {...p}><rect x="2" y="8" width="20" height="12" rx="2" /><path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" /><circle cx="12" cy="14" r="3" /><path d="M12 11v1" /><path d="M12 17v-1" /><path d="M9 14h1" /><path d="M14 14h1" /></I>;
}

export function SmartHomeIcon(p: IconProps) {
  return <I {...p}><path d="M5 12H3l9-9 9 9h-2" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" /><path d="M10 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0" /><path d="M12 14v-2" /></I>;
}

export function EnergyAuditIcon(p: IconProps) {
  return <I {...p}><path d="M12 2v4" /><path d="M12 18v4" /><circle cx="12" cy="12" r="6" /><path d="M10 10l4 4" /><path d="M14 10l-4 4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /></I>;
}

/* ── Why Us / Feature ── */

export function ShieldIcon(p: IconProps) {
  return <I {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></I>;
}

export function ClockIcon(p: IconProps) {
  return <I {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></I>;
}

export function CheckBadgeIcon(p: IconProps) {
  return <I {...p}><path d="M12 2l2.4 3.6L18 4l-1.2 3.6L21 9l-3.6 1.2L18 14l-3.6-2.4L12 15l-2.4-3.4L6 14l1.2-3.8L3 9l4.2-1.4L6 4l3.6 1.6L12 2z" /><path d="M9 12l2 2 4-4" /></I>;
}

export function SparklesIcon(p: IconProps) {
  return <I {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" /><path d="M5 18l.75 2.25L8 21l-2.25.75L5 24l-.75-2.25L2 21l2.25-.75L5 18z" /></I>;
}

/* ── Why Us extra ── */

export function DollarIcon(p: IconProps) {
  return <I {...p}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></I>;
}

export function ClipboardIcon(p: IconProps) {
  return <I {...p}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3V1h6v2" /><line x1="9" y1="10" x2="15" y2="10" /><line x1="9" y1="14" x2="13" y2="14" /></I>;
}

export function BroomIcon(p: IconProps) {
  return <I {...p}><path d="M12 2v8" /><path d="M4 22l3-10h10l3 10" /><path d="M8 12h8" /></I>;
}

export function StarIcon(p: IconProps) {
  return <I {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></I>;
}

/* ── Contact ── */

export function PhoneIcon(p: IconProps) {
  return <I {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></I>;
}

export function MailIcon(p: IconProps) {
  return <I {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,4 12,13 2,4" /></I>;
}

export function MapPinIcon(p: IconProps) {
  return <I {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></I>;
}

/* ── New Residential ── */

export function KnobTubeIcon(p: IconProps) {
  return <I {...p}><path d="M4 6h4l2 3h4l2-3h4" /><path d="M4 18h4l2-3h4l2 3h4" /><circle cx="12" cy="12" r="2" /><path d="M12 10V6" /><path d="M12 14v4" /></I>;
}

export function AluminumWireIcon(p: IconProps) {
  return <I {...p}><path d="M8 2v20" /><path d="M16 2v20" /><path d="M8 6h8" /><path d="M8 12h8" /><path d="M8 18h8" /><path d="M4 6l4-2" /><path d="M4 12l4-2" /></I>;
}

export function CeilingFanIcon(p: IconProps) {
  return <I {...p}><circle cx="12" cy="12" r="3" /><path d="M12 9V2" /><path d="M12 15c-3 4-7 5-9 4" /><path d="M12 15c3 4 7 5 9 4" /><path d="M9 12c-4-3-5-7-4-9" /><path d="M15 12c4-3 5-7 4-9" /></I>;
}

export function LandscapeIcon(p: IconProps) {
  return <I {...p}><path d="M2 20L8 10l4 6 4-8 6 12" /><circle cx="18" cy="5" r="2" /><path d="M5 18l3-4" /></I>;
}

export function DedicatedCircuitIcon(p: IconProps) {
  return <I {...p}><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="12" cy="12" r="4" /><path d="M12 8v8" /><path d="M8 12h8" /></I>;
}

export function SafetyInspectionIcon(p: IconProps) {
  return <I {...p}><path d="M9 11l2 2 4-4" /><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 3v6" /></I>;
}

/* ── New Commercial ── */

export function LedRetrofitIcon(p: IconProps) {
  return <I {...p}><rect x="6" y="3" width="12" height="10" rx="2" /><path d="M10 13v4" /><path d="M14 13v4" /><path d="M8 17h8" /><path d="M10 20h4" /><path d="M12 6v4" /><path d="M10 8h4" /></I>;
}

export function ParkingLotIcon(p: IconProps) {
  return <I {...p}><path d="M12 2v8" /><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" /><path d="M6 22V12" /><path d="M18 22V12" /><path d="M3 22h18" /><path d="M8 18h8" /></I>;
}

export function ExitLightIcon(p: IconProps) {
  return <I {...p}><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 10h2v4H6" /><path d="M10 14l2-4 2 4" /><path d="M16 10h2v4h-2" /><circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" /></I>;
}

export function DataCableIcon(p: IconProps) {
  return <I {...p}><rect x="6" y="2" width="12" height="6" rx="1" /><path d="M9 8v4" /><path d="M12 8v6" /><path d="M15 8v4" /><path d="M6 14h12" /><rect x="6" y="16" width="12" height="6" rx="1" /><path d="M9 16v-2" /><path d="M15 16v-2" /></I>;
}

export function PreventiveMaintenanceIcon(p: IconProps) {
  return <I {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /><path d="M16 3l2 2" /><path d="M6 3L4 5" /></I>;
}

/* ── New Specialty ── */

export function SurgeProtectionIcon(p: IconProps) {
  return <I {...p}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></I>;
}

export function BatteryStorageIcon(p: IconProps) {
  return <I {...p}><rect x="5" y="6" width="14" height="14" rx="2" /><path d="M9 6V4h6v2" /><path d="M9 13h6" /><path d="M12 10v6" /></I>;
}

export function SolarReadyIcon(p: IconProps) {
  return <I {...p}><circle cx="12" cy="6" r="4" /><path d="M12 10v2" /><path d="M4 20h16" /><path d="M7 20l2-8h6l2 8" /><path d="M9 16h6" /></I>;
}

export function HomeTheatreIcon(p: IconProps) {
  return <I {...p}><rect x="2" y="4" width="20" height="12" rx="2" /><path d="M8 20h8" /><path d="M12 16v4" /><path d="M7 8l3 2-3 2" /><circle cx="16" cy="10" r="1" fill="currentColor" stroke="none" /></I>;
}

export function IntercomIcon(p: IconProps) {
  return <I {...p}><rect x="5" y="2" width="14" height="20" rx="3" /><circle cx="12" cy="10" r="3" /><path d="M10 17h4" /><circle cx="12" cy="5" r="1" fill="currentColor" stroke="none" /></I>;
}

/* ── Icon Map ── */
export const iconMap: Record<string, React.FC<IconProps>> = {
  lightbulb: LightbulbIcon,
  panel: PanelIcon,
  wiring: WiringIcon,
  outlet: OutletIcon,
  basement: BasementIcon,
  smokeDetector: SmokeDetectorIcon,
  knobTube: KnobTubeIcon,
  aluminumWire: AluminumWireIcon,
  ceilingFan: CeilingFanIcon,
  landscape: LandscapeIcon,
  dedicatedCircuit: DedicatedCircuitIcon,
  safetyInspection: SafetyInspectionIcon,
  office: OfficeIcon,
  restaurant: RestaurantIcon,
  warehouse: WarehouseIcon,
  retail: RetailIcon,
  fireAlarm: FireAlarmIcon,
  ledRetrofit: LedRetrofitIcon,
  parkingLot: ParkingLotIcon,
  exitLight: ExitLightIcon,
  dataCable: DataCableIcon,
  preventiveMaintenance: PreventiveMaintenanceIcon,
  evCharger: EvChargerIcon,
  pool: PoolIcon,
  generator: GeneratorIcon,
  smartHome: SmartHomeIcon,
  energyAudit: EnergyAuditIcon,
  surgeProtection: SurgeProtectionIcon,
  batteryStorage: BatteryStorageIcon,
  solarReady: SolarReadyIcon,
  homeTheatre: HomeTheatreIcon,
  intercom: IntercomIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  checkBadge: CheckBadgeIcon,
  sparkles: SparklesIcon,
  dollar: DollarIcon,
  clipboard: ClipboardIcon,
  broom: BroomIcon,
  star: StarIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  mapPin: MapPinIcon,
};
