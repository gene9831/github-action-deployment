import classes from './Sidebar.module.css'

export interface SidebarProps {
  names?: string[]
  active?: string
  onClick?: (name: string) => void
}

export function Sidebar(props: SidebarProps) {
  const { names = [], active, onClick } = props

  const activeName = names.find((name) => name === active)

  const handleClick = (name: string) => {
    onClick?.(name)
  }

  return (
    <div className="border-r-[1px] border-r-[#d1d9e0] p-4">
      <div className="mb-2 mt-1">
        <h2 className="text-xl font-semibold">Actions</h2>
      </div>
      <ul className={`flex flex-col gap-1 ${classes.list}`}>
        <li
          className={`w-full cursor-pointer rounded-md px-2 py-1.5 text-sm ${classes.item}`}
          data-active={!activeName ? '' : undefined}
          onClick={() => handleClick('')}
        >
          All workflows
        </li>
        {names.length > 0 ? (
          <li className="-mx-2 my-1 h-[1px] bg-[#d1d9e0b3]"></li>
        ) : null}
        {names.map((name) => (
          <li
            key={name}
            className={`w-full cursor-pointer rounded-md px-2 py-1.5 text-sm ${classes.item}`}
            data-active={activeName === name ? '' : undefined}
            onClick={() => handleClick(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
