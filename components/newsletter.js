import MailchimpSubscribe from "react-mailchimp-subscribe"
import NewsLetterForm from "../pages/api/mailchimp"
import utilStyles from '../styles/utils.module.css'

export default function SubscribeForm() {
    return (
        <footer className={`${utilStyles.flex} ${utilStyles.justifyBetween} ${utilStyles.itemsCenter} ${utilStyles.py4} ${utilStyles.bgGray}`}>
            <div className={`${utilStyles.flex} ${utilStyles.flexCol} ${utilStyles.w50} ${utilStyles.mr4}`}>
                <MailchimpSubscribe
                    url={"https://njit.us21.list-manage.com/subscribe/post?u=ea79003554d60d5967315b895&amp;id=da1dfe1360&amp;f_id=00094de1f0"}
                    render={(props) => {
                        const { status, subscribe, message } = props || {};
                        return (
                            <NewsLetterForm
                                className={`${utilStyles.wFull} ${utilStyles.p2} ${utilStyles.mb4} ${utilStyles.border} ${utilStyles.borderGray} ${utilStyles.rounded}`}
                                status={status}
                                message={message}
                                onValidated={(formData) => subscribe(formData)}
                            />
                        )
                    }}
                />
            </div>

            <div className={`${utilStyles.flex} ${utilStyles.itemsCenter}`}>
                <a href="https://www.facebook.com/ducthuansidco" className={`${utilStyles.mr2} ${utilStyles.textGray}`}>Facebook</a>
                <a href="https://twitter.com/elonmusk" className={`${utilStyles.mr2} ${utilStyles.textGray}`}>Twitter</a>
                <a href="https://www.instagram.com/ai.desires/" className={`${utilStyles.textGray}`}>Instagram</a>
            </div>
        </footer>
    )
}
