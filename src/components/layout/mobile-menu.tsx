interface MobileMenuProps {
  sections: { id: string; label: string }[];
  onSelect: (id: string) => void;
}

export default function MobileMenu({ sections, onSelect }: MobileMenuProps) {
  return (
    <nav className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 py-4 space-y-2">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className="block w-full text-left text-white/80 hover:text-white transition-colors capitalize py-2"
          >
            {s.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
