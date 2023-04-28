import {useState} from 'react'
import { Peoples } from './people'
import './App.css'


function Form(){

    const [newName ,setNewName] =useState("")
    const renderedPeople = Peoples.filter(people=>people.firstName.toLowerCase().includes(newName)).map((people,index) =>{
        return(
                 <div className='card' style={{display:'flex',gap:'20px'}}>
                        <div>
                            <img src={people.picture} alt='images'></img>
                        </div>
                        <div>
                            <div>{people.id}</div>
                            <span>{people.title }</span>
                            <span>{people.firstName}</span>
                            <span>{people.lastName}</span>
                        </div>

                    </div>
        )
    })

    
    return(
        <div className='mainPart' >
            <div>
            <input type='text' onChange={e=>setNewName(e.target.value)} placeholder="search by name" style={{width:'70%',margin:'10px 95px',padding:'5px'}}></input>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',columnGap:'70px',marginTop:'50px',marginInline:'100px'}}>
            
            {renderedPeople}
            </div>
        </div>
        
    )
}
export default Form