
const Heading = () => (
    <h1>This Is My Heading Component</h1>
)

// componet - componet is just a function that returns jsx code
const App = () => (
    <div>
        {/* Component Composition  */}
        <Heading />
        <h1>Hello i am a app compoent</h1>
    </div>
)

export default App; 