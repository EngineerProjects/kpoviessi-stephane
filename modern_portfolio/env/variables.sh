#!/bin/sh

# Read variables from .env and export them
export $(grep -E '^(EMAIL_USER|EMAIL_PASS)=' .env | xargs)

# Optional: Print to verify
echo "EMAIL_USER=$EMAIL_USER"
echo "EMAIL_PASS=$EMAIL_PASS"
