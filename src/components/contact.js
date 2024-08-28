function Contact(){
    return(
        <>
        <div className="contact">
            <form onSubmit={() => alert("Thank you for your message, we will look to it shortly")}>
            <h1>Contact us</h1>
            <label >Name</label><br></br>
            <input type="text" required></input><br></br>
            <label >Mail</label><br></br>
            <input type="text" required></input><br></br>
            <label >Message</label><br></br>
            <textarea required></textarea><br></br>
            <button className="subm" type="submit">Submit</button>
            </form> 
            <div className="footer">
                <ul>
                    <li className="title">Developed by</li>
                    <li>Member1</li>
                    <li>Member2</li>
                    <li>Member3</li>
                    <li>Member4</li>
                    <li>Member5</li>
                </ul>
                <ul>
                    <li className="title">Our Branches</li>
                    <li>Branch1</li>
                    <li>Branch2</li>
                    <li>Branch3</li>
                    <li>Branch4</li>
                    <li>Branch5</li>
                </ul>
            </div>
            <div className="foo">
                <h2>Our Thanks to</h2>
                <p>----People who supported----</p>
            </div>

        </div>

        </>
    )
}

export default Contact;