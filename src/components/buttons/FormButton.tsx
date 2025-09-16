import React from 'react';

type Variant = 'primary' | 'secondary' | 'danger';

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function FormButton({
  type = 'button',
  variant = 'primary',
  children,
  className = '',
  ...props
}: FormButtonProps) {
  const baseStyles =
    'p-2 rounded-xl font-bold ring-offset-natural-900 focus:outline-none focus:ring-1 focus:ring-offset-4 hover:cursor-pointer my-2';

  const variantStyles: Record<Variant, string> = {
    primary: 'bg-orange-700 text-natural-900 hover:bg-orange-500 focus:ring-natural-0',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
  };

  return (
    <button type={type} {...props} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
}
