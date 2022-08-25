import { Cell } from '../state'

import CodeCell from './CodeCell'
import TextEditor from './TextEditor'
import ActionBar from './ActionBar'

import './CellListItem.css'

interface CellListItemsProps {
	cell: Cell
}

const CellListItem: React.FC<CellListItemsProps> = ({ cell }) => {
	let child: JSX.Element
	if (cell.type === 'code') {
		child = (
			<>
				<div className='action-bar-wrapper'>
					<ActionBar id={cell.id} />
				</div>
				<CodeCell cell={cell} />
			</>
		)
	} else {
		child = (
			<>
				<TextEditor cell={cell} />
				<ActionBar id={cell.id} />
			</>
		)
	}

	return <div className='cell-list-item'>{child}</div>
}

export default CellListItem
