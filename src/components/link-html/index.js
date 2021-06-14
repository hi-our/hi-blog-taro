import Link from 'next/link'

function NavLink({ className, href = '', name = '', children = '', addHtml = true, isActive, style = {}, title = '' }) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <a className={(className || '') + (isActive ? ' active' : ' ')} style={style} title={title}>{ name || children}</a>
    </Link>
  )
}

export default NavLink