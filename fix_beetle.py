from PIL import Image

input_path = '/Users/neo/AntiGravity/vibe-beetle/public/cyber_beetle_isolated.png'
output_path = '/Users/neo/AntiGravity/vibe-beetle/public/cyber_beetle_isolated.png'

img = Image.open(input_path).convert("RGBA")
# The V is on the right. By cropping the left 220 pixels, we isolate the beetle.
beetle = img.crop((0, 0, 220, img.height))

bbox = beetle.getbbox()
if bbox:
    beetle = beetle.crop(bbox)
    beetle.save(output_path)
    print("Fixed isolated beetle successfully.")
