import { RequiredDialogProps } from '@s-oram/react-show-dialog'
import { clsx } from 'clsx'
import { Button } from './Button'

export const ConfirmDialog = ({
	message,
	onModalResult,
}: { message: string } & RequiredDialogProps) => {
	return (
		<div
			className={clsx(
				'absolute top-0 left-0 w-full h-full bg-[#0005]',
				'grid place-items-center',
			)}
		>
			<div className={clsx('bg-white rounded p-6 space-y-4')}>
				<div className="text-2xl font-semibold">Confirmation</div>
				<div className="">{message}</div>
				<div className="flex flex-row justify-end gap-4">
					<Button
						className="hover:bg-stone-200"
						onClick={() => onModalResult('NO')}
					>
						No
					</Button>
					<Button
						className="text-white bg-cyan-500 hover:bg-cyan-400"
						onClick={() => onModalResult('YES')}
					>
						Yes
					</Button>
				</div>
			</div>
		</div>
	)
}
ConfirmDialog.displayName = 'ConfirmDialog'
