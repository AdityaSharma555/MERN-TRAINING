import React, {useState} from 'react'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState("");

  const handleEvent = (e) => {
    e.preventDefault();
    console.log({
        email : email,
        password : password
    });
  }

  return (
    <div className=''>
        <div className=''>

        </div>

        <div className='w-1/2 flex flex-col justify-center items-center gap-5'>
            <h1 className=''>Welcome Back</h1>

            <form onSubmit={(handleEvent)} action="">

                <input onChange={(e)=>{
                    console.log(e);
                }} value={email} type="text" placeholder='Email'/>

                <input onChange={(e)=> {
                    console.log(e);
                }} type="text" placeholder='password'/>

                <button type='submit'>Login</button>

            </form>
            
        </div>
    </div>


  )
}
