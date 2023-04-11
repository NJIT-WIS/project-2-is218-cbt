import CookieConsent from "react-cookie-consent"

const CookieBanner = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName="MyWebClassCookie"
            expires={150}
        >This website uses cookies to enhance your experience.</CookieConsent>

    )
}