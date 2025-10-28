import { DocumentCards } from "@/components/information/DocumentCards";

export default function Page() {
  return (
    <div className="flex flex-col items-start justify-start min-h-svh max-w-5xl mx-auto px-4 @5xl/main:px-0">
      <div className="w-full flex items-center justify-center py-16">
        <p className="text-2xl font-semibold">Good Afternoon</p>
      </div>
      <DocumentCards />
    </div>
  );
}
