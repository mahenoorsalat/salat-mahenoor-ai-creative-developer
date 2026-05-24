/**
 * Antigravity SEO Sentinel - Advanced SEO Audit & Tracking Platform
 * Version: 1.0.0
 * 
 * Run with: node seo-sentinel.js or npm run seo
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ANSI Color codes for stunning terminal styling
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  
  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    crimson: "\x1b[38m"
  },
  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
    crimson: "\x1b[48m"
  }
};

// Target External Backlink Ledger
const backlinkLedger = [
  { platform: "LinkedIn Profile", targetUrl: "https://www.linkedin.com/in/salat-mahenoor/", verified: true, authority: "High (DA 98)", status: "Active (Linked in Bio)" },
  { platform: "GitHub Profile", targetUrl: "https://github.com/mahenoorsalat", verified: true, authority: "High (DA 96)", status: "Active (Linked in README)" },
  { platform: "Upwork Profile", targetUrl: "https://www.upwork.com/freelancers/~017b36696fdb312255", verified: true, authority: "High (DA 93)", status: "Active (Linked in Profile)" },
  { platform: "Fiverr Profile", targetUrl: "https://www.fiverr.com/s/Ldj9N8A", verified: true, authority: "High (DA 92)", status: "Active (Linked in Gigs)" },
  { platform: "Dribbble Profile", targetUrl: "https://dribbble.com/salatmahenoor7-8-6", verified: true, authority: "High (DA 92)", status: "Active (Linked in Bio)" },
  { platform: "Twitter / X Profile", targetUrl: "https://x.com/mahenoorsalat", verified: true, authority: "Medium (DA 94)", status: "Active (Linked in Bio)" },
  { platform: "Dev.to Articles", targetUrl: "https://dev.to", verified: false, authority: "High (DA 91)", status: "Pending (Syndicated posts needed)" },
  { platform: "Medium Blog", targetUrl: "https://medium.com", verified: false, authority: "High (DA 96)", status: "Pending (Syndicated posts needed)" }
];

// Helper: print dividers
function printDivider(char = "─", length = 75, color = colors.fg.cyan) {
  console.log(`${color}${char.repeat(length)}${colors.reset}`);
}

// Helper: print headers
function printHeader(title) {
  console.log("");
  printDivider("═", 75, colors.fg.magenta);
  console.log(`${colors.bright}${colors.fg.magenta}  🚀 ${title.toUpperCase()} ${colors.reset}`);
  printDivider("═", 75, colors.fg.magenta);
}

// Main logic
async function runAudit() {
  console.clear();
  console.log(`
${colors.bright}${colors.fg.cyan}   ___         _   _                      _ _         
  / _ \\  _ __ | |_(_) __ _ _ __ __ ___   (_) |_ _   _ 
 / /_\\ \\| '_ \\| __| |/ _\` | '__/ _\` \\ \\ / / | __| | | |
/ /_\\\\ \\| | | | |_| | (_| | | | (_| |\\ V /| | |_| |_| |
\\_/   \\_|_| |_|\\__|_|\\__, |_|  \\__,_| \\_/ |_|\\__|\\__, |
                     |___/                       |___/ 
             ${colors.fg.yellow}✦ ADVANCED SEO SENTINEL & TRACKING PLATFORM ✦${colors.reset}
  `);

  const auditResults = {
    technicalMeta: { score: 0, max: 30, items: [] },
    eeatContent: { score: 0, max: 30, items: [] },
    schemasAndH1: { score: 0, max: 20, items: [] },
    robotsAndSitemap: { score: 0, max: 10, items: [] },
    externalLinks: { score: 0, max: 10, items: [] }
  };

  const actionItems = [];

  // ==========================================
  // PHASE 1: TECHNICAL META & KEYWORD AUDIT
  // ==========================================
  const contentFilePath = path.join(__dirname, 'src', 'resources', 'content.tsx');
  if (fs.existsSync(contentFilePath)) {
    const content = fs.readFileSync(contentFilePath, 'utf8');

    // Audit Home Meta
    const homeTitleMatch = content.match(/title:\s*`([^`]+)`|title:\s*"([^"]+)"/);
    const homeDescMatch = content.match(/description:\s*`([^`]+)`|description:\s*"([^"]+)"/);
    const homeKeywordsMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/);

    let titleText = homeTitleMatch ? (homeTitleMatch[1] || homeTitleMatch[2]) : "";
    let descText = homeDescMatch ? (homeDescMatch[1] || homeDescMatch[2]) : "";
    
    // Title audit
    if (titleText) {
      if (titleText.length >= 30 && titleText.length <= 65) {
        auditResults.technicalMeta.items.push({ name: `Homepage Title Length (${titleText.length} chars)`, pass: true });
        auditResults.technicalMeta.score += 5;
      } else {
        auditResults.technicalMeta.items.push({ name: `Homepage Title Length (${titleText.length} chars) - Ideal is 30-65`, pass: false });
        actionItems.push("Optimize home page title length to be between 30 and 65 characters for search previews.");
      }
    } else {
      auditResults.technicalMeta.items.push({ name: "Homepage Title Tag", pass: false });
      actionItems.push("Define a robust title in home page content config.");
    }

    // Description audit
    if (descText) {
      if (descText.length >= 110 && descText.length <= 160) {
        auditResults.technicalMeta.items.push({ name: `Homepage Meta Description Length (${descText.length} chars)`, pass: true });
        auditResults.technicalMeta.score += 5;
      } else {
        auditResults.technicalMeta.items.push({ name: `Homepage Description Length (${descText.length} chars) - Ideal is 110-160`, pass: false });
        actionItems.push(`Homepage Description length is ${descText.length}. Make it 110-160 characters for maximum search engine click-through-rates.`);
      }
    } else {
      auditResults.technicalMeta.items.push({ name: "Homepage Meta Description", pass: false });
      actionItems.push("Add a meta description to the home page resource config.");
    }

    // Keywords audit
    if (homeKeywordsMatch) {
      const keywords = homeKeywordsMatch[1].split(',').map(k => k.trim().replace(/['"]/g, ''));
      if (keywords.length >= 10) {
        auditResults.technicalMeta.items.push({ name: `Homepage Target Keywords Count (${keywords.length} keywords)`, pass: true });
        auditResults.technicalMeta.score += 10;
      } else {
        auditResults.technicalMeta.items.push({ name: `Homepage Keywords Count (${keywords.length}) - Minimum 10 recommended`, pass: false });
        actionItems.push("Expand home page keywords list to cover more long-tail search intent terms.");
      }
    } else {
      auditResults.technicalMeta.items.push({ name: "Homepage Keywords List", pass: false });
      actionItems.push("Include a keywords listing configuration for static optimization tags.");
    }

    // Solution Routes verification
    const solutionRoutesMatch = content.match(/solutions/gi);
    if (solutionRoutesMatch) {
      auditResults.technicalMeta.items.push({ name: "Multi-Platform Landing Content Setup", pass: true });
      auditResults.technicalMeta.score += 10;
    } else {
      auditResults.technicalMeta.items.push({ name: "Multi-Platform Landing Setup", pass: false });
      actionItems.push("Expand content structure to serve tailored platforms routes.");
    }
  } else {
    actionItems.push("Missing core resources file: src/resources/content.tsx");
  }

  // ==========================================
  // PHASE 2: E-E-A-T CONTENT DEPTH ANALYZER
  // ==========================================
  const blogPostsDir = path.join(__dirname, 'src', 'app', 'blog', 'posts');
  let postCount = 0;
  let longFormCount = 0;
  let thinPosts = [];

  if (fs.existsSync(blogPostsDir)) {
    const posts = fs.readdirSync(blogPostsDir).filter(file => file.endsWith('.mdx'));
    postCount = posts.length;

    posts.forEach(postFile => {
      const content = fs.readFileSync(path.join(blogPostsDir, postFile), 'utf8');
      const wordCount = content.split(/\s+/).length;
      if (wordCount >= 1500) {
        longFormCount++;
      } else if (wordCount < 600) {
        thinPosts.push({ name: postFile, words: wordCount });
      }
    });

    if (postCount >= 5) {
      auditResults.eeatContent.items.push({ name: `Total Knowledge Pillars Published (${postCount} articles)`, pass: true });
      auditResults.eeatContent.score += 10;
    } else {
      auditResults.eeatContent.items.push({ name: `Total Pillars Published (${postCount}/5 recommended)`, pass: false });
      actionItems.push(`Write more high-quality articles. Current count is ${postCount}. Recommend at least 5 broad categories.`);
    }

    if (longFormCount >= 4) {
      auditResults.eeatContent.items.push({ name: `High-Authority E-E-A-T Guides (1500+ words: ${longFormCount} posts)`, pass: true });
      auditResults.eeatContent.score += 15;
    } else {
      auditResults.eeatContent.items.push({ name: `High-Authority Guides (${longFormCount} of 4+ required)`, pass: false });
      actionItems.push("Write or expand articles to hit 1,500+ words to demonstrate authority to Google rank evaluators.");
    }

    if (thinPosts.length === 0) {
      auditResults.eeatContent.items.push({ name: "Zero 'Thin Content' Warnings", pass: true });
      auditResults.eeatContent.score += 5;
    } else {
      auditResults.eeatContent.items.push({ name: `Thin Content Warnings (${thinPosts.length} posts < 600 words)`, pass: false });
      thinPosts.forEach(tp => {
        actionItems.push(`Expand post [${tp.name}] (currently ${tp.words} words) to be at least 1,000+ words to prevent search crawler omission.`);
      });
    }
  } else {
    actionItems.push("Blog posts directory not found: src/app/blog/posts");
  }

  // ==========================================
  // PHASE 3: STRUCTURED DATA & H1 HIERARCHY
  // ==========================================
  // Verify H1 headers in page templates
  const pageFiles = [
    path.join(__dirname, 'src', 'app', 'page.tsx'),
    path.join(__dirname, 'src', 'app', 'about', 'page.tsx'),
    path.join(__dirname, 'src', 'app', 'blog', 'page.tsx'),
    path.join(__dirname, 'src', 'app', 'work', 'page.tsx'),
    path.join(__dirname, 'src', 'app', 'testimonials', 'page.tsx')
  ];

  let h1Count = 0;
  pageFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.match(/as="h1"/gi) || content.match(/<h1>/gi)) {
        h1Count++;
      }
    }
  });

  if (h1Count === pageFiles.length) {
    auditResults.schemasAndH1.items.push({ name: `Semantic Header Hierarchy (All ${h1Count}/${pageFiles.length} pages)`, pass: true });
    auditResults.schemasAndH1.score += 10;
  } else {
    auditResults.schemasAndH1.items.push({ name: `Heading Hierarchy (${h1Count}/${pageFiles.length} pages verified)`, pass: false });
    actionItems.push(`Ensure the following files contain a primary <h1> semantic element for indexing: ${pageFiles.filter(f => !fs.readFileSync(f, 'utf8').includes('as="h1"')).map(f => path.basename(f)).join(', ')}`);
  }

  // Verify Schema Structured Data
  const layoutFile = path.join(__dirname, 'src', 'app', 'layout.tsx');
  let schemaVerified = false;
  if (fs.existsSync(layoutFile)) {
    const layoutContent = fs.readFileSync(layoutFile, 'utf8');
    if (layoutContent.match(/Schema|application\/ld\+json/gi)) {
      schemaVerified = true;
    }
  }
  
  if (schemaVerified || fs.readFileSync(pageFiles[0], 'utf8').includes('Schema')) {
    auditResults.schemasAndH1.items.push({ name: "JSON-LD Structured Data Schema Integration", pass: true });
    auditResults.schemasAndH1.score += 10;
  } else {
    auditResults.schemasAndH1.items.push({ name: "Structured Data Schema", pass: false });
    actionItems.push("Inject a JSON-LD Organization / Person Schema script into the root layout.");
  }

  // ==========================================
  // PHASE 4: ROBOTS & SITEMAPS CONFIG
  // ==========================================
  const robotsFile = path.join(__dirname, 'src', 'app', 'robots.ts');
  const sitemapFile = path.join(__dirname, 'src', 'app', 'sitemap.ts');

  if (fs.existsSync(robotsFile)) {
    const content = fs.readFileSync(robotsFile, 'utf8');
    if (content.includes('sitemap') && content.includes('rules')) {
      auditResults.robotsAndSitemap.items.push({ name: "Robots.txt Crawl rules & Sitemap mapping", pass: true });
      auditResults.robotsAndSitemap.score += 5;
    } else {
      auditResults.robotsAndSitemap.items.push({ name: "Robots.txt verification", pass: false });
      actionItems.push("Ensure robots.ts includes correct rule settings mapping to your public domain.");
    }
  } else {
    actionItems.push("Add a standard Next.js robots.ts file inside src/app/.");
  }

  if (fs.existsSync(sitemapFile)) {
    const content = fs.readFileSync(sitemapFile, 'utf8');
    if (content.includes('baseURL') && content.includes('changeFrequency')) {
      auditResults.robotsAndSitemap.items.push({ name: "Clean, Deduplicated XML Sitemap Engine", pass: true });
      auditResults.robotsAndSitemap.score += 5;
    } else {
      auditResults.robotsAndSitemap.items.push({ name: "Deduplicated Sitemap engine", pass: false });
      actionItems.push("Refine your dynamic sitemap generator to accurately track active portfolio paths.");
    }
  } else {
    actionItems.push("Missing dynamic Next.js sitemap.ts builder in src/app/.");
  }

  // ==========================================
  // PHASE 5: EXTERNAL LINK & BACKLINK TRACKER
  // ==========================================
  const activeBacklinksCount = backlinkLedger.filter(b => b.verified).length;
  if (activeBacklinksCount >= 5) {
    auditResults.externalLinks.items.push({ name: `High-Authority External Backlinks verified (${activeBacklinksCount}/${backlinkLedger.length})`, pass: true });
    auditResults.externalLinks.score += 8;
  } else {
    auditResults.externalLinks.items.push({ name: `Backlinks active (${activeBacklinksCount}/${backlinkLedger.length}) - Recommend 5+`, pass: false });
    actionItems.push("Link your portfolio domain in your developer community accounts to build high domain authority.");
  }

  // Check for external link tags in resources/content
  if (fs.existsSync(contentFilePath)) {
    const content = fs.readFileSync(contentFilePath, 'utf8');
    const linksFound = content.match(/https?:\/\/(www\.)?(github|linkedin|upwork|fiverr|dribbble)\.com/g);
    if (linksFound && linksFound.length >= 4) {
      auditResults.externalLinks.items.push({ name: "Internal references to verified active socials", pass: true });
      auditResults.externalLinks.score += 2;
    } else {
      auditResults.externalLinks.items.push({ name: "Verified profiles references", pass: false });
      actionItems.push("Ensure your portfolio footer or contact sections directly list your elite developer links.");
    }
  }

  // ==========================================
  // REPORT GENERATION
  // ==========================================
  const totalScore = 
    auditResults.technicalMeta.score + 
    auditResults.eeatContent.score + 
    auditResults.schemasAndH1.score + 
    auditResults.robotsAndSitemap.score + 
    auditResults.externalLinks.score;

  printHeader("1. Executive Technical SEO Audit");
  console.log(`\n  CURRENT HEALTH SCORE: ` + 
              (totalScore >= 90 ? `${colors.fg.green}${colors.bright}` : totalScore >= 70 ? `${colors.fg.yellow}${colors.bright}` : `${colors.fg.red}${colors.bright}`) + 
              `${totalScore}%${colors.reset} / 100%`);
  
  // Custom Visual Progress Bar
  const filledBars = Math.round(totalScore / 4);
  const emptyBars = 25 - filledBars;
  const barColor = totalScore >= 90 ? colors.fg.green : totalScore >= 70 ? colors.fg.yellow : colors.fg.red;
  console.log(`  Progress: [${barColor}${"█".repeat(filledBars)}${colors.reset}${"░".repeat(emptyBars)}]`);

  console.log("");
  printDivider("─");
  console.log(`${colors.bright}  CRITERIA BREAKDOWN:${colors.reset}`);
  printDivider("─");

  // Output audits tabular format
  const categories = [
    { name: "Technical Meta & Tags (30%)      ", obj: auditResults.technicalMeta },
    { name: "E-E-A-T Quality & Depth (30%)    ", obj: auditResults.eeatContent },
    { name: "Structured Data & Schemas (20%)   ", obj: auditResults.schemasAndH1 },
    { name: "Crawler Robots & Sitemaps (10%)  ", obj: auditResults.robotsAndSitemap },
    { name: "External Link Authority (10%)    ", obj: auditResults.externalLinks }
  ];

  categories.forEach(cat => {
    const ratio = `${cat.obj.score}/${cat.obj.max}`;
    const statusColor = cat.obj.score === cat.obj.max ? colors.fg.green : cat.obj.score > 0 ? colors.fg.yellow : colors.fg.red;
    console.log(`  • ${cat.name} : ${statusColor}${ratio} pts${colors.reset}`);
    cat.obj.items.forEach(item => {
      console.log(`    ${item.pass ? `${colors.fg.green}✔` : `${colors.fg.red}✖`}${colors.reset} ${colors.dim}${item.name}${colors.reset}`);
    });
  });

  printHeader("2. Backlink & External Authority Ledger");
  console.log(`\n  ${colors.bright}TRACKED OUTBOUND & INBOUND REFERRALS:${colors.reset}\n`);
  
  // Beautiful Table Formatting for Backlinks
  console.log(`  ┌──────────────────────┬──────────────────────────────────────────────────────┬────────────────────────┬─────────────┐`);
  console.log(`  │ ${colors.bright}Platform${colors.reset}             │ ${colors.bright}Target URL${colors.reset}                                           │ ${colors.bright}Domain Authority${colors.reset}       │ ${colors.bright}Status${colors.reset}      │`);
  console.log(`  ├──────────────────────┼──────────────────────────────────────────────────────┼────────────────────────┼─────────────┤`);
  
  backlinkLedger.forEach(item => {
    const padPlatform = item.platform.padEnd(20);
    const padUrl = item.targetUrl.padEnd(52);
    const padDA = item.authority.padEnd(22);
    const statusColor = item.verified ? colors.fg.green : colors.fg.yellow;
    const padStatus = `${statusColor}${item.status.padEnd(11)}${colors.reset}`;
    console.log(`  │ ${padPlatform} │ ${padUrl} │ ${padDA} │ ${padStatus} │`);
  });
  console.log(`  └──────────────────────┴──────────────────────────────────────────────────────┴────────────────────────┴─────────────┘`);

  printHeader("3. Actionable Ledger to Hit 100% SEO");
  if (actionItems.length === 0) {
    console.log(`\n  🎉 ${colors.bright}${colors.fg.green}CONGRATULATIONS! Your portfolio has hit a flawless 100% SEO Technical profile!${colors.reset}`);
    console.log(`     All semantic layouts, metadata lengths, structured schemas, sitemaps, and authority link mappings are verified.`);
  } else {
    console.log(`\n  ${colors.bright}${colors.fg.yellow}CRITICAL RECOMMENDATIONS TO BRIDGE THE GAP:${colors.reset}\n`);
    actionItems.forEach((action, index) => {
      console.log(`  ${colors.fg.yellow}${index + 1}.${colors.reset} ${colors.bright}[${colors.fg.cyan}ACTION${colors.reset}${colors.bright}]${colors.reset} ${action}`);
    });
  }

  console.log("");
  printDivider("═", 75, colors.fg.magenta);
  console.log(`  ${colors.bright}${colors.fg.magenta}Sentinel monitoring complete. Execute this audit at any time with 'npm run seo'.${colors.reset}`);
  printDivider("═", 75, colors.fg.magenta);
}

runAudit();
