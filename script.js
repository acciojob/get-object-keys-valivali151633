let student ={
    name: "vali"
};

Object.prototype.getKeys = function () {
    let ans = [];
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            ans.push(key);
        }
    }
    return ans;
};

console.log(student.getKeys()); // Output: ['name']
