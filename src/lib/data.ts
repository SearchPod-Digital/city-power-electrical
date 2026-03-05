/* ─── City Power Electrical Services — Business Data ─── */

export const contact = {
  name: "Sam",
  phone: "416-877-3048",
  phoneFull: "4168773048",
  email: "info@citypowerelectricalservices.ca",
  website: "citypowerelectricalservices.ca",
  license: "ECRA/ESA #7015314",
  company: "City Power Electrical Services",
};

export const residentialServices = [
  { icon: "lightbulb", title: "Lighting & Pot Lights", desc: "LED potlight installation, chandeliers, soffit lights, and complete lighting design for any space." },
  { icon: "panel", title: "Panel Upgrades", desc: "Upgrade from 100A to 200A panels. Fuse to breaker conversions for modern safety standards." },
  { icon: "wiring", title: "Wiring & Rewiring", desc: "Complete wiring for new and old homes, renovations, and basement finishing projects." },
  { icon: "outlet", title: "Switches & Outlets", desc: "GFCI outlets, dimmer switches, USB outlets, timers, and dedicated circuits." },
  { icon: "basement", title: "Basement Finishing", desc: "Full electrical for basement renovations — pot lights, outlets, panels, and code compliance." },
  { icon: "smokeDetector", title: "Smoke & CO Detectors", desc: "Hardwired smoke and carbon monoxide detector installation and replacement." },
  { icon: "knobTube", title: "Knob & Tube Replacement", desc: "Safe removal and replacement of outdated knob-and-tube wiring to meet current code." },
  { icon: "aluminumWire", title: "Aluminum Wiring Remediation", desc: "Aluminum-to-copper pigtailing and full rewiring for fire safety compliance." },
  { icon: "ceilingFan", title: "Ceiling Fan Installation", desc: "Ceiling fan wiring, mounting, and switch installation for any room in your home." },
  { icon: "landscape", title: "Landscape & Outdoor Lighting", desc: "Pathway lights, garden accents, deck lighting, and weatherproof outdoor electrical." },
  { icon: "dedicatedCircuit", title: "Dedicated Circuits", desc: "Dedicated circuits for appliances, home offices, workshops, and high-draw equipment." },
  { icon: "safetyInspection", title: "Home Electrical Safety Inspection", desc: "Comprehensive inspection of your home electrical system with a detailed safety report." },
];

export const commercialServices = [
  { icon: "office", title: "Office Buildout", desc: "Complete electrical for new offices — lighting, data wiring, panels, and code compliance." },
  { icon: "restaurant", title: "Restaurant Wiring", desc: "Commercial kitchen electrical, exhaust systems, appliance circuits, and emergency lighting." },
  { icon: "warehouse", title: "Warehouse Electrical", desc: "High-bay lighting, 3-phase power, machinery hookups, and industrial installations." },
  { icon: "retail", title: "Retail Lighting", desc: "Track lighting, display lighting, sign circuits, and energy-efficient LED conversions." },
  { icon: "fireAlarm", title: "Fire Alarm Systems", desc: "Fire alarm installation, testing, inspection, and ESA-compliant emergency lighting." },
  { icon: "ledRetrofit", title: "LED Retrofit & Upgrades", desc: "Convert fluorescent and HID fixtures to energy-saving LED with rebate assistance." },
  { icon: "parkingLot", title: "Parking Lot & Site Lighting", desc: "Pole lights, bollards, and perimeter lighting for commercial properties and parking areas." },
  { icon: "exitLight", title: "Emergency Exit & Egress Lighting", desc: "Code-compliant exit signs, emergency battery packs, and egress path illumination." },
  { icon: "dataCable", title: "Data & Low-Voltage Cabling", desc: "Cat6/Cat6a structured cabling, server room wiring, and low-voltage system installation." },
  { icon: "preventiveMaintenance", title: "Commercial Preventive Maintenance", desc: "Scheduled electrical maintenance programs to prevent downtime and extend equipment life." },
];

export const specialtyServices = [
  { icon: "evCharger", title: "EV Charger Installation", desc: "Level 2 charger install — Tesla, ChargePoint, universal. Home and commercial." },
  { icon: "pool", title: "Pool & Spa Wiring", desc: "Code-compliant pool pumps, hot tub hookups, jacuzzi installation, underwater lighting." },
  { icon: "generator", title: "Generator Installation", desc: "Backup generator hookups, transfer switches, and whole-home generator systems." },
  { icon: "smartHome", title: "Smart Home", desc: "Smart switches, automated lighting, home automation wiring, and voice-control integration." },
  { icon: "energyAudit", title: "Energy Audit & Rebates", desc: "LED upgrades with government rebate paperwork. Energy audits to cut your bills." },
  { icon: "surgeProtection", title: "Whole-Home Surge Protection", desc: "Panel-mounted surge protectors to shield electronics and appliances from power spikes." },
  { icon: "batteryStorage", title: "Battery Storage (Tesla Powerwall)", desc: "Home battery backup systems for energy independence and outage protection." },
  { icon: "solarReady", title: "Solar-Ready Wiring", desc: "Pre-wire your home for future solar panel installation with code-compliant conduit runs." },
  { icon: "homeTheatre", title: "Home Theatre Wiring", desc: "In-wall speaker wiring, HDMI runs, projector power, and dedicated media room circuits." },
  { icon: "intercom", title: "Intercom & Video Doorbell Systems", desc: "Ring, Nest, and wired intercom installation with proper power supply and low-voltage wiring." },
];

export const allServices = [
  ...residentialServices.map((s) => ({ ...s, category: "Residential" as const })),
  ...commercialServices.map((s) => ({ ...s, category: "Commercial" as const })),
  ...specialtyServices.map((s) => ({ ...s, category: "Specialty" as const })),
];

export const areas = [
  "Toronto", "Downtown Toronto", "Mississauga", "Brampton", "Markham", "Etobicoke",
  "Oakville", "Milton", "Burlington", "Scarborough", "Pickering", "Ajax", "Whitby",
  "Oshawa", "Stouffville", "Courtice", "Bowmanville", "Vaughan", "Maple", "Woodbridge",
  "Richmond Hill", "Aurora", "Newmarket", "Orangeville", "Bradford", "Barrie", "Innisfil",
  "Keswick", "Simcoe", "Orillia", "Angus", "Georgina", "Uxbridge", "Hamilton",
  "London", "Cobourg", "Peterborough", "Wasaga Beach",
];

export const areasByRegion = {
  "Greater Toronto": ["Toronto", "Downtown Toronto", "Etobicoke", "Scarborough", "Markham", "Vaughan", "Maple", "Woodbridge", "Richmond Hill"],
  West: ["Mississauga", "Brampton", "Oakville", "Milton", "Burlington", "Hamilton", "London"],
  East: ["Pickering", "Ajax", "Whitby", "Oshawa", "Courtice", "Bowmanville", "Cobourg", "Peterborough", "Uxbridge"],
  North: ["Aurora", "Newmarket", "Stouffville", "Bradford", "Orangeville", "Barrie", "Innisfil", "Keswick", "Simcoe", "Orillia", "Angus", "Georgina", "Wasaga Beach"],
};

export const testimonials = [
  { name: "Sarah M.", location: "Mississauga", text: "Sam was incredible! He came out same day to fix our panel issue. Professional, fast, and fair pricing. Highly recommend!", stars: 5 },
  { name: "James L.", location: "Brampton", text: "Had pot lights installed throughout our home. The work was meticulous and the cleanup was spotless. Will use again.", stars: 5 },
  { name: "Priya K.", location: "Markham", text: "Needed an EV charger installed urgently. City Power had it done within 48 hours. Outstanding service.", stars: 5 },
  { name: "David R.", location: "Oakville", text: "Sam upgraded our panel from 100A to 200A. Clean work, fair price, and done in one day. Very professional.", stars: 5 },
  { name: "Maria S.", location: "Barrie", text: "Had 20 pot lights installed in our new home. The quality of work is outstanding. Highly recommend City Power!", stars: 5 },
  { name: "Tom & Lisa W.", location: "Hamilton", text: "Emergency call on a Sunday evening \u2014 Sam was there within an hour. Fixed the issue quickly and safely. Lifesaver!", stars: 5 },
  { name: "Raj P.", location: "Vaughan", text: "Installed a Tesla Wall Connector for our Model 3. Professional installation, everything up to code. Great experience.", stars: 5 },
];

export const faqs = [
  { q: "What areas do you serve?", a: "We serve the entire Greater Toronto Area and beyond \u2014 from Wasaga Beach and Orillia in the north, to Hamilton and London in the west, and Cobourg and Peterborough in the east." },
  { q: "Are you licensed and insured?", a: "Yes. We hold ECRA/ESA license #7015314 and carry full liability insurance. All work meets or exceeds the Ontario Electrical Safety Code." },
  { q: "Do you offer emergency services?", a: "Absolutely. We provide 24/7 emergency electrical service. Call 416-877-3048 any time, day or night." },
  { q: "How much does an EV charger installation cost?", a: "EV charger installation typically ranges from $800\u2013$2,500 depending on your panel capacity and charger location. We provide free estimates." },
  { q: "Can you help with government rebates?", a: "Yes! We help prepare all paperwork for government rebates on energy-saving LED lighting upgrades and other qualifying electrical improvements." },
  { q: "Do you do commercial work?", a: "Yes. We handle office buildouts, restaurant wiring, warehouse electrical, retail lighting, and fire alarm systems. Full commercial and industrial capability." },
  { q: "What is included in a free estimate?", a: "We visit your property, assess the scope of work, and provide a detailed written quote with no hidden fees. There is no obligation." },
];

export const metrics = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Projects Completed" },
  { value: 38, suffix: "+", label: "Cities Served" },
  { value: 24, suffix: "/7", label: "Emergency Service" },
];

export const whyUs = [
  { icon: "clock", title: "24/7 Emergency Service", desc: "Day or night, we\u2019re here when you need us. Same-day service available for urgent electrical issues." },
  { icon: "shield", title: "Licensed & Insured", desc: "ECRA/ESA #7015314. Fully licensed and insured for your complete peace of mind." },
  { icon: "star", title: "15+ Years Experience", desc: "Over 15 years of hands-on experience in residential, commercial, and industrial electrical work." },
  { icon: "dollar", title: "Free Estimates", desc: "Transparent quotes with no hidden charges. Free estimates on all projects." },
  { icon: "clipboard", title: "Government Rebates", desc: "We help prepare paperwork for government rebates on energy-saving LED lighting upgrades." },
  { icon: "broom", title: "Clean & Respectful", desc: "We treat your home like our own. Thorough cleanup after every job." },
];

export const processSteps = [
  { step: "01", title: "Call or Email", desc: "Reach out 24/7 at 416-877-3048 or email us for a free consultation." },
  { step: "02", title: "Free Estimate", desc: "We assess your needs and provide a transparent, no-obligation quote." },
  { step: "03", title: "Expert Work", desc: "Our licensed electricians complete the job to code with quality materials." },
  { step: "04", title: "Inspection & Cleanup", desc: "Final walkthrough, ESA notification if required, and thorough cleanup." },
];

/* ─── Detailed Service Page Content ─── */

export const residentialServiceDetails = [
  {
    icon: "lightbulb", title: "Lighting & Pot Lights", img: "/images/residential-potlights.jpg",
    intro: "Transform any room with expertly installed lighting. From recessed pot lights to elegant chandeliers, we design and install lighting systems that enhance your home's beauty and functionality.",
    features: ["4-inch and 6-inch LED pot light installation", "Dimmer switch integration for adjustable ambiance", "Under-cabinet and accent lighting", "Chandelier and pendant light mounting", "Soffit and outdoor security lighting", "Complete lighting layout design"],
    detail: "Proper lighting makes all the difference in a home. Our electricians plan every installation carefully, considering ceiling joists, insulation clearance, and optimal placement. We use IC-rated LED fixtures that are safe for insulated ceilings and energy-efficient, reducing your electricity bill by up to 75% compared to halogen. Every installation includes a full cleanup and testing of all circuits.",
  },
  {
    icon: "panel", title: "Panel Upgrades", img: "/images/residential-panel.jpg",
    intro: "Is your electrical panel outdated or overloaded? We upgrade 60A and 100A panels to modern 200A breaker panels, ensuring your home can handle today's electrical demands safely.",
    features: ["100A to 200A panel upgrade", "Fuse box to breaker panel conversion", "Sub-panel installation for additions", "Arc-fault (AFCI) breaker installation", "ESA inspection and certification", "Surge protection integration"],
    detail: "An outdated panel is one of the most common fire hazards in Ontario homes. Homes built before 1980 often have 60A or 100A panels that cannot safely support modern appliances, EV chargers, or HVAC systems. Our panel upgrade includes a complete load calculation, installation of a new 200A panel with copper bus bars, proper grounding and bonding, and ESA notification. We handle all permits and inspections.",
  },
  {
    icon: "wiring", title: "Wiring & Rewiring", img: "/images/residential-wiring.jpg",
    intro: "Whether you're building new or renovating, we provide complete electrical wiring services that meet or exceed the Ontario Electrical Safety Code.",
    features: ["New construction rough-in wiring", "Renovation and addition wiring", "Old wiring assessment and replacement", "Dedicated circuits for heavy loads", "Structured wiring for data and phone", "Permit acquisition and ESA inspection"],
    detail: "Good wiring is the backbone of a safe home. We use 14/2 and 12/2 NMD90 copper wire with proper ampacity for each circuit. For kitchens and bathrooms, we install dedicated 20A circuits as required by code. All junction boxes are accessible, connections are made with approved wire connectors, and every circuit is labeled in the panel. We coordinate with other trades during renovations and handle ESA permits.",
  },
  {
    icon: "outlet", title: "Switches & Outlets", img: "/images/residential-outlets.jpg",
    intro: "Upgrade your home's convenience and safety with modern switches and outlets. From GFCI protection to USB charging outlets, we install it all.",
    features: ["GFCI outlets for kitchens, baths, and outdoors", "Tamper-resistant receptacles (code required)", "USB-A and USB-C combo outlets", "Smart dimmer switches and timers", "Three-way and four-way switch wiring", "Outdoor weatherproof outlets"],
    detail: "Ontario code requires GFCI protection within 1.5 metres of any water source and tamper-resistant receptacles in all new installations. We ensure every outlet is properly grounded, uses the correct wire gauge, and is installed in an approved box. We also offer smart switch upgrades that work with Alexa, Google Home, and Apple HomeKit for voice-controlled lighting.",
  },
  {
    icon: "basement", title: "Basement Finishing", img: "/images/residential-basement.jpg",
    intro: "Turn your unfinished basement into a functional living space with a complete electrical package — pot lights, outlets, panel upgrades, and code-compliant wiring.",
    features: ["Full electrical layout and design", "Pot light installation throughout", "Dedicated circuits for home theatre / office", "Bathroom exhaust fan wiring", "Smoke and CO detector installation", "Sub-panel if additional capacity needed"],
    detail: "A basement finish is one of the best investments you can make in your home. We work with your contractor or directly with you to plan the complete electrical layout before drywall goes up. This includes outlet placement every 12 feet (code minimum), lighting circuits, bathroom ventilation, and dedicated circuits for any high-draw equipment. We pull all required permits and schedule ESA inspections.",
  },
  {
    icon: "smokeDetector", title: "Smoke & CO Detectors", img: "/images/feature-licensed.jpg",
    intro: "Protect your family with properly installed hardwired smoke and carbon monoxide detectors. Ontario law requires working detectors on every floor.",
    features: ["Hardwired interconnected smoke detectors", "Combination smoke/CO units", "Battery backup models", "Placement per Ontario Fire Code", "Detector testing and replacement", "10-year lifespan monitoring"],
    detail: "Ontario Fire Code requires a working smoke alarm on every storey and outside all sleeping areas. CO detectors are required if you have fuel-burning appliances or an attached garage. Hardwired interconnected detectors provide the highest level of safety — when one goes off, they all sound. We install them with battery backup so they work even during power outages. Detectors should be replaced every 10 years.",
  },
  {
    icon: "knobTube", title: "Knob & Tube Replacement", img: "/images/residential-knobtube.jpg",
    intro: "Knob-and-tube wiring was standard before the 1950s but is now considered a significant safety hazard. We safely remove and replace it with modern wiring.",
    features: ["Complete knob-and-tube removal", "Modern NMD90 copper wire replacement", "Proper grounding (original had none)", "Insurance compliance documentation", "Insulation can be safely added after", "ESA inspection and certificate"],
    detail: "Knob-and-tube wiring lacks a ground wire, uses degraded rubber insulation that cracks and exposes conductors, and cannot handle modern electrical loads. Many insurance companies refuse to cover homes with active K&T wiring. Our rewiring process involves carefully removing old wiring, running new NMD90 cables through walls, installing modern receptacles with grounding, and providing documentation for your insurance company.",
  },
  {
    icon: "aluminumWire", title: "Aluminum Wiring Remediation", img: "/images/feature-emergency.jpg",
    intro: "Homes built between 1965 and 1976 may have aluminum branch wiring, which is a known fire risk. We offer pigtailing and full remediation services.",
    features: ["Aluminum-to-copper pigtailing (COPALUM or AlumiConn)", "Full aluminum wiring replacement", "Approved connector methods only", "Insurance documentation provided", "All connections inspected and tested", "ESA-compliant work"],
    detail: "Aluminum wiring expands and contracts more than copper, which loosens connections over time and creates heat points that can start fires. The Canadian Electrical Code allows aluminum wiring to remain if properly remediated. We use approved AlumiConn connectors or COPALUM crimps at every connection point — switches, outlets, fixtures, and panel. This is far more affordable than a full rewire and satisfies insurance requirements.",
  },
  {
    icon: "ceilingFan", title: "Ceiling Fan Installation", img: "/images/residential-ceilingfan.jpg",
    intro: "A ceiling fan improves air circulation year-round, reducing heating and cooling costs. We handle the complete installation including new wiring if needed.",
    features: ["Fan-rated electrical box installation", "New wiring from switch to fan location", "Wall switch or remote control setup", "Fan/light combo wiring", "Existing fixture conversion", "Balancing and testing"],
    detail: "Ceiling fans must be mounted to a fan-rated box that can support the weight and vibration. A standard light fixture box is NOT safe for a ceiling fan. We install proper fan-rated pancake or brace boxes in the ceiling, run 14/3 wire for independent fan and light control, and ensure everything is balanced. We can also install fans with smart controls for app or voice operation.",
  },
  {
    icon: "landscape", title: "Landscape & Outdoor Lighting", img: "/images/residential-outdoor.jpg",
    intro: "Enhance your home's curb appeal and security with professionally installed outdoor lighting. Pathway lights, garden accents, deck lighting, and more.",
    features: ["Low-voltage LED pathway lighting", "Deck and stair lighting", "Garden accent and uplighting", "Motion-sensor security lights", "Weatherproof GFCI outlets", "Timer and photocell controls"],
    detail: "Outdoor lighting extends your living space and improves safety. We install both low-voltage (12V transformer-based) and line-voltage outdoor lighting systems. Low-voltage is ideal for pathways and gardens, while line-voltage is better for security floods and permanent fixtures. All outdoor installations use weatherproof boxes, in-use covers, and GFCI-protected circuits as required by code.",
  },
  {
    icon: "dedicatedCircuit", title: "Dedicated Circuits", img: "/images/residential-panel.jpg",
    intro: "Appliances like refrigerators, microwaves, home offices, and workshops need their own dedicated circuits to operate safely without tripping breakers.",
    features: ["Kitchen appliance circuits (20A)", "Home office dedicated circuit", "Workshop and power tool circuits", "HVAC and furnace circuits", "Sump pump dedicated circuit", "Hot tub and sauna circuits"],
    detail: "The Ontario Electrical Safety Code requires dedicated circuits for many appliances. A dedicated circuit means one breaker serves one outlet or appliance — nothing else shares it. This prevents overloading, nuisance tripping, and potential fire hazards. We run the appropriate wire gauge (12 AWG for 20A, 10 AWG for 30A) from your panel directly to the appliance location.",
  },
  {
    icon: "safetyInspection", title: "Home Electrical Safety Inspection", img: "/images/feature-pricing.jpg",
    intro: "Buying a home or concerned about your wiring? Our comprehensive electrical safety inspection identifies hazards and provides a detailed written report.",
    features: ["Full panel inspection and load assessment", "Outlet and switch testing (grounding, polarity)", "GFCI and AFCI testing", "Smoke/CO detector verification", "Knob-and-tube or aluminum wiring identification", "Written report with recommendations"],
    detail: "A home electrical inspection goes beyond what a standard home inspector checks. We open the panel, inspect all connections for heat damage or corrosion, test every accessible outlet for proper grounding and polarity, verify GFCI protection in required locations, and check for code violations. This is especially valuable for homes over 25 years old, before buying a home, or for insurance purposes.",
  },
];

export const commercialServiceDetails = [
  {
    icon: "office", title: "Office Buildout", img: "/images/commercial-office.jpg",
    intro: "From startup spaces to corporate offices, we provide complete electrical services for new office buildouts and tenant improvements.",
    features: ["Open-plan and private office lighting", "Dedicated circuits for server rooms", "Under-floor and cable tray wiring", "Conference room AV power", "Kitchen and break room circuits", "Emergency and exit lighting"],
    detail: "Office electrical requires careful planning for power density, lighting levels, and data infrastructure. We work with architects and general contractors to deliver electrical systems that meet building codes and tenant requirements. Typical office buildouts include 2x4 LED troffer or linear lighting at 500 lux, receptacles every 6 feet along walls, and dedicated 20A circuits for copy rooms and kitchens.",
  },
  {
    icon: "restaurant", title: "Restaurant Wiring", img: "/images/commercial-restaurant.jpg",
    intro: "Commercial kitchens have unique electrical demands. We wire restaurants for heavy appliances, exhaust systems, walk-in coolers, and code-compliant emergency lighting.",
    features: ["Commercial kitchen appliance circuits (208V/240V)", "Exhaust hood and make-up air wiring", "Walk-in cooler and freezer hookups", "POS system and front-of-house power", "Patio and outdoor dining lighting", "Emergency lighting and exit signs"],
    detail: "Restaurant electrical is complex — commercial ovens, fryers, dishwashers, and hoods often require 208V or 240V three-phase power. We size circuits correctly for each piece of equipment, install proper disconnects, and ensure all kitchen receptacles have GFCI protection. We also handle the fire alarm integration, emergency lighting, and outdoor patio electrical that health and safety inspectors check.",
  },
  {
    icon: "warehouse", title: "Warehouse Electrical", img: "/images/commercial-warehouse.jpg",
    intro: "Industrial and warehouse spaces need robust electrical systems. We install high-bay lighting, three-phase power, machinery hookups, and dock lighting.",
    features: ["High-bay LED lighting (150W-300W)", "Three-phase power distribution", "Machinery and equipment hookups", "Loading dock lighting", "Motion-sensor warehouse lighting", "Power factor correction"],
    detail: "Warehouse lighting is one of the biggest operating costs for industrial spaces. We replace old metal halide and HPS fixtures with high-efficiency LED high-bays that deliver better light quality at 60-70% less energy. For machinery, we install properly sized disconnects, motor starters, and three-phase distribution. All work meets the Ontario Electrical Safety Code for industrial occupancies.",
  },
  {
    icon: "retail", title: "Retail Lighting", img: "/images/commercial-led.jpg",
    intro: "Great retail lighting drives sales. We design and install track lighting, display lighting, sign circuits, and energy-efficient LED conversions for retail spaces.",
    features: ["Track and accent display lighting", "Storefront and sign circuits", "Showcase and cabinet lighting", "LED conversion for energy savings", "Lighting control and dimming", "After-hours security lighting"],
    detail: "Retail lighting needs to be both functional and attractive. We use a combination of ambient, accent, and task lighting to highlight merchandise and create the right shopping atmosphere. Track lighting with adjustable heads lets you redirect light as displays change. LED retrofits typically reduce lighting energy costs by 50-75% with a payback period of 1-3 years.",
  },
  {
    icon: "fireAlarm", title: "Fire Alarm Systems", img: "/images/feature-licensed.jpg",
    intro: "Code-compliant fire alarm installation, testing, and inspection for commercial properties. We work with all major fire alarm manufacturers.",
    features: ["Conventional and addressable systems", "Smoke and heat detector installation", "Pull station and horn/strobe placement", "Annunciator panel installation", "Annual testing and inspection", "Monitoring system integration"],
    detail: "Ontario Building Code requires fire alarm systems in most commercial occupancies. We install both conventional and addressable systems depending on building size and requirements. Addressable systems identify the exact device in alarm, which speeds up emergency response. We provide annual testing as required by the Ontario Fire Code and can integrate with monitoring companies for 24/7 supervision.",
  },
  {
    icon: "ledRetrofit", title: "LED Retrofit & Upgrades", img: "/images/commercial-led.jpg",
    intro: "Replace outdated fluorescent and HID lighting with modern LED technology. Reduce energy consumption by up to 75% and qualify for utility rebates.",
    features: ["T8/T12 fluorescent to LED conversion", "HID high-bay to LED replacement", "Retrofit kits for existing fixtures", "Utility rebate application assistance", "Photometric analysis and design", "ROI and payback calculations"],
    detail: "LED retrofits offer the fastest ROI of any commercial energy improvement. A typical office with 100 fluorescent fixtures saves $3,000-$5,000 annually after converting to LED. We handle everything from the initial energy audit and photometric design to the installation and rebate paperwork. Many Ontario utilities offer rebates of $20-$50 per fixture through their SaveOnEnergy programs.",
  },
  {
    icon: "parkingLot", title: "Parking Lot & Site Lighting", img: "/images/commercial-parking.jpg",
    intro: "Safe, well-lit parking areas are essential for commercial properties. We install and maintain pole lights, bollards, and perimeter lighting.",
    features: ["LED pole light installation (100W-400W)", "Bollard and pathway lighting", "Photocell and timer controls", "Parking garage lighting", "Dark sky compliant fixtures", "Maintenance and re-lamping programs"],
    detail: "Parking lot lighting must provide adequate illumination for safety while minimizing light trespass onto neighbouring properties. We design lighting layouts using IES (Illuminating Engineering Society) standards — typically 1-5 foot-candles for parking areas. LED fixtures last 50,000+ hours, dramatically reducing maintenance costs compared to HPS or metal halide. We can also retrofit existing poles with LED heads.",
  },
  {
    icon: "exitLight", title: "Emergency Exit & Egress Lighting", img: "/images/feature-emergency.jpg",
    intro: "Code-compliant emergency lighting ensures safe evacuation during power outages. We install, test, and maintain exit signs and emergency battery packs.",
    features: ["LED exit sign installation", "Emergency battery pack units", "Combination exit/emergency fixtures", "Monthly and annual testing", "Generator-backed emergency circuits", "Photoluminescent exit signs"],
    detail: "The Ontario Building Code requires emergency lighting in all commercial buildings to illuminate exit paths for a minimum of 30 minutes during a power failure. Exit signs must be visible from anywhere in the space. We install battery-backed emergency lights and exit signs, and provide the required monthly (30-second) and annual (30-minute) testing with documentation for fire inspectors.",
  },
  {
    icon: "dataCable", title: "Data & Low-Voltage Cabling", img: "/images/commercial-data.jpg",
    intro: "Structured cabling is the backbone of your business network. We install Cat6/Cat6a cabling, server room infrastructure, and low-voltage systems.",
    features: ["Cat6 and Cat6a structured cabling", "Server room and MDF/IDF buildout", "Cable tray and J-hook pathways", "Patch panel and rack installation", "Fiber optic termination", "Testing and certification"],
    detail: "A well-designed structured cabling system supports your business for 15-20 years. We install to TIA-568 standards using Cat6a for future 10-Gigabit capability. Every cable run is tested and certified with a Fluke tester, and results are documented. We also build out server rooms with proper power (dedicated circuits, UPS compatibility), cooling considerations, and cable management.",
  },
  {
    icon: "preventiveMaintenance", title: "Commercial Preventive Maintenance", img: "/images/commercial-warehouse.jpg",
    intro: "Prevent costly downtime with scheduled electrical maintenance. We inspect, test, and maintain your electrical systems on a regular schedule.",
    features: ["Thermal imaging of panels and connections", "Breaker testing and torque checks", "Emergency lighting monthly/annual tests", "Lighting maintenance and re-lamping", "Ground fault testing", "Detailed maintenance reports"],
    detail: "Loose connections and worn components cause the majority of commercial electrical failures. Our preventive maintenance programs use thermal imaging cameras to identify hot spots before they become failures. We check breaker torque values, test emergency systems, verify grounding, and provide detailed reports. Most commercial insurance policies require regular electrical maintenance — our documentation satisfies those requirements.",
  },
];

export const specialtyServiceDetails = [
  {
    icon: "evCharger", title: "EV Charger Installation", img: "/images/specialty-hero.jpg",
    intro: "Charge your electric vehicle at home or at your business. We install Level 2 chargers from Tesla, ChargePoint, Grizzl-E, and all major brands.",
    features: ["Tesla Wall Connector installation", "ChargePoint, Grizzl-E, and universal J1772", "40A and 60A circuit installation", "Panel upgrade if needed for capacity", "Outdoor weatherproof installations", "Multi-unit and commercial charging"],
    detail: "A Level 2 EV charger adds 30-50 km of range per hour — a full charge overnight. Most chargers require a dedicated 40A or 50A circuit on a 240V breaker. We assess your panel capacity, install the appropriate wire gauge (typically 6 AWG copper for 50A), and mount the charger in your garage or outdoor parking spot. If your panel doesn't have capacity, we can upgrade it or install a sub-panel. All installations include ESA notification.",
  },
  {
    icon: "pool", title: "Pool & Spa Wiring", img: "/images/specialty-pool.jpg",
    intro: "Pool and spa electrical must meet strict safety codes due to the water proximity. We wire pool pumps, heaters, hot tubs, and underwater lighting to code.",
    features: ["Pool pump and filter motor wiring", "Hot tub and spa 240V hookups", "Underwater LED lighting", "Pool heater electrical connections", "GFCI protection (code required)", "Equipotential bonding grid"],
    detail: "Pool electrical is one of the most heavily regulated areas of the Ontario Electrical Safety Code. All pool equipment must be on GFCI-protected circuits, and an equipotential bonding grid must connect all metal components within 1.5 metres of the pool. We install proper disconnects within sight of the equipment, run appropriately rated underground cable, and ensure all bonding is complete. Hot tub hookups typically require a dedicated 40A or 50A, 240V GFCI-protected circuit.",
  },
  {
    icon: "generator", title: "Generator Installation", img: "/images/specialty-generator.jpg",
    intro: "Never lose power again. We install whole-home standby generators and transfer switches that automatically restore power during outages.",
    features: ["Automatic standby generator installation", "Manual and automatic transfer switches", "Natural gas and propane connections", "Load management systems", "Portable generator hookup (inlet box)", "Maintenance and service plans"],
    detail: "A whole-home standby generator automatically detects a power outage, starts within 10 seconds, and powers your entire home until utility power returns. We install generators from Generac, Kohler, and Briggs & Stratton with automatic transfer switches that safely disconnect from the grid before energizing your home. For budget-friendly backup, we also install manual transfer switches with generator inlet boxes for portable generators.",
  },
  {
    icon: "smartHome", title: "Smart Home Automation", img: "/images/specialty-smarthome.jpg",
    intro: "Control your lighting, climate, and security from your phone or voice. We install smart switches, automated lighting, and whole-home automation wiring.",
    features: ["Smart dimmer and switch installation", "Whole-home WiFi-controlled lighting", "Voice control (Alexa, Google, Siri)", "Automated lighting scenes and schedules", "Smart thermostat wiring", "Motorized shade and blind wiring"],
    detail: "Smart home technology starts with proper electrical infrastructure. Many smart switches require a neutral wire that older homes may lack — we add neutral wires where needed. We install Lutron Caseta, Leviton Decora Smart, and other professional-grade smart switches that are reliable and responsive. For whole-home automation, we can pre-wire with Cat6 for control panels and centralized smart home hubs.",
  },
  {
    icon: "energyAudit", title: "Energy Audit & Rebates", img: "/images/feature-pricing.jpg",
    intro: "Cut your electricity bills with an energy audit and LED upgrades. We help you access government and utility rebates for qualifying improvements.",
    features: ["Comprehensive energy usage assessment", "LED lighting upgrade with rebate paperwork", "Occupancy and daylight sensor installation", "Programmable thermostat upgrades", "SaveOnEnergy rebate applications", "Before-and-after energy comparison"],
    detail: "Ontario's SaveOnEnergy program and federal Greener Homes grants offer significant rebates for energy-efficient upgrades. A typical home LED conversion saves $200-$400 annually on electricity. We conduct a thorough assessment of your current lighting, heating controls, and electrical efficiency, then recommend upgrades with the best return on investment. We handle all rebate paperwork so you get your money back faster.",
  },
  {
    icon: "surgeProtection", title: "Whole-Home Surge Protection", img: "/images/specialty-surge.jpg",
    intro: "Protect your electronics, appliances, and HVAC equipment from damaging power surges with a panel-mounted whole-home surge protector.",
    features: ["Panel-mounted Type 2 surge protector", "Protection for all circuits simultaneously", "LED indicator for protection status", "Rated for 50,000+ amp surge capacity", "Protects against lightning and grid surges", "Paired with point-of-use protection"],
    detail: "Power surges from lightning, utility switching, and even appliances cycling on and off damage sensitive electronics over time. A whole-home surge protector installs directly at your electrical panel and clamps voltage spikes before they reach your devices. We install units rated for 50,000+ amps with indicator lights so you know protection is active. For maximum protection, we recommend pairing with point-of-use surge strips for computers and home theatres.",
  },
  {
    icon: "batteryStorage", title: "Battery Storage (Tesla Powerwall)", img: "/images/specialty-battery.jpg",
    intro: "Store energy for backup power or off-peak savings with home battery systems like the Tesla Powerwall. We are certified installers.",
    features: ["Tesla Powerwall installation", "Backup gateway and transfer switch", "Solar integration compatible", "Time-of-use rate optimization", "Multiple battery configurations", "Monitoring app setup"],
    detail: "The Tesla Powerwall stores 13.5 kWh of energy — enough to power essential circuits for 12-24 hours during an outage. It can also save money by charging during off-peak hours and discharging during peak rates. We install the Powerwall with its Backup Gateway, which acts as a transfer switch to isolate your home from the grid during outages. For solar homes, the Powerwall stores excess solar production for evening use.",
  },
  {
    icon: "solarReady", title: "Solar-Ready Wiring", img: "/images/specialty-solar.jpg",
    intro: "Prepare your home for future solar panel installation with proper conduit runs, panel space, and electrical infrastructure.",
    features: ["Conduit run from roof to panel", "Dedicated breaker space reserved", "Rapid shutdown compliant wiring", "Inverter mounting location prep", "Panel upgrade if needed", "Net metering ready"],
    detail: "Installing solar-ready wiring during a renovation or new build saves thousands compared to retrofitting later. We run conduit from your roof area to the electrical panel, reserve breaker space for the solar interconnection, and ensure your panel can handle the additional generation capacity. When you're ready to go solar, the installer simply pulls wire through the existing conduit — no cutting into walls or ceilings needed.",
  },
  {
    icon: "homeTheatre", title: "Home Theatre Wiring", img: "/images/specialty-theatre.jpg",
    intro: "Create the ultimate entertainment experience with proper home theatre wiring. In-wall speakers, HDMI runs, projector power, and dedicated circuits.",
    features: ["In-wall speaker wire (14/2 and 12/2)", "HDMI and fiber optic cable runs", "Projector ceiling outlet and mount power", "Dedicated 20A media circuit", "Subwoofer and surround sound wiring", "Acoustic panel power for motorized screens"],
    detail: "A properly wired home theatre eliminates visible cables and delivers the best audio and video quality. We run speaker wire through walls to each surround location (5.1, 7.1, or Dolby Atmos configurations), install HDMI or fiber optic cables for 4K/8K video, and provide a dedicated circuit to prevent interference from other loads. For projector setups, we install a ceiling outlet with a switched circuit.",
  },
  {
    icon: "intercom", title: "Intercom & Video Doorbell Systems", img: "/images/feature-clean.jpg",
    intro: "See and speak with visitors from anywhere. We install Ring, Nest, and wired intercom systems with proper power supply and low-voltage wiring.",
    features: ["Ring and Nest doorbell installation", "Wired intercom systems (multi-room)", "Doorbell transformer upgrade (16V/24V)", "Low-voltage wiring for video systems", "Gate and access control integration", "Indoor monitor station installation"],
    detail: "Video doorbells like Ring and Nest require a doorbell transformer providing 16-24V AC. Many older homes have underpowered 10V transformers that cause connectivity issues. We replace the transformer, run proper low-voltage wiring, and ensure a strong WiFi connection at the door location. For larger homes, we install wired intercom systems with indoor stations in multiple rooms and gate/access control integration.",
  },
];

export const galleryItems = [
  { src: "/images/service-panel.jpg", title: "200A Panel Upgrade", category: "Residential", location: "Mississauga" },
  { src: "/images/service-lighting.jpg", title: "LED Pot Light Installation", category: "Residential", location: "Brampton" },
  { src: "/images/service-ev.jpg", title: "Tesla Wall Connector Install", category: "Specialty", location: "Oakville" },
  { src: "/images/service-commercial.jpg", title: "Office Lighting Retrofit", category: "Commercial", location: "Toronto" },
  { src: "/images/feature-licensed.jpg", title: "Panel Inspection & Certification", category: "Residential", location: "Vaughan" },
  { src: "/images/feature-emergency.jpg", title: "Emergency Repair Service", category: "Residential", location: "Markham" },
  { src: "/images/service-smart.jpg", title: "Smart Home Automation Setup", category: "Specialty", location: "Richmond Hill" },
  { src: "/images/feature-pricing.jpg", title: "Free On-Site Estimate", category: "Commercial", location: "Hamilton" },
  { src: "/images/service-pool.jpg", title: "Pool & Spa Electrical", category: "Specialty", location: "Burlington" },
  { src: "/images/feature-clean.jpg", title: "Clean Professional Worksite", category: "Residential", location: "Aurora" },
  { src: "/images/hero-electrician.jpg", title: "Licensed Master Electrician", category: "Residential", location: "Barrie" },
  { src: "/images/hero-lighting.jpg", title: "Exterior Lighting Design", category: "Residential", location: "Newmarket" },
  { src: "/images/about-electrician.jpg", title: "Expert Panel Work", category: "Commercial", location: "Toronto" },
  { src: "/images/about-toronto.jpg", title: "Serving the GTA", category: "Commercial", location: "Toronto" },
  { src: "/images/service-panel.jpg", title: "Fuse to Breaker Conversion", category: "Residential", location: "Oshawa" },
  { src: "/images/service-ev.jpg", title: "ChargePoint Home Install", category: "Specialty", location: "Whitby" },
];

export const serviceTypeOptions = [
  "Residential",
  "Commercial",
  "Industrial",
] as const;

export const serviceNeededOptions = [
  "Lighting / Pot Lights",
  "Panel Upgrade",
  "EV Charger Installation",
  "Pool / Spa Wiring",
  "Wiring / Rewiring",
  "Troubleshooting / Repair",
  "Smart Home / Automation",
  "Generator Installation",
  "Fire Alarm System",
  "Energy Audit / Rebates",
  "Other",
] as const;
