export default function Wishes(){
    const datas = Array.from({length: 20}, (each)=>each+1)

    return (
        <div>
            {
            datas.map((each, index)=>(
                <div>
                    <span>A</span>
                <div>
                    <p>Sheriff abdulateef</p>
                    <p>Happy birthday sir</p>
                </div>
                </div>
                ))}
        </div>
    )
}