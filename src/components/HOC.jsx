const App = ({name}) => {
    return (
        <h1>{name}</h1>
    )
}

//Higher-Order Component
const withData = View => {
    return props =>{
        return (
            <View 
            name = "Tony" 
            {...props}/> //props в конце, чтоби они перетерли то что ми напишем више
        )
    }
}

//Компонент, обернутий в HOC
const EnhancedComponent = withData(App);
<EnhancedComponent />