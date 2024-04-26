import type { RecordResponse } from '@src/types'
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'

interface Props {
  data: RecordResponse[]
  title: string
  className?: string
}

export function TableChart({ data, title, className }: Props) {
  return (
    <>
      <h3 className='text-base font-semibold mb-2 sm:text-lg'>{title}</h3>

      <Table className={className}>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Brand</TableHeaderCell>
            <TableHeaderCell>Model</TableHeaderCell>
            <TableHeaderCell>Fuel Type</TableHeaderCell>
            <TableHeaderCell>Usage</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.brand}</TableCell>
              <TableCell>{record.model}</TableCell>
              <TableCell>{record.fuelType}</TableCell>
              <TableCell>{record.usage}</TableCell>
              <TableCell>${record.price}</TableCell>
              <TableCell>
                <Badge
                  className='text-orange-500 font-semibold'
                  color='orange'
                  size='xs'
                >
                  active
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
