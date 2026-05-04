from PIL import Image

input_path = '/Users/neo/AntiGravity/vibe-beetle/public/vibe_beetle_wordmark_spaced.png'
output_path = '/Users/neo/AntiGravity/vibe-beetle/public/cyber_beetle_isolated.png'

img = Image.open(input_path).convert("RGBA")

# The beetle is on the left. The image is very wide.
# Let's crop the left 1/3rd of the image.
width, height = img.size
left_part = img.crop((0, 0, width // 3, height))

# Get bounding box of the non-transparent pixels in the left part
bbox = left_part.getbbox()
if bbox:
    beetle = left_part.crop(bbox)
    beetle.save(output_path)
    print("Saved isolated beetle to", output_path)
else:
    print("Failed to find beetle")
