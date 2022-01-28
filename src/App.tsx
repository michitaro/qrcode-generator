import { useState } from "react"
import QRCode from "./QRCode"

const App = () => {
  const [value, setValue] = useState('')

  return (
    <dl>
      <dd>
        <QRCode value={value} />
      </dd>
      <dd>
        <input size={80} onInput={(e) => setValue((e.target as HTMLInputElement).value)} />
      </dd>
    </dl>
  )
}

export default App