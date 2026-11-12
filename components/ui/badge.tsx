import * as React from 'react';
import { cn } from '@/lib/utils';
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> { className?: string; }
export default function Badge({ className, ...props }: BadgeProps) { return <span className={cn('inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium', className)} {...props} />; }
