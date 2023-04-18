import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/img/logo.png" height="30" width="140" alt="Desua logo" />
    </Link>
  )
}

export default Logo