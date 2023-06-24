import React, {useState} from 'react'

const Easy01 = () => {
    const [name, setName] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         setName(event.target.value)
    }
  return (
    <div>
      Name:
      <input type="text" value={name} onChange={handleChange} />
      <h1>{name}</h1>
    </div>
  )
}

export default Easy01