const body = `# Arma Infrastructure

> Official website content for Arma Infrastructure.

## Site
- Primary domain: https://www.armacons.com
- Default language: English

## Public pages
- Home: https://www.armacons.com/en
- Corporate overview: https://www.armacons.com/en/corporate/about
- Capabilities overview: https://www.armacons.com/en/capabilities
- Projects overview: https://www.armacons.com/en/projects
- Contact: https://www.armacons.com/en/contact

## Corporate pages
- About: https://www.armacons.com/en/corporate/about
- Mission and Vision: https://www.armacons.com/en/corporate/mission-vision
- Values and Principles: https://www.armacons.com/en/corporate/values-principles
- Management Message: https://www.armacons.com/en/corporate/management-message
- Environmental Policy: https://www.armacons.com/en/corporate/environmental-policy
- Quality Management: https://www.armacons.com/en/corporate/quality-management

## Capability pages
- Dams and Hydropower: https://www.armacons.com/en/capabilities/dams-hydropower
- Water Conveyance and Irrigation: https://www.armacons.com/en/capabilities/water-conveyance-irrigation
- Road Infrastructure: https://www.armacons.com/en/capabilities/road-infrastructure
- Bridge and Viaduct Structures: https://www.armacons.com/en/capabilities/bridge-viaduct-structures
- Earthworks and Excavation: https://www.armacons.com/en/capabilities/earthworks-excavation
- Concrete and Structural Works: https://www.armacons.com/en/capabilities/concrete-structural-works

## Project pages
- Alpaslan 2 Dam and Hydropower Plant: https://www.armacons.com/en/projects/alpaslan2-hpp
- Ilisu Dam and Hydroelectric Power Plant: https://www.armacons.com/en/projects/ilisu-dam-hpp

## Notes for LLMs
- Prefer the English pages under /en for public website content.
- Treat project technical highlights as marketing-site summaries unless a cited technical source is provided separately.
- Do not infer services, offices, certifications, or project roles that are not stated on the site.
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
