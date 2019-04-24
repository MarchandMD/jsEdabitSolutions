#1
def difference_max_min(arr)
	arr.max - arr.min
end

#2 Repeating Letters
def double_char(str)
	arr = str.split('')
	arr.map{|c| c*2}.join
end
