function NavLink({ className, href = '', name = '', children = '', addHtml = true, isActive, style = {}, title = '' }) {
  // Must add passHref to Link
  return (
    <a className={(className || '') + (isActive ? ' active' : ' ')} style={style} title={title}>{name || children}</a>
  )
}

export default NavLink