comparisons = []
colleges = ["Benjamin Franklin College","Berkeley College","Branford College","Davenport College","Ezra Stiles College","Grace Hopper College","Jonathan Edwards College","Morse College","Pauli Murray College","Pierson College","Saybrook College","Silliman College","Timothy Dwight College","Trumbull College"]
for college_index in range(len(colleges)):
	for other_college_index in range(college_index+1,len(colleges)):
		comparison = (colleges[college_index], colleges[other_college_index])
		comparisons.append(comparison)
print(len(comparisons))
results = []
# Randomize comparisons array
import random
random.shuffle(comparisons)
for comparison in comparisons:
	(college, college2) = comparison
	question = f"{college} versus {college2}"
	if input(question) == "1":
		results.append((college, college2))
	else:
		results.append((college2, college))
print(results)