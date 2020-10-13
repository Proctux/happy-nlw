import React from 'react';

interface TitleProps {
  text: string;
}

const Title = (props: TitleProps) => {
  return <h1>{props.text}</h1>
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Title text="Título 1" />
      <Title text="Título 2" />
      <Title text="Título 3" />
      <Title text="Título 4" />
    </div>
  )
}

export default App;
