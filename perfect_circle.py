from PIL import Image, ImageDraw

def mask_circle():
    img_path = '/Users/neo/AntiGravity/vibe-beetle/public/vblogo3.png'
    out_path = '/Users/neo/AntiGravity/vibe-beetle/public/vblogo_final.png'
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    
    mask = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(mask)
    
    # 1408 x 768
    center_x, center_y = w // 2, h // 2
    r = 300 # very tight radius to avoid any parchment!
    
    # draw a white circle
    draw.ellipse((center_x - r, center_y - r, center_x + r, center_y + r), fill=255)
    
    img.putalpha(mask)
    
    img_cropped = img.crop((center_x - r, center_y - r, center_x + r, center_y + r))
    
    img_cropped.save(out_path, "PNG")
    print("Done generating vblogo_final.png")

mask_circle()
