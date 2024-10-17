import type { PropsWithChildren } from 'react'

export interface ModalProps extends PropsWithChildren {
  title: string
  isOpen: boolean
  onClose: () => void
}

export function Modal({ isOpen, title, children, onClose }: ModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="w-[36rem] rounded-lg bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-md font-semibold">{title}</h2>
        </div>
        <div className="p-4">{children}</div>
        <div className="flex justify-end p-4">
          <button
            className="mr-2 rounded border-[1px] border-gray-300 bg-gray-100 px-3 py-1 text-sm font-medium text-neutral-800"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
