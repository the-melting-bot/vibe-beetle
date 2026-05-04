import cv2
import numpy as np

def extract_logo(input_path, output_path):
    # Read the image
    img = cv2.imread(input_path, cv2.IMREAD_UNCHANGED)
    if img.shape[2] == 3:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    
    # We want to remove the parchment background.
    # The parchment is light. The porthole rim is dark.
    # Let's convert to grayscale and threshold.
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Parchment is light, so we threshold to find dark things (the logo)
    # The background is roughly 200-240 intensity. The dark rim is < 150.
    _, thresh = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY_INV)
    
    # Morphological closing to fill holes in the logo contour
    kernel = np.ones((5,5), np.uint8)
    thresh = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel, iterations=5)
    
    # Find contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # Find the largest contour (this should be the emblem)
    if not contours:
        print("No contours found!")
        return
        
    largest_contour = max(contours, key=cv2.contourArea)
    
    # Create a mask for the largest contour
    mask = np.zeros(gray.shape, dtype=np.uint8)
    cv2.drawContours(mask, [largest_contour], -1, 255, -1)
    
    # Blur the mask slightly for smoother edges
    mask = cv2.GaussianBlur(mask, (5, 5), 0)
    
    # Apply the mask to the alpha channel
    img[:, :, 3] = mask
    
    # Crop the image to the bounding box of the contour to remove empty space
    x, y, w, h = cv2.boundingRect(largest_contour)
    cropped_img = img[y:y+h, x:x+w]
    
    cv2.imwrite(output_path, cropped_img)
    print("Done!")

extract_logo('/Users/neo/AntiGravity/vibe-beetle/public/vblogo3.png', '/Users/neo/AntiGravity/vibe-beetle/public/vblogo3_trans.png')
