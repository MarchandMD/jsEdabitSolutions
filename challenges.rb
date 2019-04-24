#1 Difference of Max and Min Numbers in Array
def difference_max_min(arr)
	arr.max - arr.min
end

#2 Repeating Letters
def double_char(str)
	arr = str.split('')
	arr.map{|c| c*2}.join
end

#Vowel Replacer
def replace_vowels(str, ch) 
	str.gsub!(/[aeiouAEIOU]/, ch)
end

#Word Endings
def add_ending(arr, ending)
	arr.each {|word| word << ending}
end

#Purge and Organize
def unique_sort(arr)
	arr.uniq.sort
end

#Count Syllables
def number_syllables(word)
	word.split('-').length
end

#Repeating Letters
def double_char(str)
	arr = str.split('')
	arr.map{|c| c*2}.join
end

#Palindrome?
def is_palindrome(str)
	str.reverse == str
end

#Alphabet Soup
def alphabet_soup(str)
	arr = str.split('')
	arr = arr.sort {|a, b| a <=> b}
	arr.join('')
end

#Get Word Count
def count_words(str)
	arr = str.split(' ')
	arr.length
end

#Count Instances of a Character in a String
def char_count(str1, str2)
	str2.count(str1)
end

#Shuffle the Name
def name_shuffle(str)
	arr = str.split(' ')
	arr.reverse!
	arr.join(' ')
end

#Is the Number Symmetrical?
def is_symetrical?(int)
	int.to_s == int.to_s.reverse
end

#Sort an Array by String Length
def sort_by_length(arr)
	arr.sort {|a,b| a.length <=> b.length}
end

#Multiply by Length
def multiply_by_length(arr)
	arr.map {|num| num * arr.length}
end

#Return the Four Letter Strings
def is_four_letters(arr)
	arr.select {|x| x.length == 4}
end

#Convert Number to Corresponding Month Name
def month_name(num)
	months = [nil, "January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"]
	months[num]
end

#Find the Largest Number in an Array
def find_largest_num(nums)
	nums.max
end

#Generate N-Size Combinations from an Array
def combo(arr, n)
	arr.combination(n).to_a
end

#Calculate Determinant of a 2x2 Matrix
def calc_determinant(matrix)
	matrix_zero = matrix[0]
	matrix_one = matrix[1]
	a = matrix_zero[0]
	b = matrix_zero[1]
	c = matrix_one[0]
	d = matrix_one[1]
	(a * d) - (b * c)
end

#Transform into an Array with No Duplicates
def set(arr)
	arr.uniq
end

#Count the Vowels
def count_vowels(str)
	str.count('aeiouAEIOU')
end

#Filter out Strings from an Array
def filter_list(arr)
	arr.delete_if {|x| x.is_a? String}
end

#return the factorial