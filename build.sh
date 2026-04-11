#!/bin/bash

# Check if ADSENSE_ID is set
if [ -z "$ADSENSE_ID" ]; then
  echo "Warning: ADSENSE_ID is not set. Using placeholder."
  exit 0
fi

echo "Injecting ADSENSE_ID: $ADSENSE_ID"

# Replace the placeholder with the actual ID in all HTML files
find . -name "*.html" -exec sed -i "s/ADSENSE_ID_PLACEHOLDER/$ADSENSE_ID/g" {} +

echo "Done!"
