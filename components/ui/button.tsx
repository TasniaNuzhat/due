import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { className?: string; asChild?: boolean; }
export default function Button({ className, asChild = false, type = 'button', ...props }: ButtonProps) { const Comp = asChild ? Slot : 'button'; return <Comp type={asChild ? undefined : type} className={cn('inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50', className)} {...props} />; }
