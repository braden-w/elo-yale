from PIL import Image, ImageDraw, ImageFont
import os

# set the path of the folder containing square pictures
folder_path = "/Users/braden/Code/elo-yale/static/Colleges"

# set the opacity of the black filter
opacity = 0.5

# Set font and size for the text
font = ImageFont.truetype("/Users/braden/Code/elo-yale/static/fonts/Habibi-Regular.ttf", size=40)

# Iterate through all files in the folder
for filename in os.listdir(folder_path):
    if filename.endswith(".jpg") or filename.endswith(".png"):
        # Open the image and create a copy
        image = Image.open(os.path.join(folder_path, filename))
        image_copy = image.copy()

        # Create a black rectangle with the same size as the image
        black_layer = Image.new("RGBA", image.size, (0, 0, 0, int(255*opacity)))

        # Apply the black filter to the copy of the image
        image_copy.paste(black_layer, (0, 0), black_layer)

        # Add text in the center of the image
        draw = ImageDraw.Draw(image_copy)
        filename_without_png = os.path.splitext(filename)[0]
        line1 = "Most Loved College:"
        line2 = filename_without_png
        text_width1, text_height1 = draw.textsize(line1, font=font)
        text_width2, text_height2 = draw.textsize(line2, font=font)
        x1 = (image_copy.width - text_width1) / 2
        x2 = (image_copy.width - text_width2) / 2
        y = (image_copy.height - text_height1 - text_height2) / 2
        draw.text((x1, y), line1, font=font, fill=(255, 255, 255, 255))
        draw.text((x2, y+text_height1), line2, font=font, fill=(255, 255, 255, 255))

        # Save the modified image with a new filename
        new_filename = os.path.splitext(filename)[0] + "_modified.png"
        image_copy.save(os.path.join(folder_path, new_filename))