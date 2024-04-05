import type { Quote } from '@src/types'
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react'

interface Props {
  data: Quote[]
  title: string
  className?: string
}

export function BasicTable({ data, title, className }: Props) {
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
          {data?.map((quote) => (
            <TableRow key={quote.id}>
              <TableCell>{quote.brand}</TableCell>
              <TableCell>{quote.model}</TableCell>
              <TableCell>{quote.fuelType}</TableCell>
              <TableCell>{quote.usage}</TableCell>
              <TableCell>${quote.price}</TableCell>
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
