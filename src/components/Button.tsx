import { clsx } from 'clsx'

export const Button = ({
	children,
	className,
	...rest
}: JSX.IntrinsicElements['button']) => {
	return (
		<button
			className={clsx('font-semibold px-4 py-2 rounded', className)}
			{...rest}
		>
			{children}
		</button>
	)
}
Button.displayName = 'Button'
