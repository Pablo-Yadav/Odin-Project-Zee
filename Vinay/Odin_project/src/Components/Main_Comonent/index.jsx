export default function MainComponent(props){
    return (
        <>
            <div className="cell">
                <div className="image"></div>
                <p>{props.sentence}</p>
            </div>
        </>
    )
}
