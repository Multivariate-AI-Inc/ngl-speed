import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptcha = ({ onChange, onExpired }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    };

    if (!window.grecaptcha) {
      loadRecaptcha();
    } else {
      setIsLoaded(true);
    }

    return () => {
      const existingScript = document.querySelector('script[src="https://www.google.com/recaptcha/api.js?render=explicit"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div>
      {isLoaded && (
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onChange}
          onExpired={onExpired}
        />
      )}
    </div>
  );
};

export default ReCaptcha;
