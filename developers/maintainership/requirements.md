# Maintainership Requirements

## Development Skills & Knowledge
- Familiarity with Android’s build process.
- Experience with custom ROM development, kernel modifications, or device tree customization.
- Understanding of Android’s architecture (e.g., HAL, System Services).
- Comfort using Linux-based systems for development (e.g., shell scripting, package management, kernel compilation).
- Strong command of Git for version control, including branching, rebasing, and resolving merge conflicts.
- Experience with collaborative platforms like GitHub, GitLab, or Gerrit for code reviews.

## Device-Specific Requirements
#### Hardware Compatibility
- Ensure **all core hardware components** (e.g., display, audio, touch, GPS) function reliably.
- Minor exceptions may apply for non-critical features (e.g., IR blasters, niche sensors) with justification.

#### Security & Stability
- **SELinux must remain in enforcing mode**; provide logs or audit reports to verify compliance.
- Avoid unstable hacks or workarounds that compromise system integrity or user data.

## Build & Maintenance Requirements
- Maintain **at least one stable unofficial builds** over a week period prior to application.
- Deliver **regular updates** (minimum one per month) with security patches, bug fixes, and feature enhancements.:

## Code & Collaboration Standards
- All contributions **must include proper attribution** (e.g., commit authorship, inline comments, or README credits).
- Adhere to open-source licensing requirements and avoid proprietary code leaks.
- Conduct code reviews to ensure compliance with project guidelines and best practices.

## Testing & Quality Assurance
- Perform **end-to-end testing** for device-specific fixes (e.g., unit tests, user beta testing).
- Validate hardware functionality (e.g., Wi-Fi, Bluetooth, camera, sensors) across multiple usage scenarios.
