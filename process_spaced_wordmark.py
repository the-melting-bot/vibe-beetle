from rembg import remove
from PIL import Image

input_path = '/Users/neo/.gemini/antigravity/brain/545927db-6f95-48dd-a975-98da835ea7d6/vibe_beetle_spaced_logo_1777936801969.png'
output_path = '/Users/neo/AntiGravity/vibe-beetle/public/vibe_beetle_wordmark_spaced.png'

input_img = Image.open(input_path).convert("RGBA")
# Remove background
no_bg = remove(input_img)

# Crop to bounding box of non-transparent pixels
bbox = no_bg.getbbox()
if bbox:
    # Add a little padding
    pad = 20
    new_bbox = (
        max(0, bbox[0] - pad),
        max(0, bbox[1] - pad),
        min(no_bg.width, bbox[2] + pad),
        min(no_bg.height, bbox[3] + pad)
    )
    no_bg = no_bg.crop(new_bbox)

no_bg.save(output_path)
print("Saved cropped spaced logo to", output_path)
