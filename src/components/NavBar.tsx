const NavBar = () => {
  return (
    <div className="nav absolute left-0 top-0 w-full overflow-hidden px-[6.4rem] py-[3.2rem]">
      <div className="nav_wrapper flex w-full justify-between">
        <span className="nav_logo">Murata | Brasil</span>
        <div className="nav_selector flex items-center gap-[1.6rem]">
          <span>Grid</span>
          <div className="nav_selector_toggle w-24 cursor-pointer rounded-[200rem] border border-solid border-secondary p-[0.4rem]">
            <div className="nav_selector_toggle_circle h-8 w-8 rounded-[200rem] bg-secondary"></div>
          </div>
          <span>Index</span>
        </div>
      </div>
    </div>
  )
}
export default NavBar
