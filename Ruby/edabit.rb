def equal_slices(total_slices, receipients, slices_per_person) 
    if receipients == 0
        return true
    elsif receipients > 0
    receipients * slices_per_person < total_slices ? true: false
    end
end

equal_slices(11,5,2)