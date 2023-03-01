from PIL import Image, ImageDraw, ImageFont
import os

# Define the path to the folder containing the pictures
folder_path = "/Users/braden/Code/elo-yale/static/Colleges/"

# Define the Baskerville font and size
font_path = "/Users/braden/Code/elo-yale/static/fonts/Habibi-Regular.ttf"
font_size = 48

# Loop through each file in the folder
for file_name in os.listdir(folder_path):

    # Load the image file
    image = Image.open(os.path.join(folder_path, file_name))

    # Define the font
    font = ImageFont.truetype(font_path, font_size)

    # Create a draw object
    draw = ImageDraw.Draw(image)

    # Get the size of the text
    text_width, text_height = draw.textsize(file_name[:-4], font=font)

    # Calculate the position of the text
    text_x = (image.width - text_width) // 2
    text_y = 10

    # Draw the text
    draw.text((text_x, text_y), file_name[:-4], font=font, fill=(0, 0, 0))

    # Save the modified image with a new name
    image.save(os.path.join(folder_path, file_name[:-4] + "_card.png"))
