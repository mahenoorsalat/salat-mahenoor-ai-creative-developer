"use client";

import { useState } from 'react';
import { Column, Row, Input, Textarea, Button, Heading, Text, useToast } from "@once-ui-system/core";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { addToast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                addToast({
                    variant: "success",
                    message: "Message sent! Check your email for confirmation.",
                });
                setName('');
                setEmail('');
                setMessage('');
            } else {
                addToast({
                    variant: "danger",
                    message: "Failed to send message. Please try again later.",
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            addToast({
                variant: "danger",
                message: "An error occurred. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Column fillWidth gap="24" padding="xl" radius="l" background="surface" border="neutral-alpha-weak">
            <Column gap="8">
                <Heading variant="display-strong-xs">Get in Touch</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                    Have a project in mind? Let's build something extraordinary together.
                </Text>
            </Column>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Column gap="16">
                    <Row gap="16" s={{ direction: 'column' }}>
                        <Input
                            id="name"
                            label="Name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Input
                            id="email"
                            label="Email"
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Row>
                    <Textarea
                        id="message"
                        label="Message"
                        placeholder="Tell me about your project..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        loading={isSubmitting}
                        fillWidth
                    >
                        Send Message
                    </Button>
                </Column>
            </form>
        </Column>
    );
};
