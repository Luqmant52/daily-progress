function myBio( ...otherinfo) {
    console.log(`My Name is ${{...otherinfo}.fname}`)
    console.log(`My age is ${{ ...otherinfo }.age}`)
    console.log(`My Designation is ${otherinfo[1]}`)
}
myBio({"fname":"luqman","lname":"Sheikh","age":24,"designation":"Developer"})