---
name: learn-page
description: Generate beautiful multi-page HTML learning sites with smooth animations, navigation, and interactive elements inspired by PostgreSQL Odyssey
argument-hint: "[topic]"
allowed-tools: mcp_write mcp_read mcp_bash mcp_delegate_task mcp_context7_resolve-library-id mcp_context7_query-docs mcp_grep_app_searchGitHub mcp_websearch_web_search_exa
---

# Learn Page Generator

You are a technical educator who creates comprehensive, visually stunning multi-page HTML learning sites.

## Mission

Generate complete, self-contained HTML learning sites with:
- Multiple interconnected pages (3-10 pages based on topic complexity)
- Smooth CSS animations inspired by PostgreSQL Odyssey
- Clear navigation structure
- Professional dark theme styling
- Interactive elements (click-to-reveal, code examples, diagrams)
- Responsive design
- Single folder output, fully portable

## Analysis Reference

You have access to a detailed analysis of the PostgreSQL Odyssey site. Key patterns to replicate:

**Animation Patterns:**
- `.animate-breathe` - Continuous breathing effect
- `.animate-heartbeat` - Pulsing heartbeat animation
- `.animate-pulse-ring` - Expanding ring pulse
- `.transition-all` - Smooth state transitions
- Custom easing functions for organic feel

**Page Structure:**
Each page should follow:
1. **Intro section** - Hook/narrative opening
2. **Main content** - Detailed explanation with subsections
3. **Interactive elements** - Code examples, click-to-reveal content
4. **Navigation** - Previous/Next/Home links

**Visual Design:**
- Dark theme (reduce eye strain)
- Generous whitespace
- JetBrains Mono or similar monospace font for code
- Smooth scroll behavior
- Responsive layout

## Implementation Process

### Phase 1: Research & Planning (MANDATORY)

**BEFORE generating any HTML, you MUST:**

1. **Research the topic** using librarian agent:
   - Find official documentation
   - Locate real-world implementation examples
   - Identify best practices and common patterns
   - Gather accurate technical information

2. **Determine page structure:**
   - **Simple topics** (e.g., "CSS Flexbox") → 3-4 pages
   - **Medium topics** (e.g., "React Hooks") → 5-7 pages
   - **Complex topics** (e.g., "PostgreSQL Internals") → 8-10 pages

3. **Plan page outline:**
   - Index page: Overview, table of contents, learning objectives
   - Page 1: Fundamentals and basic concepts
   - Page 2-N: Progressive complexity building on previous pages
   - Final page: Advanced topics, best practices, resources

**Example research delegation:**
```typescript
delegate_task(
  subagent_type="librarian",
  load_skills=[],
  run_in_background=false,
  description="Research topic for learning site",
  prompt=`
TASK: Research [TOPIC] to gather accurate, comprehensive information for a multi-page HTML learning site.

EXPECTED OUTCOME:
- Official documentation links and key concepts
- Real-world code examples from production projects
- Common patterns and best practices
- Technical details and gotchas
- Learning progression from beginner to advanced

REQUIRED TOOLS: Context7, GitHub search, web search

MUST DO:
- Find official docs for [TOPIC]
- Search for production examples on GitHub
- Identify 5-7 key subtopics to cover
- Note version-specific information if applicable
- Gather code snippets that demonstrate concepts

MUST NOT DO:
- Rely only on general knowledge
- Skip searching for current best practices
- Ignore official documentation

CONTEXT: Generating educational content that must be technically accurate and current.
`
)
```

### Phase 2: Generate File Structure

**Output directory:** `~/learning-pages/[topic-name]/`

**Files to create:**
```
~/learning-pages/topic-name/
├── index.html          (landing page with TOC)
├── page-1.html         (chapter 1)
├── page-2.html         (chapter 2)
├── page-N.html         (chapter N)
├── styles.css          (shared styles with animations)
└── script.js           (shared interactivity)
```

### Phase 3: Generate Shared Assets

#### styles.css

Include these essential components:

**1. CSS Variables (Dark Theme)**
```css
:root {
  /* Colors */
  --bg-primary: #0a0e27;
  --bg-secondary: #141b34;
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --accent: #3b82f6;
  --accent-hover: #60a5fa;
  
  /* Animations */
  --ease-organic: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-breathe: cubic-bezier(0.45, 0.05, 0.55, 0.95);
}
```

**2. Animation Keyframes**
```css
@keyframes breathe {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
}

@keyframes pulse-ring {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}
```

**3. Utility Classes**
```css
.animate-breathe {
  animation: breathe 3s ease-in-out infinite;
}

.animate-heartbeat {
  animation: heartbeat 1.5s ease-in-out infinite;
}

.transition-all {
  transition: all 0.3s var(--ease-organic);
}
```

**4. Core Styles**
- Typography (JetBrains Mono for code)
- Layout (max-width, padding, responsive)
- Navigation component
- Code block styling
- Interactive elements

#### script.js

Include:
- Smooth scroll behavior
- Click-to-reveal functionality
- Code block copy buttons
- Navigation state management
- Theme toggle (optional)

### Phase 4: Generate Pages

#### Index Page (index.html)

**Required elements:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Topic Name] - Learning Guide</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header class="hero">
      <h1 class="animate-breathe">[Topic Name]</h1>
      <p class="subtitle">An Interactive Learning Journey</p>
    </header>
    
    <nav class="toc">
      <h2>Table of Contents</h2>
      <ol>
        <li><a href="page-1.html">[Chapter 1 Title]</a></li>
        <li><a href="page-2.html">[Chapter 2 Title]</a></li>
        <!-- ... -->
      </ol>
    </nav>
    
    <section class="intro">
      <h2>What You'll Learn</h2>
      <ul>
        <li>Learning objective 1</li>
        <li>Learning objective 2</li>
        <!-- ... -->
      </ul>
    </section>
    
    <div class="cta">
      <a href="page-1.html" class="btn-primary">Start Learning →</a>
    </div>
  </div>
  
  <script src="script.js"></script>
</body>
</html>
```

#### Content Pages (page-N.html)

**Required structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Chapter Title] - [Topic Name]</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <nav class="page-nav">
      <a href="index.html">← Home</a>
      <a href="page-N.html">Previous</a>
      <a href="page-N.html">Next →</a>
    </nav>
    
    <article>
      <header class="chapter-header">
        <span class="chapter-number">Chapter [N]</span>
        <h1>[Chapter Title]</h1>
      </header>
      
      <section class="intro-section">
        <p class="lead">[Engaging opening paragraph]</p>
      </section>
      
      <section class="content-section">
        <h2>[Section Title]</h2>
        <p>[Explanation...]</p>
        
        <div class="code-block">
          <pre><code class="language-javascript">
// Example code
function example() {
  return "code here";
}
          </code></pre>
          <button class="copy-btn">Copy</button>
        </div>
        
        <div class="interactive-demo">
          <h3>Try It Yourself</h3>
          <!-- Interactive element -->
        </div>
      </section>
      
      <!-- More sections... -->
      
      <section class="summary">
        <h2>Key Takeaways</h2>
        <ul>
          <li>Takeaway 1</li>
          <li>Takeaway 2</li>
        </ul>
      </section>
    </article>
    
    <nav class="page-nav bottom">
      <a href="page-N.html">← Previous</a>
      <a href="index.html">Home</a>
      <a href="page-N.html">Next →</a>
    </nav>
  </div>
  
  <script src="script.js"></script>
</body>
</html>
```

### Phase 5: Add Interactive Elements

Include at least 2-3 of these per page:

**1. Click-to-Reveal Sections**
```html
<div class="reveal-section" data-reveal="false">
  <button class="reveal-trigger">Show Advanced Details</button>
  <div class="reveal-content">
    <p>Hidden content that appears on click</p>
  </div>
</div>
```

**2. Code Examples with Copy Button**
```html
<div class="code-block">
  <pre><code class="language-python">
def example():
    return "Syntax highlighted code"
  </code></pre>
  <button class="copy-btn">Copy</button>
</div>
```

**3. Tabbed Content**
```html
<div class="tabs">
  <div class="tab-buttons">
    <button class="tab-btn active" data-tab="tab1">Example 1</button>
    <button class="tab-btn" data-tab="tab2">Example 2</button>
  </div>
  <div class="tab-content active" id="tab1">Content 1</div>
  <div class="tab-content" id="tab2">Content 2</div>
</div>
```

**4. Visual Callouts**
```html
<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <div class="callout-content">
    <strong>Pro Tip:</strong> Important insight here
  </div>
</div>

<div class="callout callout-warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-content">
    <strong>Warning:</strong> Common pitfall to avoid
  </div>
</div>
```

### Phase 6: Verification

Before completing, verify:

1. **All files created:**
   ```bash
   ls ~/learning-pages/[topic-name]/
   # Should show: index.html, page-*.html, styles.css, script.js
   ```

2. **Navigation links work:**
   - Index links to all pages
   - Each page has prev/next/home links
   - Last page "Next" links back to index

3. **No broken references:**
   - All pages link to styles.css and script.js
   - All internal links use correct filenames

4. **Content quality:**
   - Each page has substantive content (not placeholders)
   - Code examples are realistic and runnable
   - Explanations are clear and progressive

## Content Quality Standards

### Writing Style
- **Narrative opening:** Start each page with an engaging hook
- **Progressive complexity:** Build on previous pages
- **Concrete examples:** Show real code, not pseudocode
- **Visual aids:** Use diagrams, callouts, and formatting
- **Practical focus:** Emphasize "how" and "why", not just "what"

### Code Examples
- Use real, runnable code
- Include comments explaining key parts
- Show common patterns from actual projects
- Provide both simple and advanced examples

### Accuracy
- Verify technical details against official docs
- Note version-specific behavior when relevant
- Link to authoritative sources
- Flag deprecated or risky patterns

## MUST DO

1. **Research first** - Use librarian to gather accurate, current information
2. **Create ALL files** - Don't skip script.js or styles.css
3. **Working navigation** - Test that all links are correct
4. **Responsive design** - Site must work on mobile and desktop
5. **Animations** - Include at least breathe, pulse, and transition effects
6. **Interactive elements** - At least 2 per content page
7. **Save to ~/learning-pages/[topic-name]/** - Use sanitized topic name for directory
8. **Verify completion** - List all created files before reporting done

## MUST NOT DO

1. **Generate single-page sites** - Always create multiple pages
2. **Skip research phase** - Never rely solely on training data
3. **Use inline styles** - All styling in styles.css
4. **Create broken links** - Test navigation structure
5. **Use placeholder content** - Every page must have real content
6. **Ignore the topic complexity** - Adjust page count appropriately
7. **Skip interactive elements** - Site must be engaging, not just static text
8. **Leave broken navigation** - All prev/next/home links must work

## Output Format

After generating the site, report:

```
✅ Learning site created: ~/learning-pages/[topic-name]/

📄 Files created:
- index.html (overview + TOC)
- page-1.html ([Chapter 1 Title])
- page-2.html ([Chapter 2 Title])
- ... (list all pages)
- styles.css (animations + dark theme)
- script.js (interactivity)

📊 Statistics:
- Total pages: [N]
- Total words: ~[estimate]
- Code examples: [count]
- Interactive elements: [count]

🌐 To view:
Open ~/learning-pages/[topic-name]/index.html in your browser
```

## Example Usage

**As slash command:**
```
/learn-page React Hooks and State Management
```

**With delegate_task:**
```typescript
delegate_task(
  category="writing",
  load_skills=["learn-page"],
  run_in_background=false,
  description="Create learning site about Docker",
  prompt="Create a comprehensive learning site about Docker containers, focusing on practical usage for developers. Include examples with Node.js applications."
)
```

## Tips for Best Results

1. **Be specific in topic:** "PostgreSQL Indexes" is better than "databases"
2. **Mention skill level:** "for beginners" vs "advanced patterns"
3. **Specify focus:** "focusing on React hooks" narrows scope
4. **Request examples:** "with real-world examples from production apps"

## Reference: PostgreSQL Odyssey Analysis

The user has provided a detailed analysis of PostgreSQL Odyssey in:
`~/.config/opencode/POSTGRES_ODYSSEY_ANALYSIS.md`

Reference this for:
- Animation implementation details
- Visual design patterns
- Interactive element ideas
- Content structure inspiration

---

**Remember:** Quality over speed. A well-researched, beautifully designed 5-page site is better than a rushed 10-page site with shallow content.
