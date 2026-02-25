import os
import re
import json

def clean_html(text):
    # Remove HTML tags
    text = re.sub(r'<script[^>]*>.*?</script>', '', text, flags=re.DOTALL)
    text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
    text = re.sub(r'<[^>]+>', '', text)
    # Decode HTML entities
    text = text.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&#038;', '&')
    # Clean whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def extract_content(html_file):
    with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    # Extract title
    title_match = re.search(r'<h2 id="titlebar-title">([^<]+)</h2>', html)
    title = title_match.group(1).strip() if title_match else ''
    
    # Extract description from titlebar
    desc_match = re.search(r'<div class="titlebar-text-content">(.*?)</div>', html, re.DOTALL)
    description = clean_html(desc_match.group(1)) if desc_match else ''
    
    # Extract main content
    content_match = re.search(r'<div id="the-content"[^>]*>(.*?)</div></div><!-- /\.container --></div><!-- /#page-content -->', html, re.DOTALL)
    if content_match:
        content = clean_html(content_match.group(1))
    else:
        content = ''
    
    # Extract meta description if no titlebar description
    if not description:
        meta_match = re.search(r'<meta name="description" content="([^"]+)"', html)
        description = meta_match.group(1) if meta_match else ''
    
    return {
        'title': title,
        'description': description,
        'content': content
    }

# All pages to extract
pages = [
    'air-cooled-screw-chiller', 'inverter-screw-chiller', 'buy-vfd-chiller',
    'inverter-scroll-chiller', 'air-chiller', 'chiller-for-plastic-industry',
    'batching-plant-chiller', 'ammonia-milk-chillers', 'brine-chillers',
    'hvac-chiller', 'about-us', 'our-profile', 'quality-assurance',
    'accreditations', 'our-clients', 'our-team'
]

base_path = r'c:\Users\dec22\Desktop\drycool\www.drycoolchillers.com'
output = {}

for page in pages:
    html_path = os.path.join(base_path, page, 'index.html')
    if os.path.exists(html_path):
        print(f'Extracting: {page}')
        output[page] = extract_content(html_path)
    else:
        print(f'Not found: {page}')

# Save to JSON
with open('extracted-content.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f'\nExtracted {len(output)} pages')
