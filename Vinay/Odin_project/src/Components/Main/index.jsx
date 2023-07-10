import '../../../src/index.css'
import MainComponent from '../Main_Comonent';
export default function Main(){
    const params=[
        "this is some subtext under an illustration or image1",
        "this is some subtext under an illustration or image2",
        "this is some subtext under an illustration or image3",
        "this is some subtext under an illustration or image4",
    ];
    return (
        <>
        <div className="container1">
                <h2 style={{"text-align": "center"}}>Some random information</h2>
                <div className="matter">
                    {
                        params.map((text) =>{
                            return (
                                    <MainComponent sentence={text} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="container2">
                <p id="quote">
                    This is an inspiring quote, or a testimonal from a customer.
                    Maybe its just filling up space, or maybe people will actually
                    read it. Who knows? All I knwo is that it looks nice.
                </p>
                <p id="author"><strong>-Thor, God of Thunder</strong></p>
            </div>
        </>
    )
}