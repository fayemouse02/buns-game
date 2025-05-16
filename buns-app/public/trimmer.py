from PIL import Image
import os

input_folder = './testpics'        # Your input directory
output_folder = './testpics'      # Output directory for trimmed images

os.makedirs(output_folder, exist_ok=True)

def trim_image(path, save_path):
    img = Image.open(path).convert("RGBA")
    bbox = img.getbbox()  # Bounding box of non-transparent pixels
    if bbox:
        trimmed = img.crop(bbox)
        trimmed.save(save_path)
        print(f"Trimmed '{os.path.basename(path)}': "
              f"{img.size} ➜ {trimmed.size}")
    else:
        print(f"No visible content in: {path}")

for filename in os.listdir(input_folder):
    if filename.lower().endswith(".png"):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)
        trim_image(input_path, output_path)
