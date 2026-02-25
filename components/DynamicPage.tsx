import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface DynamicPageProps {
  title: string;
  breadcrumb?: string;
  description?: string;
  content?: string;
  heroImage?: string;
}

function normalizeLegacyText(input: string): string {
  return input
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€“/g, '-')
    .replace(/â€”/g, '-')
    .replace(/â€¢/g, '-')
    .replace(/âœ“/g, '-')
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function isBulletLine(line: string): boolean {
  return /^(?:[\-*])\s+/.test(line);
}

function isVoltageSpec(line: string): boolean {
  return /\bvolt\b/i.test(line);
}

function isTableHeaderBlock(block: string): boolean {
  const compact = block.replace(/\s+/g, ' ').toLowerCase();
  const hasLegacyHeader = compact.includes('model') &&
    compact.includes('capacity (tr)') &&
    compact.includes('qty') &&
    compact.includes('flow rate (cmh)');

  const hasScrollHeader = compact.includes('model') &&
    compact.includes('capacity') &&
    compact.includes('compressors') &&
    compact.includes('flow rate');

  return hasLegacyHeader || hasScrollHeader;
}

function isModelCode(value: string): boolean {
  return /^[a-z]{2,6}-[a-z]{1,4}-\d+/i.test(value.trim());
}

function isCompressorHeading(value: string): boolean {
  return /compressor/i.test(value.trim());
}

function isSpecIntroHeading(value: string): boolean {
  return /^(design data|specifications|features)$/i.test(value.trim());
}

function isFeatureSentenceBlock(block: string): boolean {
  const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length !== 1) return false;
  const text = lines[0];
  if (text.length < 10 || text.length > 140) return false;
  if (!/[.]$/.test(text)) return false;
  if (isModelCode(text) || isVoltageSpec(text)) return false;
  if (/^related portfolios$/i.test(text) || /^features$/i.test(text)) return false;
  return true;
}

function isLikelyLegacyRelatedItem(block: string): boolean {
  const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length !== 1) return false;
  const text = lines[0];
  if (text.length > 90) return false;
  if (/[.:]/.test(text)) return false;
  if (/^more info$/i.test(text)) return false;
  return /^[a-z0-9&()\-\/\s]+$/i.test(text);
}

function renderContentBlocks(content: string) {
  const clean = normalizeLegacyText(content);
  const blocks = clean
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  const rendered: JSX.Element[] = [];
  let index = 0;

  while (index < blocks.length) {
    const block = blocks[index];
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
    const allBullets = lines.length > 0 && lines.every(isBulletLine);
    const headingLike = lines.length === 1 && /:$/.test(lines[0]) && lines[0].length < 90;

    if (/^Download file:\s+/i.test(block)) {
      const file = block.replace(/^Download file:\s+/i, '').trim();
      rendered.push(
        <a
          key={index}
          href={file}
          className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          <Download size={18} className="mr-2" />
          Download Brochure
        </a>
      );
      index += 1;
      continue;
    }

    if (/^related portfolios$/i.test(block.replace(/\s+/g, ' ').trim())) {
      let cursor = index + 1;
      while (cursor < blocks.length && isLikelyLegacyRelatedItem(blocks[cursor])) {
        cursor += 1;
      }
      index = cursor;
      continue;
    }

    if (isSpecIntroHeading(block)) {
      const designSpecs: string[] = [];
      let cursor = index + 1;
      while (cursor < blocks.length) {
        const maybe = blocks[cursor].replace(/\s+/g, ' ').trim();
        if (!maybe) {
          cursor += 1;
          continue;
        }
        if (isTableHeaderBlock(blocks[cursor]) || isCompressorHeading(maybe) || /^related portfolios$/i.test(maybe)) {
          break;
        }
        if (!isSpecIntroHeading(maybe) && maybe.length <= 130) {
          designSpecs.push(maybe.replace(/\.$/, ''));
        }
        cursor += 1;
      }

      if (designSpecs.length > 0) {
        rendered.push(
          <section key={index} className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-6">
            <h3 className="text-xl font-bold text-gray-900">Design Specifications</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {designSpecs.map((spec) => (
                <div key={spec} className="rounded-lg bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">
                  {spec}
                </div>
              ))}
            </div>
          </section>
        );
        index = cursor;
        continue;
      }
    }

    if (/various operating voltages/i.test(block)) {
      const voltages: string[] = [];
      let cursor = index + 1;
      while (cursor < blocks.length) {
        const voltageLine = blocks[cursor].replace(/\s+/g, ' ').trim();
        if (!isVoltageSpec(voltageLine)) break;
        voltages.push(voltageLine.replace(/\.$/, ''));
        cursor += 1;
      }

      if (voltages.length > 0) {
        rendered.push(
          <section key={index} className="rounded-xl border border-blue-100 bg-blue-50/70 p-6">
            <h3 className="text-xl font-bold text-gray-900">Available Operating Voltages</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {voltages.map((voltage) => (
                <div key={voltage} className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm">
                  {voltage}
                </div>
              ))}
            </div>
          </section>
        );
        index = cursor;
        continue;
      }
    }

    const hasCompressorHeading = lines.length === 1 && isCompressorHeading(lines[0]);
    const hasHeaderAfterOptionalFeatures =
      hasCompressorHeading &&
      index + 1 < blocks.length &&
      (
        isTableHeaderBlock(blocks[index + 1]) ||
        (
          /^features$/i.test(blocks[index + 1].replace(/\s+/g, ' ').trim()) &&
          index + 2 < blocks.length &&
          isTableHeaderBlock(blocks[index + 2])
        )
      );
    const hasHeaderInNextBlock = index + 1 < blocks.length && isTableHeaderBlock(blocks[index + 1]);
    const hasHeaderInCurrentBlock = isTableHeaderBlock(block);
    if ((hasCompressorHeading && hasHeaderAfterOptionalFeatures) || hasHeaderInCurrentBlock || (hasCompressorHeading && hasHeaderInNextBlock)) {
      const tableTitle = hasCompressorHeading ? lines[0] : 'Technical Model Data';
      let cursor = index + 1;
      if (hasCompressorHeading && /^features$/i.test((blocks[cursor] || '').replace(/\s+/g, ' ').trim())) {
        cursor += 1;
      }
      if (isTableHeaderBlock(blocks[cursor] || '')) {
        cursor += 1;
      } else if (hasHeaderInCurrentBlock) {
        cursor = index + 1;
      } else {
        cursor = index + 2;
      }

      while (cursor < blocks.length) {
        const firstLine = blocks[cursor].split('\n').map((line) => line.trim()).filter(Boolean)[0] || '';
        if (isModelCode(firstLine)) break;
        if (/^related portfolios$/i.test(blocks[cursor].replace(/\s+/g, ' ').trim())) break;
        cursor += 1;
      }

      const rows: Array<{ model: string; capacity: string; qty: string; flowRate: string }> = [];

      while (cursor < blocks.length) {
        const rowLines = blocks[cursor].split('\n').map((line) => line.trim()).filter(Boolean);
        if (rowLines.length < 4 || !isModelCode(rowLines[0])) break;
        rows.push({
          model: rowLines[0],
          capacity: rowLines[1],
          qty: rowLines[2],
          flowRate: rowLines[3],
        });
        cursor += 1;
      }

      if (rows.length > 0) {
        rendered.push(
          <section key={index} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">{tableTitle}</h3>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full">
                <thead className="bg-slate-900 text-left text-xs uppercase tracking-wide text-slate-100">
                  <tr>
                    <th className="px-4 py-3">Model</th>
                    <th className="px-4 py-3">Capacity (TR)</th>
                    <th className="px-4 py-3">Qty.</th>
                    <th className="px-4 py-3">Flow Rate (CMH)</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.model} className="border-t border-slate-200 text-sm">
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.model}</td>
                      <td className="px-4 py-3 text-slate-700">{row.capacity}</td>
                      <td className="px-4 py-3 text-slate-700">{row.qty}</td>
                      <td className="px-4 py-3 text-slate-700">{row.flowRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
        index = cursor;
        continue;
      }
    }

    if (isFeatureSentenceBlock(block)) {
      const features: string[] = [block.replace(/\.$/, '')];
      let cursor = index + 1;
      while (cursor < blocks.length && isFeatureSentenceBlock(blocks[cursor])) {
        features.push(blocks[cursor].replace(/\.$/, ''));
        cursor += 1;
      }

      if (features.length >= 3) {
        rendered.push(
          <section key={index} className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-6">
            <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 rounded-lg bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">
                  <span className="mt-0.5 text-emerald-600">-</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>
        );
        index = cursor;
        continue;
      }
    }

    if (allBullets) {
      rendered.push(
        <ul key={index} className="list-none space-y-2">
          {lines.map((item, itemIdx) => (
            <li key={itemIdx} className="flex items-start gap-3 leading-relaxed text-gray-700">
              <span className="mt-1 text-blue-600">-</span>
              <span>{item.replace(/^(?:[\-*])\s+/, '')}</span>
            </li>
          ))}
        </ul>
      );
      index += 1;
      continue;
    }

    if (headingLike) {
      rendered.push(
        <h3 key={index} className="mb-1 mt-6 text-2xl font-bold text-gray-900">
          {lines[0].replace(/:$/, '')}
        </h3>
      );
      index += 1;
      continue;
    }

    rendered.push(
      <p key={index} className="leading-relaxed text-gray-700">
        {block}
      </p>
    );
    index += 1;
  }

  return rendered;
}

export default function DynamicPage({
  title,
  breadcrumb = 'Home',
  description,
  content,
  heroImage,
}: DynamicPageProps) {
  const hasContent = Boolean(content && content.trim().length > 0);
  const featureImage = heroImage;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="text-blue-600 hover:text-blue-700">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium text-gray-900">{breadcrumb}</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden py-16 text-white">
          {heroImage ? (
            <>
              <Image src={heroImage} alt={title} fill quality={95} className="image-enhanced object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-blue-950/45 to-emerald-950/30" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900" />
          )}

          <div className="relative mx-auto max-w-7xl px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
            {description && <p className="max-w-2xl text-lg text-blue-100">{normalizeLegacyText(description)}</p>}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-8 rounded-2xl bg-white p-8 shadow-md">
                {hasContent ? (
                  <div className="space-y-5">{renderContentBlocks(content!)}</div>
                ) : (
                  <p className="leading-relaxed text-gray-700">Content for this page is being prepared.</p>
                )}
              </div>
            </div>

            <div>
              {featureImage && (
                <div className="image-3d-shell mb-6">
                  <div className="overflow-hidden rounded-[0.85rem] border border-white/20">
                    <Image
                      src={featureImage}
                      alt={title}
                      width={1280}
                      height={720}
                      quality={95}
                      className="image-enhanced h-auto w-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="sticky top-24 mb-6 rounded-2xl bg-white p-6 shadow-md">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Need More Information?</h3>

                <a
                  href="tel:+91334070500"
                  className="mb-3 flex items-center space-x-3 rounded-lg bg-blue-600 p-3 text-white transition-colors hover:bg-blue-700"
                >
                  <Phone size={20} />
                  <div>
                    <p className="text-xs text-blue-100">Call Us</p>
                    <p className="font-semibold">+91 33 4070 5000</p>
                  </div>
                </a>

                <a
                  href="mailto:info@drycoolchillers.com"
                  className="mb-3 flex items-center space-x-3 rounded-lg bg-blue-600 p-3 text-white transition-colors hover:bg-blue-700"
                >
                  <Mail size={20} />
                  <div>
                    <p className="text-xs text-blue-100">Email Us</p>
                    <p className="text-sm font-semibold">info@drycoolchillers.com</p>
                  </div>
                </a>

                <Link
                  href="/address"
                  className="flex items-center space-x-3 rounded-lg bg-gray-100 p-3 text-gray-700 transition-colors hover:bg-gray-200"
                >
                  <MapPin size={20} />
                  <div>
                    <p className="text-xs text-gray-600">Visit Us</p>
                    <p className="font-semibold">Kolkata, India</p>
                  </div>
                </Link>

                <Link
                  href="/contact"
                  className="mt-6 block w-full rounded-lg bg-blue-600 py-3 text-center font-bold text-white transition-colors hover:bg-blue-700"
                >
                  Get a Quote
                </Link>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md">
                <h3 className="mb-4 font-bold text-gray-900">Quick Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products" className="text-blue-600 hover:text-blue-700">
                      Back to Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-blue-600 hover:text-blue-700">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className="text-blue-600 hover:text-blue-700">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-blue-600 hover:text-blue-700">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-700 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Upgrade Your Cooling System?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-blue-100">
              Contact our expert team today to find the perfect solution for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-blue-600 transition-colors hover:bg-blue-50"
            >
              Get in Touch Today
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
