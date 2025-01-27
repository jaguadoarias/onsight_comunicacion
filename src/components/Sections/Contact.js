import React from "react";
import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";

const ContactSection = styled.section`
  padding: var(--spacing-xl) 0;
  background: var(--color-bg-dark);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
  }
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-xl);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: var(--font-size-regular);
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.2);
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-25px) scale(0.8);
    color: var(--color-primary);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: var(--font-size-regular);
  outline: none;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  resize: none;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.2);
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-25px) scale(0.8);
    color: var(--color-primary);
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: var(--color-primary);
  color: #fff;
  padding: var(--spacing-md);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-semibold);
  transition: all 0.3s ease;
  margin-top: var(--spacing-md);

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Label = styled.label`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  pointer-events: none;

  ${TextArea} ~ & {
    top: var(--spacing-md);
    transform: translateY(0);
  }
`;

const ContactContainer = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  font-size: calc(var(--font-size-xlarge) + 2px);
  font-weight: var(--font-weight-bold);
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: var(--spacing-lg);
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Title>Contacto</Title>
        <Form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>
          <FormGroup>
            <Input type="text" name="name" placeholder=" " required />
            <Label>Name</Label>
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" placeholder=" " required />
            <Label>Email</Label>
          </FormGroup>
          <FormGroup>
            <TextArea name="message" placeholder=" " required />
            <Label>Message</Label>
          </FormGroup>
          <Button type="submit">
            <FaPaperPlane /> Enviar
          </Button>
        </Form>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
