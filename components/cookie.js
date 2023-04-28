import CookieConsent, { Cookies } from "react-cookie-consent"

export default function CookieDisplay() {
    return (
        <CookieConsent location="bottom" buttonText="Agree" cookieName="myAwesomeCookieName2"
                        style={{ background: "#2B373B" }}
                        buttonStyle={{ color: "#4e503b", fontSize: "14px" }} expires={150}>
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}>Learn More</span>
        </CookieConsent>
    )
}