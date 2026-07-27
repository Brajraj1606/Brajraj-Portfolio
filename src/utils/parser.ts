import { PortfolioData } from '../types/portfolio';
import { initialPortfolioData } from '../data/initialData';

/**
 * Intelligent parser function that attempts to parse raw text resume into structured PortfolioData.
 * Falls back gracefully to initial portfolio structure if required sections are missing.
 */
export function parseResumeText(rawText: string): PortfolioData {
  if (!rawText || rawText.trim().length === 0) {
    return initialPortfolioData;
  }

  // Check if text is valid JSON
  try {
    const jsonParsed = JSON.parse(rawText);
    if (jsonParsed && jsonParsed.contact && jsonParsed.projects) {
      return jsonParsed as PortfolioData;
    }
  } catch {
    // Continue with text regex parsing
  }

  const lines = rawText
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  // Default structure cloned from template
  const result: PortfolioData = JSON.parse(JSON.stringify(initialPortfolioData));

  if (lines.length > 0) {
    // First non-empty line as name
    result.contact.name = lines[0].replace(/^(NAME|CV|RESUME|CURRICULUM VITAE):\s*/i, '');
  }

  // Extract Email
  const emailMatch = rawText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch) {
    result.contact.email = emailMatch[0];
  }

  // Extract Phone Number
  const phoneMatch = rawText.match(/(\+?\d{1,3}[\s-]?)?\(?\d{3,5}\)?[\s-]?\d{3,5}[\s-]?\d{3,5}/);
  if (phoneMatch) {
    result.contact.phone = phoneMatch[0];
  }

  // Extract Professional Summary
  const summaryBlock = extractSection(rawText, ['PROFESSIONAL SUMMARY', 'SUMMARY', 'PROFILE', 'ABOUT ME']);
  if (summaryBlock) {
    result.contact.summary = summaryBlock.replace(/^(PROFESSIONAL SUMMARY|SUMMARY|PROFILE|ABOUT ME)\s*:?\s*/i, '').trim();
  }

  // Extract Technical Skills
  const skillsBlock = extractSection(rawText, ['TECHNICAL SKILLS', 'SKILLS', 'TECHNICAL PROFICIENCIES']);
  if (skillsBlock) {
    const skillLines = skillsBlock.split('\n');
    const parsedCategories = [];

    for (const line of skillLines) {
      if (line.includes(':')) {
        const [catName, itemsStr] = line.split(':');
        const cleanCat = catName.replace(/[^a-zA-Z0-9\s&/-]/g, '').trim();
        const items = itemsStr
          .split(/[,|•;]/)
          .map((s) => s.trim())
          .filter((s) => s.length > 0);
        if (cleanCat && items.length > 0) {
          parsedCategories.push({ category: cleanCat, items });
        }
      }
    }

    if (parsedCategories.length > 0) {
      result.skills = parsedCategories;
    }
  }

  return result;
}

function extractSection(text: string, headings: string[]): string | null {
  const upper = text.toUpperCase();
  let startIndex = -1;
  let matchedLength = 0;

  for (const heading of headings) {
    const idx = upper.indexOf(heading.toUpperCase());
    if (idx !== -1) {
      startIndex = idx;
      matchedLength = heading.length;
      break;
    }
  }

  if (startIndex === -1) return null;

  const contentStart = startIndex + matchedLength;
  const rest = text.substring(contentStart);

  // Find next section header (ALL CAPS followed by :)
  const nextSectionMatch = rest.match(/\n[A-Z\s]{4,25}\s*:/);
  if (nextSectionMatch && nextSectionMatch.index !== undefined) {
    return rest.substring(0, nextSectionMatch.index).trim();
  }

  return rest.trim();
}

/**
 * Download Portfolio data as clean JSON file
 */
export function exportPortfolioJSON(data: PortfolioData) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.contact.name.toLowerCase().replace(/\s+/g, '_')}_portfolio.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Format Portfolio into clean Markdown document
 */
export function exportPortfolioMarkdown(data: PortfolioData): string {
  return `# ${data.contact.name}
**${data.contact.title}**  
Location: ${data.contact.location} | Email: ${data.contact.email} | Phone: ${data.contact.phone}

## Professional Summary
${data.contact.summary}

## Internship & Experience
### ${data.internship.role} - ${data.internship.organization}
*${data.internship.duration} | ${data.internship.location}*
${data.internship.bullets.map((b) => `- ${b}`).join('\n')}

**Key Tools & Technologies:** ${data.internship.toolsUsed.join(', ')}

## Projects
${data.projects
  .map(
    (p) => `### ${p.title} (${p.type})
*Technologies:* ${p.technologies.join(', ')}
${p.description.map((d) => `- ${d}`).join('\n')}`
  )
  .join('\n\n')}

## Technical Skills
${data.skills.map((s) => `- **${s.category}:** ${s.items.join(', ')}`).join('\n')}

## Education
${data.education
  .map(
    (e) => `- **${e.degree}** - ${e.institution}, ${e.location} (${e.period})${e.grade ? ` - ${e.grade}` : ''}`
  )
  .join('\n')}

## Certifications & Achievements
${data.certifications.map((c) => `- ${c.title} - ${c.issuer} (${c.date})`).join('\n')}
`;
}
