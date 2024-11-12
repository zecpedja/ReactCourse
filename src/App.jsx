import './App.css'


  function WelcomeMessage(name) {
    return <h1>Hello {name}</h1>
  }

  function App() {
  return (
    <div>
    {WelcomeMessage('Alice')}
    <h1>Hello Bob</h1>
    </div>
  )
}
export default App
