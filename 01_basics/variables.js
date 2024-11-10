const accountId = 144456; //To set final value
let accountEmail = "anish@gmail.com" //preferable over using var , fixes scope issue while using var
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

/*To print all variable in tabular format */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])