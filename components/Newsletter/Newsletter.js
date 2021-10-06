import React,{useEffect, useState} from 'react'
import styles from './newsletter.module.css'
import Buttons from '../Buttons/Buttons'


function Newsletter() {
    const [email,setEmail] = useState("");

    useEffect(()=>{
        console.log(email);
    },[email]);

    return (
        <div className={styles.maincontainer} id="newsletter">
            <h3>Stay Updated!</h3>
            <div className={styles.input_container}>
                <input type="email" name="myemail" id="" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)}/>
                {/* <button className={styles.btn}>Subscribe</button> */}
                <div style={{margin: "1rem"}}>
                <Buttons text="Subscribe" radius="5px"/>
                </div>
            </div>
        </div>
    )
}


export default Newsletter