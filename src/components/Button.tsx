import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'icon';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={twMerge(
                clsx(
                    'rounded-full font-bold transition-transform active:scale-95 flex items-center justify-center',
                    {
                        'bg-kids-secondary text-white shadow-lg': variant === 'primary',
                        'bg-white text-kids-bg shadow-md': variant === 'secondary',
                        'bg-transparent hover:bg-white/10': variant === 'icon',
                        'px-4 py-2 text-base': size === 'md' && variant !== 'icon',
                        'px-6 py-3 text-lg': size === 'lg' && variant !== 'icon',
                        'p-2': variant === 'icon',
                    },
                    className
                )
            )}
            {...props}
        >
            {children}
        </button>
    );
}
