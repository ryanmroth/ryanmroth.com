interface VerifyProps {
  text: string;
}

export default function Verify({ text }: VerifyProps) {
  return (
    <span className="inline-flex items-center rounded bg-blue-600 px-2 py-1 text-xs font-medium text-white duration-150 hover:bg-blue-700">
      {text}
    </span>
  );
}
