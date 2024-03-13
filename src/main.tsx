import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShowDialogProvider } from '@s-oram/react-show-dialog'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ShowDialogProvider>
			<App />
		</ShowDialogProvider>
	</React.StrictMode>,
)
