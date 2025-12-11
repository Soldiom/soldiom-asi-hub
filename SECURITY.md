# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please do the following:

### Please do NOT:
- Open a public GitHub issue
- Disclose the vulnerability publicly before it has been addressed

### Please DO:
1. Email us at **security@soldiom.com** with details about the vulnerability
2. Include steps to reproduce the issue
3. Provide any relevant technical details
4. Suggest a fix if you have one

### What to expect:
- **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours
- **Updates**: We will send you regular updates about our progress
- **Timeline**: We aim to patch critical vulnerabilities within 7 days
- **Credit**: We will credit you in our security advisory (if you wish)

## Security Measures

Our project implements several security measures:

- All API keys are stored as environment variables
- Input validation on all user inputs
- Regular dependency updates
- Security audits using npm audit
- HTTPS only in production
- Rate limiting on API endpoints

## Responsible Disclosure

We ask that you:
- Give us reasonable time to address the issue before public disclosure
- Make a good faith effort to avoid privacy violations and data destruction
- Do not exploit the vulnerability beyond what is necessary to demonstrate it

Thank you for helping keep SOLDIOM ASI Hub and our users safe!
