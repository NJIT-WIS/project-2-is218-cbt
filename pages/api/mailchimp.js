import { useState, useEffect } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import utilStyles from '../../styles/utils.module.css'

export default function NewsLetterForm({ className, status, message, onValidated }) {
    const [email, setEmail] = useState()
    const [error, setError] = useState()
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleInputKeyEvent = (event) => {
        setError(null)
        if (event.keyCode === 13) {
            event.preventDefault()
            handleFormSubmit(event)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setError(null)
        if (!email) {
            setError("Please enter a valid email address")
            return null
        }
        onValidated({ EMAIL: email })
    }

    useEffect(() => {
        if (status === "success") {
            setIsSubscribed(true)
        }
    }, [status])

    return (
        <div className={`${utilStyles.flex} ${utilStyles.flexCol} ${utilStyles.w60} ${utilStyles.mr4}`}>
        <h3 className={`${utilStyles.mb2}`}>Subscribe to our Newsletter</h3>
        {isSubscribed ? (
            <p>Successfully subscribed!</p>
        ) : (
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={(event) => handleInputKeyEvent(event)}
                    disabled={status === "sending"}
                    className={`${utilStyles.wFull} ${utilStyles.p2} ${utilStyles.mb4} ${utilStyles.border} ${utilStyles.borderGray} ${utilStyles.rounded}`}
                    required
                />

                <button type="submit" disabled={status === "sending"} className={utilStyles.button}>
                    {"sending" === status ? (
                        <p className="flex items-center justify-center gap-2">
                            Sending... <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin"/>
                        </p>
                    ) : ("Subscribe")}
                </button>
            </form>
        )}
    </div>
    )
}
