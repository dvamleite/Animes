import Link from 'next/link'

function Menu(){
    return(
        <ul className='contentMenu'>
            <li>
                <Link href="/">
                <a>Home</a>
                </Link>
            </li>

            <li>
                <Link href="../components/catalog">
                <a>Catalog</a>
                </Link>
            </li>

            <li>
                <Link href="/#about">
                <a>About</a>
                </Link>
            </li>

        </ul>
    )
}

export default Menu