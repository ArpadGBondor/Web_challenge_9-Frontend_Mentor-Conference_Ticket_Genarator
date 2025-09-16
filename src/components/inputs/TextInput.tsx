import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: string | null;
  setError?: (msg: string) => null;
  clearError?: () => null;
}

export default function TextInput({ id, label, error, ...props }: TextInputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="font-medium text-natural-0">
          {label}
        </label>
      )}
      <input
        id={id}
        {...props}
        className={`p-4 border bg-natural-500-trans hover:bg-natural-500 text-natural-0 rounded-xl focus:outline-none ring-offset-natural-900 focus:ring-1 focus:ring-offset-4 focus:ring-natural-0 ${
          props.className ?? ''
        } ${error ? 'border-orange-500' : ''}`}
      />

      {error && (
        <div className={`flex items-center gap-2 text-xs text-orange-500`}>
          <span className="flex items-center justify-center w-4 h-4 rounded-full border border-natural-300 text-[10px]">
            i
          </span>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
