import { IconDots } from '@tabler/icons-react'
import clsx from 'clsx'
import { type WorkflowRun } from '../apis/actions'
import DropdownMenu from './DropDownMenu'
import { useState } from 'react'
import { Artifacts } from './Artifacts'
import { Modal } from './Modal'

export interface ColumnOptionsProps {
  className?: string
  item: WorkflowRun
}

export function ColumnOptions({ className = '', item }: ColumnOptionsProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={clsx('flex items-center justify-end', className)}>
      <DropdownMenu
        options={[
          {
            text: 'Download artifacts',
            onClick: () => setIsOpen(true),
          },
        ]}
      >
        <span className="cursor-pointer text-gray-500 hover:text-blue-500">
          <IconDots size={18} />
        </span>
      </DropdownMenu>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Download artifacts"
      >
        <Artifacts id={item.id} />
      </Modal>
    </div>
  )
}
