"use client";

import { useState } from 'react';
import { Column, Row, Input, Textarea, Button, Heading, Text, useToast } from "@once-ui-system/core";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [projectType, setProjectType] = useState('');
    const [budget, setBudget] = useState('');
    const [timeline, setTimeline] = useState('');
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
                body: JSON.stringify({ name, email, projectType, budget, timeline, message }),
            });

            if (response.ok) {
                addToast({
                    variant: "success",
                    message: "Lead classified! Book your slot in the calendar below to secure your call.",
                });
                setName('');
                setEmail('');
                setProjectType('');
                setBudget('');
                setTimeline('');
                setMessage('');
            } else {
                addToast({
                    variant: "danger",
                    message: "Failed to submit. Please feel free to book a slot directly via the calendar.",
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            addToast({
                variant: "danger",
                message: "An error occurred. Please feel free to book directly via the calendar.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Column id="contact" fillWidth gap="40" padding="xl" radius="l" background="surface" border="neutral-alpha-weak">
            <Row fillWidth gap="40" s={{ direction: 'column' }}>
                {/* Form Column */}
                <Column flex={1} gap="24">
                    <Column gap="8">
                        <Heading as="h2" variant="display-strong-xs">Scope Your Project Architecture</Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                            Looking to outsource Next.js builds, automate heavy backend workflows via n8n, or build agentic AI systems? Classify your requirements below.
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

                            {/* Custom Dropdowns using standard Once-UI tokens */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                                <label htmlFor="projectType" style={{ fontSize: 'var(--font-label-default-s-size)', fontWeight: 500, color: 'var(--neutral-on-background-weak)' }}>
                                    Project Classification
                                </label>
                                <select
                                    id="projectType"
                                    value={projectType}
                                    onChange={(e) => setProjectType(e.target.value)}
                                    required
                                    style={{
                                        backgroundColor: 'var(--neutral-alpha-weak)',
                                        border: '1px solid var(--neutral-alpha-medium)',
                                        borderRadius: 'var(--radius-m)',
                                        padding: '12px 16px',
                                        color: 'var(--neutral-on-background-strong)',
                                        fontSize: 'var(--font-body-default-m-size)',
                                        outline: 'none',
                                        transition: 'border-color 0.2s',
                                        width: '100%',
                                        cursor: 'pointer'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-alpha-strong)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--neutral-alpha-medium)'}
                                >
                                    <option value="" style={{ background: '#0a0a0a' }}>Select classification...</option>
                                    <option value="Next.js Custom SaaS Production" style={{ background: '#0a0a0a' }}>Next.js Custom SaaS Production</option>
                                    <option value="n8n Workflow & API Automations" style={{ background: '#0a0a0a' }}>n8n Workflow & API Automations</option>
                                    <option value="Agentic AI & Vector Database Implementation" style={{ background: '#0a0a0a' }}>Agentic AI & Vector Database Implementation</option>
                                    <option value="Comprehensive UI/UX Product Strategy" style={{ background: '#0a0a0a' }}>Comprehensive UI/UX Product Strategy</option>
                                </select>
                            </div>

                            <Row gap="16" s={{ direction: 'column' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                                    <label htmlFor="budget" style={{ fontSize: 'var(--font-label-default-s-size)', fontWeight: 500, color: 'var(--neutral-on-background-weak)' }}>
                                        Allocated Budget (USD)
                                    </label>
                                    <select
                                        id="budget"
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                        required
                                        style={{
                                            backgroundColor: 'var(--neutral-alpha-weak)',
                                            border: '1px solid var(--neutral-alpha-medium)',
                                            borderRadius: 'var(--radius-m)',
                                            padding: '12px 16px',
                                            color: 'var(--neutral-on-background-strong)',
                                            fontSize: 'var(--font-body-default-m-size)',
                                            outline: 'none',
                                            transition: 'border-color 0.2s',
                                            width: '100%',
                                            cursor: 'pointer'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--brand-alpha-strong)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--neutral-alpha-medium)'}
                                    >
                                        <option value="" style={{ background: '#0a0a0a' }}>Select budget range...</option>
                                        <option value="Under $1,000" style={{ background: '#0a0a0a' }}>Under $1,000 (Quick Audit / Fix)</option>
                                        <option value="$1,000 — $3,000" style={{ background: '#0a0a0a' }}>$1,000 — $3,000 (Standard MVP / Automation)</option>
                                        <option value="$3,000 — $5,000" style={{ background: '#0a0a0a' }}>$3,000 — $5,000 (Full MVP Build)</option>
                                        <option value="$5,000 — $10,000+" style={{ background: '#0a0a0a' }}>$5,000+ (Enterprise Agent Systems)</option>
                                    </select>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                                    <label htmlFor="timeline" style={{ fontSize: 'var(--font-label-default-s-size)', fontWeight: 500, color: 'var(--neutral-on-background-weak)' }}>
                                        Expected Timeline
                                    </label>
                                    <select
                                        id="timeline"
                                        value={timeline}
                                        onChange={(e) => setTimeline(e.target.value)}
                                        required
                                        style={{
                                            backgroundColor: 'var(--neutral-alpha-weak)',
                                            border: '1px solid var(--neutral-alpha-medium)',
                                            borderRadius: 'var(--radius-m)',
                                            padding: '12px 16px',
                                            color: 'var(--neutral-on-background-strong)',
                                            fontSize: 'var(--font-body-default-m-size)',
                                            outline: 'none',
                                            transition: 'border-color 0.2s',
                                            width: '100%',
                                            cursor: 'pointer'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--brand-alpha-strong)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--neutral-alpha-medium)'}
                                    >
                                        <option value="" style={{ background: '#0a0a0a' }}>Select timeframe...</option>
                                        <option value="Immediate" style={{ background: '#0a0a0a' }}>Immediate (Within 7 Days)</option>
                                        <option value="Within 1 month" style={{ background: '#0a0a0a' }}>Within 1 Month</option>
                                        <option value="Flexible" style={{ background: '#0a0a0a' }}>Flexible / Exploring</option>
                                    </select>
                                </div>
                            </Row>

                            <Textarea
                                id="message"
                                label="Key Technical Bottlenecks"
                                placeholder="Describe your current software bottleneck, workflow pain, or target blueprint goals..."
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
                                Initialize Scoping Session Proposal
                            </Button>
                        </Column>
                    </form>
                </Column>

                {/* Calendar Column */}
                <Column flex={1} gap="24" vertical="start">
                    <Column gap="8">
                        <Heading as="h2" variant="display-strong-xs">Instant Calendar Booking</Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                            Want to bypass proposal waits? Use the interactive calendar below to secure your 15-minute scoping call slot instantly.
                        </Text>
                    </Column>
                    <div style={{ width: '100%', height: '490px', borderRadius: 'var(--radius-l)', overflow: 'hidden', border: '1px solid var(--neutral-alpha-weak)', position: 'relative' }}>
                        <iframe 
                            src="https://calendly.com/salatmahenoor7-8-6/30min?embed_domain=salat-mahenoor-ai-creative-developer.vercel.app&embed_type=Inline&background_color=0a0a0a&text_color=ffffff&primary_color=3399cc"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ minHeight: '490px' }}
                        />
                    </div>
                </Column>
            </Row>
        </Column>
    );
};
