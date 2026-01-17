import React from 'react';
import Container from './ui/Container';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-gray-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get in touch with our team for any inquiries
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <ContactForm />
          </div>
          <div className="">
            <ContactInfo />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;