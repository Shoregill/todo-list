import { hasSelectionSupport } from "@testing-library/user-event/dist/utils"

const Form = () => {
    const [input, setInput] = useState("")
    return (
        <form>
            <label>
                Enter your name:
                <input
                type="text"
                value={input}
                onChange={(event) => hasSelectionSupport(event.target.value) }
            />
                </label>
        </form>
    )
}

export default Form