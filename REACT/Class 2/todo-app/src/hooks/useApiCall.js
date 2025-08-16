export default function useApiCall() {
    const [todo, setTodo] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
          response.json().then((data)=>{
           setTodo(data)
            setLoading(false)
            
          })
        })



    }, [])

   return {
    todo, loading
   }
    
}
