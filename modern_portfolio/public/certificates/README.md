# Certificate Files

If you have PDF certificates, you can add them to this folder and reference them in your certifications data.

## Example:

1. **Add your certificate PDF**: Place `supervised-ml-certificate.pdf` in this folder
2. **Update certifications.ts**: Add the `certificateFile` field:

```typescript
{
  title: "Supervised Machine Learning",
  organization: "DeepLearning.AI (Coursera)",
  issueDate: "2024",
  credentialUrl: "https://coursera.org/verify/MWJS4Q3S2C3L",
  certificateFile: "/certificates/supervised-ml-certificate.pdf", // Add this line
  skills: [...]
}
```

The certificate link will then appear as a downloadable PDF alongside the verification link.
