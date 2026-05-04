from PIL import Image, ImageDraw
import sys

def crop_to_circle(img_path, out_path, padding=20):
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    # Assuming the porthole is roughly centered and takes up most of the vertical space.
    # The image is 1408x768. The porthole height is probably ~680 to 720.
    # Let's find the bounding box by looking for the non-parchment pixels.
    # But a simpler way: just create a circular mask of size min(w, h) - padding.
    
    # Actually, the user's emblem is a porthole with some wires sticking out.
    # A circular mask might cut off the wires. 
    # Let's do a simple thresholding floodfill from the corners to make the parchment transparent.
    
    pixels = img.load()
    
    # We will use a basic flood fill from the top-left corner
    # to find all the background pixels.
    # Parchment color from top-left pixel
    bg_color = pixels[0, 0]
    
    # Tolerance for background matching
    tolerance = 40
    
    def color_match(c1, c2):
        return (abs(c1[0]-c2[0]) < tolerance and 
                abs(c1[1]-c2[1]) < tolerance and 
                abs(c1[2]-c2[2]) < tolerance)
    
    stack = [(0, 0), (w-1, 0), (0, h-1), (w-1, h-1), (w//2, 0), (w//2, h-1)]
    visited = set()
    
    while stack:
        x, y = stack.pop()
        if (x, y) in visited:
            continue
        visited.add((x, y))
        
        if color_match(pixels[x, y], bg_color):
            pixels[x, y] = (0, 0, 0, 0)
            
            # Add neighbors
            for dx, dy in [(1,0), (-1,0), (0,1), (0,-1)]:
                nx, ny = x+dx, y+dy
                if 0 <= nx < w and 0 <= ny < h:
                    if (nx, ny) not in visited:
                        stack.append((nx, ny))
                        
    img.save(out_path, "PNG")

crop_to_circle('/Users/neo/AntiGravity/vibe-beetle/public/vblogo3.png', '/Users/neo/AntiGravity/vibe-beetle/public/vblogo3_trans.png')
