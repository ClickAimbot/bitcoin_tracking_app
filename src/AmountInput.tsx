import Input, {InputProps} from "./Input";

export default function AmountInput(props:InputProps) {
    return (
        <div className="bg-blue-950 border border-white/10">
            <Input 
                placeholder="Amount"
                className="text-right"
                value={props.value} 
                onChange={props.onChange}
            /> 
            <span className="text-white/50 px-4">
                USD
            </span>
        </div>
    );
}