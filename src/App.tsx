import { ConfirmDialog } from './components/ConfirmDialog'
import { useShowDialog } from '@s-oram/react-show-dialog'
import { useState } from 'react'
import { Button } from './components/Button'

function App() {
	const showDialog = useShowDialog()
	const [feedback, setFeedback] = useState<string>()

	const handleModalResult = (modalResult: string) => {
		setFeedback(`The guest said: "${modalResult}"`)
	}

	return (
		<>
			<div className="p-4 space-y-4">
				<h1 className="text-3xl font-semibold">React Show Dialog Example</h1>

				<Button
					className="text-white bg-cyan-500 hover:bg-cyan-400"
					onClick={() =>
						showDialog(ConfirmDialog, handleModalResult, {
							message: 'Are you sure you want to proceed?',
						})
					}
				>
					Show Dialog
				</Button>

				{feedback && <div>{feedback}</div>}
			</div>
		</>
	)
}

export default App
