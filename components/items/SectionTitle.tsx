// components/ui/SectionTitle.tsx
export default function SectionTitle({ title }: { title: string }) {
    return (
      <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-300">{title}</h2>
    );
  }