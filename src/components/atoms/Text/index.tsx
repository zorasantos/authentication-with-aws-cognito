type TextProps = {
  text: string;
}
export const Text = ({ text }: TextProps) => {
  return (
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      { text }
    </h2>
  );
}