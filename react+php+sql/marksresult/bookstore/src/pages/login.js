import {useState} from 'react';
import axios from 'axios';
import {Form, Link} from 'react-router-dom';
import './login.css';
export function Login()
{
    const [fullname,setfullname]=useState('');
    const [mobileno,setmobileno]=useState('');
    const [email,setemail]=useState('');
    const [address1,setaddress1]=useState('');

    const handleSubmit=()=>{
        if(fullname.length===0)
        {
            alert("Name is left blank");
        }
        else if(mobileno.length<10 || mobileno.length>10)
        {
            alert('Mobile no to be 10 digits only');
        }
        else if(email.includes("#"))
        {
            alert('Include @ please');
        }
        else
        {
            const url="http://localhost/test/booklogin.php";
            let fData=new FormData();
            fData.append('fullname',fullname);
            fData.append('mobileno',mobileno);
            fData.append('email',email);
            fData.append('address1',address1);
            axios.post(url,fData).then(response=>alert(response.data)).catch(error=>alert(error));
        }
    }


    return(
        <div className="Login">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
            <div className="container">
                
                <div className="form-group">
                    <label for="fullname" className='form-control' id='fullname' >Enter name:</label>
                    <input type="text" className="form-label" name="fullname" value={fullname} onChange={(e)=>setfullname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="mobileno" className='form-control' id='mobileno' >Enter Mobile No:</label>
                    <input type="text" className="form-label" name="mobileno" value={mobileno} onChange={(e)=>setmobileno(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="email" className='form-control' id='email' >Enter Email:</label>
                    <input type="text" className="form-label" name="email" value={email} onChange={(e)=>setemail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="address1" className='form-control' id='address1' >Enter Address:</label>
                    <input type="text" className="form-label" name="address1" value={address1} onChange={(e)=>setaddress1(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" className="submit" name="submit" value="Login" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}