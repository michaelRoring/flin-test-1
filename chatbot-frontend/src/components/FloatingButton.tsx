import { MessageSquare } from "lucide-react";

interface ChatbotProps {
  toggle: () => void;
}

export default function FloatingButton({ toggle }: ChatbotProps) {
  return (
    <>
      <div
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-blue-400 rounded-full  hover:bg-blue-500 cursor-pointer"
        onClick={toggle}
      >
        <MessageSquare />
      </div>
    </>
  );
}
