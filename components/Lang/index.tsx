import Link from "next/link"
import { LangS } from "./styled"

const Lang = () => {
  return (
    <LangS>
      <ul>
        <li><Link href="/">it</Link></li>
        <li><Link href="/">ru</Link></li>
      </ul>
    </LangS>
  )
}

export default Lang