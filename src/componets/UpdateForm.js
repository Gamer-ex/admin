import {useForm,} from 'react-hook-form'
import {db} from '../Firebase/config'
import {updateDoc,setDoc, getDoc, doc} from 'firebase/firestore'
import {React,useState,useCallback} from 'react'
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import "./Update.css"

function UpdateForm() {


  const [id,setId]=useState("");   
  const [deets,setDeets]=useState([]) 
  const [flag,setFlag]=useState(false)

    const fetchEvent=async()=>{
      const res=await getDoc(doc(db,"Events",id))
      setDeets(res.data())
      setFlag(true)
    }

  return (
    <div>
    <div class="get">
      <h1>UPDATE EVENT</h1>
       <h3>Enter Event id</h3>
       <input type="text"  placeholder='Event id' onChange={(e)=>setId(e.target.value)}/>
       <button onClick={fetchEvent}>Get</button>
    </div>

    {flag?(
      <form>
      <textarea type="text" placeholder='description' defaultValue={deets.description}/>
      </form>
    )
      :<></>}

  </div>
   
  )
}

export default UpdateForm

