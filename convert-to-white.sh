#!/bin/bash
# Convert PNG to white with transparent background
# Usage: ./convert-to-white.sh input.png output.png

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: $0 <input.png> <output.png>"
    exit 1
fi

# Extract alpha channel, convert to white, reapply alpha
convert "$1" \
    \( -clone 0 -alpha extract \) \
    \( -clone 0 -alpha off -fill white -colorize 100% \) \
    -delete 0 \
    -alpha off \
    -compose CopyOpacity \
    -composite \
    "$2"

echo "Converted $1 to white PNG: $2"
