from PIL import Image, ImageDraw

def mask_circle():
    img_path = '/Users/neo/AntiGravity/vibe-beetle/public/vblogo3.png'
    out_path = '/Users/neo/AntiGravity/vibe-beetle/public/vblogo3_trans.png'
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    
    # We want a circular mask.
    mask = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(mask)
    
    # The porthole is in the center. Height is 768. 
    # Let's say radius is 340 to be safe and trim the background perfectly.
    center_x, center_y = w // 2, h // 2
    r = 330
    
    # Draw white circle
    draw.ellipse((center_x - r, center_y - r, center_x + r, center_y + r), fill=255)
    
    # Optional: if it is slightly offset, we can adjust center_y.
    
    # Apply mask
    img.putalpha(mask)
    
    # Crop to the bounding box of the circle to remove huge empty space
    # The new size will be 2r x 2r
    img_cropped = img.crop((center_x - r, center_y - r, center_x + r, center_y + r))
    
    img_cropped.save(out_path, "PNG")

mask_circle()
