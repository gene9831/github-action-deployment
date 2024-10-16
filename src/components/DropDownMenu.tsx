import type { ReactElement } from 'react'
import { cloneElement, useEffect, useRef, useState } from 'react'

export interface DropdownMenuProps {
  children: ReactElement
  options?: { text: string; onClick?: () => void }[]
}

export const DropdownMenu = ({ children, options = [] }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const clonedChild = cloneElement(children, {
    onClick: () => setIsOpen((prev) => !prev),
  })

  // 关闭菜单的函数
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block" ref={ref}>
      {clonedChild}

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white py-1 text-xs text-gray-800 shadow-lg">
          {options.map(({ text, onClick }, index) => (
            <a
              key={index}
              className="block cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                onClick?.()
                setIsOpen(false)
              }}
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
