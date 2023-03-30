import { FC, useState } from 'react';
import { Item } from '../../App';
//@ts-ignore
import style from './Form.module.css'

type Props = {
  message: string
  list: Item[]
  handleChangeList: (item: Item) => void
}

export const Form: FC<Props> = ({ message, list, handleChangeList }) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleChangeList({
      name,
      age
    })

    setName('')
    setAge(0)
  }

  return <>
    <p>Hello, with message = {message}</p>
    <button onClick={handleClick}>{count}</button>

    <form onSubmit={handleSubmit} className={style.wrapper}>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <input type="number" value={age} onChange={e => setAge(+e.target.value)} />
      <button style={{backgroundColor: 'red'}}>Save</button>
    </form>
    <button onClick={() => setVisible(!visible)}>{visible ? 'hide' : 'show'}</button>
    <hr />
    {visible &&
        <ul>
          {list.map((item, idx) => <li key={idx}>
            <p>name: {item.name}</p>
            <p>age: {item.age}</p>
          </li>
          )}
        </ul>
    }
  </>
}