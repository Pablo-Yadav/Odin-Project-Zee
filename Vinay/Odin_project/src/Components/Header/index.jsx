import '../../../src/index.css'
export default function Header(){
    return(
    <>
      <div className="header">
        <div className="nav">
                <div className="h-logo">Header Logo</div>
                <div className="h-right">
                        <div className="hlink"> header link one </div>
                        <div className="hlink"> header link two </div>
                        <div className="hlink"> header link three </div>
                </div>
            </div>
            <div className="h-content">
                <div className="awesome">
                    <h2>This website is awesome</h2>
                    <p>This website has some subtext that goes here under the main title. It's a smaller font and the color is lower contrast.</p>
                    <button id="signup-button" type="submit">Sign up</button>
                </div>
                <div className="h-image">
                    this is a placeholder for an image.
                </div>
            </div>
         </div>
    </>)
}