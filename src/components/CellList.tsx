import { Fragment } from 'react'
import { useTypedSelector } from '../hooks/use-type-selector'
import { Cell } from '../state'

import CellListItem from './CellListItem'
import AddCell from './AddCell'

import './CellList.css'

const CellList: React.FC = () => {
	// @ts-ignore
	const cells = useTypedSelector(({ cells: { order, data } }) => order.map((id) => data[id]))

	const renderedCells = cells.map((cell: Cell) => (
		<Fragment key={cell.id}>
			<CellListItem cell={cell} />
			<AddCell prevCellId={cell.id} />
		</Fragment>
	))

	return (
		<div className='cell-list'>
			<AddCell forceVisible={cells.length === 0} prevCellId={null} />
			{renderedCells}
		</div>
	)
}

export default CellList
