from PIL import Image, ImageDraw, ImageFont
import os

# Define the font and size
font = ImageFont.truetype('/Users/braden/Code/elo-yale/static/fonts/Habibi-Regular.ttf', size=40)

# Set the desired output width and height for the rectangular image
output_width = 500
output_height = 700

# Iterate through all files in the input folder
input_folder = '/Users/braden/Code/elo-yale/static/Colleges'
for filename in os.listdir(input_folder):
    if filename.endswith('.jpg') or filename.endswith('.png'):
        # Load the square image
        input_path = os.path.join(input_folder, filename)
        square_image = Image.open(input_path)

        # Calculate the center coordinates of the square image
        square_center_x = square_image.width // 2
        square_center_y = square_image.height // 2

        # Create a new blank rectangular image with the desired output size and fill color
        output_image = Image.new('RGB', (output_width, output_height), (255, 255, 255))

        # Calculate the aspect ratio of the square image
        square_aspect_ratio = square_image.width / square_image.height

        # Calculate the new width and height of the square image to fit inside the rectangular image
        new_width = int(output_height * square_aspect_ratio)
        new_height = output_height

        # Resize the square image to the new size
        square_image = square_image.resize((new_width, new_height))

        # Calculate the center coordinates of the resized square image
        square_center_x = square_image.width // 2
        square_center_y = square_image.height // 2

        # Paste the resized square image onto the center of the rectangular image
        output_image.paste(square_image, (output_width//2 - square_center_x, output_height//2 - square_center_y))

        # Draw the top and bottom text on the rectangular image using the Habibi font
        draw = ImageDraw.Draw(output_image)
        top_text = 'Top Text'
        bottom_text = 'Bottom Text'
        top_text_width, top_text_height = draw.textsize(top_text, font)
        bottom_text_width, bottom_text_height = draw.textsize(bottom_text, font)
        draw.text(((output_width - top_text_width) / 2, 20), top_text, font=font, fill=(0, 0, 0))
        draw.text(((output_width - bottom_text_width) / 2, output_height - bottom_text_height - 20), bottom_text, font=font, fill=(0, 0, 0))

        # Save the output image with a new filename in the same directory as the input image
        output_filename = os.path.splitext(filename)[0] + '_rectangular.jpg'
        output_path = os.path.join(input_folder, output_filename)
        output_image.save(output_path)

