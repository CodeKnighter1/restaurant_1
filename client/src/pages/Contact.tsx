import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="container flex">
                    <div className="max-w-xl mx-auto my-4 bg-white p-4 rounded-md shadow-sm">
                        <div className="text-center">
                            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                                {t("contact_us")}
                            </h1>
                            <p className="text-gray-400 dark:text-gray-400">
                                {t("contact_us_text")}
                            </p>
                        </div>
                        <div className="m-4">
                            <form action="https://api.web3forms.com/submit" method="POST" id="form" className="needs-validation" noValidate>
                                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                                <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                                {/* <input type="checkbox" name="botcheck" id="" style="display: none;" /> */}

                                <div className="flex mb-4 space-x-4">
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="fname" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">{t("contact_fn")}</label>
                                        <input type="text" name="name" id="first_name" placeholder="John" required className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                                        <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                                            Please provide your first name.
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="lname" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">{t("contact_ln")}</label>
                                        <input type="text" name="last_name" id="lname" placeholder="Doe" required className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                                        <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                                            Please provide your last name.
                                        </div>  
                                    </div>
                                </div>

                                <div className="flex mb-4 space-x-4">
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">{t("contact_email")}</label>
                                        <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                                        <div className="empty-feedback text-red-400 text-sm mt-1">
                                            Please provide your email address.
                                        </div>
                                        <div className="invalid-feedback text-red-400 text-sm mt-1">
                                            Please provide a valid email address.
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="phone" className="block text-sm mb-2 text-gray-600 dark:text-gray-400">{t("contact_phone")}</label>
                                        <input type="text" name="phone" id="phone" placeholder="+99820 000-00-00" required className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />

                                        <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                                            Please provide your phone number.
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">{t("contact_message")}</label>

                                    <textarea  name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" required></textarea>
                                    <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                                        Please enter your message.
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <button type="submit" className="w-full px-3 py-3 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                                        {t("contact_send")}
                                    </button>
                                </div>
                                <p className="text-base text-center text-gray-400" id="result"></p>
                            </form>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>

    )
}

export default Contact