var displayarray=[];
var nameofstudent=[];

function submit()
{
    for (var index = 1; index <= 4; index++) {
        var name=document.getElementById("name_of_the_student_" + index).value;
        console.log(name);
        nameofstudent.push(name);
    }
    console.log(nameofstudent);
    var lenght_of_name_of_students_array = nameofstudent.length;
    console.log(lenght_of_name_of_students_array);
    for (var index1 = 0; index1 < lenght_of_name_of_students_array; index1++) {
        displayarray.push("<h4>NAME - "+ nameofstudent[index1] + "</h4>");
        
        console.log(displayarray);
        
        
    }
    console.log(displayarray);

    document.getElementById("display_name_with_commas").innerHTML = displayarray;
    var remove_commas = displayarray.join(" ");
     console.log(remove_commas); 
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting()
{ nameofstudent.sort(); 
    console.log(nameofstudent); 
    var display_student_array_sorting = []; 
    var lenght_of_name_of_students_array =nameofstudent.length; 
    console.log(lenght_of_name_of_students_array); 
    for (var k = 0; k < lenght_of_name_of_students_array; k++) 
    { display_student_array_sorting.push("<h4>NAME - " + nameofstudent[k] + "</h4>"); 
    console.log(display_student_array_sorting); 
} var remove_commas = display_student_array_sorting.join(" "); 
console.log(remove_commas); 
document.getElementById("display_name_without_commas").innerHTML = remove_commas; 
}
