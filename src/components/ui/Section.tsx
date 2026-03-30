import React from 'react';

type SectionBackground = 'default' | 'surface' | 'primary';

export interface SectionProps {
  children: React.ReactNode;
  background?: SectionBackground;
  className?: string;
  /**
   * When true, the outer background color fills edge-to-edge but the inner
   * content container is still constrained to max-width. Use for sections
   * like the classes section that need a full-bleed background.
   */
  fullBleed?: boolean;
  id?: string;
}

const bgClasses: Record<SectionBackground, string> = {
  default: 'bg-background',
  surface: 'bg-surface',
  primary: 'bg-primary text-[#FAF6F1]',
};

/**
 * Section — shared page section wrapper.
 *
 * Provides consistent max-width (1200px), horizontal padding (px-6 md:px-8),
 * and vertical rhythm (py-16 md:py-24) across all content sections.
 *
 * Per D-10: All page sections should use this component rather than
 * hardcoding Tailwind classes for container width and padding.
 */
export function Section({
  children,
  background = 'default',
  className = '',
  fullBleed = false,
  id,
}: SectionProps) {
  const outer = `${bgClasses[background]} ${fullBleed ? '' : ''}`.trim();
  const inner = 'max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-24';

  if (fullBleed) {
    return (
      <section id={id} className={`${outer} ${className}`.trim()}>
        <div className={inner}>{children}</div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`${inner} ${outer} ${className}`.trim()}
    >
      {children}
    </section>
  );
}

export default Section;
