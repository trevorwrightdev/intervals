import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
    children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={`bg-[--purple-3] hover:bg-[--purple-4] text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-200 outline-none focus:ring-2 focus:ring-[--purple-2] focus:ring-offset-2 focus:ring-offset-[--dark-bg] ${className}`}
                {...props}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'

export { Button }
