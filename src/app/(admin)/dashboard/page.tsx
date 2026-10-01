
import { TableActions } from '@/components/post-table'
import { Table } from '@/components/ui/table'
import React from 'react'

export default function Dashboard() {
  return (
      <div className='p-5'>
    <div>Dashboard</div>
    <div className='max-w-5xl mx-auto w-5xl'>

      <TableActions/>
    </div>
      </div>
  )
}
