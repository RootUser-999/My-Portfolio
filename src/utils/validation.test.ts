import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, validateEmail, sanitizeInput } from './validation.ts';

test('validateEmail accurately validates correct and invalid email formats', () => {
  assert.equal(validateEmail('shahzabaman971@gmail.com'), true);
  assert.equal(validateEmail('test.dev+extra@example.org'), true);
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('missing-domain@'), false);
  assert.equal(validateEmail('@domain.com'), false);
});

test('sanitizeInput strips tags and limits upper bound', () => {
  assert.equal(sanitizeInput('<script>alert("xss")</script>Hello'), 'scriptalert("xss")/scriptHello');
  assert.equal(sanitizeInput('   Clean String   '), 'Clean String');
});

test('validateContactForm catches empty fields and honeypot spam traps', () => {
  // Empty form
  const emptyRes = validateContactForm({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  assert.equal(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.fullName);
  assert.ok(emptyRes.errors.email);
  assert.ok(emptyRes.errors.subject);
  assert.ok(emptyRes.errors.message);

  // Honeypot trap triggered
  const botRes = validateContactForm({
    fullName: 'Bot User',
    email: 'bot@example.com',
    subject: 'Inquiry',
    message: 'Testing bot spam automated form submission',
    honeypot: 'http://spam.url',
  });
  assert.equal(botRes.isValid, false);
  assert.equal(botRes.errors.honeypot, 'Automated submission detected.');

  // Valid submission
  const validRes = validateContactForm({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'Collaboration on AI Engineering Project',
    message: 'Hello Shahzeb, I came across your portfolio and would love to discuss a full-stack opportunity.',
  });
  assert.equal(validRes.isValid, true);
  assert.equal(Object.keys(validRes.errors).length, 0);
});
