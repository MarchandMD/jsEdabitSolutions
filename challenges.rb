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
def factorial(int)
	int.downto(1).inject(:*)
end

#PI to N Decimal places
def my_pi(n)
	pi = Math::PI
	pi.round(n)
end

#Minimum Removals to Make Sum Even
def minimum_removals(arr)
	if arr.reduce(:+) % 2 == 0
		0
	else
		1
	end
end

#Sum of absolute values
def get_abs_sum(arr)
	arr.map{|el| el.abs}.inject(:+)
end


#Spelling it Out: Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
def spelling(str)
	arr = []
	while str.length > 0 do
		arr << str
		str = str.chop
	end
	arr.reverse
end

#find index of first Vowel
def first_vowel(str)
	str.index(/[aeiouAEIOU]/)
end

#check if an array includes an element
def check(arr, el)
	arr.include? el
end

#remove vowels from string
def remove_vowels(str)
    str.delete!("AEIOUaeiou")
end

#repeat each char of a string n times
def repeat(str, n)
	answer = []
	str.each_char do |c|
		answer<< c*n
	end
	answer.join('')
end

#sum of cubes, or 0 if nums.length == 0
def sum_of_cubes(nums)
	if nums.length == 0
		0
	else
		nums.collect! {|x| x*x*x}
		nums.inject(:+)
	end
end

#count adverbs (ending in ly) in a string
def count_adverbs(sentence)
	answer = []
	sentence.gsub!(/[^\w]/, ' ')
	arr = sentence.split(' ')
	arr.each do |x|
		if x.end_with?("ly")
			answer << x
		end
	end
	answer.length
end

# find all instances of initial_string in words_array
def dictionary(initial, words)
	words.find_all {|el| el.start_with?(initial)}
end

#return true if a string has same number of x's and o's, else false
def xo(str)
	hugs = str.count "oO"
	kisses = str.count "xX"
	hugs == kisses ? true : false;
end

# determine if two strings are anagrams of each other
def is_anagram(s1, s2)
	s1 = s1.downcase
	s2 = s2.downcase
	
	arr1 = []
	arr2 = []
	
	s1.each_codepoint {|el| arr1 << el}
	s2.each_codepoint {|el| arr2 << el}
	
	one = arr1.inject(:+)
	two = arr2.inject(:+)
	
	one == two ?  true : false;
end
#verbose;like me.... :(

#determine str1 last letter is equal to str2 first letter, and str1 first letter is equal to str2 last letter
def is_strange_pair(str1, str2)
	str1[0] == str2[-1] ? str1[-1] == str2[0] ? true: false : false;
end

#count unique characters in two seperate strings
def count_unique(s1, s2)
	word = s1+s2
	arr = word.split('')
	arr.uniq.length
end

#filter strings with repeating characters from an array of strings 
def identical_filter(arr) 
	arr.select {|word| word.chars.uniq.length == 1}
end

#remove first and last letter
def remove_first_last(str)
	str.length <= 2 ? str : str.slice(1..-2);
end


# Testing K^K == N?
def k_to_k(n, k)
	k**k == n? true: false;
end

# Amplify the multiples of 4
def amplify(num)
	answer = []
	1.upto(num) do |i|
		if i%4 == 0
			answer<<i*10
		else
			answer<< i
		end
	end
	answer
end

#Largest Swap
def largest_swap(num)
	num = num.to_s
	if num[0] > num[-1] || num[0] == num[-1]
		 true
	else
		false
	end
end


#flip the boolean, or else boolean expected
def reverse(bool)
	if bool == true
		 false
	elsif bool == false
		 true
	else
		return "boolean expected"
	end
end

#return the min, max, length and average value of an array as  an array
def min_max_len_ave(arr)
	answers = [arr.min, arr.max, arr.length, (arr.inject(:+).to_f/arr.length.to_f)]
end

# Find the mean of an array, to two decimal places
def mean(arr)
	mean = arr.inject(:+).to_f/arr.length.to_f
	mean.round(2)
end

#pull the even numbers from 1 to a given number
def find_even_nums(num)
	arr = (1..num).to_a
	arr.select {|x| x%2 == 0}
end


#Create two functions: a left-shift function and a right-shift function. Each function will take in an array and a single parameter: the number of shifts. or, Array#rotate
def left_shift(arr, num)
	elements = arr.shift(num%arr.length)
	arr + elements
end

def right_shift(arr, num)
	elements = arr.pop(num%arr.length)
	arr.unshift(elements).flatten!
end

#sum the even elements of a 2D array
def sum_of_evens(arr)
	arr = arr.flatten!
	arr = arr.select {|x| x % 2 == 0}
	if arr.length == 0
		0
	else
		arr.inject(:+)
	end
end

#mirror an array
def mirror(arr)
	reverse = arr.reverse
	arr.pop
	arr + reverse
end

#Get the file extension from strings in an array
def get_extension(arr)
	arr.collect do |file|
		file.split('.').pop
	end
end

#map an array of integer to (+1) odd integers and (-1) even integers
def transform(arr)
	arr.collect do |num|
		if num.odd?
			num + 1
		elsif num.even? || num == 0
			num - 1
		end
	end
end

#replace all instances of a string-range in a string with a hash symbol
def replace(str, r)
	 if str.length == 0
        ""
    else
        str.gsub( /[#{r}]/, '#')
    end
end