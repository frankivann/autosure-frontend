import { Top3Brand } from '@src/types'
import { BarList, Card } from '@tremor/react'

interface Props {
  data: Top3Brand[]
  title: string
  className?: string
}

export const BarListChart = ({ data, title, className }: Props) => (
  <Card className={className}>
    <h3 className='text-base font-semibold mb-2 sm:text-lg'>{title}</h3>
    <BarList
      data={data}
      color='orange'
    />
  </Card>
)
