import React from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Name"
        id="name"
        type="text"
        required
      />
      <Input
        label="Email"
        id="email"
        type="email"
        required
      />
      <TextArea
        label="Message"
        id="message"
        rows={4}
        required
      />
      <Button type="submit" fullWidth>
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;