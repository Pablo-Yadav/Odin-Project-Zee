import '../../../src/index.css'
export default function Footer(){
    return (
        <>
        <div className="signup">
                <div className="callout">
                    <h3>Call to action! It's time!</h3>
                    <p>Sign up for our product by clicking that button right over there!</p>
                </div>
                <button id="signup-button2" type="submit">Sign up</button>
            </div>
            <div className="copyright">
               <p>Copyright @ The Odin Project 2021</p>
            </div>
        </>
    )
}