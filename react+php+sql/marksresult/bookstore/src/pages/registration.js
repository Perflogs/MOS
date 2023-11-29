import {useState} from 'react';
import axios from 'axios';
import './registration.css';
import {Route,Link} from 'react-router-dom';

export function Registration()
{
    const [bookname,setbookname]=useState('');
    const [quantity,setquantity]=useState(0);
    const [price,setprice]=useState(0);
    const handleSubmit=()=>{
    if(quantity<0 || price<0)
    {
        alert('Quantity cannot be negative OR price cannot be negative');
    }
    else
    {
        const url="http://localhost/test/bookregistration.php";
        let fData=new FormData();
        fData.append('bookname',bookname);
        fData.append('quantity',quantity);
        fData.append('price',price);
        axios.post(url,fData).then(response=>alert(response.data)).catch(error=>alert(error));
    }
    }



    return(
        <div className="Registration">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
            <form>
            <div className="container">
                <div className="form-group">
                    <label for='bookname' className="form-label" id='bookname'>Enter Book Name</label>
                    <select className="form-select" id="bookname" name="bookname" value={bookname} onChange={(e)=>setbookname(e.target.value)}>
                    <option value="meinkamphf">Mein Kamphf</option>
                        <option value="young">Young and Broke</option>
                        <option value="matilda">Matilda</option>
                        
                    </select>
                </div>
                <div className="form-group">
                    <label for='quantity' className="form-label" id='quantity'>Enter Quantity</label>
                    <input type="number" className="form-control" id="quantity" name="quantity"  value={quantity} onChange={(e)=>setquantity(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for='price' className="form-label" id='price'>Enter Price</label>
                    <input type="number" className="form-control" id="price" name="price" value={price} onChange={(e)=>setprice(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="submit" className="submit" name="submit" value="Buy" onClick={handleSubmit} />
                </div>
            </div>
            </form>
            
        </div>
    )
}