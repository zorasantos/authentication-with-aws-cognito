import Image from 'next/image'

type BaseFormProps = {
  children: React.ReactNode
}
export const BaseForm = ({ children }: BaseFormProps) => {
  return (
    <main className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <Image
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            height={50}
            width={50}
            alt="Workflow"
          />
        </div>
        { children }
      </div>
    </main>
  );
}