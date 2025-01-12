import React,{useState,useEffect} from "react"
const App = () =>{
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [fullName,setFullName] = useState("")
    const handleSubmit = (e) =>{
        if(firstName.trim() === "" && lastName.trim() === ""){
            e.preventDefault(); 
            setFullName("")
        }else{
            setFullName(`${firstName} ${lastName}`)
        }
    }
    return(
        <>
            <form>
                <label>FirstName:</label>
            <input 
                type="text"
                value={firstName}
                onChange = {(e)=>{
                    setFirstName(e.target.value)
                }}
                    required
            />
            <br/>
            <label>LastName:</label>
            <input 
                type="text"
                value={lastName}
                onChange = {(e)=>{
                    setLastName
                        (e.target.value)
                }}
                required
            />
            <br/>
            <button type = "submit" onClick={handleSubmit}>
                Submit
            </button>
            </form>

            {
                fullName && (
                    <>
                        <p>Full Name: {fullName}</p>
                    </>
                )
            }
            

            
        </>
    )
}
export default App 
