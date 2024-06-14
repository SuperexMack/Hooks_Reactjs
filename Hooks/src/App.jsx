import { useState , useEffect, useMemo} from 'react'
import './App.css'

function App() {

  const [officeIncome , setOfficeincome] = useState({offincome:0})
  const [freelancingIncome , setFreelancingIncome] = useState({gigIncome:0})
  const [revenue , setRevenue] = useState({rev:0})

  console.log("some rendering is going on")

  

  useEffect(()=>{setTimeout(()=>{
   setOfficeincome({offincome:900})
  },3000)
}, [])

  useEffect(()=>{setTimeout(()=>{
   setFreelancingIncome({gigIncome:300})
  },1000)
} , [])

 useEffect(()=>{
  setRevenue({rev:300})
} , [])

  let total = freelancingIncome.gigIncome + officeIncome.offincome

  const ama = useMemo(()=>{
  console.log("first")
  return revenue.rev
  },[])
 

  return (
    <>
     <h1>Your total income is : {total}</h1>
     <h1>Your revenue is  : {ama}</h1>
    </>
  )
}

export default App
