import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const form = useRef();

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(emailConfig.publicKey);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Please enter your email address');
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            // EmailJS service configuration
            const templateParams = {
                to_email: email,
                user_email: email,
                to_name: email.split('@')[0], // Use email username as name
                from_name: 'Daily Insider Newsletter',
                subject: 'Welcome to Newsletter!',
                message: `Thank you for subscribing to our newsletter! You'll receive our latest updates and insights directly to your inbox.`,
                reply_to: 'noreply@dailyinsider.com',
            };

            console.log('Sending email with params:', templateParams);

            // Send email using EmailJS
            const result = await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                templateParams
            );

            console.log('Email sent successfully:', result);
            setMessage(`Successfully subscribed! Confirmation email sent to ${email}.`);
            setEmail('');
        } catch (error) {
            console.error('Email sending failed:', error);
            setMessage(`Subscription failed: ${error.text || error.message || 'Please try again.'}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='py-[20px]'>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            <div className="container rounded-[9px] border-[3px] border-[#a3a3a3] p-4">
                <p style={{ fontFamily: '"Roboto Condensed", sans-serif' }} className="text-lg font-bold mb-4">
                    SIGN UP FOR OUR DAILY INSIDER
                </p>

                <form ref={form} onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row">
                        <input
                            className='bg-white border-[1px] border-[#a3a3a3] rounded-tl-[12px] rounded-bl-[12px] sm:rounded-br-[0px] sm:rounded-tr-[0px] rounded-br-[6px] rounded-tr-[6px] px-3 py-2 flex-1'
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                        <button
                            className={`px-6 h-11.5 text-white rounded-tr-[12px] rounded-br-[12px] sm:rounded-tl-[0px] sm:rounded-bl-[0px] rounded-tl-[6px] rounded-bl-[6px] transition-colors ${isLoading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-[#292c2f] hover:bg-[#1a1d20]'
                                }`}
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </div>
                </form>

                {message && (
                    <div className={`mt-3 p-2 rounded text-sm ${message.includes('Successfully subscribed')
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : 'bg-red-100 text-red-700 border border-red-300'
                        }`}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Newsletter;