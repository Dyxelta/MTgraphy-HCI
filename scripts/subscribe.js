const validatename = (name) => {
  if(name  !== ""){
    return true
  }
  return false
}
const validateemail = (email) => {
  const emailstringarray = email.split("@")
  if(emailstringarray.length !== 2) return false
  if(!email.endsWith(".com" || "co.id" || ".sch.id" || "org")) return false
  return true
}
const validatephone = (phone) => {
  // if(!phone.startsWith("+")) return false
  const phonenumberarray = phone.split("")
  if(phonenumberarray.length === 0 || phone === "") return false
  phonenumberarray[0] = 0
  let status = true
  for(const num of phonenumberarray){
    if(isNaN(num)){
      status = false
      console.log(num)
    }
  }
  return status
}
const subscribe = () => {
  document.getElementById("name-danger").style.display = "none"
  document.getElementById("email-danger").style.display = "none"
  document.getElementById("phone-danger").style.display = "none"
  document.getElementById("terms-danger").style.display = "none"
  const name = document.getElementById("name")?.value
  const email = document.getElementById("email")?.value
  const country = document.getElementById("country")?.value
  const phone = document.getElementById("phone")?.value
  const isAccepted = document.getElementById("checkbox")?.checked

  const namevalid = validatename(name)
  const emailvalid = validateemail(email)
  const phonevalid = validatephone(phone)
  
  if(!namevalid) document.getElementById("name-danger").style.display = "block"
  if(!emailvalid) document.getElementById("email-danger").style.display = "block"
  if(!phonevalid) document.getElementById("phone-danger").style.display = "block"
  if(!isAccepted) document.getElementById("terms-danger").style.display = "block"

  if(namevalid && emailvalid && phonevalid && isAccepted && country !== null && country !== undefined ) alert("success")

}