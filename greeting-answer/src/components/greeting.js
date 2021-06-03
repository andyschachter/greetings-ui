import React, {useState} from 'react'

const Greeting = () => {

  const [name, setName] = useState('')

  const updateName = (event) => {
    setName(`It's nice to meet you ${event.target.value}`)
  }

  return (
    <div className="Greeting">
      <h2>To Whom Am I Speaking?</h2>
      <input type="text" name="displayName" placeholder="Please Enter You Name" onChange={updateName} />
      <div>{name}</div>
    </div>
  )
}

export default Greeting