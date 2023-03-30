import { FC, useState } from 'react';
import { Form } from './components/func/Form';
// import { Form } from './components/class/Form';

export type Item = {
  name: string
  age: number
}

const defaultList: Item[] = [
  {
    name: 'vasya',
    age: 20
  }
]

const App: FC = () => {
  const [list, setList] = useState(defaultList)

  const handleChangeList = (item: Item) => {
    setList([...list, item])
  }

  return (
    <div className="App">
      <h2>Hello, React</h2>
      {/* <Form message="hello, otus" /> */}
      <Form message="hello, otus" list={list} handleChangeList={handleChangeList} />
    </div>
  );
}

export default App;
