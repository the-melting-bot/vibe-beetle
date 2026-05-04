from rembg import remove
from PIL import Image

input_path = '/Users/neo/.gemini/antigravity/brain/545927db-6f95-48dd-a975-98da835ea7d6/mobile_beetle_icon_1777935583453.png'
output_path = '/Users/neo/AntiGravity/vibe-beetle/public/mobile_beetle_icon.png'

print("Processing image...")
input = Image.open(input_path)
output = remove(input)
output.save(output_path)
print("Saved to", output_path)
