export const  Balance = ({value})=>{
    return <div className="flex">
        <div className="font-bold text-lg">
            your Balance
        </div>
        <div className="font-semibold text-lg ml-4">
            Rs {value}
        </div>

    </div>

}