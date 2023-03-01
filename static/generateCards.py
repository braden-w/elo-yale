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
        text = "Hopper College"
        text_width, text_height = draw.textsize(text, font=font)
        x = (image_copy.width - text_width) / 2
        y = (image_copy.height - text_height) / 2
        draw.text((x, y), text, font=font, fill=(255, 255, 255, 255))

        # Save the modified image with a new filename
        new_filename = os.path.splitext(filename)[0] + "_modified.png"
        image_copy.save(os.path.join(folder_path, new_filename))