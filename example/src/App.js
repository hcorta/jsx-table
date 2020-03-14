import React from 'react'

import { Table, Column, AutoSizer, useGroupBy, useExpanded } from 'react-notable'

import { getData } from './getData'


function customCell({ cellData }) {
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
      <div style={{ height: '60%', background: 'chartreuse', width: `${cellData}%` }}/>
    </div>
  )
}

function customColumnSort({ a, b, sortBy, sortDirection }) {
  if (sortDirection === 'ASC') {
    if (a[sortBy] < b[sortBy]) return -1
    if (a[sortBy] > b[sortBy]) return 1
  } else {
    if (a[sortBy] < b[sortBy]) return 1
    if (a[sortBy] > b[sortBy]) return -1
  }
}

function alertMessage(el, data) {
  let message = { ...data, event: '' }
  return window.alert(`${el} clicked!
  ${JSON.stringify(message)}`)
}

export function App() {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState(getData(500))

  const columns = [
    { header: 'Row Index', dataKey: '', sortable: true, cell: ({ rowIndex }) => `row ${rowIndex}` },
    { header: 'Name', align: 'center', dataKey: 'name', sortable: true },
    { header: 'Completed', dataKey: 'completed', cell: customCell, sortable: true },
    { header: 'Genre', dataKey: 'genre', columnSortMethod: customColumnSort, sortable: true, },
    { header: 'Age', dataKey: 'age', sortable: true, },
    { header: 'Country', dataKey: 'country', sortable: true },
    { header: 'City', dataKey: 'city', sortable: true }
  ]

  function loadMoreRows() {
    const newRows = getData(20)
    setData([...data, ...newRows])
  }

  // const groupedData = useGroupBy({ data, columns, groupBy: ['name', 'country'] })
  // const expandedData = useExpanded({ data: groupedData.data, columns: groupedData.columns })

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div
        style={{
          width: '100%',
          height: '50%',
        }}>
        <AutoSizer>
          {({ width, height }) => (
            <Table
              // id={'custom-table-id'}
              // className={'custom-table-class'}
              // headerClassName={'custom-header-class'}
              // rowClassName={'custom-row-class'}
              height={height}
              columns={columns}
              width={width}
              loadMoreRows={loadMoreRows}
              threshold={10}
              rowHeight={20}
              minColumnWidth={200}
              data={data}
              overscanRowCount={0}
              // pagination={true}
              // paginationHeight={20}
              // pageSize={20}
              // defaultPage={2}
              // onPageChange={props => console.log('PAGINATION', props)}
              virtualized={true}
              sortable={true}
              // onRowClick={row => alertMessage('Row', row)}
              // onCellClick={cell => alertMessage('Cell', cell)}
              // onHeaderClick={header => alertMessage('Header', header)}
              // onColumnSort={props => console.log(props)}
              // noDataMessage={'There is no data'}
              // noDataComponent={({ noDataMessage }) => <span>{noDataMessage}</span>}
              loading={loading}
            />
          )}
        </AutoSizer>
      </div>

      <div
        style={{
          width: '100%',
          height: '50%',
        }}>
        <AutoSizer>
          {({ width, height }) => (
            <Table
              // id={'custom-table-id'}
              // className={'custom-table-class'}
              // headerClassName={'custom-header-class'}
              // rowClassName={'custom-row-class'}
              height={height}
              columns={columns}
              width={width}
              loadMoreRows={loadMoreRows}
              threshold={10}
              rowHeight={20}
              data={data}
              overscanRowCount={0}
              // pagination={true}
              // paginationHeight={20}
              // pageSize={20}
              // defaultPage={2}
              // onPageChange={props => console.log('PAGINATION', props)}
              virtualized={true}
              sortable={true}
              // onRowClick={row => alertMessage('Row', row)}
              // onCellClick={cell => alertMessage('Cell', cell)}
              // onHeaderClick={header => alertMessage('Header', header)}
              // onColumnSort={props => console.log(props)}
              // noDataMessage={'There is no data'}
              // noDataComponent={({ noDataMessage }) => <span>{noDataMessage}</span>}
              loading={loading}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  )
}
