interface SectionHeadingProps {
  title: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h3 className="text-sectionHeading font-semibold pb-3">{title}</h3>
  )
}