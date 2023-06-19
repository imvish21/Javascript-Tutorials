alert("Enter the value of a:")
a=prompt("Enter a:")
a=Number.parseInt(a)
let write=confirm("Do you want to write?")
if(write)
{
  document.write(a)
}
else{
  document.write("Please allow to write!!")
}
