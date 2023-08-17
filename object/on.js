
const a={
    fname:"nasar",
    lname:"alam",
    age:25,
    gmail:"nsrr.alam@gmail.com",
    salary:function () {
      return 25000;  
    },
    fullname: function () {
        return this.fname+ " " +this.lname;
    }
}
console.log(a)
